import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur">
      <div className="container flex items-center justify-between px-6 py-4">
        <a href="#" className="text-sm font-semibold tracking-[0.16em] text-white/80">
          DEV SHARMA
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-white/65 hover:text-white">
              {link.label}
            </a>
          ))}
          <a href="mailto:devsharmasoe@gmail.com" className="text-sm text-white">
            Contact
          </a>
        </nav>

        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-white/75">
                {link.label}
              </a>
            ))}
            <a href="mailto:devsharmasoe@gmail.com" className="text-white" onClick={() => setOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
