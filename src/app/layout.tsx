import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CookieConsent } from "@/components/CookieConsent";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://algorithec.com"),
  verification: {
    google: "e-14R8MRyyows_GwNsstyfaz8m-fg70DaGn0pSQzGt0",
  },
  title: {
    default: "ALGORITHEC — AI Infrastructure for Intelligent Decisions",
    template: "%s — ALGORITHEC",
  },
  description:
    "ALGORITHEC builds intelligent AI systems and decision infrastructure that help organizations understand context, automate complex decisions, and build smarter digital experiences.",
  keywords: [
    "AI",
    "decision engine",
    "AI infrastructure",
    "Flouna AI",
    "ALGORITHEC",
    "artificial intelligence",
    "intelligent decisions",
    "decision automation",
  ],
  authors: [{ name: "ALGORITHEC", url: "https://algorithec.com" }],
  creator: "ALGORITHEC",
  publisher: "ALGORITHEC",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://algorithec.com/",
    siteName: "ALGORITHEC",
    title: "ALGORITHEC — AI Infrastructure for Intelligent Decisions",
    description:
      "ALGORITHEC builds intelligent AI systems and decision infrastructure that help organizations understand context, automate complex decisions, and build smarter digital experiences.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ALGORITHEC — AI Infrastructure for Intelligent Decisions",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ALGORITHEC — AI Infrastructure for Intelligent Decisions",
    description:
      "ALGORITHEC builds intelligent AI systems and decision infrastructure that help organizations understand context, automate complex decisions, and build smarter digital experiences.",
    images: ["/og-image.png"],
    creator: "@algorithec",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://algorithec.com/",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://algorithec.com/#organization",
      name: "ALGORITHEC",
      url: "https://algorithec.com/",
      logo: "https://algorithec.com/logo-algorithec.png",
      image: "https://algorithec.com/og-image.png",
      description:
        "ALGORITHEC builds intelligent AI systems and decision infrastructure that help organizations understand context, automate complex decisions, and build smarter digital experiences.",
      sameAs: [
        "https://twitter.com/algorithec",
        "https://linkedin.com/company/algorithec",
        "https://github.com/algorithec",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://algorithec.com/#website",
      url: "https://algorithec.com/",
      name: "ALGORITHEC",
      description:
        "ALGORITHEC builds intelligent AI systems and decision infrastructure that help organizations understand context, automate complex decisions, and build smarter digital experiences.",
      publisher: {
        "@id": "https://algorithec.com/#organization",
      },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <SmoothScroll />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
