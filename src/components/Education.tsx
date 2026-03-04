import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science",
    school: "IILM University",
    location: "Greater Noida, India",
    period: "2024 - 2028",
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
    <section id="education" className="scroll-mt-20 pb-16 sm:pb-20 md:pb-24">
      <div className="mono-shell">
        <div className="mb-10">
          <span className="section-label mb-3 block">Education</span>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 font-display">
            Background
          </h2>
        </div>

        <div className="space-y-4">
          {education.map((item) => (
            <article
              key={item.school}
              className="mono-card-hover p-4 sm:p-5 md:p-6"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="mt-0.5 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.06] shrink-0">
                  <GraduationCap className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-zinc-500 dark:text-zinc-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 font-display">{item.degree}</h3>
                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{item.school}</p>
                  <p className="mt-2 text-xs text-zinc-500 font-mono">
                    {item.location} | {item.period}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
