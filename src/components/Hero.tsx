'use client'

import { FaLinkedin, FaGithub, FaArrowRight } from "react-icons/fa6";
import { Mail, FileText, Calendar } from 'lucide-react';
import * as React from 'react';
import { motion } from 'framer-motion';
import GitHubContributions from "./GitHubContributions";

const socials = [
  { icon: FaGithub, href: "https://github.com/devsharmagit", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/devsharmaldk/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:devsharmasoe@gmail.com", label: "Email" },
  { icon: FileText, href: "https://drive.google.com/file/d/1U_hoKFJETjBU6a8Qr-fyhhTBTvGy2itT/view?usp=sharing", label: "Resume" },
  { icon: Calendar, href: "https://cal.com/dev-sharma-cal", label: "Book a Call" },
];

export default function Hero() {
  return (
    <section id="home" className="pb-20 pt-28 md:pt-36">
      <div className="mono-shell">
        {/* Avatar + Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-8"
        >
          <div 
            className="w-16 h-16 rounded-full overflow-hidden bg-cover bg-center ring-2 ring-white/[0.08] transition-all duration-500 hover:ring-white/[0.2] hover:scale-105"
            role="img"
            aria-label="Dev Sharma"
            style={{ backgroundImage: `url("https://github.com/devsharmagit.png")` }}
          />
          <div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[13px] text-zinc-400">Available for opportunities</span>
            </div>
          </div>
        </motion.div>

        {/* Name & Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-50 leading-[1.1] mb-4 font-display">
            Dev Sharma
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-lg leading-relaxed">
            I design & build clean, fast web apps — turning ideas into polished digital products.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2 mb-12"
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="group inline-flex items-center justify-center h-10 w-10 rounded-xl border border-white/[0.06] bg-white/[0.02] text-zinc-400 transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.06] hover:text-zinc-100 hover:scale-105"
              aria-label={label}
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          ))}
          
          <a
            href="#projects"
            className="ml-2 group inline-flex items-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 py-2 text-[13px] font-medium text-zinc-300 transition-all duration-300 hover:border-white/[0.2] hover:bg-white/[0.08] hover:text-white"
          >
            View Work
            <FaArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        {/* GitHub Contributions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mono-card overflow-hidden"
        >
          <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3.5">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              </div>
              <span className="ml-2 text-xs text-zinc-500 font-mono">contributions</span>
            </div>
            <a
              href="https://github.com/devsharmagit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-500 transition-colors hover:text-zinc-300"
            >
              @devsharmagit
            </a>
          </div>
          <div className="p-4">
            <GitHubContributions 
              username="devsharmagit" 
              compact={false}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
