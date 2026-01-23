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

const Skills = () => {
  return (
    <>
    <section id="skills" className="relative mx-auto flex h-full flex-col rounded-3xl py-20 px-4 md:px-10 max-w-[1400px]">
      <div className="relative w-full">
        <div className="relative z-10 pt-[50px] md:pt-[100px]">
          <h2 className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-balance text-center mb-6 md:mb-12">
            <p className="mb-2 md:mb-3 text-[10px] md:text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase">
              MY SKILLSET
            </p>
            <span className="flex flex-col sm:flex-row items-center justify-center gap-0 sm:gap-4">
              <span className="font-bold text-foreground drop-shadow-sm">
                The Magic
              </span>
              <span className="text-gradient tracking-wide font-extrabold italic">
                Behind
              </span>
            </span>
          </h2>

          <ul className="relative z-10 mx-auto flex max-w-[400px] sm:max-w-[480px] md:max-w-2xl lg:max-w-4xl flex-wrap justify-center gap-2 sm:gap-2 md:gap-2 lg:gap-4">
            {skills.map((skill, index) => (
              <li
                key={index}
                aria-label={skill.name}
                className="relative flex items-center justify-center gap-1.5 md:gap-3 rounded-xl glass hover:bg-primary/10 hover:border-primary/50 hover:shadow-warm px-3 py-1.5 md:px-5 md:py-2 text-xs md:text-sm text-white/90 lg:text-base transition-all duration-300 cursor-default group"
              >
                <div className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 flex items-center justify-center">
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-full h-full object-contain transition-transform group-hover:scale-110 duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
                <span className="font-medium group-hover:text-primary transition-colors">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

  
    </>
  );
};

export default Skills;