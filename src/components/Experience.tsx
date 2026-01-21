import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { TerminalCard } from "@/components/ui/TerminalCard";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { Meteors } from "@/components/ui/Meteors";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Growth99.com",
    location: "Utah, USA",
    period: "Jul 2023 – Aug 2024",
    points: [
      "Developed 250+ high-conversion landing pages for healthcare clients using HTML, CSS, JavaScript, and Bootstrap",
      "Designed reusable page templates that reduced development effort by 50% and eliminated a month-long delivery backlog within one week",
      "Built KPI dashboards by integrating REST APIs into a Next.js frontend to track page views, button clicks, and engagement metrics for SmileVirtual.com",
      "Improved media selection and onboarding flows, reducing user drop-offs by 50% and increasing user retention by 30%",
      "Onboarded and mentored junior developers on UI/UX best practices and frontend performance optimization",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <BackgroundBeams className="opacity-40" />
      <div className="absolute inset-0 overflow-hidden">
        <Meteors number={15} />
      </div>

      <div className="container px-6 relative z-10">
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

        <div className="max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TerminalCard title={`${exp.company} — ${exp.title}`}>
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-4 h-4 text-primary" />
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                </div>
                
                <p className="text-primary font-medium mb-2">{exp.company}</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
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
                    <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                      <span className="text-primary mono">→</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </TerminalCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
