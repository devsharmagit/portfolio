import { ReactNode, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TerminalCardProps {
  children: ReactNode;
  className?: string;
  title?: string;
}

export const TerminalCard = ({ children, className, title }: TerminalCardProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#111] via-[#121212] to-[#0d0d0d] shadow-[0_8px_30px_-10px_hsl(0_0%_0%/0.85)] transition-all duration-500 ease-out",
        className
      )}
      whileHover={{ scale: 1.008 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-xl transition duration-500"
        style={{
          opacity,
          background: `radial-gradient(640px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.12), transparent 45%)`,
        }}
      />

      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: "linear-gradient(90deg, rgba(255,255,255,0.4), rgba(255,255,255,0.12), rgba(255,255,255,0.4))",
          backgroundSize: "200% 100%",
          padding: "1px",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
        animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(420px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.07), transparent 65%)`,
        }}
      />

      <div className="relative flex items-center gap-2 border-b border-white/10 bg-gradient-to-r from-[#1b1b1b] via-[#202020] to-[#1b1b1b] px-3 py-2.5 sm:px-4">
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          {["#d0d0d0", "#9c9c9c", "#6f6f6f"].map((color, index) => (
            <motion.div
              key={color}
              className="h-2.5 w-2.5 cursor-pointer rounded-full sm:h-3 sm:w-3"
              style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}55` }}
              whileHover={{ scale: 1.15, boxShadow: `0 0 12px ${color}88` }}
              transition={{ duration: 0.2, delay: index * 0.03 }}
            />
          ))}
        </div>

        {title && (
          <span className="ml-1 flex-1 truncate bg-gradient-to-r from-gray-300 via-gray-100 to-gray-400 bg-clip-text text-[10px] font-medium text-transparent sm:ml-2 sm:text-xs">
            {title}
          </span>
        )}

        <div className="ml-auto flex shrink-0 items-center gap-1">
          {[0, 0.3, 0.6].map((delay) => (
            <motion.div
              key={delay}
              className="h-1 w-1 rounded-full bg-white/65"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay }}
            />
          ))}
        </div>
      </div>

      <div className="relative bg-gradient-to-br from-[#151515]/70 via-[#121212] to-[#0f0f0f]/70 p-4 sm:p-6">
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%)",
          }}
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        {children}
      </div>
    </motion.div>
  );
};
