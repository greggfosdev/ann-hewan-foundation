import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { OrganizationJsonLd } from "@/components/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The Ann Hewan Foundation | Uplifting the Goodwill Community",
    template: "%s | The Ann Hewan Foundation",
  },
  description:
    "A 501(c)(3) foundation supporting education, nutrition, and community development in Goodwill, St. James, Jamaica.",
  keywords: [
    "Jamaica charity",
    "Caribbean nonprofit",
    "education",
    "Goodwill Jamaica",
    "breakfast program",
    "St. James Jamaica",
    "community development",
  ],
  openGraph: {
    title: "The Ann Hewan Foundation",
    description: "A 501(c)(3) nonprofit supporting education, nutrition, and community development in Goodwill, St. James, Jamaica.",
    locale: "en_US",
    type: "website",
    siteName: "The Ann Hewan Foundation",
    url: "https://theannhewanfoundation.org",
    images: [
      {
        url: "/images/hero/children-hero.webp",
        width: 682,
        height: 341,
        alt: "Children from the Goodwill community in Jamaica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Ann Hewan Foundation",
    description: "A 501(c)(3) nonprofit supporting education, nutrition, and community development in Jamaica.",
    images: ["/images/hero/children-hero.webp"],
  },
  metadataBase: new URL("https://ann-hewan-foundation.vercel.app"),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationJsonLd />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <TrustBadge />
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
