"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import pageCss from "@/styles/ProductPage.module.css";

const DATA = {
  title: "Prescription Pads",
  finishes: [
    { key: "uncoated", label: "Uncoated (Writable)", desc: "Writes cleanly with ball/gel pens; good ink holdout." },
    { key: "bond",     label: "Bond Paper",          desc: "Smooth, brighter sheet; sharp print for headers." },
  ],
  sizes: [
    { key: "a5",         label: "A5 — 148 × 210 mm",                     desc: "Most common Rx size." },
    { key: "a6",         label: "A6 — 105 × 148 mm",                     desc: "Compact, pocket-friendly." },
    { key: "customized", label: "Customized Size — As per requirement",  desc: "We’ll match your clinic’s existing pads." },
  ],
  thickness: [
    { key: "70",  label: "70 GSM",  desc: "Budget friendly; minimal bulk." },
    { key: "80",  label: "80 GSM",  desc: "Better opacity; smoother writing." },
    { key: "100", label: "100 GSM", desc: "Thicker sheets; least show-through." },
  ],
  printTypes: [
    { key: "1c", label: "1-color",    desc: "Cost-effective branding." },
    { key: "2c", label: "2-color",    desc: "Great for accent colours." },
    { key: "4c", label: "Full Color", desc: "Brand logos & gradients pop." },
  ],
  binding: [
    { key: "top-gum",  label: "Top Gum Binding",  desc: "Tears from the top; easy counter use." },
    { key: "side-gum", label: "Side Gum Binding", desc: "Tears from the side; pad stays tidy." },
    { key: "wire",     label: "Wiro / Wire-O",    desc: "Stays flat; durable for frequent use." },
  ],
  sheetsPerPad: [
    { key: "25",  label: "25 Sheets/Pad",  desc: "Good for trials and low-volume OPDs." },
    { key: "50",  label: "50 Sheets/Pad",  desc: "Most popular balance of size & cost." },
    { key: "100", label: "100 Sheets/Pad", desc: "High-volume clinics." },
  ],
};

export default function PrescriptionPadsPage() {
  const router = useRouter();
  const [finish, setFinish]       = useState(DATA.finishes[0].key);
  const [size, setSize]           = useState(DATA.sizes[0].key);
  const [thickness, setThickness] = useState(DATA.thickness[1].key);
  const [printType, setPrintType] = useState(DATA.printTypes[0].key);
  const [binding, setBinding]     = useState(DATA.binding[0].key);
  const [sheets, setSheets]       = useState(DATA.sheetsPerPad[1].key);

  const L = (arr, k) => arr.find(x => x.key === k)?.label ?? "";
  const D = (arr, k) => arr.find(x => x.key === k)?.desc  ?? "";

  const handleQuote = () => {
    const summary = [
      DATA.title,
      L(DATA.finishes,finish),
      L(DATA.sizes,size),
      L(DATA.thickness,thickness),
      L(DATA.printTypes,printType),
      L(DATA.binding,binding),
      L(DATA.sheetsPerPad,sheets),
    ].join(" — ");
    router.push(`/quote?product=${encodeURIComponent(summary)}`);
  };

  const waText = [
    DATA.title,
    L(DATA.finishes,finish),
    L(DATA.sizes,size),
    L(DATA.thickness,thickness),
    L(DATA.printTypes,printType),
    L(DATA.binding,binding),
    L(DATA.sheetsPerPad,sheets),
  ].join(" / ");

  return (
    <>
      <Navbar />
      <main className={pageCss.page}>
        <h1 className={pageCss.title}>{DATA.title}</h1>

        {/* Finish */}
        <section className={pageCss.section}>
          <h2 className={pageCss.sectionTitle}>Paper</h2>
          <div className={pageCss.pillRow}>
            {DATA.finishes.map(f => (
              <button
                key={f.key}
                className={`${pageCss.pill} ${finish === f.key ? pageCss.pillActive : ""}`}
                onClick={() => setFinish(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className={pageCss.helperNote}>{D(DATA.finishes, finish)}</div>
        </section>

        {/* Size */}
        <section className={pageCss.section}>
          <h2 className={pageCss.sectionTitle}>Size</h2>
          <div className={pageCss.pillRow}>
            {DATA.sizes.map(s => (
              <button
                key={s.key}
                className={`${pageCss.pill} ${size === s.key ? pageCss.pillActive : ""}`}
                onClick={() => setSize(s.key)}
              >
                {s.label}
              </button>
            ))}
          </div>
          <div className={pageCss.helperNote}>{D(DATA.sizes, size)}</div>
        </section>

        {/* Thickness */}
        <section className={pageCss.section}>
          <h2 className={pageCss.sectionTitle}>Thickness</h2>
          <div className={pageCss.pillRow}>
            {DATA.thickness.map(t => (
              <button
                key={t.key}
                className={`${pageCss.pill} ${thickness === t.key ? pageCss.pillActive : ""}`}
                onClick={() => setThickness(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className={pageCss.helperNote}>{D(DATA.thickness, thickness)}</div>
        </section>

        {/* Print */}
        <section className={pageCss.section}>
          <h2 className={pageCss.sectionTitle}>Print</h2>
          <div className={pageCss.pillRow}>
            {DATA.printTypes.map(p => (
              <button
                key={p.key}
                className={`${pageCss.pill} ${printType === p.key ? pageCss.pillActive : ""}`}
                onClick={() => setPrintType(p.key)}
              >
                {p.label}
              </button>
            ))}
          </div>
          <div className={pageCss.helperNote}>{D(DATA.printTypes, printType)}</div>
        </section>

        {/* Binding & Sheets */}
        <section className={pageCss.section}>
          <h2 className={pageCss.sectionTitle}>Binding & Sheets/Pad</h2>
          <div className={pageCss.pillRow}>
            {DATA.binding.map(b => (
              <button
                key={b.key}
                className={`${pageCss.pill} ${binding === b.key ? pageCss.pillActive : ""}`}
                onClick={() => setBinding(b.key)}
              >
                {b.label}
              </button>
            ))}
          </div>
          <div className={pageCss.helperNote}>{D(DATA.binding, binding)}</div>

          <div className={pageCss.pillRow} style={{ marginTop: 8 }}>
            {DATA.sheetsPerPad.map(s => (
              <button
                key={s.key}
                className={`${pageCss.pill} ${sheets === s.key ? pageCss.pillActive : ""}`}
                onClick={() => setSheets(s.key)}
              >
                {s.label}
              </button>
            ))}
          </div>
          <div className={pageCss.helperNote}>{D(DATA.sheetsPerPad, sheets)}</div>
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