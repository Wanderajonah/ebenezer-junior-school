'use client';

import { useEffect, useRef } from 'react';

export default function Counter({ target, suffix = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      el.textContent = String(target);
      return undefined;
    }

    let frame = 0;
    let started = false;

    const animate = () => {
      const start = performance.now();
      const duration = 1800;
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = String(Math.floor(eased * target));
        if (progress < 1) {
          frame = requestAnimationFrame(tick);
        } else {
          el.textContent = String(target);
        }
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            animate();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target]);

  return (
    <>
      <span className="counter" data-target={target} ref={ref}>0</span>
      <sup>{suffix}</sup>
    </>
  );
}
