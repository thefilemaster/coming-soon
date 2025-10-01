// app/quote/page.js
"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "@/styles/quote.module.css";

export default function QuotePage() {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleProductChange = (e) => {
    const value = e.target.value;
    setForm((prev) => ({
      ...prev,
      product: prev.product.includes(value)
        ? prev.product.filter((item) => item !== value)
        : [...prev.product, value],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const { error } = await res.json();
        alert(error || "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }

      // ✅ Redirect to Thank You page
      window.location.href = "/thankyou";
    } catch (err) {
      console.error(err);
      alert("Network error. Please try again.");
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

  return (
    <>
      <Navbar />

      <main className={styles.container}>
        <h1 className={styles.title}>Request a Quote</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label}>Hospital/Clinic Name</label>
            <input
              type="text"
              name="hospitalName"
              className={styles.input}
              value={form.hospitalName}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Your Name</label>
            <input
              type="text"
              name="contactName"
              className={styles.input}
              value={form.contactName}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Mobile Number</label>
            <input
              type="text"
              name="phone"
              className={styles.input}
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Email (optional)</label>
            <input
              type="email"
              name="email"
              className={styles.input}
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Select Products</label>
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
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Additional Notes</label>
            <textarea
              name="notes"
              className={styles.textarea}
              value={form.notes}
              onChange={handleChange}
              rows={4}
            />
          </div>

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit Request"}
          </button>
        </form>
      </main>

      <Footer />
    </>
  );
}