'use client'

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export default function AnimatedBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const themeRef = useRef<string>('dark');

  useEffect(() => setMounted(true), []);

  const isDark = !mounted || resolvedTheme === 'dark';
  const glowColor = isDark ? 'bg-white' : 'bg-zinc-400';

  // Keep theme ref in sync for canvas draw loop
  useEffect(() => {
    themeRef.current = isDark ? 'dark' : 'light';
  }, [isDark]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let mouseX = -9999;
    let mouseY = -9999;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const count = Math.floor((canvas.width * canvas.height) / 18000);
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 3.2 + 1.8,
          opacity: Math.random() * 0.5 + 0.15,
        });
      }
    };

    const drawParticle = (p: Particle) => {
      const dark = themeRef.current === 'dark';
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2);
      if (dark) {
        grad.addColorStop(0, `rgba(255, 255, 255, ${p.opacity})`);
        grad.addColorStop(1, 'transparent');
      } else {
        grad.addColorStop(0, `rgba(0, 0, 0, ${p.opacity * 0.65})`);
        grad.addColorStop(1, 'transparent');
      }
      ctx.fillStyle = grad;
      ctx.fill();
    };

    const updateParticle = (p: Particle) => {
      p.x += p.vx;
      p.y += p.vy;

      // Mouse repulsion
      const dx = mouseX - p.x;
      const dy = mouseY - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 130) {
        const force = (130 - dist) / 130;
        p.vx -= (dx / dist) * force * 0.06;
        p.vy -= (dy / dist) * force * 0.06;
      }

      // Wrap edges
      if (p.x < -10) p.x = canvas.width + 10;
      if (p.x > canvas.width + 10) p.x = -10;
      if (p.y < -10) p.y = canvas.height + 10;
      if (p.y > canvas.height + 10) p.y = -10;

      // Damping
      p.vx *= 0.998;
      p.vy *= 0.998;

      // Minimum drift
      const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (speed < 0.1) {
        p.vx += (Math.random() - 0.5) * 0.05;
        p.vy += (Math.random() - 0.5) * 0.05;
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        updateParticle(p);
        drawParticle(p);
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-0"
        style={{ opacity: 0.7 }}
      />

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
        <div className={`h-full w-full rounded-full ${glowColor} blur-[120px]`} />
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
        <div className={`h-full w-full rounded-full ${glowColor} blur-[100px]`} />
      </motion.div>
    </>
  );
}
