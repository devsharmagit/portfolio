'use client'

import React from 'react';
import {GitHubCalendar} from 'react-github-calendar';
import { motion } from 'framer-motion';

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

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const theme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  if (!mounted) {
    return (
      <div className={`w-full ${compact ? 'h-[120px]' : 'h-[160px]'} rounded-xl bg-zinc-900/50 animate-pulse ${className}`} />
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      <motion.div
        className="w-full overflow-hidden rounded-xl bg-transparent backdrop-blur-none border-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2 overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent hover:scrollbar-thumb-zinc-600">
          <div className="min-w-max">
            <GitHubCalendar
              username={username}
              colorScheme="dark"
              fontSize={12}
              blockSize={10}
              blockMargin={3}
              showWeekdayLabels={false}
              theme={theme}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GitHubContributions;
