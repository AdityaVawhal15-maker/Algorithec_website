import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ALGORITHEC — The AI Decision Engine",
    template: "%s — ALGORITHEC",
  },
  description:
    "ALGORITHEC is building the Intelligence Layer above every digital decision. Flouna AI understands what you need and recommends the best decision instantly.",
  keywords: [
    "AI",
    "decision engine",
    "Flouna AI",
    "ALGORITHEC",
    "artificial intelligence",
    "recommendations",
  ],
  authors: [{ name: "ALGORITHEC" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ALGORITHEC",
    title: "ALGORITHEC — The AI Decision Engine",
    description:
      "Stop comparing. Start deciding. Flouna AI recommends the one best decision instantly.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ALGORITHEC — The AI Decision Engine",
    description:
      "Stop comparing. Start deciding. Flouna AI recommends the one best decision instantly.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="min-h-screen antialiased">
        <SmoothScroll />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
