'use client'

import { ExternalLink, Github, Play } from "lucide-react";
import { memo, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { getTechIcon } from "@/lib/techIcons";

const projects = [
  {
    title: "Growth99 Scorecard",
    description:
      "Website analysis platform used internally by 50+ employees. Reduced report generation from minutes to seconds with real-time data visualization.",
    tech: ["React", "Express", "PostgreSQL", "TypeScript"],
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
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
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
  {
    title: "Invincio Services",
    description:
      "Landing page for a military teaching school featuring a modern, responsive UI with smooth animations and clean design.",
    tech: ["React", "TypeScript", "Vercel"],
    websiteUrl: "https://www.invincioservices.com/",
    video: "/videos/invincioservices.mp4",
    featured: false,
  },
];

const ProjectCard = memo(function ProjectCard({ project }: { project: typeof projects[0] }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTap = () => {
    if (!videoRef.current) return;
    const isPlaying = videoRef.current.dataset.playing === "true";

    if (isPlaying) {
      videoRef.current.pause();
      videoRef.current.dataset.playing = "false";
      return;
    }

    videoRef.current.currentTime = 0;
    void videoRef.current.play();
    videoRef.current.dataset.playing = "true";
  };

  return (
    <article className="group mono-card-hover overflow-hidden flex flex-col">
      {project.video && (
        <div
          className="relative overflow-hidden bg-zinc-100 dark:bg-zinc-900/50 aspect-video cursor-pointer border-b border-black/[0.06] dark:border-white/[0.06]"
          onClick={handleTap}
        >
          <video
            ref={videoRef}
            src={project.video}
            muted
            loop
            playsInline
            preload="metadata"
            className="peer h-full w-full object-cover"
            data-playing="false"
            onPause={(event) => {
              event.currentTarget.dataset.playing = "false";
            }}
            onPlay={(event) => {
              event.currentTarget.dataset.playing = "true";
            }}
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/20 dark:bg-black/30 peer-data-[playing=true]:opacity-0">
            <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Play className="h-4 w-4 sm:h-5 sm:w-5 text-white ml-0.5" fill="white" />
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 dark:from-black/40 to-transparent pointer-events-none" />
        </div>
      )}

      <div className="flex flex-col flex-1 p-4 sm:p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-100 font-display group-hover:text-zinc-950 dark:group-hover:text-white">
            {project.title}
          </h3>
          <div className="flex items-center gap-2 shrink-0 ml-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-200"
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
                className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-200"
                aria-label="Live demo"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <p className="text-[13px] sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech) => {
            const icon = getTechIcon(tech);

            return (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 rounded-md bg-black/[0.04] dark:bg-white/[0.04] px-2 py-0.5 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 border border-black/[0.06] dark:border-white/[0.04]"
              >
                {icon && <span className="h-3 w-3 shrink-0 [&>svg]:h-full [&>svg]:w-full">{icon}</span>}
                {tech}
              </span>
            );
          })}
        </div>
      </div>
    </article>
  );
});

const INITIAL_COUNT = 4;

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" className="scroll-mt-20 pb-16 sm:pb-20 md:pb-24">
      <div className="mono-shell">
        <div className="mb-10">
          <span className="section-label mb-3 block">Projects</span>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 font-display">
            Things I&apos;ve built
          </h2>
        </div>

        <div className="grid gap-8 sm:gap-10 md:grid-cols-2">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {projects.length > INITIAL_COUNT && (
          <div className="flex justify-center mt-10 sm:mt-12">
            <button
              onClick={() => setShowAll((current) => !current)}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-zinc-600 dark:text-zinc-400 bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.06] hover:bg-black/[0.07] dark:hover:bg-white/[0.07] hover:text-zinc-900 dark:hover:text-zinc-200"
            >
              {showAll ? "Show Less" : "View More"}
              <FaArrowRight className={`h-3 w-3 ${showAll ? "rotate-[-90deg]" : "rotate-90"}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
