import { ReactNode, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

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

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'relative rounded-xl overflow-hidden group',
        'bg-gradient-to-br from-[#1a1a1a] via-[#1e1e1e] to-[#1a1a1a]',
        'backdrop-blur-xl',
        'border border-[#2a2a2a]',
        'transition-all duration-500 ease-out',
        'shadow-[0_8px_32px_-8px_hsl(0_0%_0%/0.8)]',
        className
      )}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      {/* Animated gradient border */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-500 rounded-xl"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,138,76,0.15), transparent 40%)`,
        }}
      />
      
      {/* Glowing border effect */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(90deg, #ff8a4c, #ff6b35, #ff8a4c)',
          backgroundSize: '200% 100%',
          padding: '1px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '200% 0%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Spotlight effect */}
      <div
        className="pointer-events-none absolute opacity-0 group-hover:opacity-100 transition duration-500 rounded-xl"
        style={{
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(255,138,76,0.08), transparent 60%)`,
          inset: 0,
        }}
      />

      {/* Inner glow */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* macOS Terminal Header */}
      <div className="relative bg-gradient-to-r from-[#2a2a2a] via-[#2d2d2d] to-[#2a2a2a] border-b border-[#3a3a3a] px-4 py-2.5 flex items-center gap-2">
        {/* Traffic light buttons with glow */}
        <div className="flex items-center gap-2">
          <motion.div 
            className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_8px_rgba(255,95,86,0.6)] cursor-pointer"
            whileHover={{ scale: 1.2, boxShadow: '0 0 12px rgba(255,95,86,0.8)' }}
            transition={{ duration: 0.2 }}
          />
          <motion.div 
            className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_8px_rgba(255,189,46,0.6)] cursor-pointer"
            whileHover={{ scale: 1.2, boxShadow: '0 0 12px rgba(255,189,46,0.8)' }}
            transition={{ duration: 0.2 }}
          />
          <motion.div 
            className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_8px_rgba(39,201,63,0.6)] cursor-pointer"
            whileHover={{ scale: 1.2, boxShadow: '0 0 12px rgba(39,201,63,0.8)' }}
            transition={{ duration: 0.2 }}
          />
        </div>
        {/* Terminal title with gradient */}
        {title && (
          <span className="text-xs bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 bg-clip-text text-transparent ml-2 font-medium">
            {title}
          </span>
        )}
        
        {/* Animated dots */}
        <div className="ml-auto flex items-center gap-1">
          <motion.div
            className="w-1 h-1 rounded-full bg-primary/60"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
          />
          <motion.div
            className="w-1 h-1 rounded-full bg-primary/60"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          />
          <motion.div
            className="w-1 h-1 rounded-full bg-primary/60"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          />
        </div>
      </div>
      
      {/* Terminal content */}
      <div className="relative p-6 bg-gradient-to-br from-[#1e1e1e]/50 via-[#1e1e1e] to-[#1e1e1e]/50">
        {/* Scan line effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(255,138,76,0.03) 50%, transparent 100%)',
          }}
          animate={{
            y: ['-100%', '200%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        {children}
      </div>
    </motion.div>
  );
};
