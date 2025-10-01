"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import pageCss from "@/styles/ProductPage.module.css";
import cardCss from "@/styles/Product.module.css";

const DATA = {
  title: "Envelopes",
  finishes: [
    {
      key: "natural",
      label: "Natural Paper",
      img: "/images/envelopes/natural.jpg",
      blurb: "Classic, writable.",
      details: "Uncoated stock that accepts stamps, inks and handwriting cleanly.",
    },
    {
      key: "wove",
      label: "Wove / Smooth",
      img: "/images/envelopes/wove.jpg",
      blurb: "Clean, business-grade.",
      details: "Smooth surface for crisp prints and professional feel.",
    },
    {
      key: "window",
      label: "Window Envelope",
      img: "/images/envelopes/window.jpg",
      blurb: "Address window.",
      details: "Transparent window for patient name / address visibility.",
    },
    {
      key: "laminated",
      label: "Laminated",
      img: "/images/envelopes/laminated.jpg",
      blurb: "Extra durability.",
      details: "Protective coat for moisture & scuff resistance at counters.",
    },
  ],
  sizes: [
    { key: "dl", label: `DL — 4.25" × 8.66"`, desc: "Popular for folded A4 letters." },
    { key: "c5", label: "C5 — 162 × 229 mm", desc: "Fits A5 or A4 folded once." },
    { key: "c4", label: "C4 — 229 × 324 mm", desc: "Fits flat A4 without folding." },
    { key: "customized", label: "Customized Size — As per requirement", desc: "Custom sizes available. We’ll confirm after request." },
  ],
  thickness: [
    { key: "90", label: "90 GSM", desc: "Everyday hospital use." },
    { key: "100", label: "100 GSM", desc: "Premium feel." },
    { key: "120", label: "120 GSM", desc: "Heavier stock for important docs." },
  ],
  printTypes: [
    { key: "1c", label: "1-color", desc: "Budget branding." },
    { key: "2c", label: "2-color", desc: "More flexibility." },
    { key: "4c", label: "Full Color", desc: "Best for logos & gradients." },
  ],
};

export default function EnvelopesPage() {
  const router = useRouter();
  const [finish, setFinish] = useState(DATA.finishes[0].key);
  const [size, setSize] = useState(DATA.sizes[0].key);
  const [thickness, setThickness] = useState(DATA.thickness[0].key);
  const [printType, setPrintType] = useState(DATA.printTypes[0].key);

  const labelOf = (arr, k) => arr.find((x) => x.key === k)?.label ?? "";
  const descOf = (arr, k) => arr.find((x) => x.key === k)?.desc ?? "";

  const handleQuote = () => {
    const summary = [
      DATA.title,
      labelOf(DATA.finishes, finish),
      labelOf(DATA.sizes, size),
      labelOf(DATA.thickness, thickness),
      labelOf(DATA.printTypes, printType),
    ].join(" — ");
    router.push(`/quote?product=${encodeURIComponent(summary)}`);
  };

  const waText = [
    DATA.title,
    labelOf(DATA.finishes, finish),
    labelOf(DATA.sizes, size),
    labelOf(DATA.thickness, thickness),
    labelOf(DATA.printTypes, printType),
  ].join(" / ");

  return (
    <>
      <Navbar />
      <main className={pageCss.page}>
        <h1 className={pageCss.title}>{DATA.title}</h1>

        {/* Finish */}
        <section className={pageCss.section}>
          <h2 className={pageCss.sectionTitle}>Choose Finish</h2>
          <div className={pageCss.cardGrid}>
            {DATA.finishes.map((f) => (
              <button
                key={f.key}
                className={`${cardCss.card} ${finish === f.key ? cardCss.cardActive : ""}`}
                onClick={() => setFinish(f.key)}
              >
                <div className={cardCss.cardImageWrap}>
                  <Image src={f.img} alt={f.label} fill className={cardCss.cardImage} />
                  <span className={cardCss.cardBadge}>Finish</span>
                </div>
                <div className={cardCss.cardBody}>
                  <div className={cardCss.cardTitle}>{f.label}</div>
                  <div className={cardCss.cardSubtitle}>{f.blurb}</div>
                  <p className={cardCss.cardDetails}>{f.details}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Size */}
        <section className={pageCss.section}>
          <h2 className={pageCss.sectionTitle}>Size</h2>
          <div className={pageCss.pillRow}>
            {DATA.sizes.map((s) => (
              <button
                key={s.key}
                className={`${pageCss.pill} ${size === s.key ? pageCss.pillActive : ""}`}
                onClick={() => setSize(s.key)}
              >
                {s.label}
              </button>
            ))}
          </div>
          <div className={pageCss.helperNote}>{descOf(DATA.sizes, size)}</div>
        </section>

        {/* Paper */}
        <section className={pageCss.section}>
          <h2 className={pageCss.sectionTitle}>Paper</h2>
          <div className={pageCss.pillRow}>
            {DATA.thickness.map((t) => (
              <button
                key={t.key}
                className={`${pageCss.pill} ${thickness === t.key ? pageCss.pillActive : ""}`}
                onClick={() => setThickness(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className={pageCss.helperNote}>{descOf(DATA.thickness, thickness)}</div>
        </section>

        {/* Print */}
        <section className={pageCss.section}>
          <h2 className={pageCss.sectionTitle}>Print</h2>
          <div className={pageCss.pillRow}>
            {DATA.printTypes.map((p) => (
              <button
                key={p.key}
                className={`${pageCss.pill} ${printType === p.key ? pageCss.pillActive : ""}`}
                onClick={() => setPrintType(p.key)}
              >
                {p.label}
              </button>
            ))}
          </div>
          <div className={pageCss.helperNote}>{descOf(DATA.printTypes, printType)}</div>
        </section>

        {/* CTA */}
       <div className={pageCss.ctaBottomWrap}>
          <div className={pageCss.ctaBottomInner}>
            <button className={pageCss.primaryBtn} onClick={handleQuote}>Get Quote</button>
            <a
              className={pageCss.waBtn}
              href={`https://wa.me/918050260636?text=${encodeURIComponent("Hi, I’m interested in " + waText)}`}
              target="_blank" rel="noopener noreferrer"
            >
              {/* WhatsApp icon */}
              <svg viewBox="0 0 32 32" aria-hidden="true">
                <path d="M26.05 5.94A12.93 12.93 0 0 0 16.06 2C8.76 2 2.85 7.91 2.85 15.2c0 2.33.62 4.6 1.8 6.6L2 30l8.4-2.2a13.16 13.16 0 0 0 5.66 1.3c7.29 0 13.18-5.91 13.18-13.2 0-3.52-1.37-6.83-3.6-9.06z" fill="#25D366"/>
                <path d="M19.11 17.38c-.28-.14-1.63-.8-1.88-.89-.25-.09-.43-.14-.61.14-.18.28-.7.89-.86 1.07-.16.18-.32.2-.6.07-.28-.14-1.16-.43-2.21-1.37-.82-.73-1.37-1.62-1.53-1.9-.16-.28-.02-.43.12-.57.12-.12.28-.32.41-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.28-.96.94-.96 2.28 0 1.34.98 2.63 1.11 2.81.14.18 1.93 2.95 4.67 4.02.65.28 1.15.45 1.54.57.65.21 1.24.18 1.71.11.52-.08 1.63-.67 1.86-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.52-.32z" fill="#fff"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}