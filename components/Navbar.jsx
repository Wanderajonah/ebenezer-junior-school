'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Icon from '@/components/Icon';
import {
  SCHOOL_EMAIL,
  SCHOOL_NAME,
  SCHOOL_PHONE_1,
  SCHOOL_PHONE_1_RAW,
  SOCIAL_FACEBOOK,
  SOCIAL_INSTAGRAM,
  SOCIAL_TWITTER,
  SOCIAL_WHATSAPP,
} from '@/lib/site';

const NAV = [
  { href: '/', label: 'Home' },
  {
    href: '/about',
    label: 'About',
    children: [
      { href: '/about', label: 'About the School' },
      { href: '/about#mission', label: 'Mission & Vision' },
      { href: '/about#values', label: 'Our Core Values' },
      { href: '/about#history', label: 'School History' },
      { href: '/about#philosophy', label: 'Our Philosophy' },
    ],
  },
  {
    href: '/curriculum',
    label: 'Curriculum',
    children: [
      { href: '/curriculum#nursery', label: 'Nursery' },
      { href: '/curriculum#primary', label: 'Primary' },
      { href: '/curriculum#competency', label: 'Competency Based Learning' },
      { href: '/curriculum#ict', label: 'ICT Integration' },
      { href: '/curriculum#assessment', label: 'Continuous Assessment' },
    ],
  },
  { href: '/activities', label: 'Activities' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/contact', label: 'Contact' },
];

function isActive(pathname, href) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setMobileOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', mobileOpen);
    const onKey = (event) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('no-scroll');
      document.removeEventListener('keydown', onKey);
    };
  }, [mobileOpen]);

  return (
    <>
      <header className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
        {/* Top utility bar */}
        <div className="topbar" role="complementary" aria-label="School contact information">
          <div className="container">
            <ul className="topbar-info">
              <li>
                <Icon name="phone" />
                <a href={`tel:${SCHOOL_PHONE_1_RAW}`}>{SCHOOL_PHONE_1}</a>
              </li>
              <li>
                <Icon name="mail" />
                <a href={`mailto:${SCHOOL_EMAIL}`}>{SCHOOL_EMAIL}</a>
              </li>
            </ul>
            <div className="topbar-right">
              <div className="topbar-social">
                <a href={SOCIAL_FACEBOOK} aria-label="Facebook" title="Facebook"><Icon name="facebook" size={14} /></a>
                <a href={SOCIAL_INSTAGRAM} aria-label="Instagram" title="Instagram"><Icon name="instagram" size={14} /></a>
                <a href={SOCIAL_TWITTER} aria-label="X (Twitter)" title="X (Twitter)"><Icon name="twitter" size={14} /></a>
                <a href={SOCIAL_WHATSAPP} aria-label="WhatsApp" title="WhatsApp"><Icon name="whatsapp" size={14} /></a>
              </div>
              <span className="topbar-divider" aria-hidden="true" />
              <Link className="topbar-cta" href="/admissions">
                Admissions Open <Icon name="arrow-right" size={13} />
              </Link>
            </div>
          </div>
        </div>

        <div className="container navbar-inner">
          <Link className="brand" href="/" aria-label={`${SCHOOL_NAME} — Home`}>
            <span className="brand-logo" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/images/logo.png" alt={`${SCHOOL_NAME} logo`} />
            </span>
            <span className="brand-text">
              <span className="name">Ebenezer</span>
              <span className="name name--highlight">Junior</span>
            </span>
          </Link>

          <nav className="nav-links" aria-label="Primary navigation">
            <ul>
              {NAV.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href} className={`${active ? 'active' : ''} ${item.children ? 'has-dropdown' : ''}`}>
                    <Link
                      className="nav-link"
                      href={item.href}
                      {...(item.children ? { 'aria-haspopup': 'true', 'aria-expanded': 'false' } : {})}
                    >
                      {item.label}
                      {item.children ? <Icon name="chevron-down" size={10} className="caret" /> : null}
                    </Link>
                    {item.children ? (
                      <ul className="dropdown-menu" role="menu">
                        {item.children.map((child) => (
                          <li key={child.href + child.label} role="none">
                            <Link role="menuitem" href={child.href}>{child.label}</Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="nav-actions">
            <Link className="btn btn--gold btn--sm nav-cta" href="/admissions">
              <Icon name="send" /> Apply Now
            </Link>
            <button
              className={`hamburger${mobileOpen ? ' open' : ''}`}
              id="hamburger"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobileNav"
              onClick={() => setMobileOpen((open) => !open)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`scrim${mobileOpen ? ' show' : ''}`}
        id="scrim"
        onClick={() => setMobileOpen(false)}
      />
      <nav className={`mobile-nav${mobileOpen ? ' open' : ''}`} id="mobileNav" aria-label="Mobile navigation">
        {NAV.map((item) =>
          item.children ? (
            <div className="mobile-group" key={item.href}>
              <button
                className="mobile-drop"
                aria-expanded={openGroup === item.href}
                onClick={() => setOpenGroup((open) => (open === item.href ? null : item.href))}
              >
                {item.label} <Icon name="chevron-down" size={14} />
              </button>
              <div className="mobile-sub" style={{ display: openGroup === item.href ? 'block' : 'none' }}>
                {item.children.map((child) => (
                  <Link key={child.href + child.label} href={child.href} onClick={() => setMobileOpen(false)}>
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link className="mobile-link" href={item.href} key={item.href} onClick={() => setMobileOpen(false)}>
              {item.label}
            </Link>
          ),
        )}
        <Link className="btn btn--gold btn--block mobile-cta" href="/admissions" onClick={() => setMobileOpen(false)}>
          <Icon name="send" /> Apply Now
        </Link>
      </nav>
    </>
  );
}
