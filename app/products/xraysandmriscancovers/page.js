// app/products/xraysandmriscancovers/page.js
"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

// Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Styles (reusing the same ones as Files)
import pageCss from "@/styles/ProductPage.module.css";
import cardCss from "@/styles/Product.module.css";

// ----- DATA -----
const COVER_DATA = {
  title: "X-Rays & MRI Scan Covers",
  finishes: [
    {
      key: "matte-satin",
      label: "Matte Satin",
      img: "/images/covers/matte-satin.jpg",
      blurb: "Refined, low-glare finish.",
      details:
        "Satin-matte surface that resists scratches and fingerprints — ideal for frequent handling at diagnostic desks.",
    },
    {
      key: "gloss",
      label: "Gloss Lamination",
      img: "/images/covers/gloss.jpg",
      blurb: "Vibrant & easy to wipe.",
      details:
        "Makes colours pop while protecting against smudges. Works well for brand-forward front-desk presentation.",
    },
    {
      key: "no-lamination",
      label: "No Lamination",
      img: "/images/covers/no-lamination.jpg",
      blurb: "Writable & budget-friendly.",
      details:
        "Uncoated feel that’s easy to write on for quick notes and routing marks.",
    },
    {
      key: "drip-off-uv",
      label: "Drip-off UV",
      img: "/images/covers/drip-off-uv.jpg",
      blurb: "Premium spot highlights.",
      details:
        "Matte base with glossy, textured accents on logos/titles for a premium, tactile look.",
    },
  ],
  sizes: [
    {
      key: "regular",
      label: `Regular — 9" × 12"`,
      desc: "Fits standard X-Ray/MRI films & reports. Clean, professional size for most diagnostics.",
    },
    {
      key: "large",
      label: `Large — 9.5" × 12.5"`,
      desc: "Extra room for multiple reports or thicker bundles.",
    },
    {
      key: "customized",
      label: `Customized Size — As per requirement`,
      desc:
        "We offer custom sizes on request. No need to enter dimensions here — just select this and we’ll confirm post-request.",
    },
  ],
  thickness: [
    { key: "300", label: "300 GSM", desc: "Sturdy cover for routine handling." },
    { key: "350", label: "350 GSM", desc: "Extra rigidity for heavier film loads." },
  ],
  printTypes: [
    { key: "4c-front", label: "4-color (Front)", desc: "Full-colour branding on the outside." },
    { key: "4c-front-1c-back", label: "4-color Front + Black Back", desc: "Add forms/notes at lower cost." },
    { key: "4c-front-4c-back", label: "4-color Both Sides", desc: "Design freedom inside & out." },
  ],
};

export default function XRaysMRICoversPage() {
  const router = useRouter();

  // selections
  const [finish, setFinish] = useState(COVER_DATA.finishes[0].key);
  const [size, setSize] = useState(COVER_DATA.sizes[0].key);
  const [thickness, setThickness] = useState(COVER_DATA.thickness[0].key);
  const [printType, setPrintType] = useState(COVER_DATA.printTypes[0].key);

  // hover preview (desktop)
  const [hoverFinish, setHoverFinish] = useState(null);

  const labelOf = (arr, k) => arr.find((x) => x.key === k)?.label ?? "";
  const descOf = (arr, k) => arr.find((x) => x.key === k)?.desc ?? "";

  const sizeLabel = (k) => {
    if (k !== "customized") return labelOf(COVER_DATA.sizes, k);
    // IMPORTANT: we do NOT ask for dimensions here; just show the message.
    return `Customized Size — As per requirement`;
  };

  const handleQuote = () => {
    const summary = [
      COVER_DATA.title,
      labelOf(COVER_DATA.finishes, finish),
      sizeLabel(size),
      labelOf(COVER_DATA.thickness, thickness),
      labelOf(COVER_DATA.printTypes, printType),
    ]
      .filter(Boolean)
      .join(" — ");

    const q = new URLSearchParams({ product: summary });
    router.push(`/quote?${q.toString()}`);
  };

  // For WhatsApp message
  const waProductText = [
    COVER_DATA.title,
    labelOf(COVER_DATA.finishes, finish),
    sizeLabel(size),
    labelOf(COVER_DATA.thickness, thickness),
    labelOf(COVER_DATA.printTypes, printType),
  ]
    .filter(Boolean)
    .join(" / ");

  return (
    <>
      <Navbar />

      <main className={pageCss.page}>
        <h1 className={pageCss.title}>{COVER_DATA.title}</h1>

        {/* Finish grid */}
        <section className={pageCss.section}>
          <h2 className={pageCss.sectionTitle}>Choose Finish</h2>
          <div className={pageCss.cardGrid}>
            {COVER_DATA.finishes.map((f) => (
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
            {COVER_DATA.sizes.map((s) => (
              <button
                key={s.key}
                className={`${pageCss.pill} ${size === s.key ? pageCss.pillActive : ""}`}
                onClick={() => setSize(s.key)}
              >
                {s.label}
              </button>
            ))}
          </div>
          <div className={pageCss.helperNote}>
            {descOf(COVER_DATA.sizes, size)}
          </div>
          {/* NOTE: No custom dimension inputs here. */}
        </section>

        {/* Thickness */}
        <section className={pageCss.section}>
          <h2 className={pageCss.sectionTitle}>Thickness</h2>
          <div className={pageCss.pillRow}>
            {COVER_DATA.thickness.map((t) => (
              <button
                key={t.key}
                className={`${pageCss.pill} ${thickness === t.key ? pageCss.pillActive : ""}`}
                onClick={() => setThickness(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className={pageCss.helperNote}>
            {descOf(COVER_DATA.thickness, thickness)}
          </div>
        </section>

        {/* Print Type */}
        <section className={pageCss.section}>
          <h2 className={pageCss.sectionTitle}>Print Type</h2>
          <div className={pageCss.pillRow}>
            {COVER_DATA.printTypes.map((p) => (
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
            {descOf(COVER_DATA.printTypes, printType)}
          </div>
        </section>

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