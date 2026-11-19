'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Icon from '@/components/Icon';

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export default function Testimonials({ items }) {
  const count = items.length;
  const slides = [...items, ...items];

  const [index, setIndex] = useState(0);
  const [snapping, setSnapping] = useState(false);
  const [paused, setPaused] = useState(false);

  const trackRef = useRef(null);
  const viewportRef = useRef(null);
  const slideRefs = useRef([]);
  const touchX = useRef(null);

  const position = useCallback((nextIndex) => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    const active = slideRefs.current[nextIndex];
    if (!track || !viewport || !active) return;

    const offset = active.offsetLeft + track.offsetLeft - (viewport.clientWidth - active.offsetWidth) / 2;
    track.style.transform = `translateX(${-offset}px)`;
  }, []);

  const goNext = useCallback(() => setIndex((current) => (current + 1) % (count * 2)), [count]);
  const goPrev = useCallback(
    () => setIndex((current) => (current - 1 + count * 2) % (count * 2)),
    [count],
  );

  // Position the active slide in the centre.
  useEffect(() => {
    position(index);

    if (index < count) return undefined;

    // The index has landed on a cloned slide: silently jump to its twin.
    const timer = window.setTimeout(() => {
      setSnapping(true);
      setIndex(index - count);
    }, 650);
    return () => window.clearTimeout(timer);
  }, [index, count, position]);

  // Re-enable the transition after the snap-back frame.
  useEffect(() => {
    if (!snapping) return undefined;
    const frame = requestAnimationFrame(() => setSnapping(false));
    return () => cancelAnimationFrame(frame);
  }, [snapping]);

  useEffect(() => {
    const onResize = () => position(index);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [index, position]);

  // Autoplay, unless paused or the visitor prefers reduced motion.
  useEffect(() => {
    if (paused) return undefined;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined;
    const timer = window.setInterval(goNext, 5000);
    return () => window.clearInterval(timer);
  }, [paused, goNext]);

  return (
    <div
      className="t-carousel reveal"
      data-tcarousel=""
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Parent testimonials carousel"
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
    >
      <button className="t-arrow t-arrow--prev" type="button" data-tprev="" aria-label="Previous testimonial" onClick={goPrev}>
        <Icon name="chevron-left" />
      </button>

      <div className="t-viewport" data-tviewport="" ref={viewportRef}>
        <div className={`t-track${snapping ? ' is-snapping' : ''}`} data-ttrack="" ref={trackRef}>
          {slides.map((testimonial, slideIndex) => (
            <div
              className={`t-slide${slideIndex === index ? ' is-active' : ''}`}
              data-tslide=""
              key={`${testimonial.name}-${slideIndex}`}
              aria-label={`${testimonial.name}'s testimonial`}
              aria-hidden={slideIndex !== index}
              ref={(element) => { slideRefs.current[slideIndex] = element; }}
            >
              <article className="t-card">
                <span className="t-avatar" aria-hidden="true">{initials(testimonial.name)}</span>
                <div className="t-stars">
                  {Array.from({ length: 5 }, (_, star) => <Icon name="star" key={star} />)}
                </div>
                <blockquote className="t-text">&ldquo;{testimonial.text}&rdquo;</blockquote>
                <footer className="t-meta">
                  <p className="t-author">{testimonial.name}</p>
                  <p className="t-role">{testimonial.role}</p>
                </footer>
                <span className="t-mark" aria-hidden="true"><Icon name="quote" /></span>
              </article>
            </div>
          ))}
        </div>
      </div>

      <button className="t-arrow t-arrow--next" type="button" data-tnext="" aria-label="Next testimonial" onClick={goNext}>
        <Icon name="chevron-right" />
      </button>
    </div>
  );
}
