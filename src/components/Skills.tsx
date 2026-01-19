import { motion } from "framer-motion";

const skillCategories = [
  {
    name: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C", "SQL"],
  },
  {
    name: "Frameworks",
    skills: ["React", "Next.js", "Node.js", "Express"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "Prisma"],
  },
  {
    name: "Tools",
    skills: ["Docker", "Git", "Firebase", "AWS"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="mono text-primary text-sm mb-4 block">// tech stack</span>
          <h2 className="section-heading">Skills</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="text-primary mono">{'{'}</span>
                {category.name}
                <span className="text-primary mono">{'}'}</span>
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                    className="px-3 py-1.5 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-all duration-300 text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid sm:grid-cols-3 gap-6"
        >
          {[
            { label: "Landing Pages Built", value: "250+" },
            { label: "Websites Analyzed", value: "1000+" },
            { label: "Lines Contributed (OSS)", value: "5000+" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 glass rounded-2xl">
              <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
