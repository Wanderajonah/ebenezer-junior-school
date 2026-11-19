'use client';

import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/Icon';

function FaqItem({ item, index, open, onToggle }) {
  const answerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const measure = () => setHeight(answerRef.current?.scrollHeight ?? 0);
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [item.a]);

  return (
    <div className={`faq-item reveal d-${(index % 3) + 1}${open ? ' open' : ''}`}>
      <button className="faq-q" aria-expanded={open} onClick={onToggle}>
        {item.q}
        <span className="icon"><Icon name="plus" /></span>
      </button>
      <div className="faq-a" style={{ maxHeight: open ? `${height}px` : 0 }}>
        <div className="inner" ref={answerRef}>{item.a}</div>
      </div>
    </div>
  );
}

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <FaqItem
          key={item.q}
          item={item}
          index={index}
          open={openIndex === index}
          onToggle={() => setOpenIndex((current) => (current === index ? null : index))}
        />
      ))}
    </div>
  );
}
