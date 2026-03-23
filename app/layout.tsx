import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import FloatingWhatsApp from "@/src/components/FloatingWhatsApp";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://globalprinters.in"),
  title: {
    default: "Global Printers — Offset Printing in Bhilwara | Premium Print Solutions Since 1996",
    template: "%s | Global Printers Bhilwara",
  },
  description:
    "Global Printers is a Bhilwara-based offset printing company with 30+ years of experience. Brochures, business cards, catalogues, packaging, labels and more. Serving D2C brands and corporates pan-India. Get a quote on WhatsApp.",
  keywords: [
    "printing press Bhilwara",
    "offset printing Bhilwara",
    "catalogue printing Bhilwara",
    "visiting card printing Bhilwara",
    "brochure printing Bhilwara",
    "wedding card printing Bhilwara",
    "printing press Rajasthan",
    "D2C printing India",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Global Printers — Offset Printing in Bhilwara | Premium Print Solutions Since 1996",
    description:
      "Global Printers is a Bhilwara-based offset printing company with 30+ years of experience. Brochures, business cards, catalogues, packaging, labels and more.",
    siteName: "Global Printers",
    locale: "en_IN",
    type: "website",
    url: "https://globalprinters.in",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Global Printers — Premium Offset Printing in Bhilwara, Rajasthan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Printers — Offset Printing in Bhilwara",
    description:
      "Premium offset printing in Bhilwara. Brochures, catalogues, visiting cards, wedding cards & more. 30+ years. 72hr turnaround.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/logo/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/logo/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body className="antialiased">
        <Navbar />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
