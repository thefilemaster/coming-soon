// app/page.js
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import styles from "@/styles/Home.module.css";

const products = [
  {
    title: "Files",
    image: "/files/Hospital File - 1.jpg",
    link: "/products/files",
  },
  {
    title: "X Rays & MRI Scan Cover",
    image: "/product-images/xray-mri.jpg", // ensure this exists
    link: "/products/xray-mri",
  },
  {
    title: "Envelopes",
    image: "/product-images/envelopes.jpg",
    link: "/products/envelopes",
  },
  {
    title: "Visiting Cards",
    image: "/product-images/visiting-cards.jpg",
    link: "/products/visiting-cards",
  },
  {
    title: "Letter Heads",
    image: "/product-images/letterheads.jpg",
    link: "/products/letterheads",
  },
  {
    title: "Prescription Pads",
    image: "/product-images/prescription-pads.jpg",
    link: "/products/prescription-pads",
  },
];

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Navbar />
      <HeroBanner />

      {/* Our Products */}
      <section className={styles.productsSection}>
        <div className={styles.productsInner}>
          <h2 className={styles.sectionTitle}>Our Products</h2>

          <div className={styles.productGrid}>
            {products.map((p, index) => (
              <div className={styles.productGridItem} key={index}>
                <ProductCard {...p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h3 className={styles.ctaHeading}>
            Looking for Custom Hospital Printing?
          </h3>
          <p className={styles.ctaText}>
            Files, Envelopes, Cards, and More — All Branded for Your Hospital at
            the lowest market prices.
          </p>
          <div className={styles.ctaButtons}>
            <a href="/quote" className={styles.quoteButton}>
              Request a Quote
            </a>
            <a
              href="/brochure.pdf"
              className={styles.brochureButton}
              download="The-File-Master-Brochure.pdf"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </section>

{/* USP + FAQ Section */}
<section className={styles.uspSection}>
  <div className={styles.uspContainer}>
    <h2 className={styles.uspTitle}>Why Choose The File Master?</h2>
    <div className={styles.uspGrid}>
      <div className={styles.uspCard}>
        <h3>💰 Lowest Market Prices</h3>
        <p>We guarantee the best prices for hospital files, covers, envelopes, and stationery without compromising on quality.</p>
      </div>
      <div className={styles.uspCard}>
        <h3>⚡ Fast Turnaround</h3>
        <p>Get your printing orders delivered quickly and reliably — designed to meet urgent hospital requirements.</p>
      </div>
      <div className={styles.uspCard}>
        <h3>🎨 Customization</h3>
        <p>From custom sizes to personalized branding, we tailor every product to suit your hospital’s needs.</p>
      </div>
      <div className={styles.uspCard}>
        <h3>🏥 Trusted by Hospitals</h3>
        <p>We are the go-to printing partner for hospitals and clinics across India, ensuring professional results every time.</p>
      </div>
    </div>
  </div>

  {/* FAQ */}
  <div className={styles.faqContainer}>
    <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
    <div className={styles.faqItem}>
      <h4>Do you deliver across India?</h4>
      <p>Yes, we ship to hospitals and clinics anywhere in India with safe packaging.</p>
    </div>
    <div className={styles.faqItem}>
      <h4>Can I customize the size of files?</h4>
      <p>Absolutely! We offer customized sizes to suit your specific document handling needs.</p>
    </div>
    <div className={styles.faqItem}>
      <h4>Can I order in small quantities?</h4>
      <p>Yes! We keep our minimum order quantity flexible (starting at just 100 pieces) so even small clinics and diagnostic centers can afford professional, branded stationery without overstocking.</p>
    </div>
  </div>
</section>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}