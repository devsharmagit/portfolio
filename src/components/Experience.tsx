import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ExternalLink } from "lucide-react";
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
    websiteUrl: "https://growth99.com",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background effects */}
      <BackgroundBeams className="opacity-40" />
      <div className="absolute inset-0 overflow-hidden">
        <Meteors number={15} />
      </div>

      <div className="container px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <span className="mono text-primary text-xs sm:text-sm mb-3 md:mb-4 block">// work history</span>
          <h2 className="section-heading text-2xl sm:text-3xl md:text-4xl">Experience</h2>
        </motion.div>

        <div className=" mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TerminalCard title={`${exp.company} — ${exp.title}`}>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-4 sm:gap-0">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                    <h3 className="text-lg sm:text-xl font-semibold text-white">{exp.title}</h3>
                  </div>
                  {exp.websiteUrl && (
                    <a
                      href={exp.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 sm:p-2 rounded-lg hover:bg-[#3e3e3e] transition-colors self-end sm:self-auto"
                      aria-label="Visit website"
                    >
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-primary transition-colors" />
                    </a>
                  )}
                </div>
                
                <p className="text-primary font-medium mb-2 text-sm sm:text-base">{exp.company}</p>
                
                <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{exp.location}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 flex-shrink-0" />
                    <span className="whitespace-nowrap">{exp.period}</span>
                  </span>
                </div>

                <ul className="space-y-2 sm:space-y-2.5">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-gray-300 text-xs sm:text-sm flex items-start gap-2">
                      <span className="text-primary mono flex-shrink-0 mt-0.5">→</span>
                      <span className="flex-1">{point}</span>
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