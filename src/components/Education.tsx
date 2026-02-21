'use client'

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science",
    school: "IILM University",
    location: "Greater Noida, India",
    period: "2024 — 2028",
  },
  {
    degree: "Senior Secondary Education",
    school: "School of Excellence",
    location: "Delhi, India",
    period: "Completed 2023",
  },
];

export default function Education() {
  return (
    <section id="education" className="pb-24">
      <div className="mono-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="section-label mb-3 block">Education</span>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 font-display">
            Background
          </h2>
        </motion.div>

        <div className="space-y-4">
          {education.map((item, index) => (
            <motion.article
              key={item.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mono-card-hover p-5 md:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.06] shrink-0">
                  <GraduationCap className="h-4 w-4 text-zinc-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-zinc-100 font-display">{item.degree}</h3>
                  <p className="mt-1 text-sm text-zinc-400">{item.school}</p>
                  <p className="mt-2 text-xs text-zinc-500 font-mono">
                    {item.location} · {item.period}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
