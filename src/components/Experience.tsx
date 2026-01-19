import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "React Developer",
    company: "SmileVirtual.com (Growth99 Product)",
    location: "Utah, USA",
    period: "Jul 2023 – Aug 2024",
    points: [
      "Maintained and enhanced the frontend of a production healthcare platform",
      "Built KPI dashboards and analytics using React with backend API integrations",
      "Improved UI/UX, performance, and overall application stability",
    ],
  },
  {
    title: "Landing Page Developer",
    company: "Growth99.com",
    location: "Utah, USA",
    period: "Jul 2023 – Aug 2024",
    points: [
      "Developed 250+ high-conversion landing pages for clients across multiple industries",
      "Created reusable landing page templates used internally by the company",
      "Trained new team members on HTML, CSS, Bootstrap, and best practices",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="mono text-primary text-sm mb-4 block">// work history</span>
          <h2 className="section-heading">Experience</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="w-4 h-4 text-primary" />
                <h3 className="text-xl font-semibold">{exp.title}</h3>
              </div>
              
              <p className="text-primary font-medium mb-2">{exp.company}</p>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {exp.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="text-primary mono">→</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
