"use client";

import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Your Trusted Printing Partner for Hospitals
        </h1>
        <p className={styles.heroSubtitle}>
          Files, Envelopes, Cards, Prescription Pads — Custom Printed & Delivered
        </p>

        <div className={styles.heroButtons}>
          {/* Quote Button */}
          <Link href="/quote" className={styles.heroButton}>
            Request a Quote
          </Link>

          {/* Download Brochure Button */}
          <a
            href="/brochure.pdf"
            download="The-File-Master-Brochure.pdf"
            className={`${styles.heroButton} ${styles.brochureButton}`}
          >
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
}