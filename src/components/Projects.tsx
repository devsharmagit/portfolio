import { motion } from "framer-motion";
import { ExternalLink, Github, Zap } from "lucide-react";
import { TerminalCard } from "@/components/ui/TerminalCard";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { Meteors } from "@/components/ui/Meteors";

const projects = [
  {
    title: "Growth99 Scorecard Tool",
    description: "Large-scale website analysis platform used by 50+ internal employees. Reduced report generation time from 5 minutes to under 10 seconds.",
    tech: ["React", "Express", "PostgreSQL", "Firebase Auth", "Python", "TypeScript"],
    highlights: [
      "Google authentication using Firebase",
      "Stored historical reports for 1000+ websites",
      "Lighthouse API with manual SEO checks",
      "50% efficiency improvement",
    ],
    featured: true,
    websiteUrl: "https://scorecard.growth99.com/",
  },
  {
    title: "CollegeMate.in",
    description: "One-on-one mentor booking and e-commerce platform with role-based access control and concurrency-safe payments.",
    tech: ["React (TS)", "Node.js (TS)", "Express", "Prisma", "PostgreSQL"],
    highlights: [
      "Razorpay payment integration",
      "Google Meet & Calendar automation",
      "Race condition prevention",
    ],
    websiteUrl: "https://collegemate.in",
  },
  {
    title: "CMS for AI/ML Class",
    description: "Content Management System for distributing AI/ML notes to college students with restricted access to verified accounts.",
    tech: ["Next.js", "NextAuth", "Prisma", "PostgreSQL", "Cloudinary"],
    highlights: [
      "@iilm.edu account verification",
      "Secure file uploads with Cloudinary",
    ],
    githubUrl: "https://github.com/devsharmagit/cms-aiml",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div 
        className="absolute top-1/2 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] rounded-full opacity-30"
        style={{ background: 'var(--gradient-glow)' }}
      />
      
      {/* Background effects */}
      <BackgroundBeams className="opacity-30" />
      <div className="absolute inset-0 overflow-hidden">
        <Meteors number={20} />
      </div>

      <div className="container px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <span className="mono text-primary text-xs sm:text-sm mb-3 md:mb-4 block">// featured work</span>
          <h2 className="section-heading text-2xl sm:text-3xl md:text-4xl">Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              <TerminalCard title={project.title}>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-4 sm:gap-0">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-primary transition-colors leading-tight">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    {project.websiteUrl && (
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 sm:p-2 rounded-lg hover:bg-[#3e3e3e] transition-colors"
                        aria-label="Visit website"
                      >
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-primary transition-colors" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 sm:p-2 rounded-lg hover:bg-[#3e3e3e] transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-primary transition-colors" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">{project.description}</p>

                {/* Highlights */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start sm:items-center gap-2 text-xs sm:text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5 sm:mt-0" />
                      <span className="text-gray-400">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-full bg-[#3e3e3e] text-[10px] sm:text-xs mono text-gray-300 border border-transparent hover:border-primary/30 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </TerminalCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
