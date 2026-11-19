'use client';

import { useEffect } from 'react';
import Icon from '@/components/Icon';

/**
 * Global progressive-enhancement behaviour: scroll reveal animations,
 * button ripples and the back-to-top control.
 */
export default function SiteEffects() {
  useEffect(() => {
    document.documentElement.classList.add('js');
  }, []);

  // Reveal-on-scroll, including nodes added later by client components.
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    const observe = (root = document) => {
      root.querySelectorAll?.('.reveal:not(.visible)').forEach((el) => observer.observe(el));
    };

    observe();

    const mutations = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (node.nodeType !== Node.ELEMENT_NODE) return;
          if (node.classList.contains('reveal')) observer.observe(node);
          observe(node);
        });
      });
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, []);

  // Back-to-top visibility.
  useEffect(() => {
    const button = document.getElementById('backToTop');
    const onScroll = () => {
      if (button) button.classList.toggle('show', window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Button ripple, delegated so it also works for new buttons.
  useEffect(() => {
    const onClick = (event) => {
      const button = event.target.closest?.('.btn');
      if (!button) return;

      const rect = button.getBoundingClientRect();
      const ink = document.createElement('span');
      ink.className = 'ink';
      const size = Math.max(rect.width, rect.height);
      ink.style.width = `${size}px`;
      ink.style.height = `${size}px`;
      ink.style.left = `${event.clientX - rect.left - size / 2}px`;
      ink.style.top = `${event.clientY - rect.top - size / 2}px`;
      button.appendChild(ink);
      window.setTimeout(() => ink.remove(), 700);
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <button
      className="back-to-top"
      id="backToTop"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <Icon name="chevron-up" size={22} />
    </button>
  );
}
