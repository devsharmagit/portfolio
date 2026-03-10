import { skills } from "@/lib/skillsData";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 pb-16 sm:pb-20 md:pb-24">
      <div className="mono-shell">
        <div className="mb-8 sm:mb-10 text-center">
          <span className="section-label mb-3 block">My Skillset</span>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 font-display">
            The Magic Behind
          </h2>
        </div>

        <ul className="flex flex-wrap justify-center gap-2 sm:gap-2.5 md:gap-3 max-w-2xl mx-auto">
          {skills.map((skill) => (
            <li
              key={skill.name}
              className="group relative flex items-center gap-1.5 md:gap-2.5 rounded-xl glass px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-zinc-600 dark:text-zinc-300 cursor-default hover:bg-black/[0.04] dark:hover:bg-white/[0.06] hover:border-black/[0.15] dark:hover:border-white/[0.12] hover:text-zinc-900 dark:hover:text-white hover:shadow-lg hover:shadow-black/[0.05] dark:hover:shadow-black/20"
            >
              {skill.icon && (
                <div className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center shrink-0">
                  {skill.icon}
                </div>
              )}
              <span className="font-medium">{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}