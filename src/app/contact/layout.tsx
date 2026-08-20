import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with ALGORITHEC for partnerships, developer integrations, enterprise inquiries, and support.",
  alternates: {
    canonical: "https://algorithec.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
