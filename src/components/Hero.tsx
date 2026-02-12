import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/dev_sharma_resume.pdf";
    link.download = "Dev_Sharma_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="px-6 py-20 md:py-28">
      <div className="container max-w-4xl">
        <p className="section-eyebrow">FULL STACK DEVELOPER</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Dev Sharma
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
          I build reliable web applications across frontend, backend, and databases.
          My focus is clean architecture, performance, and maintainable code.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black"
          >
            View Projects
            <ArrowRight className="h-4 w-4" />
          </a>
          <button
            onClick={handleResumeDownload}
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 text-sm text-white/90"
          >
            <Download className="h-4 w-4" />
            Resume
          </button>
        </div>

        <div className="mt-7 flex items-center gap-3 text-white/70">
          <a href="mailto:devsharmasoe@gmail.com" className="surface-icon" aria-label="Email">
            <Mail className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/in/devsharmaldk/" target="_blank" rel="noopener noreferrer" className="surface-icon" aria-label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="https://github.com/devsharmagit" target="_blank" rel="noopener noreferrer" className="surface-icon" aria-label="GitHub">
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
