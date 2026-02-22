'use client'

import React from 'react';
import {GitHubCalendar} from 'react-github-calendar';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

interface GitHubContributionsProps {
  username: string;
  compact?: boolean;
  className?: string;
}

const GitHubContributions: React.FC<GitHubContributionsProps> = ({ 
  username,
  compact = false,
  className = ""
}) => {
  const [mounted, setMounted] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const { resolvedTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const theme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  if (!mounted) {
    return (
      <div className={`w-full ${compact ? 'h-[120px]' : 'h-[160px]'} rounded-xl bg-zinc-100 dark:bg-zinc-900/50 animate-pulse ${className}`} />
    );
  }

  const colorScheme = resolvedTheme === 'dark' ? 'dark' : 'light';

  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      <motion.div
        className="w-full overflow-hidden rounded-xl bg-transparent backdrop-blur-none border-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="py-1 sm:py-2 overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700 scrollbar-track-transparent hover:scrollbar-thumb-zinc-400 dark:hover:scrollbar-thumb-zinc-600 -webkit-overflow-scrolling-touch">
          <div className="min-w-max flex justify-center">
            <GitHubCalendar
              username={username}
              colorScheme={colorScheme}
              fontSize={isMobile ? 10 : 12}
              blockSize={isMobile ? 8 : 10}
              blockMargin={isMobile ? 2 : 3}
              showWeekdayLabels={false}
              theme={theme}
              showColorLegend={false}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GitHubContributions;
