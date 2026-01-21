import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { TerminalCard } from "@/components/ui/TerminalCard";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { Meteors } from "@/components/ui/Meteors";

const education = [
  {
    degree: "B.Tech in Computer Science",
    school: "IILM University",
    location: "Greater Noida, Delhi",
    period: "2024 – 2028",
    current: true,
  },
  {
    degree: "Senior Secondary Education",
    school: "School of Excellence",
    location: "Rohini, Delhi",
    period: "Completed 2023",
    current: false,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <BackgroundBeams className="opacity-30" />
      <div className="absolute inset-0 overflow-hidden">
        <Meteors number={12} />
      </div>

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="mono text-primary text-sm mb-4 block">// academic background</span>
          <h2 className="section-heading">Education</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <TerminalCard title={edu.school}>
                {edu.current && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs mono">
                      Current
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                    <p className="text-primary">{edu.school}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {edu.period}
                  </span>
                </div>
              </TerminalCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
