import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="mono text-primary">{'<'}</span>
            <span className="font-semibold">Dev Sharma</span>
            <span className="mono text-primary">{'/>'}</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:devsharmasoe@gmail.com"
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/devsharma"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com/devsharma"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>

          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>using React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
