import "../styles/globals.css";

export const metadata = {
  title: "The File Master",
  description: "Hospital printing solutions – files, envelopes, cards, and more.",

  icons: {
    icon: "/thefilemasterlogo.ico", // put favicon.ico inside /public
  },

  openGraph: {
    title: "The File Master",
    description: "Premium printed files, envelopes, and stationery for hospitals and clinics.",
    url: "https://thefilemaster.com", // replace with your real domain after deployment
    siteName: "The File Master",
    images: [
      {
        url: "/thefilemasterlogo.png", // put og-image.png inside /public
        width: 1200,
        height: 630,
        alt: "The File Master branding",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "The File Master",
    description: "Premium printed files, envelopes, and stationery for hospitals and clinics.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}