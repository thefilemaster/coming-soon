// app/products/files/page.js
"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

// Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Styles
import pageCss from "@/styles/ProductPage.module.css";
import cardCss from "@/styles/Product.module.css";

// ----- DATA -----
const FILE_DATA = {
  categories: [
    {
      key: "paper",
      title: "Paper File",
      finishes: [
        {
          key: "no-lamination",
          label: "No Lamination",
          img: "/files/Hospital File - 1.jpg",
          blurb: "Classic, writable & budget-friendly.",
          details:
            "A natural uncoated paper surface that’s easy to write on and economical for large volumes. Perfect for routine OPD files and daily records where practicality matters more than shine.",
        },
        {
          key: "gloss-lamination",
          label: "Gloss Lamination",
          img: "/files/Hospital File - 2.jpg",
          blurb: "Shiny, vibrant & easy to wipe clean.",
          details:
            "A smooth, reflective coating that makes colours pop while protecting the cover from smudges. Ideal for front-desk presentation files that should look clean and premium throughout the day.",
        },
        {
          key: "matte-lamination",
          label: "Matte Lamination",
          img: "/files/Hospital File - 3.jpg",
          blurb: "Soft-touch, non-glare premium feel.",
          details:
            "An elegant, low-sheen finish that reduces glare and fingerprints. The soft-touch texture feels refined in hand—great for minimal or sophisticated designs that need a professional look.",
        },
        {
          key: "drip-off-uv",
          label: "Drip-off UV",
          img: "/files/Hospital File - 4.jpg",
          blurb: "Textured highlights for logos & accents.",
          details:
            "A premium effect combining matte and glossy areas to draw attention to logos or key graphics. The subtle texture adds depth, protects highlighted zones, and elevates your brand impression.",
        },
      ],
      sizes: [
        {
          key: "regular",
          label: `Regular — 9" × 12"`,
          desc:
            "Best for standard A4 sheets and everyday paperwork. A compact, familiar size that keeps documents tidy without extra bulk.",
        },
        {
          key: "large",
          label: `Large — 9.5" × 12.5"`,
          desc:
            "Spacious format designed for clinics that store stitched bundles or bulky inserts in one file. Ideal for departments managing detailed case histories.",
        },
        {
          key: "customized",
          label: `Customized Size — As per requirement`,
          desc:
            "We also provide tailor-made file sizes as per your hospital or clinic’s needs. Share your requirements with our team to get the perfect fit.",
        },
      ],
      thickness: [
        { key: "250", label: "250 GSM", desc: "Lightweight yet sturdy for daily use; cost-effective for volume." },
        { key: "300", label: "300 GSM", desc: "Balanced premium feel; holds shape with frequent handling." },
        { key: "350", label: "350 GSM", desc: "Extra rigid; long-lasting for heavy duty use." },
      ],
      printTypes: [
        { key: "4c-front", label: "4-color (Front)", desc: "Vibrant front cover, writable back." },
        { key: "4c-front-1c-back", label: "4-color Front + Black Back", desc: "Add forms/info at lower cost." },
        { key: "4c-front-4c-back", label: "4-color Both Sides", desc: "Full design flexibility front & back." },
      ],
      showPrintType: true,
    },
    {
      key: "plastic",
      title: "Plastic File",
      finishes: [
        {
          key: "matte-satin",
          label: "Matte Satin",
          img: "/files/Hospital File - 1.jpg",
          blurb: "Refined satin-matte with great durability.",
          details:
            "A smooth, low-glare surface that resists scratches and fingerprints. Easy to wipe clean and built for intensive daily handling across wards and OPDs.",
        },
        {
          key: "drip-off-uv",
          label: "Drip-off UV",
          img: "/files/Hospital File - 4.jpg",
          blurb: "Premium spot-texture highlights.",
          details:
            "Tough plastic body with elegant, raised highlights on logos or key elements. Combines resilience with a premium, tactile brand experience for higher-visibility files.",
        },
      ],
      sizes: [
        {
          key: "regular",
          label: `Regular — 9" × 12"`,
          desc: "A4-friendly size for most records; compact and familiar.",
        },
        {
          key: "large",
          label: `Large — 9.5" × 12.5"`,
          desc: "Extra capacity for thicker sets or stitched forms.",
        },
        {
          key: "customized",
          label: `Customized Size — As per requirement`,
          desc: "We can produce custom dimensions to fit your workflow—just share your requirement with our team.",
        },
      ],
      thickness: [
        { key: "300", label: "300 GSM", desc: "Durable yet flexible for frequent handling." },
        { key: "350", label: "350 GSM", desc: "Extra stiffness & longevity for heavy loads." },
      ],
      printTypes: [],
      showPrintType: false,
    },
  ],
};

export default function FilesPage() {
  const router = useRouter();
  const [activeCat, setActiveCat] = useState("paper");

  const category = useMemo(
    () => FILE_DATA.categories.find((c) => c.key === activeCat),
    [activeCat]
  );

  // selections
  const [finish, setFinish] = useState(category.finishes[0].key);
  const [size, setSize] = useState(category.sizes[0].key);
  const [thickness, setThickness] = useState(category.thickness[0].key);
  const [printType, setPrintType] = useState(
    category.showPrintType ? category.printTypes[0].key : ""
  );

  // Hover preview
  const [hoverFinish, setHoverFinish] = useState(null);

  // category switch → reset state
  const onSwitchCategory = (key) => {
    setActiveCat(key);
    const next = FILE_DATA.categories.find((c) => c.key === key);
    setFinish(next.finishes[0].key);
    setSize(next.sizes[0].key);
    setThickness(next.thickness[0].key);
    setPrintType(next.showPrintType ? next.printTypes[0].key : "");
    setHoverFinish(null);
  };

  const labelOf = (arr, k) => arr.find((x) => x.key === k)?.label ?? "";
  const descOf = (arr, k) => arr.find((x) => x.key === k)?.desc ?? "";

  const handleQuote = () => {
    const summary = [
      category.title,
      labelOf(category.finishes, finish),
      labelOf(category.sizes, size),
      labelOf(category.thickness, thickness),
      category.showPrintType ? labelOf(category.printTypes, printType) : null,
    ]
      .filter(Boolean)
      .join(" — ");

    const q = new URLSearchParams({ product: summary });
    router.push(`/quote?${q.toString()}`);
  };

  const waProductText = [
    category.title,
    labelOf(category.finishes, finish),
    labelOf(category.sizes, size),
    labelOf(category.thickness, thickness),
    category.showPrintType ? labelOf(category.printTypes, printType) : "",
  ]
    .filter(Boolean)
    .join(" / ");

  return (
    <>
      <Navbar />

      <main className={pageCss.page}>
        <h1 className={pageCss.title}>Files</h1>

        {/* Category tabs */}
        <div className={pageCss.tabRow} role="tablist" aria-label="File type">
          {FILE_DATA.categories.map((c) => (
            <button
              key={c.key}
              role="tab"
              aria-selected={activeCat === c.key}
              className={`${pageCss.tabBtn} ${activeCat === c.key ? pageCss.tabActive : ""}`}
              onClick={() => onSwitchCategory(c.key)}
            >
              {c.title}
            </button>
          ))}
        </div>

        {/* Finish grid */}
        <section className={pageCss.section}>
          <h2 className={pageCss.sectionTitle}>Choose Finish</h2>
          <div className={pageCss.cardGrid}>
            {category.finishes.map((f) => (
              <button
                key={f.key}
                className={`${cardCss.card} ${finish === f.key ? cardCss.cardActive : ""}`}
                onClick={() => setFinish(f.key)}
                onMouseEnter={() => setHoverFinish(f.key)}
                onMouseLeave={() => setHoverFinish(null)}
                aria-pressed={finish === f.key}
              >
                <div className={cardCss.cardImageWrap}>
                  <Image
                    src={f.img}
                    alt={f.label}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={cardCss.cardImage}
                    priority
                  />
                  <span className={cardCss.cardBadge}>Finish</span>
                </div>
                <div className={cardCss.cardBody}>
                  <div className={cardCss.cardTitle}>{f.label}</div>
                  {f.blurb && <div className={cardCss.cardSubtitle}>{f.blurb}</div>}
                  {(finish === f.key || hoverFinish === f.key) && f.details && (
                    <p className={cardCss.cardDetails}>{f.details}</p>
                  )}
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Size */}
        <section className={pageCss.section}>
          <h2 className={pageCss.sectionTitle}>Size</h2>
          <div className={pageCss.pillRow}>
            {category.sizes.map((s) => (
              <button
                key={s.key}
                className={`${pageCss.pill} ${size === s.key ? pageCss.pillActive : ""}`}
                onClick={() => setSize(s.key)}
              >
                {s.label}
              </button>
            ))}
          </div>
          <div className={pageCss.helperNote}>{descOf(category.sizes, size)}</div>
        </section>

        {/* Thickness */}
        <section className={pageCss.section}>
          <h2 className={pageCss.sectionTitle}>Thickness</h2>
          <div className={pageCss.pillRow}>
            {category.thickness.map((t) => (
              <button
                key={t.key}
                className={`${pageCss.pill} ${thickness === t.key ? pageCss.pillActive : ""}`}
                onClick={() => setThickness(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className={pageCss.helperNote}>{descOf(category.thickness, thickness)}</div>
        </section>

        {/* Print Type */}
        {category.showPrintType && (
          <section className={pageCss.section}>
            <h2 className={pageCss.sectionTitle}>Print Type</h2>
            <div className={pageCss.pillRow}>
              {category.printTypes.map((p) => (
                <button
                  key={p.key}
                  className={`${pageCss.pill} ${printType === p.key ? pageCss.pillActive : ""}`}
                  onClick={() => setPrintType(p.key)}
                >
                  {p.label}
                </button>
              ))}
            </div>
            <div className={pageCss.helperNote}>
              {descOf(category.printTypes, printType)}
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <div className={pageCss.ctaBottomWrap}>
          <div className={pageCss.ctaBottomInner}>
            <button className={pageCss.primaryBtn} onClick={handleQuote}>
              Get Quote
            </button>

            <a
              className={pageCss.waBtn}
              href={`https://wa.me/918050260636?text=${encodeURIComponent(
                "Hi, I’m interested in " + waProductText
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
            >
              <svg
                className={pageCss.waIcon}
                width="15"
                height="15"
                viewBox="0 0 32 32"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M26.05 5.94A12.93 12.93 0 0 0 16.06 2C8.76 2 2.85 7.91 2.85 15.2c0 2.33.62 4.6 1.8 6.6L2 30l8.4-2.2a13.16 13.16 0 0 0 5.66 1.3h.01c7.29 0 13.18-5.91 13.18-13.2 0-3.52-1.37-6.83-3.6-9.06z"
                  fill="#25D366"
                />
                <path
                  d="M19.11 17.38c-.28-.14-1.63-.8-1.88-.89-.25-.09-.43-.14-.61.14-.18.28-.7.89-.86 1.07-.16.18-.32.2-.6.07-.28-.14-1.16-.43-2.21-1.37-.82-.73-1.37-1.62-1.53-1.9-.16-.28-.02-.43.12-.57.12-.12.28-.32.41-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.28-.96.94-.96 2.28 0 1.34.98 2.63 1.11 2.81.14.18 1.93 2.95 4.67 4.02.65.28 1.15.45 1.54.57.65.21 1.24.18 1.71.11.52-.08 1.63-.67 1.86-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.52-.32z"
                  fill="#fff"
                />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}