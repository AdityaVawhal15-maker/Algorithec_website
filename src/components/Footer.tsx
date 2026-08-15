import Link from "next/link";
import { Logo } from "@/components/Logo";
import { FlounaLogo } from "@/components/FlounaLogo";
import { footerLinks, siteConfig } from "@/lib/utils";
import { BadgeCheck } from "lucide-react";

/* ─── Social icon SVGs ─── */
function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-border-light" role="contentinfo">
      <div className="section-padding mx-auto max-w-[1400px]">

        {/* ─── Main grid ─── */}
        <div className="py-20 md:py-28 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 lg:gap-8">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 space-y-6">
            <Logo variant="full" size="md" />
            <p className="text-sm text-graphite leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
            <p className="text-xs tagline text-graphite/70">
              {siteConfig.tagline}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-1">
              <Link
                href={siteConfig.links.twitter}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-graphite/60 hover:text-black hover:bg-black/[0.04] transition-all duration-250"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ALGORITHEC on X (Twitter)"
              >
                <TwitterIcon className="w-3.5 h-3.5" />
              </Link>
              <Link
                href={siteConfig.links.linkedin}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-graphite/60 hover:text-black hover:bg-black/[0.04] transition-all duration-250"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ALGORITHEC on LinkedIn"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
              </Link>
              <Link
                href={siteConfig.links.github}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-graphite/60 hover:text-black hover:bg-black/[0.04] transition-all duration-250"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ALGORITHEC on GitHub"
              >
                <GitHubIcon className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <FooterColumn title="Platform" links={footerLinks.platform} />
          <FooterColumn title="Company" links={footerLinks.company} />
          <FooterColumn title="Legal" links={footerLinks.legal} />
          <FooterColumn title="Support" links={footerLinks.support} />
        </div>

        {/* ─── Trust badges row ─── */}
        <div className="py-8 border-t border-border-light flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-graphite/40 flex-shrink-0">
            Recognized by
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <TrustBadge label="DPIIT Recognized Startup" acronym="DPIIT" />
            <TrustBadge label="MSME Registered Enterprise" acronym="MSME" />
          </div>
        </div>

        {/* ─── Bottom bar ─── */}
        <div className="py-8 border-t border-border-light flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="space-y-1.5">
            <p className="text-xs text-graphite">
              © 2026 ALGORITHEC PRIVATE LIMITED. All Rights Reserved.
            </p>
            <p className="text-[11px] text-graphite/50">
              AI Company · Built in India · Designed for the World
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <Link
              href="/privacy"
              className="text-xs text-graphite/60 hover:text-black transition-colors duration-250"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-graphite/60 hover:text-black transition-colors duration-250"
            >
              Terms
            </Link>
            <Link
              href="/accessibility"
              className="text-xs text-graphite/60 hover:text-black transition-colors duration-250"
            >
              Accessibility
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <nav aria-label={`${title} links`}>
      <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black mb-5">
        {title}
      </h3>
      <ul className="space-y-3.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-graphite hover:text-black transition-colors duration-250"
            >
              {link.label === "Flouna AI" ? (
                <FlounaLogo size="xs" text={link.label} />
              ) : (
                link.label
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function TrustBadge({ label, acronym }: { label: string; acronym: string }) {
  return (
    <div
      className="trust-badge inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-black/[0.07] shadow-[0_1px_2px_0_rgb(0,0,0,0.04)]"
      title={label}
    >
      <span className="text-[9px] font-bold tracking-wider text-black/50 uppercase">
        {acronym}
      </span>
      <BadgeCheck className="w-3.5 h-3.5 text-black/30" strokeWidth={1.5} aria-hidden="true" />
      <span className="text-[11px] font-medium text-graphite">{label}</span>
    </div>
  );
}
