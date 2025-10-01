// app/about/page.js
"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "@/styles/About.module.css";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className={styles.page}>
        {/* Hero */}
        <section className={styles.hero}>
          {/* Subtle animated background shapes */}
          <div className={styles.heroBg}>
            <span className={styles.sparkle} />
            <span className={styles.sparkle} />
            <span className={styles.sparkle} />
          </div>

          <div className={styles.heroInner}>
            <h1 className={styles.title}>About The File Master</h1>
            <p className={styles.subtitle}>
              Your trusted printing partner for hospitals & clinics — files,
              covers, and clinic stationery done right.
            </p>

            <div className={styles.heroCtas}>
              <Link href="/quote" className={styles.primaryBtn}>
                Get a Quote
              </Link>
              <Link href="/" className={styles.linkGhostHero}>
                Browse Products
              </Link>
            </div>
          </div>
        </section>

        {/* Stats strip (adds credibility) */}
        <section className={styles.statsStrip} aria-label="Key metrics">
          <div className={styles.statItem}>
            <div className={styles.statNum}>200+</div>
            <div className={styles.statLabel}>Hospitals Served</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>1.5M+</div>
            <div className={styles.statLabel}>Files Printed</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>48h</div>
            <div className={styles.statLabel}>Quick Turnaround*</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>₹ Best</div>
            <div className={styles.statLabel}>Lowest Market Prices</div>
          </div>
        </section>

        {/* Story (kept) */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.h2}>Our Story</h2>
            <p className={styles.lead}>
              We started The File Master to simplify printing for healthcare
              teams. From OPD files to X-Ray/MRI covers and clinic stationery,
              we deliver consistent quality, fast turnarounds, and dependable service.
            </p>
          </div>
          <div className={styles.cards}>
            <article className={styles.card}>
              <h3>Healthcare Focus</h3>
              <p>
                Everything we produce is designed for clinical workflows:
                standardized sizes, durable materials, and clear print output
                for day-to-day handling.
              </p>
            </article>
            <article className={styles.card}>
              <h3>Customization</h3>
              <p>
                Pick finishes, sizes (including customized), thickness, and
                print options that match your brand and documentation needs.
              </p>
            </article>
            <article className={styles.card}>
              <h3>Reliability</h3>
              <p>
                Consistent colors, strong binding options, and quality checks
                ensure every batch performs on the floor, not just in photos.
              </p>
            </article>
          </div>
        </section>

        {/* What We Do (kept) */}
        <section className={styles.sectionAlt}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.h2}>What We Do</h2>
            <p className={styles.lead}>
              End-to-end printing for hospitals & clinics. Explore our product lines:
            </p>
          </div>

          <ul className={styles.grid}>
            <li>
              <span className={styles.badge}>Files</span>
              Patient files in Paper & Plastic with multiple finishes, sizes, and thicknesses.
            </li>
            <li>
              <span className={styles.badge}>X-Rays & MRI Scan Covers</span>
              Sturdy protective covers with clear labeling and branding.
            </li>
            <li>
              <span className={styles.badge}>Envelopes</span>
              Custom sizes with crisp print and secure sealing options.
            </li>
            <li>
              <span className={styles.badge}>Visiting Cards</span>
              Premium stock, sharp print, and healthcare-appropriate designs.
            </li>
            <li>
              <span className={styles.badge}>Letter Heads</span>
              Clinic identity on high-quality paper for prescriptions & letters.
            </li>
            <li>
              <span className={styles.badge}>Prescription Pads</span>
              Clean layouts, balanced opacity, and accurate brand colors.
            </li>
          </ul>

          <div className={styles.linksRow}>
            <Link href="/" className={styles.linkPrimary}>
              Browse Products
            </Link>
            <Link href="/quote" className={styles.linkGhost}>
              Get a Quote
            </Link>
          </div>
        </section>

        {/* Trust highlights ribbon (new, compact) */}
        <section className={styles.ribbon} aria-label="Why choose us">
          <div className={styles.rItem}>
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M12 2l7 4v6c0 5-3.5 9.3-7 10c-3.5-.7-7-5-7-10V6l7-4z"></path>
            </svg>
            Medical-grade materials
          </div>
          <div className={styles.rItem}>
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M12 17.27L18.18 21l-1.63-7L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.45 4.76L5.82 21z"></path>
            </svg>
            Consistent color calibration
          </div>
          <div className={styles.rItem}>
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M9 16.2l-3.5-3.5l1.41-1.41L9 13.38l7.09-7.09L17.5 7.7z"></path>
            </svg>
            Quality checks on every batch
          </div>
          <div className={styles.rItem}>
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M3 13h2v-2H3v2m8 8a8 8 0 1 1 0-16a8 8 0 0 1 0 16m-1-13v6l5 3"></path>
            </svg>
            Fast, reliable timelines
          </div>
        </section>

        {/* Best Price Promise (kept) */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.h2}>Best Price Promise</h2>
            <p className={styles.lead}>
              We offer the <strong>lowest price in the market</strong> across every product —
              Files, X-Ray/MRI Covers, Envelopes, Visiting Cards, Letter Heads, and Prescription Pads —
              while maintaining consistent print quality.
            </p>
          </div>

          <div className={styles.priceGrid}>
            <div className={styles.pricePoint}>
              <h3>Bulk Sourcing</h3>
              <p>We procure materials at scale, passing savings directly to your organization.</p>
            </div>
            <div className={styles.pricePoint}>
              <h3>In-House Production</h3>
              <p>Optimized workflows reduce waste and cost without affecting quality.</p>
            </div>
            <div className={styles.pricePoint}>
              <h3>Process Efficiency</h3>
              <p>Standardized job setup, calibrated color, and efficient finishing lines.</p>
            </div>
            <div className={styles.pricePoint}>
              <h3>Transparent Quotes</h3>
              <p>Clear pricing with no hidden fees. Get exactly what you approve.</p>
            </div>
          </div>

          <p className={styles.note}>
            Need a custom specification? We’ll match it and still keep pricing highly competitive.
          </p>
        </section>

        {/* Mission & Vision (kept) */}
        <section className={styles.sectionAlt}>
          <div className={styles.mvWrap}>
            <div className={styles.mvCard}>
              <h3>Our Mission</h3>
              <p>
                Deliver dependable, affordable printing that simplifies clinical operations and
                strengthens patient record management.
              </p>
            </div>
            <div className={styles.mvCard}>
              <h3>Our Vision</h3>
              <p>
                To be India’s most trusted healthcare printing partner — known for quality,
                speed, and value.
              </p>
            </div>
          </div>
        </section>

        {/* CTA (kept) */}
        <section className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Ready to work with The File Master?</h2>
          <p className={styles.ctaSubtitle}>
            Share your requirement — we’ll respond quickly with options and pricing.
          </p>
          <div className={styles.ctaRow}>
            <Link href="/quote" className={styles.primaryBtn}>
              Get a Quote
            </Link>

            <a
              className={styles.waBtn}
              href={`https://wa.me/918050260636?text=${encodeURIComponent(
                "Hello! I’d like to discuss printing requirements for our clinic/hospital."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
            >
              <svg
                className={styles.waIcon}
                width="18"
                height="18"
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
          <p className={styles.ctaNote}>*Typical for repeat orders and standard specs.</p>
        </section>
      </main>

      <Footer />
    </>
  );
}