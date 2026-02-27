'use client'

import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
};

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let rafId = 0;
    let running = true;
    let particles: Particle[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = window.innerWidth;
      const h = window.innerHeight;

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = 28000;
      const count = Math.min(70, Math.max(18, Math.floor((w * h) / density)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        size: Math.random() * 1.8 + 0.7,
        alpha: Math.random() * 0.25 + 0.08,
      }));
    };

    const draw = () => {
      if (!running) return;
      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.clearRect(0, 0, w, h);

      const dark = resolvedTheme === 'dark';
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -6) p.x = w + 6;
        if (p.x > w + 6) p.x = -6;
        if (p.y < -6) p.y = h + 6;
        if (p.y > h + 6) p.y = -6;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        const a = dark ? p.alpha : p.alpha * 0.7;
        ctx.fillStyle = dark ? `rgba(255,255,255,${a})` : `rgba(20,20,20,${a})`;
        ctx.fill();
      }

      rafId = requestAnimationFrame(draw);
    };

    const onVisibility = () => {
      running = !document.hidden;
      if (running) {
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(draw);
      }
    };

    resize();
    rafId = requestAnimationFrame(draw);

    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [resolvedTheme]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden="true"
      />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top_left,rgba(24,24,27,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(24,24,27,0.06),transparent_45%)] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.08),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.06),transparent_40%)]" />
      <div className="pointer-events-none fixed -left-40 -top-40 z-0 h-[420px] w-[420px] rounded-full bg-black/[0.04] blur-[110px] dark:bg-white/[0.05]" />
      <div className="pointer-events-none fixed -bottom-40 -right-40 z-0 h-[360px] w-[360px] rounded-full bg-black/[0.03] blur-[95px] dark:bg-white/[0.04]" />
    </>
  );
}
