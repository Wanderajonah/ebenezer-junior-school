'use client';

import { useEffect, useState } from 'react';
import Icon from '@/components/Icon';

const PANEL_IMAGES = {
  nursery: 'g-nursery',
  primary: 'g-classroom',
  competency: 'g-nursery',
  ict: 'g-lab',
  assessment: 'g-classroom',
};

export default function CurriculumTabs({ tabs, panels }) {
  const [active, setActive] = useState(tabs[0]?.id);

  // Support links such as /curriculum#ict from the navigation and footer.
  useEffect(() => {
    const applyHash = () => {
      const id = window.location.hash.replace('#', '');
      if (id && tabs.some((tab) => tab.id === id)) setActive(id);
    };
    applyHash();
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, [tabs]);

  return (
    <>
      <div className="tabs reveal" role="tablist" aria-label="Curriculum sections">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            id={tab.id}
            type="button"
            className={`tab-btn${active === tab.id ? ' active' : ''}`}
            data-tab={tab.id}
            role="tab"
            aria-selected={active === tab.id}
            aria-controls={`panel-${tab.id}`}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab) => {
        const panel = panels[tab.id];
        if (!panel) return null;

        return (
          <div
            key={tab.id}
            className={`tab-panel${active === tab.id ? ' active' : ''}`}
            id={`panel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={tab.id}
          >
            <div className="split">
              <div className="split-media reveal">
                <div className="img-frame" style={{ aspectRatio: '4 / 3' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/assets/images/${PANEL_IMAGES[tab.id] ?? 'g-nursery'}.jpg`}
                    alt={`${panel.title} at Ebenezer Junior School`}
                    loading="lazy"
                    width="800"
                    height="600"
                  />
                </div>
              </div>
              <div className="split-text reveal">
                <span className="eyebrow">{tab.id === 'competency' ? 'Modern Teaching' : 'School Level'}</span>
                <h2>{panel.title}</h2>
                <p style={{ fontStyle: 'italic', color: 'var(--royal)', fontWeight: 600, marginBottom: 14 }}>{panel.lead}</p>
                <p style={{ marginBottom: 8 }}>{panel.text}</p>
                <ul className="check-list">
                  {panel.points.map((point) => (
                    <li key={point}><Icon name="check-circle" /> {point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
