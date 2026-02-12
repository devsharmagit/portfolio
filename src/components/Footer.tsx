import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="container max-w-4xl">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-sm text-white/60">Dev Sharma • Full Stack Developer</p>
          <div className="flex gap-2">
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
      </div>
    </footer>
  );
};

export default Footer;
