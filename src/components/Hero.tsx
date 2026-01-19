import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full animate-glow-pulse"
          style={{ background: 'var(--gradient-glow)' }}
        />
      </div>

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          {/* Terminal-style intro */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="mono text-sm text-muted-foreground">Available for opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            <span className="text-foreground">Dev</span>
            <span className="text-gradient"> Sharma</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            <span className="mono text-primary">{'<'}</span>
            Full Stack Developer
            <span className="mono text-primary">{' />'}</span>
            <br />
            <span className="text-lg">React • Node.js • TypeScript • PostgreSQL</span>
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <a
              href="mailto:devsharmasoe@gmail.com"
              className="p-3 rounded-xl glass hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="tel:9718560039"
              className="p-3 rounded-xl glass hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
              aria-label="Phone"
            >
              <Phone className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/devsharma"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com/devsharma"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 glow-effect"
            >
              View Projects
            </a>
            <a
              href="#experience"
              className="px-8 py-3 rounded-xl glass hover:bg-secondary transition-all duration-300"
            >
              Experience
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#experience" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs mono">scroll</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
