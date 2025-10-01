// app/contact/page.js
"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "@/styles/Contact.module.css";

export default function ContactPage() {
  const [form, setForm] = useState({
    hospitalName: "",
    contactName: "",
    phone: "",
    email: "",
    product: [],
    notes: "",
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleProductChange = (e) => {
    const value = e.target.value;
    setForm((p) => ({
      ...p,
      product: p.product.includes(value)
        ? p.product.filter((item) => item !== value)
        : [...p.product, value],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    if (!form.contactName || !form.phone) {
      setError("Please fill Name and Mobile.");
      return;
    }

    setError("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const { error: apiErr } = await res.json().catch(() => ({ error: "" }));
        throw new Error(apiErr || "Something went wrong. Please try again.");
      }

      setDone(true);
      setForm({
        hospitalName: "",
        contactName: "",
        phone: "",
        email: "",
        product: [],
        notes: "",
      });
    } catch (err) {
      setError(err.message || "Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const productOptions = [
    "Files",
    "X Rays & MRI Scan Cover",
    "Envelopes",
    "Visiting Cards",
    "Letter Heads",
    "Prescription Pads",
    "Other / Custom",
  ];

  const waHref = `https://wa.me/918050260636?text=${encodeURIComponent(
    `Hello! This is ${form.contactName || "a visitor"}. I’m interested in ${
      form.product.length > 0 ? form.product.join(", ") : "printing solutions"
    } for our hospital/clinic.`
  )}`;

  return (
    <>
      <Navbar />

      <main className={styles.page}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <h1 className={styles.title}>Contact Us</h1>
            <p className={styles.subtitle}>
              We’re here to help with files, covers, and stationery for hospitals & clinics.
            </p>
          </div>
        </section>

        {/* Quick Contact + Form */}
        <section className={styles.topWrap}>
          {/* Quick Info */}
          {/* Quick Info (ENHANCED) */}
<div className={styles.quickCard}>
  <h3 className={styles.quickTitle}>Quick Contact</h3>

  <ul className={styles.contactList}>
    <li>
      <a className={styles.contactRow} href={waHref} target="_blank" rel="noopener noreferrer">
        <span className={styles.contactIconCircle}>📞</span>
        <span className={styles.contactText}>+91 80502 60636</span>
      </a>
    </li>
    <li>
      <a className={styles.contactRow} href="mailto:info@thefilemaster.com">
        <span className={styles.contactIconCircle}>✉️</span>
        <span className={styles.contactText}>info@thefilemaster.com</span>
      </a>
    </li>
  </ul>

  <div className={styles.badgeRow}>
    <span>✅ Lowest market prices</span>
    <span>🚚 PAN-India delivery</span>
    <span>🎨 Free design assistance</span>
  </div>
</div>

          {/* Lead Form */}
          <div className={styles.formCard}>
            <h3>Send us a Message</h3>

            {done && (
              <div className={styles.successBox}>
                Thanks! We’ve received your details. Our team will get back to you shortly.
              </div>
            )}
            {error && <div className={styles.errorBox}>{error}</div>}

            <form onSubmit={handleSubmit} className={styles.form}>
              <label className={styles.field}>
                <span>Hospital / Clinic Name</span>
                <input
                  type="text"
                  name="hospitalName"
                  value={form.hospitalName}
                  onChange={handleChange}
                />
              </label>

              <label className={styles.field}>
                <span>Your Name *</span>
                <input
                  type="text"
                  name="contactName"
                  value={form.contactName}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className={styles.field}>
                <span>Mobile Number *</span>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className={styles.field}>
                <span>Email (optional)</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </label>

              <label className={styles.field}>
                <span>Select Products</span>
                <div className={styles.dropdownWrapper}>
                  <button
                    type="button"
                    className={styles.dropdownToggle}
                    onClick={() => setDropdownOpen((prev) => !prev)}
                  >
                    {form.product.length > 0
                      ? form.product.join(", ")
                      : "Select Products"}
                    <span className={styles.arrow}>
                      {dropdownOpen ? "▲" : "▼"}
                    </span>
                  </button>

                  {dropdownOpen && (
                    <div className={styles.dropdownList}>
                      {productOptions.map((option) => (
                        <label key={option} className={styles.checkboxItem}>
                          <input
                            type="checkbox"
                            value={option}
                            checked={form.product.includes(option)}
                            onChange={handleProductChange}
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </label>

              <label className={styles.field}>
                <span>Message</span>
                <textarea
                  name="notes"
                  rows={4}
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="Share your requirements…"
                />
              </label>

              <div className={styles.actions}>
                <button className={styles.primaryBtn} disabled={submitting}>
                  {submitting ? "Sending…" : "Send Message"}
                </button>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.waBtn}
                >
                  Chat on WhatsApp
                </a>
              </div>
            </form>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className={styles.bottomCta}>
          <h2>Prefer direct conversation?</h2>
          <p>We respond quickly with product options & pricing.</p>
          <div className={styles.bottomCtaRow}>
            <Link className={styles.primaryBtn} href="/quote">
              Request a Quote
            </Link>
            <a
              className={styles.waBtn}
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}