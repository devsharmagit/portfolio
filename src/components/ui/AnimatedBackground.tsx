'use client'

import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <>
      {/* Soft ambient glow - top left */}
      <motion.div
        className="pointer-events-none fixed -left-32 -top-32 z-0 h-[500px] w-[500px] opacity-[0.07]"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.07, 0.05, 0.07],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="h-full w-full rounded-full bg-white blur-[120px]" />
      </motion.div>

      {/* Soft ambient glow - bottom right */}
      <motion.div
        className="pointer-events-none fixed -bottom-32 -right-32 z-0 h-[400px] w-[400px] opacity-[0.04]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.04, 0.06, 0.04],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      >
        <div className="h-full w-full rounded-full bg-white blur-[100px]" />
      </motion.div>

      {/* Grid pattern */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }} />
      </div>

      {/* Fade edges so grid doesn't look clipped */}
      <div className="pointer-events-none fixed inset-0 z-0" style={{
        background: 'radial-gradient(ellipse at 50% 50%, transparent 50%, #090909 85%)'
      }} />
    </>
  );
}
