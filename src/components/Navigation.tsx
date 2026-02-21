"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-3"
            : "py-5"
        }`}
      >
        <div className="mono-shell">
          <div className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
            isScrolled
              ? "border border-white/[0.06] bg-zinc-950/80 backdrop-blur-xl shadow-lg shadow-black/20"
              : "bg-transparent"
          }`}>
            <a href="#home" className="font-display text-sm font-medium text-zinc-200 transition-colors hover:text-white">
              dev sharma
            </a>

            {/* Desktop nav */}
            <div className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-1.5 text-[13px] text-zinc-400 transition-all duration-300 hover:text-zinc-100 hover:bg-white/[0.05]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex flex-col gap-1 md:hidden p-1"
              aria-label="Menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                className="block h-[1.5px] w-5 bg-zinc-400 origin-center"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-[1.5px] w-5 bg-zinc-400"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                className="block h-[1.5px] w-5 bg-zinc-400 origin-center"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-2xl font-display font-medium text-zinc-200 transition-colors hover:text-white"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
