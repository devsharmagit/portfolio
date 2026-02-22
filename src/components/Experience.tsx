'use client'

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Growth99.com",
    location: "Utah, USA",
    period: "Jul 2023 — Aug 2024",
    logo: "https://growth99.com/storage/2024/09/logo-icon.svg",
    points: [
      "Built 250+ landing pages for healthcare clients using HTML, CSS, JavaScript, and Bootstrap.",
      "Created reusable templates that cut delivery effort by ~50%.",
      "Integrated APIs in a Next.js dashboard to track engagement metrics.",
      "Improved onboarding and media flows, reducing drop-off and increasing retention.",
    ],
    websiteUrl: "https://growth99.com",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="pb-16 sm:pb-20 md:pb-24">
      <div className="mono-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="section-label mb-3 block">Experience</span>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 font-display">
            Where I&apos;ve worked
          </h2>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((item, index) => (
            <motion.article
              key={item.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mono-card-hover p-4 sm:p-5 md:p-6"
            >
              <div className="flex flex-col gap-3 mb-3 sm:mb-4">
                <div className="flex items-start gap-3 sm:gap-4">
                  {/* Company Logo */}
                  <div className="mt-0.5 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.06] shrink-0 overflow-hidden">
                    <img
                      src={item.logo}
                      alt={item.company}
                      className="h-6 w-6 object-contain"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 font-display md:text-lg">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-zinc-600 dark:text-zinc-300">{item.company}</span>
                      <a
                        href={item.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
                      >
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-zinc-500 font-mono">
                  <span>{item.location}</span>
                  <span className="text-zinc-300 dark:text-zinc-700">·</span>
                  <span>{item.period}</span>
                </div>
              </div>

              <ul className="space-y-2 sm:space-y-2.5 pl-0 sm:pl-[52px] md:pl-[60px]">
                {item.points.map((point, i) => (
                  <li key={i} className="flex gap-2.5 sm:gap-3 text-[13px] sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    <span className="mt-2 h-1 w-1 rounded-full bg-zinc-400 dark:bg-zinc-600 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
