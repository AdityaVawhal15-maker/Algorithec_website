"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/lib/utils";
import { cn } from "@/lib/utils";

import { FlounaLogo } from "@/components/FlounaLogo";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "glass-surface shadow-sm shadow-black/[0.03]"
            : "bg-transparent"
        )}
      >
        <nav
          className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 mx-auto flex h-16 md:h-[72px] max-w-[1400px] items-center justify-between"
          aria-label="Main navigation"
        >
          <Logo variant="full" size="md" className="-ml-1 lg:ml-0" />

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-3.5 py-2 text-[13px] font-medium text-graphite hover:text-black transition-colors duration-300 rounded-lg hover:bg-black/[0.03]"
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

          <div className="hidden lg:flex items-center gap-3">
            <Button href="/#early-access" variant="primary" size="sm">
              Get Started
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 -mr-2 text-black rounded-lg hover:bg-black/[0.04] transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
          >
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              <div className="flex items-center justify-between p-6 border-b border-border-light">
                <Logo variant="full" size="sm" />
                <button
                  type="button"
                  className="p-2 -mr-2 rounded-lg hover:bg-black/[0.04]"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="p-6 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="block py-3 text-lg font-medium text-black hover:text-blue transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label === "Flouna AI" ? (
                        <FlounaLogo size="sm" text={link.label} />
                      ) : (
                        link.label
                      )}
                    </Link>
                  </motion.div>
                ))}
                <div className="mt-6 pt-6 border-t border-border-light">
                  <Button
                    href="/#early-access"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    onClick={() => setMobileOpen(false)}
                  >
                    Get Started
                  </Button>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
