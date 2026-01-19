import React from 'react';
import { Code2, Layers, Database, Wrench } from 'lucide-react';

const skillCategories = [
  {
    name: "Languages",
    icon: Code2,
    skills: [
      { name: "JavaScript", icon: "⚡" },
      { name: "TypeScript", icon: "📘" },
      { name: "Python", icon: "🐍" },
      { name: "C", icon: "⚙️" },
      { name: "SQL", icon: "🗃️" },
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
    ],
  },
  {
    name: "Frameworks & Libraries",
    icon: Layers,
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Node.js", icon: "🟢" },
      { name: "Express", icon: "🚂" },
      { name: "Tailwind CSS", icon: "💨" },
      { name: "Next Auth", icon: "🔐" },
      { name: "Zod", icon: "✓" },
    ],
  },
  {
    name: "Databases",
    icon: Database,
    skills: [
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Prisma", icon: "💎" },
      { name: "Mongoose", icon: "🦡" },
    ],
  },
  {
    name: "Tools & Services",
    icon: Wrench,
    skills: [
      { name: "Docker", icon: "🐳" },
      { name: "Git", icon: "📦" },
      { name: "Firebase", icon: "🔥" },
      { name: "AWS", icon: "☁️" },
      { name: "AWS EC2", icon: "🖥️" },
      { name: "Google Auth", icon: "🔑" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container px-6">
        <div className="mb-16">
          <span className="mono text-primary text-sm mb-4 block">// tech stack</span>
          <h2 className="section-heading">Skills</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="text-primary mono">{'{'}</span>
                  <IconComponent className="w-4 h-4 text-primary" />
                  {category.name}
                  <span className="text-primary mono">{'}'}</span>
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="group px-3 py-1.5 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-all duration-300 text-sm flex items-center gap-1.5"
                    >
                      <span className="text-sm group-hover:scale-110 transition-transform duration-200">
                        {skill.icon}
                      </span>
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;