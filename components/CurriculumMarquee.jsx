'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Icon from '@/components/Icon';

const TRAITS_A = ['Thinkers', 'Caring', 'Balanced', 'Principled'];
const TRAITS_B = ['Curious', 'Confident', 'Creative', 'Kind'];
const COPIES = 3;

function row(traits) {
  return Array.from({ length: COPIES }).flatMap(() => traits);
}

/**
 * Curriculum band (120vh) with the intro and two trait rows. As the band
 * scrolls through the viewport, the rows slide in opposite directions.
 */
export default function CurriculumMarquee() {
  const bandRef = useRef(null);
  const trackARef = useRef(null);
  const trackBRef = useRef(null);

  useEffect(() => {
    const band = bandRef.current;
    if (!band) return undefined;

    let raf = 0;
    const update = () => {
      const rect = band.getBoundingClientRect();
      const vh = window.innerHeight;
      // Hold the words still while the band scrolls into view so the first
      // words ("Thinkers" / "Curious") are seen, then slide them as the band
      // itself passes through the viewport.
      const total = rect.height;
      const progress = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;

      const trackA = trackARef.current;
      const trackB = trackBRef.current;
      if (trackA && trackB) {
        const copyB = trackB.scrollWidth / COPIES;
        const distance = vh * 0.4;
        const offset = copyB > 0 ? copyB : vh * 4;
        trackA.style.transform = `translateX(${-progress * distance}px)`;
        trackB.style.transform = `translateX(${-offset + progress * distance}px)`;
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
    <div className="curriculum-marquee" ref={bandRef}>
      <div className="container curriculum-marquee__head">
        <div className="curriculum-marquee__intro reveal">
          <h2 className="curriculum-marquee__title">
            <span className="curriculum-marquee__title-strong">Learning</span>
            <span className="curriculum-marquee__title-light">for life</span>
          </h2>
          <Link className="btn curriculum-marquee__btn" href="/curriculum">
            Explore Our Curriculum
          </Link>
        </div>
        <div className="curriculum-marquee__copy reveal">
          <p>
            A balanced, modern curriculum combining academic rigour with creativity, technology and
            character. Every lesson is designed to build confidence, curiosity and a genuine love of
            learning.
          </p>
          <p>
            From nursery to P7, children build strong foundations through active, child-centred lessons,
            continuous assessment and caring teachers who know every child by name.
          </p>
        </div>
      </div>

      <div className="marquee marquee--first" aria-hidden="true">
        <div className="marquee__clip">
          <div className="marquee__track" ref={trackARef}>
            {row(TRAITS_A).map((word, i) => (
              <span
                key={`${word}-${i}`}
                className={`marquee__word ${i % 2 ? 'marquee__word--gold' : 'marquee__word--white'}`}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="marquee marquee--reverse" aria-hidden="true">
        <div className="marquee__clip">
          <div className="marquee__track" ref={trackBRef}>
            {row(TRAITS_B).map((word, i) => (
              <span
                key={`${word}-${i}`}
                className={`marquee__word ${i % 2 ? 'marquee__word--white' : 'marquee__word--gold'}`}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>

      <span className="sr-only">
        Our learners are thinkers, caring, balanced, principled, curious, confident, creative and kind.
      </span>
    </div>
  );
}
