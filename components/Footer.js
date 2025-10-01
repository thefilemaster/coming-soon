"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* Brand */}
        <div className={styles.brandCol}>
          <Link href="/" className={styles.brandRow} aria-label="The File Master Home">
            <Image
              src="/logo.png"
              alt="The File Master"
              width={140}
              height={56}
              className={styles.logo}
              priority
            />
          </Link>
          <p className={styles.tagline}>
            Hospital & clinic printing—Files, X-Ray/MRI Covers, and stationery.
            Reliable quality. Fast turnaround.
          </p>

          <div className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            Best Price Promise
          </div>
        </div>

        {/* Our Products */}
        <nav className={styles.navCol} aria-label="Our Products">
          <h5 className={styles.colTitle}>Our Products</h5>
          <ul className={styles.linkList}>
            <li><Link href="/products/files">Files</Link></li>
            <li><Link href="/products/xraysandmriscancovers">X Rays &amp; MRI Scan Cover</Link></li>
            <li><Link href="/products/envelopes">Envelopes</Link></li>
            <li><Link href="/products/visiting-cards">Visiting Cards</Link></li>
            <li><Link href="/products/letterheads">Letter Heads</Link></li>
            <li><Link href="/products/prescription-pads">Prescription Pads</Link></li>
          </ul>
        </nav>

        {/* Quick Links */}
        <nav className={styles.navCol} aria-label="Quick Links">
          <h5 className={styles.colTitle}>Quick Links</h5>
          <ul className={styles.linkList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/quote">Request a Quote</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Contact */}
        <div className={styles.contactCol}>
          <h5 className={styles.colTitle}>Contact</h5>

          <a
            className={styles.contactRow}
            href={`https://wa.me/918050260636?text=${encodeURIComponent("Hello! I’d like to discuss printing requirements for our clinic/hospital.")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className={styles.icon} width="18" height="18" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M26.05 5.94A12.93 12.93 0 0 0 16.06 2C8.76 2 2.85 7.91 2.85 15.2c0 2.33.62 4.6 1.8 6.6L2 30l8.4-2.2a13.16 13.16 0 0 0 5.66 1.3h.01c7.29 0 13.18-5.91 13.18-13.2 0-3.52-1.37-6.83-3.6-9.06z" fill="#25D366"/>
              <path d="M19.11 17.38c-.28-.14-1.63-.8-1.88-.89-.25-.09-.43-.14-.61.14-.18.28-.7.89-.86 1.07-.16.18-.32.2-.6.07-.28-.14-1.16-.43-2.21-1.37-.82-.73-1.37-1.62-1.53-1.9-.16-.28-.02-.43.12-.57.12-.12.28-.32.41-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.28-.96.94-.96 2.28 0 1.34.98 2.63 1.11 2.81.14.18 1.93 2.95 4.67 4.02.65.28 1.15.45 1.54.57.65.21 1.24.18 1.71.11.52-.08 1.63-.67 1.86-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.52-.32z" fill="#fff"/>
            </svg>
            +91 80502 60636
          </a>

          <a className={styles.contactRow} href="mailto:info@thefilemaster.com">
            <svg className={styles.icon} width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 4l-8 5L4 8V6l8 5l8-5z"/>
            </svg>
            info@thefilemaster.com
          </a>

          <div className={styles.miniCtaRow}>
            <Link href="/quote" className={styles.miniBtn}>Get a Quote</Link>
            <Link href="/about" className={styles.miniBtnAlt}>About Us</Link>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {year} The File Master. All rights reserved.</p>
        <div className={styles.bottomLinks}>
          <Link href="/privacy">Privacy</Link>
          <span aria-hidden="true">•</span>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}