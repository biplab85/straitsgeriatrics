"use client";

import { useEffect, useRef, useCallback } from "react";

/**
 * Premium magnetic glow cursor with trailing particles.
 * - Glowing orb follows mouse with smooth physics
 * - Particle trail fades behind the cursor
 * - Morphs & magnetizes toward interactive elements
 * - Hidden on touch devices / mobile
 */
export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  const setup = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // State
    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    let mx = w / 2, my = h / 2;        // actual mouse
    let cx = mx, cy = my;               // cursor position (lerped)
    let isHovering = false;
    let hoverScale = 1;
    let targetScale = 1;

    // Trail particles
    const TRAIL_LENGTH = 18;
    const trail: { x: number; y: number; alpha: number }[] = [];
    for (let i = 0; i < TRAIL_LENGTH; i++) {
      trail.push({ x: mx, y: my, alpha: 0 });
    }

    // Mouse handler
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    // Interactive element detection
    const onEnter = () => { isHovering = true; targetScale = 2.2; };
    const onLeave = () => { isHovering = false; targetScale = 1; };

    const bindInteractives = () => {
      const els = document.querySelectorAll("a, button, [role='button'], input, textarea, select, .cursor-hover");
      els.forEach(el => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
      return els;
    };

    window.addEventListener("mousemove", onMove);
    const interactives = bindInteractives();

    // Resize handler
    const onResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    window.addEventListener("resize", onResize);

    // Animation loop
    const BASE_SIZE = 8;
    const GLOW_RADIUS = 60;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Smooth follow with easing
      const ease = isHovering ? 0.18 : 0.12;
      cx += (mx - cx) * ease;
      cy += (my - cy) * ease;

      // Scale easing
      hoverScale += (targetScale - hoverScale) * 0.1;

      // Update trail
      for (let i = trail.length - 1; i > 0; i--) {
        trail[i].x += (trail[i - 1].x - trail[i].x) * 0.35;
        trail[i].y += (trail[i - 1].y - trail[i].y) * 0.35;
        trail[i].alpha = 1 - (i / trail.length);
      }
      trail[0].x = cx;
      trail[0].y = cy;
      trail[0].alpha = 1;

      // Draw particle trail
      for (let i = trail.length - 1; i > 0; i--) {
        const p = trail[i];
        const size = (1 - i / trail.length) * 3 * hoverScale;
        const alpha = p.alpha * 0.35;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(60, 168, 240, ${alpha})`;
        ctx.fill();
      }

      // Draw outer glow
      const glowSize = GLOW_RADIUS * hoverScale;
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowSize);
      gradient.addColorStop(0, `rgba(60, 168, 240, ${isHovering ? 0.12 : 0.07})`);
      gradient.addColorStop(0.4, `rgba(60, 168, 240, ${isHovering ? 0.06 : 0.03})`);
      gradient.addColorStop(1, "rgba(60, 168, 240, 0)");
      ctx.beginPath();
      ctx.arc(cx, cy, glowSize, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw inner ring
      const ringSize = 16 * hoverScale;
      ctx.beginPath();
      ctx.arc(cx, cy, ringSize, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(60, 168, 240, ${isHovering ? 0.5 : 0.2})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Draw core dot
      const dotSize = BASE_SIZE * (isHovering ? 0.4 : 0.5);
      const dotGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, dotSize);
      dotGrad.addColorStop(0, "rgba(60, 168, 240, 0.9)");
      dotGrad.addColorStop(1, "rgba(60, 168, 240, 0.3)");
      ctx.beginPath();
      ctx.arc(cx, cy, dotSize, 0, Math.PI * 2);
      ctx.fillStyle = dotGrad;
      ctx.fill();

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    // Cleanup
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      interactives.forEach(el => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  useEffect(() => {
    // Only on desktop
    if (window.innerWidth < 1024) return;
    const cleanup = setup();
    return cleanup;
  }, [setup]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block"
      aria-hidden="true"
    />
  );
}
