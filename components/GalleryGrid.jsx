'use client';

import { useCallback, useEffect, useState } from 'react';
import Icon from '@/components/Icon';

export default function GalleryGrid({
  images,
  categories,
  gridId,
  delayMod = 3,
  emptyLabel = 'No photos in this category yet.',
}) {
  const [filter, setFilter] = useState('All');
  const [current, setCurrent] = useState(null);

  const visible = filter === 'All' ? images : images.filter((image) => image.cat === filter);

  const close = useCallback(() => setCurrent(null), []);
  const prev = useCallback(() => {
    setCurrent((index) => (index === null ? index : (index - 1 + visible.length) % visible.length));
  }, [visible.length]);
  const next = useCallback(() => {
    setCurrent((index) => (index === null ? index : (index + 1) % visible.length));
  }, [visible.length]);

  useEffect(() => {
    if (current === null) return undefined;

    const onKey = (event) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowLeft') prev();
      if (event.key === 'ArrowRight') next();
    };

    document.addEventListener('keydown', onKey);
    document.body.classList.add('lightbox-locked');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('lightbox-locked');
    };
  }, [current, close, prev, next]);

  const active = current === null ? null : visible[current];

  return (
    <>
      {categories ? (
        <div className="filters reveal" role="group" aria-label="Filter gallery by category">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              className={`filter-btn${filter === cat ? ' active' : ''}`}
              data-filter={cat}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      ) : null}

      <div className="gallery-grid" id={gridId}>
        {visible.map((image, index) => (
          <figure
            className={`gallery-item reveal d-${(index % delayMod) + 1}`}
            key={image.src + image.title}
            data-cat={image.cat}
            data-title={image.title}
            data-full={image.src}
            onClick={() => setCurrent(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                setCurrent(index);
              }
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.src}
              alt={`${image.title} at Ebenezer Junior School`}
              loading="lazy"
              width="800"
              height="600"
            />
            <figcaption className="gallery-overlay">
              <span className="zoom"><Icon name="zoom-in" /></span>
              <h3>{image.title}</h3>
              <p>{image.cat}</p>
            </figcaption>
          </figure>
        ))}
        {visible.length === 0 ? <p className="text-center">{emptyLabel}</p> : null}
      </div>

      <div
        className={`lightbox${active ? ' open' : ''}`}
        id="lightbox"
        role="dialog"
        aria-modal="true"
        aria-label="Image preview"
        aria-hidden={!active}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        <div className="lightbox-inner">
          <button className="lightbox-close" id="lbClose" aria-label="Close preview" onClick={close}>
            <Icon name="x" />
          </button>
          <button className="lightbox-prev" id="lbPrev" aria-label="Previous image" onClick={prev}>
            <Icon name="chevron-left" />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img id="lbImage" src={active?.src ?? null} alt={active?.title ?? 'Enlarged gallery image'} />
          <button className="lightbox-next" id="lbNext" aria-label="Next image" onClick={next}>
            <Icon name="chevron-right" />
          </button>
          <div className="lightbox-caption">
            <p id="lbTitle">{active?.title ?? ''}</p>
            <small id="lbCat">{active?.cat ?? ''}</small>
          </div>
        </div>
      </div>
    </>
  );
}
