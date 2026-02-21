'use client';

import React from 'react';

interface NeumorphButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function NeumorphButton({ children, className = '', onClick }: NeumorphButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative overflow-hidden
        bg-zinc-100 dark:bg-zinc-900
        shadow-[2px_2px_5px_rgba(0,0,0,0.1),-2px_-2px_5px_rgba(255,255,255,0.05)]
        dark:shadow-[2px_2px_5px_rgba(0,0,0,0.3),-2px_-2px_5px_rgba(255,255,255,0.03)]
        hover:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.05)]
        dark:hover:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.03)]
        transition-all duration-300
        ${className}
      `}
      type="button"
    >
      {children}
    </button>
  );
}
