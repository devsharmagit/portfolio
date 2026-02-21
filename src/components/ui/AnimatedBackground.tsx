'use client'

import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <>
      {/* Soft ambient glow - top left */}
      <motion.div
        className="pointer-events-none fixed -left-32 -top-32 -z-10 h-[500px] w-[500px] opacity-[0.07]"
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
        className="pointer-events-none fixed -bottom-32 -right-32 -z-10 h-[400px] w-[400px] opacity-[0.04]"
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

      {/* Subtle dot pattern */}
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.025]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>
    </>
  );
}
