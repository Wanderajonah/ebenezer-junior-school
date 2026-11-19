'use client';

import { useEffect, useRef } from 'react';

/**
 * Pinned statement section. The inner panel is pinned to the viewport while the
 * tall wrapper scrolls past; during that range "Being part of something big"
 * keeps zooming in until it disappears, while "Starts with something small"
 * zooms slowly and stays.
 */
export default function StatementSection() {
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const title = titleRef.current;
    const sub = subRef.current;
    if (!section || !sticky || !title) return undefined;

    let raf = 0;
    const update = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;

      // Pin the panel to the viewport while the wrapper is in range.
      if (rect.top <= 0 && rect.bottom >= vh) {
        sticky.style.position = 'fixed';
        sticky.style.top = '0px';
        sticky.style.bottom = 'auto';
      } else if (rect.bottom < vh) {
        sticky.style.position = 'absolute';
        sticky.style.top = 'auto';
        sticky.style.bottom = '0px';
      } else {
        sticky.style.position = 'absolute';
        sticky.style.top = '0px';
        sticky.style.bottom = 'auto';
      }
      sticky.style.left = '0px';
      sticky.style.right = '0px';
      sticky.style.height = `${vh}px`;

      const scrollable = rect.height - vh;
      const progress = scrollable > 0 ? Math.min(1, Math.max(0, -rect.top / scrollable)) : 0;

      const bigScale = 1 + progress * 8;
      const bigOpacity = progress < 0.65 ? 1 : Math.max(0, 1 - (progress - 0.65) / 0.35);
      title.style.transform = `scale(${bigScale.toFixed(3)})`;
      title.style.opacity = bigOpacity.toFixed(3);

      if (sub) {
        const subScale = 1 + progress * 1.4;
        sub.style.transform = `translateY(-50%) scale(${subScale.toFixed(3)})`;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      className="statement-section"
      id="facilities"
      aria-label="Being part of something big"
      ref={sectionRef}
    >
      <div className="statement-section__sticky" ref={stickyRef}>
        <div className="statement-section__bg" aria-hidden="true" />
        <div className="statement-section__inner">
          <div className="statement-title">
            <h2 ref={titleRef}>
              <span className="statement-title__line statement-title__line--first">Being part of</span>
              <span className="statement-title__line">something big</span>
            </h2>
            <p className="statement-title__sub" ref={subRef}>Starts with something small</p>
          </div>
        </div>
      </div>
    </section>
  );
}
