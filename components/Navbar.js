"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setProductDropdownOpen] = useState(false);
  const [isBrochureModalOpen, setBrochureModalOpen] = useState(false);

  const navRef = useRef(null);
  const modalRef = useRef(null);
  const brochureNameRef = useRef(null);
  const productToggleRef = useRef(null);

  // NEW: brochure form state
  const [brochureForm, setBrochureForm] = useState({ name: "", phone: "", email: "" });
  const [brochureSubmitting, setBrochureSubmitting] = useState(false);

  // Lock body scroll when mobile menu or modal is open
  useEffect(() => {
    const lock = isMobileMenuOpen || isBrochureModalOpen;
    document.body.style.overflow = lock ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isMobileMenuOpen, isBrochureModalOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        navRef.current &&
        !navRef.current.contains(e.target) &&
        isProductDropdownOpen
      ) {
        setProductDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isProductDropdownOpen]);

  // ESC to close things
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") {
        setBrochureModalOpen(false);
        setMobileMenuOpen(false);
        setProductDropdownOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (isBrochureModalOpen && brochureNameRef.current) {
      brochureNameRef.current.focus();
    }
  }, [isBrochureModalOpen]);

  const onProductKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setProductDropdownOpen((p) => !p);
    }
    if (e.key === "Escape") {
      setProductDropdownOpen(false);
      productToggleRef.current?.focus();
    }
  };

  // NEW: brochure helpers
  const handleBrochureChange = (e) => {
    const { name, value } = e.target;
    setBrochureForm((p) => ({ ...p, [name]: value }));
  };

  const handleBrochureSubmit = async (e) => {
    e.preventDefault();
    if (brochureSubmitting) return;

    if (!brochureForm.name.trim() || !brochureForm.phone.trim()) {
      alert("Please enter your name and contact number.");
      return;
    }

    try {
      setBrochureSubmitting(true);
      const res = await fetch("/api/brochure", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(brochureForm),
      });

      if (!res.ok) {
        const { error } = await res.json().catch(() => ({ error: "" }));
        throw new Error(error || "Something went wrong. Please try again.");
      }

      // close modal + reset
      setBrochureModalOpen(false);
      setBrochureForm({ name: "", phone: "", email: "" });

      // trigger PDF download from /public/brochure.pdf
      const a = document.createElement("a");
      a.href = "/brochure.pdf";
      a.download = "The-File-Master-Brochure.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (err) {
      alert(err.message || "Failed to submit. Please try again.");
    } finally {
      setBrochureSubmitting(false);
    }
  };

  return (
    <>
      <nav ref={navRef} className={styles.navbar} role="navigation" aria-label="Primary">
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="The File Master – Home">
          <Image src="/logo.png" alt="The File Master" width={132} height={52} priority />
          <span className={styles.tagline}>Reliable. Affordable. On-Time</span>
        </Link>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="primary-menu"
          onClick={() => setMobileMenuOpen((s) => !s)}
        >
          <span className={`${styles.bar} ${isMobileMenuOpen ? styles.barOpen : ""}`} />
          <span className={`${styles.bar} ${isMobileMenuOpen ? styles.barOpen : ""}`} />
          <span className={`${styles.bar} ${isMobileMenuOpen ? styles.barOpen : ""}`} />
        </button>

        {/* Links */}
        <ul
          id="primary-menu"
          className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileMenu : ""}`}
        >
          <li className={styles.navItem}>
            <div className={styles.dropdownContainer}>
              <button
                type="button"
                ref={productToggleRef}
                className={`${styles.dropdownToggle} ${styles.link}`}
                aria-expanded={isProductDropdownOpen}
                aria-haspopup="true"
                onClick={() => setProductDropdownOpen((p) => !p)}   // tap to toggle on mobile
                onKeyDown={onProductKeyDown}
              >
                Our Products <FiChevronDown size={16} className={styles.chev} />
              </button>

              {/* Always rendered: desktop hover CSS can reveal it */}
              <div
                className={`${styles.dropdownMenu} ${
                  isProductDropdownOpen ? styles.dropdownVisible : ""
                }`}
                role="menu"
              >
                <Link
                  href="/products/files"
                  role="menuitem"
                  tabIndex={isProductDropdownOpen ? 0 : -1}
                  onClick={() => { setProductDropdownOpen(false); setMobileMenuOpen(false); }}
                >
                  Files
                </Link>
                <Link
                  href="/products/xraysandmriscancovers"
                  role="menuitem"
                  tabIndex={isProductDropdownOpen ? 0 : -1}
                  onClick={() => { setProductDropdownOpen(false); setMobileMenuOpen(false); }}
                >
                  X-Rays and MRI Scan Covers
                </Link>
                <Link
                  href="/products/envelopes"
                  role="menuitem"
                  tabIndex={isProductDropdownOpen ? 0 : -1}
                  onClick={() => { setProductDropdownOpen(false); setMobileMenuOpen(false); }}
                >
                  Envelopes
                </Link>
                <Link
                  href="/products/visiting-cards"
                  role="menuitem"
                  tabIndex={isProductDropdownOpen ? 0 : -1}
                  onClick={() => { setProductDropdownOpen(false); setMobileMenuOpen(false); }}
                >
                  Visiting Cards
                </Link>
                <Link
                  href="/products/letterheads"
                  role="menuitem"
                  tabIndex={isProductDropdownOpen ? 0 : -1}
                  onClick={() => { setProductDropdownOpen(false); setMobileMenuOpen(false); }}
                >
                  Letterheads
                </Link>
                <Link
                  href="/products/prescription-pads"
                  role="menuitem"
                  tabIndex={isProductDropdownOpen ? 0 : -1}
                  onClick={() => { setProductDropdownOpen(false); setMobileMenuOpen(false); }}
                >
                  Prescription Pads
                </Link>
              </div>
            </div>
          </li>

          <li className={styles.navItem}>
            <Link href="/about" className={styles.link}>About Us</Link>
          </li>

          <li className={styles.navItem}>
            <Link href="/contact" className={styles.link}>Contact Us</Link>
          </li>

          <li className={styles.navItem}>
            <button className={styles.brochureBtn} onClick={() => setBrochureModalOpen(true)}>
              Brochure Download
            </button>
          </li>

          <li className={styles.navItem}>
            <Link href="/quote" className={styles.quoteBtn}>
              Get a Quote
            </Link>
          </li>
        </ul>
      </nav>

      {/* Brochure Modal */}
      {isBrochureModalOpen && (
        <div
          className={styles.modalOverlay}
          role="dialog"
          aria-modal="true"
          aria-labelledby="brochure-title"
          onMouseDown={(e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
              setBrochureModalOpen(false);
            }
          }}
        >
          <div className={styles.modalContent} ref={modalRef}>
            <button
              className={styles.modalClose}
              aria-label="Close"
              onClick={() => setBrochureModalOpen(false)}
            >
              ✕
            </button>

            <h2 id="brochure-title">Download Brochure</h2>
            <form className={styles.modalForm} onSubmit={handleBrochureSubmit}>
              <label htmlFor="bf-name">Name *</label>
              <input
                id="bf-name"
                ref={brochureNameRef}
                name="name"
                type="text"
                value={brochureForm.name}
                onChange={handleBrochureChange}
                required
              />

              <label htmlFor="bf-phone">Contact Number *</label>
              <input
                id="bf-phone"
                name="phone"
                type="tel"
                value={brochureForm.phone}
                onChange={handleBrochureChange}
                required
              />

              <label htmlFor="bf-email">Email (optional)</label>
              <input
                id="bf-email"
                name="email"
                type="email"
                value={brochureForm.email}
                onChange={handleBrochureChange}
              />

              <button type="submit" className={styles.modalSubmit} disabled={brochureSubmitting}>
                {brochureSubmitting ? "Preparing…" : "Download Now"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}