// app/thankyou/page.js
"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function ThankYouPage() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1 style={{ fontSize: "2rem", color: "#003087" }}>Thank You!</h1>
      <p style={{ fontSize: "1.1rem", margin: "20px 0" }}>
        We’ve received your request. Our team will get back to you shortly.
      </p>

      {/* Back to Home button (using Next.js Link) */}
      <Link
        href="/"
        className="home-btn"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "12px 24px",
          backgroundColor: "#003087",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "6px",
          marginRight: "12px",
        }}
      >
        Back to Home
      </Link>

      {/* WhatsApp button (still <a>, since it's external) */}
      <a
        href="https://wa.me/918050260636?text=Hi%2C%20I%20requested%20a%20quote%20on%20The%20File%20Master"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          marginTop: "20px",
          padding: "12px 24px",
          backgroundColor: "#25D366",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "6px",
          fontWeight: "bold",
        }}
      >
        <FaWhatsapp size={20} style={{ marginRight: "8px" }} />
        Chat on WhatsApp
      </a>
    </div>
  );
}