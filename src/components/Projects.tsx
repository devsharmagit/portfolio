import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Growth99 Scorecard Tool",
    summary: "Internal analysis platform that reduced report generation from 5 minutes to under 10 seconds.",
    tech: ["React", "Express", "PostgreSQL", "TypeScript"],
    websiteUrl: "https://scorecard.growth99.com/",
  },
  {
    title: "CollegeMate.in",
    summary: "Mentor booking and e-commerce platform with secure payment workflows.",
    tech: ["React", "Node.js", "Express", "Prisma", "PostgreSQL"],
    websiteUrl: "https://collegemate.in",
  },
  {
    title: "CMS for AI/ML Class",
    summary: "Course CMS with restricted student access and secure media uploads.",
    tech: ["Next.js", "NextAuth", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/devsharmagit/cms-aiml",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-16 md:py-20">
      <div className="container max-w-4xl">
        <p className="section-eyebrow">PROJECTS</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Selected Work</h2>

        <div className="mt-6 space-y-4">
          {projects.map((project) => (
            <article key={project.title} className="surface-card p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm text-white/70 md:text-base">{project.summary}</p>
                </div>
                <div className="flex gap-2">
                  {project.websiteUrl && (
                    <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="surface-icon" aria-label="Live">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="surface-icon" aria-label="GitHub">
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/65">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
