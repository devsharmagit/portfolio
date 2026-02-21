'use client'

import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import VisitorCounter from "./VisitorCounter";

const links = [
  { icon: Mail, href: "mailto:devsharmasoe@gmail.com", label: "Email" },
  { icon: Github, href: "https://github.com/devsharmagit", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/devsharmaldk/", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-16">
      <div className="mono-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 font-display mb-3">
            Let&apos;s work together
          </h2>
          <p className="text-sm text-zinc-400 mb-8 max-w-md mx-auto">
            Open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="flex items-center justify-center gap-3 mb-12">
            {links.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-zinc-400 transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.06] hover:text-zinc-100 hover:scale-105"
                aria-label={label}
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 text-xs text-zinc-700">
            <p>© {new Date().getFullYear()} Dev Sharma</p>
            <span className="text-zinc-800">·</span>
            <VisitorCounter />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
