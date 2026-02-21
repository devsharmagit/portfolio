'use client'

import { ExternalLink, Github, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    title: "Growth99 Scorecard",
    description:
      "Website analysis platform used internally by 50+ employees. Reduced report generation from minutes to seconds with real-time data visualization.",
    tech: ["React", "Express", "PostgreSQL", "Firebase", "TypeScript"],
    websiteUrl: "https://scorecard.growth99.com/",
    video: "/videos/scorecard.mp4",
    featured: true,
  },
  {
    title: "LeetGrind",
    description:
      "Team-based LeetCode progress tracker with daily snapshots, weighted leaderboard logic, and OAuth authentication.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    websiteUrl: "https://leetgrind.vercel.app",
    githubUrl: "https://github.com/devsharmagit/leetgrind",
    video: "/videos/leetrind.mp4",
    featured: true,
  },
  {
    title: "Bolt",
    description:
      "AI web app builder that generates full-stack projects from prompts and runs live previews in-browser using WebContainer API.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Gemini AI"],
    websiteUrl: "https://bolt-tau-six.vercel.app/chat",
    githubUrl: "https://github.com/devsharmagit/bolt",
    video: "/videos/bolt.mp4",
    featured: true,
  },
  {
    title: "CollegeMate.in",
    description:
      "Mentor booking and commerce platform with role-based access and concurrency-safe payment workflows.",
    tech: ["React", "Node.js", "Express", "Prisma", "PostgreSQL"],
    websiteUrl: "https://collegemate.in",
    video: "/videos/collegemate.mp4",
    featured: false,
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video Preview */}
      {project.video && (
        <div className="relative mb-4 overflow-hidden rounded-2xl border border-white/[0.06] bg-zinc-900/50 aspect-video cursor-pointer">
          <video
            ref={videoRef}
            src={project.video}
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.02]"
          />
          
          {/* Play indicator overlay */}
          <div className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-all duration-500 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}>
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Play className="h-5 w-5 text-white ml-0.5" fill="white" />
            </div>
          </div>

          {/* Subtle gradient overlay at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </div>
      )}

      {/* Content */}
      <div className="px-1">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-zinc-100 font-display group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center gap-2 shrink-0 ml-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 transition-colors hover:text-zinc-200"
                aria-label="Source code"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 transition-colors hover:text-zinc-200"
                aria-label="Live demo"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm text-zinc-400 leading-relaxed mb-3">{project.description}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-white/[0.04] px-2 py-0.5 text-[11px] font-medium text-zinc-400 border border-white/[0.04]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="pb-24">
      <div className="mono-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="section-label mb-3 block">Projects</span>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 font-display">
            Things I've built
          </h2>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
