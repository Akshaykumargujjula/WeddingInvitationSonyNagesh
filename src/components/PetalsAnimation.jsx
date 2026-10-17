import React, { useEffect, useRef, useState } from 'react';

export const PetalsAnimation = ({ enabled = true }) => {
  const canvasRef = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handler = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (!enabled || reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Rose & Marigold Petal & Sparkle Particle definitions
    const petalColors = [
      'rgba(197, 43, 67, 0.65)',    // Deep Rose Maroon
      'rgba(227, 85, 107, 0.60)',   // Soft Rose Pink
      'rgba(235, 168, 55, 0.70)',   // Auspicious Marigold Orange
      'rgba(244, 201, 82, 0.65)',   // Marigold Yellow
      'rgba(212, 175, 55, 0.55)',   // Champagne Gold Sparkle
    ];

    const particleCount = window.innerWidth < 640 ? 22 : 36;
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height - height,
      size: Math.random() * 8 + 6,
      speedY: Math.random() * 1.0 + 0.8,
      speedX: Math.random() * 0.8 - 0.4,
      rotation: Math.random() * 360,
      rotSpeed: Math.random() * 1.5 - 0.75,
      swayFreq: Math.random() * 0.02 + 0.01,
      swayAmp: Math.random() * 20 + 10,
      swayOffset: Math.random() * Math.PI * 2,
      color: petalColors[Math.floor(Math.random() * petalColors.length)],
      isSparkle: Math.random() > 0.75
    }));

    let isDocumentVisible = true;
    const handleVisibility = () => {
      isDocumentVisible = document.visibilityState === 'visible';
    };
    document.addEventListener('visibilitychange', handleVisibility);

    let time = 0;
    const render = () => {
      if (isDocumentVisible) {
        ctx.clearRect(0, 0, width, height);
        time += 1;

        particles.forEach((p) => {
          p.y += p.speedY;
          p.rotation += p.rotSpeed;
          const sway = Math.sin(time * p.swayFreq + p.swayOffset) * 0.8;
          p.x += p.speedX + sway;

          // Recycle particle at top
          if (p.y > height + 20) {
            p.y = -20;
            p.x = Math.random() * width;
          }
          if (p.x > width + 20) p.x = -20;
          if (p.x < -20) p.x = width + 20;

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);

          if (p.isSparkle) {
            // Little gold sparkle diamond
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.moveTo(0, -p.size * 0.5);
            ctx.lineTo(p.size * 0.4, 0);
            ctx.lineTo(0, p.size * 0.5);
            ctx.lineTo(-p.size * 0.4, 0);
            ctx.closePath();
            ctx.fill();
          } else {
            // Realistic floral petal curve
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.bezierCurveTo(p.size * 0.6, -p.size * 0.8, p.size * 0.8, p.size * 0.5, 0, p.size);
            ctx.bezierCurveTo(-p.size * 0.8, p.size * 0.5, -p.size * 0.6, -p.size * 0.8, 0, 0);
            ctx.closePath();
            ctx.fill();
          }

          ctx.restore();
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [enabled, reducedMotion]);

  if (!enabled || reducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 5,
        width: '100%',
        height: '100%'
      }}
      aria-hidden="true"
    />
  );
};
