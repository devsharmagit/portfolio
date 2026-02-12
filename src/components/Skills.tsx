const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Prisma",
  "AWS",
  "Docker",
  "Git",
];

const Skills = () => {
  return (
    <section id="skills" className="px-6 py-16 md:py-20">
      <div className="container max-w-4xl">
        <p className="section-eyebrow">SKILLS</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Core Stack</h2>

        <div className="surface-card mt-6 p-6">
          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-white/20 px-3 py-1 text-sm text-white/75">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
