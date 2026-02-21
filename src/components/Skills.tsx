'use client'

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "GitHub", "Docker", "AWS", "Vercel", "Linux", "Zod"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="pb-24">
      <div className="mono-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="section-label mb-3 block">Skills</span>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 font-display">
            Tools & technologies
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mono-card-hover p-5"
            >
              <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-zinc-500 font-mono">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-white/[0.04] border border-white/[0.04] px-3 py-1.5 text-[13px] text-zinc-300 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/[0.1] hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
