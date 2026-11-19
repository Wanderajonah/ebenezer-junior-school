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
 * Curriculum band: the intro scrolls normally, then the two word rows pin to
 * the viewport (full-screen) while the scroll slides them in opposite
 * directions so the traits can be read clearly.
 */
export default function CurriculumMarquee() {
  const wrapRef = useRef(null);
  const bandRef = useRef(null);
  const trackARef = useRef(null);
  const trackBRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const band = bandRef.current;
    if (!wrap || !band) return undefined;

    let raf = 0;
    const update = () => {
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight;
      const headerH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 0;

      if (rect.top <= headerH && rect.bottom >= vh) {
        band.style.position = 'fixed';
        band.style.top = `${headerH}px`;
        band.style.bottom = 'auto';
      } else if (rect.bottom < vh) {
        band.style.position = 'absolute';
        band.style.top = 'auto';
        band.style.bottom = '0px';
      } else {
        band.style.position = 'absolute';
        band.style.top = '0px';
        band.style.bottom = 'auto';
      }
      band.style.left = '0px';
      band.style.right = '0px';
      band.style.height = `${vh - headerH}px`;

      const pinRange = rect.height - vh + headerH;
      const raw = pinRange > 0 ? Math.min(1, Math.max(0, (headerH - rect.top) / pinRange)) : 0;
      // Hold briefly at the start so the first words ("Thinkers" / "Curious")
      // are seen before the rows begin to move.
      const HOLD = 0.06;
      const progress = raw <= HOLD ? 0 : (raw - HOLD) / (1 - HOLD);

      const trackA = trackARef.current;
      const trackB = trackBRef.current;
      if (trackA && trackB) {
        const copyB = trackB.scrollWidth / COPIES;
        const distance = vh * 0.4;
        // Start row 2 one full copy to the left so its first word is visible
        // at the start, then it slides right (opposite to row 1).
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
    <div className="curriculum-marquee-wrap" ref={wrapRef}>
      <div className="curriculum-marquee" ref={bandRef}>
        <div className="container curriculum-marquee__head">
          <div className="curriculum-marquee__intro reveal">
            <span className="eyebrow">Our Curriculum</span>
            <h2 className="curriculum-marquee__title">
              <span className="curriculum-marquee__title-light">Learning that</span>{' '}
              prepares children for life
            </h2>
            <Link className="btn btn--gold" href="/curriculum">
              Explore Our Curriculum <Icon name="arrow-right" />
            </Link>
          </div>
          <p className="curriculum-marquee__lead reveal d-1">
            A balanced, modern curriculum combining academic rigour with creativity, technology and character.
          </p>
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
    </div>
  );
}
