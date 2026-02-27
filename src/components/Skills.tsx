"use client";

const skills = [
  { name: "ReactJS", icon: "/icons/React_dark.svg" },
  { name: "NextJS", icon: "/icons/nextjs_icon_dark.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
  { name: "NodeJS", icon: "/icons/nodejs.svg" },
  { name: "ExpressJS", icon: "/icons/Express.js_dark.svg" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
  { name: "MongoDB", icon: "/icons/MongoDB_dark.svg" },
  { name: "Prisma", icon: "/icons/Prisma_dark.svg" },
  { name: "Zustand", icon: "/icons/zustand-original.svg" },
  { name: "Zod", icon: "/icons/zod.svg" },
  { name: "pnpm", icon: "/icons/Pnpm_dark.svg" },
  { name: "Bun", icon: "/icons/bun.svg" },
  { name: "Git", icon: "/icons/git.svg" },
  { name: "GitHub", icon: "/icons/GitHub_dark.svg" },
  { name: "Vercel", icon: "/icons/Vercel_dark.svg" },
  { name: "AWS", icon: "/icons/Amazon Web Services_dark.svg" },
  { name: "Docker", icon: "/icons/docker.svg" },
  { name: "Expo", icon: "/icons/expo.svg" },
  { name: "Clerk", icon: "/icons/Clerk_dark.svg" },
  { name: "Linux", icon: "/icons/linux.svg" },
];

export default function Skills() {
  return (
    <section id="skills" className="pb-16 sm:pb-20 md:pb-24">
      <div className="mono-shell">
        <div className="mb-8 sm:mb-10 text-center animate-enter-soft animate-enter-delay-3">
          <span className="section-label mb-3 block">My Skillset</span>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 font-display">
            The Magic Behind
          </h2>
        </div>

        <ul className="flex flex-wrap justify-center gap-2 sm:gap-2.5 md:gap-3 max-w-2xl mx-auto">
          {skills.map((skill) => (
            <li
              key={skill.name}
              className="group relative flex items-center gap-1.5 md:gap-2.5 rounded-xl glass px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-zinc-600 dark:text-zinc-300 transition-all duration-300 cursor-default hover:bg-black/[0.04] dark:hover:bg-white/[0.06] hover:border-black/[0.15] dark:hover:border-white/[0.12] hover:text-zinc-900 dark:hover:text-white hover:shadow-lg hover:shadow-black/[0.05] dark:hover:shadow-black/20"
            >
              <div className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center shrink-0">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <span className="font-medium transition-colors">{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
