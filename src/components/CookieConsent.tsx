"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";
import Link from "next/link";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("algorithec_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("algorithec_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("algorithec_cookie_consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 40, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 40, opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-5 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50"
        >
          <div className="glass-surface p-5 sm:p-6 rounded-2xl md:rounded-3xl border border-black/[0.08] shadow-2xl shadow-black/10 bg-white/95 backdrop-blur-xl">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0 text-black mt-0.5">
                <Cookie className="w-4.5 h-4.5 text-black" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-black">
                  Cookie Preferences
                </h3>
                <p className="mt-1.5 text-xs text-graphite leading-relaxed">
                  We use cookies to optimize your experience and analyze platform traffic. Learn more in our{" "}
                  <Link href="/cookies" className="underline hover:text-black transition-colors">
                    Cookie Policy
                  </Link>.
                </p>

                <div className="mt-4 flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={handleAccept}
                    className="px-4 py-2.5 rounded-xl bg-black text-white text-xs font-medium hover:bg-black/90 transition-all shadow-sm active:scale-[0.98]"
                  >
                    Accept Cookies
                  </button>
                  <button
                    type="button"
                    onClick={handleDecline}
                    className="px-4 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200/80 text-black text-xs font-medium transition-all active:scale-[0.98]"
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
