'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import Icon from '@/components/Icon';
import { SCHOOL_NAME, SCHOOL_TAGLINE } from '@/lib/site';

const SLIDES = [
  {
    titleLead: 'Every Child',
    titleAccent: 'Matters',
    text: [
      'A warm, child-centred school where every child is known and valued.',
      'Nursery to P7 in Nampunge,\u00A0Wakiso, with small, caring classes.',
      'Curiosity, character and confidence.',
    ],
    primary: { href: '/admissions', label: 'Apply Now', icon: 'send' },
    secondary: { href: '/about', label: 'Tour the School', icon: 'arrow-right' },
    image: '/assets/images/hero.jpg',
    alt: 'Happy Ebenezer Junior School pupils',
  },
  {
    titleLead: 'Learning Through',
    titleAccent: 'Play',
    text: [
      'Bright classrooms filled with music, art, play and hands-on discovery.',
      'Discovery-led lessons every day that make learning feel like play.',
      'Every learner eager to return.',
    ],
    image: '/assets/images/g-classroom.jpg',
    alt: 'Pupils learning in a bright classroom',
  },
  {
    titleLead: 'A Strong Start',
    titleAccent: 'For Every Learner',
    text: [
      'From first steps in nursery to confident, curious P7 graduates.',
      'We nurture character, curiosity and academic excellence.',
      'A strong start for life.',
    ],
    image: '/assets/images/african-kids-group.jpg',
    alt: 'Ebenezer Junior School learners together',
  },
];

const AUTOPLAY_MS = 6500;

export default function HeroSlider() {
  const count = SLIDES.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(null);

  const goNext = useCallback(() => setActive((current) => (current + 1) % count), [count]);
  const goPrev = useCallback(() => setActive((current) => (current - 1 + count) % count), [count]);

  // Autoplay unless paused, the tab is hidden, or the visitor prefers reduced motion.
  useEffect(() => {
    if (paused) return undefined;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined;
    const timer = window.setInterval(goNext, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [paused, goNext]);

  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  return (
    <section
      className="hero hero--slider"
      id="hero"
      aria-label={`Welcome to ${SCHOOL_NAME}`}
      role="region"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          goPrev();
        }
        if (event.key === 'ArrowRight') {
          event.preventDefault();
          goNext();
        }
      }}
      onTouchStart={(event) => { touchX.current = event.touches[0].clientX; }}
      onTouchEnd={(event) => {
        if (touchX.current == null) return;
        const delta = event.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(delta) > 45) (delta < 0 ? goNext : goPrev)();
      }}
    >
      <div className="hero-slides" aria-live="polite">
        {SLIDES.map((slide, i) => {
          const isActive = i === active;
          const Title = i === 0 ? 'h1' : 'h2';
          return (
            <div
              key={slide.image}
              className={`hero-slide${isActive ? ' is-active' : ''}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              aria-hidden={!isActive}
            >
              <div className="hero-media" aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={slide.image} alt="" loading={i === 0 ? 'eager' : 'lazy'} />
              </div>

              <div className="container hero-inner">
                <div className="hero-copy">
                  <Title className="hero-title">
                    {slide.titleLead} <strong className="accent">{slide.titleAccent}</strong>
                  </Title>
                  <p className="sub">
                    {slide.text.map((line) => (
                      <span className="hero-sub-line" key={line}>{line}</span>
                    ))}
                  </p>
                  {(slide.primary || slide.secondary) && (
                    <div className="hero-buttons">
                      {slide.primary && (
                        <Link className="btn btn--gold" href={slide.primary.href}>
                          <Icon name={slide.primary.icon} /> {slide.primary.label}
                        </Link>
                      )}
                      {slide.secondary && (
                        <Link className="btn btn--glass" href={slide.secondary.href}>
                          <Icon name={slide.secondary.icon} /> {slide.secondary.label}
                        </Link>
                      )}
                    </div>
                  )}
                </div>

                <div className="hero-dots-nav">
                  {SLIDES.map((dot, dotIndex) => (
                    <button
                      key={dot.image}
                      type="button"
                      className={`hero-dot${dotIndex === active ? ' is-active' : ''}`}
                      aria-label={`Go to slide ${dotIndex + 1}`}
                      aria-current={dotIndex === active ? 'true' : undefined}
                      onClick={() => setActive(dotIndex)}
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="hero-nav-layer">
        <button className="hero-nav hero-nav--prev" type="button" aria-label="Previous slide" onClick={goPrev}>
          <Icon name="chevron-left" />
        </button>
        <button className="hero-nav hero-nav--next" type="button" aria-label="Next slide" onClick={goNext}>
          <Icon name="chevron-right" />
        </button>
      </div>

      <span className="sr-only">{SCHOOL_TAGLINE}</span>
    </section>
  );
}
