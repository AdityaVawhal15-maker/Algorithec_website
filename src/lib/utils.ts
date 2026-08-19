import clsx from "clsx";

export function cn(...inputs: (string | undefined | null | false)[]) {
  return clsx(inputs);
}

export const siteConfig = {
  name: "ALGORITHEC",
  product: "Flouna AI",
  tagline: "One Decision. Infinite Possibilities.",
  altTagline: "The AI Decision Engine.",
  description:
    "ALGORITHEC is building the Intelligence Layer above every digital decision.",
  url: "https://algorithec.com",
  links: {
    twitter: "https://twitter.com/algorithec",
    linkedin: "https://linkedin.com/company/algorithec",
    github: "https://github.com/algorithec",
  },
};

export const navLinks = [
  { label: "Flouna AI", href: "/#flouna" },
  { label: "Technology", href: "/#technology" },
  { label: "Research", href: "/research" },
  { label: "Developers", href: "/developers" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  platform: [
    { label: "Flouna AI", href: "/#flouna" },
    { label: "Technology", href: "/#technology" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Early Access", href: "/#early-access" },
    { label: "Developers", href: "/developers" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Research", href: "/research" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Press", href: "/contact#press" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Refund Policy", href: "/refund" },
    { label: "Accessibility", href: "/accessibility" },
    { label: "Security", href: "/security" },
  ],
  support: [
    { label: "Help Center", href: "/contact#support" },
    { label: "Contact Us", href: "/contact" },
    { label: "Developer Docs", href: "/developers" },
    { label: "Trust Center", href: "/privacy#trust" },
  ],
};

export const domains = {
  launch: ["Food", "Rides"],
  future: [
    "Shopping",
    "Hotels",
    "Travel",
    "Flights",
    "Healthcare",
    "Finance",
    "Insurance",
    "Education",
    "Local Services",
    "Government Services",
  ],
};

export const decisionFactors = [
  "Price",
  "Delivery time",
  "ETA",
  "Distance",
  "Offers",
  "Ratings",
  "Reviews",
  "Historical quality",
  "User preferences",
  "Context",
  "Location",
  "Weather",
  "Traffic",
  "Budget",
  "Value for money",
];

export const pipelineSteps = [
  { id: "input", label: "Natural Language", description: "Describe what you need in plain words" },
  { id: "intent", label: "Intent Understanding", description: "AI parses context, goals, and constraints" },
  { id: "reasoning", label: "AI Reasoning", description: "Multi-factor analysis across dimensions" },
  { id: "data", label: "Real-Time Platform Data", description: "Live data from integrated platforms" },
  { id: "engine", label: "Decision Engine", description: "Optimal choice selection algorithm" },
  { id: "recommendation", label: "One Best Recommendation", description: "Single answer with clear reasoning" },
  { id: "fulfillment", label: "Payment & Fulfillment", description: "Seamless completion of your decision" },
];
