"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { TerminalCard } from "@/components/ui/TerminalCard";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { Meteors } from "@/components/ui/Meteors";

const education = [
  {
    degree: "B.Tech in Computer Science",
    school: "IILM University",
    location: "Greater Noida, India",
    period: "2024 – 2028",
    current: true,
  },
  {
    degree: "Senior Secondary Education",
    school: "School of Excellence",
    location: "Delhi, India",
    period: "Completed 2023",
    current: false,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background effects */}
      <BackgroundBeams className="opacity-30" />
      <div className="absolute inset-0 overflow-hidden">
        <Meteors number={12} />
      </div>

      <div className="container px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <span className="mono text-primary text-xs sm:text-sm mb-3 md:mb-4 block">// academic background</span>
          <h2 className="section-heading text-2xl sm:text-3xl md:text-4xl">Education</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                    <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs mono">
                      Current
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-primary/10 flex-shrink-0">
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="pr-16 sm:pr-0"> {/* padding right to avoid overlap with 'Current' badge on mobile */}
                    <h3 className="text-base sm:text-lg font-semibold text-white leading-tight mb-1">{edu.degree}</h3>
                    <p className="text-primary text-sm sm:text-base">{edu.school}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 sm:w-3 sm:h-3 flex-shrink-0" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 sm:w-3 sm:h-3 flex-shrink-0" />
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
