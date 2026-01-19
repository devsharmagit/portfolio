import { motion } from "framer-motion";
import { ExternalLink, Github, Zap } from "lucide-react";

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
    websiteUrl: "https://plus.portal.growth99.com/service/Landingpages",
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
    githubUrl: "https://github.com",
  },
  {
    title: "Job Board Platform (OSS)",
    description: "Open source contribution with 5k+ lines of production-ready code including comprehensive user profile features.",
    tech: ["Next.js", "TypeScript"],
    highlights: [
      "5,000+ lines contributed",
      "User profile features",
    ],
    githubUrl: "https://github.com",
    isOSS: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      {/* Background glow */}
      <div 
        className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full opacity-30"
        style={{ background: 'var(--gradient-glow)' }}
      />

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="mono text-primary text-sm mb-4 block">// featured work</span>
          <h2 className="section-heading">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.isOSS && (
                      <span className="text-xs mono text-primary">Open Source Contribution</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-secondary transition-colors"
                      aria-label="Visit website"
                    >
                      <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-secondary transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{project.description}</p>

              {/* Highlights */}
              <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-secondary text-xs mono text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
