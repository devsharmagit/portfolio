"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let frame = 0;
    let lastScrolled = false;

    const updateScrolled = () => {
      frame = 0;
      const nextScrolled = window.scrollY > 32;
      if (nextScrolled !== lastScrolled) {
        lastScrolled = nextScrolled;
        setIsScrolled(nextScrolled);
      }
    };

    const onScroll = () => {
      if (frame !== 0) return;
      frame = window.requestAnimationFrame(updateScrolled);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (frame !== 0) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 ${
          isScrolled
            ? "py-2 sm:py-3"
            : "py-3 sm:py-5"
        }`}
      >
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className={`flex items-center justify-between rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3 ${
            isScrolled
              ? "border border-black/[0.08] dark:border-white/[0.06] bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl shadow-lg shadow-black/[0.05] dark:shadow-black/20"
              : "bg-transparent"
          }`}>
            <a href="#home" className="font-display text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white">
              dev sharma
            </a>

            <div className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-1.5 text-[13px] text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-black/[0.04] dark:hover:bg-white/[0.05]"
                >
                  {link.label}
                </a>
              ))}
              <ThemeToggle />
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex flex-col gap-1 p-1"
                aria-label="Menu"
              >
                <span
                  className={`block h-[1.5px] w-5 bg-zinc-500 dark:bg-zinc-400 origin-center ${
                    mobileOpen ? "translate-y-[5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-5 bg-zinc-500 dark:bg-zinc-400 ${
                    mobileOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-5 bg-zinc-500 dark:bg-zinc-400 origin-center ${
                    mobileOpen ? "-translate-y-[5px] -rotate-45" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl md:hidden">
          <div className="flex h-full flex-col items-center justify-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-display font-medium text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
