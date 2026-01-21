import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'primary' | 'accent' | 'warm';
}

export const GlowCard = ({ children, className, glowColor = 'primary' }: GlowCardProps) => {
  const glowStyles = {
    primary: 'hover:shadow-[0_0_40px_-10px_hsl(25_95%_60%/0.4)]',
    accent: 'hover:shadow-[0_0_40px_-10px_hsl(15_90%_65%/0.4)]',
    warm: 'hover:shadow-[0_0_40px_-10px_hsl(35_100%_60%/0.4)]',
  };

  return (
    <div
      className={cn(
        'relative rounded-xl bg-card/60 backdrop-blur-xl border border-border/50',
        'transition-all duration-300 ease-out',
        'shadow-[0_8px_32px_-8px_hsl(0_0%_0%/0.4)]',
        glowStyles[glowColor],
        className
      )}
    >
      {children}
    </div>
  );
};
