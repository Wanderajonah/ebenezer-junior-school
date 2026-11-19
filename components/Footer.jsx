import Link from 'next/link';
import Icon from '@/components/Icon';
import NewsletterForm from '@/components/NewsletterForm';
import {
  SCHOOL_ADDRESS_1,
  SCHOOL_ADDRESS_2,
  SCHOOL_ADDRESS_3,
  SCHOOL_EMAIL,
  SCHOOL_NAME,
  SCHOOL_PHONE_1,
  SCHOOL_PHONE_1_RAW,
  SCHOOL_PHONE_2,
  SCHOOL_PHONE_2_RAW,
  SOCIAL_FACEBOOK,
  SOCIAL_INSTAGRAM,
  SOCIAL_TWITTER,
  SOCIAL_WHATSAPP,
  SOCIAL_YOUTUBE,
} from '@/lib/site';

export default function Footer() {
  return (
    <>
      {/* Call to action */}
      <section className="section" id="cta">
        <div className="container">
          <div className="cta reveal" style={{ backgroundImage: "url('/assets/images/cta-bg.jpg')" }}>
            <div className="container">
              <span className="offer-pill"><Icon name="gift" /> Free admission &amp; school uniform for the first 20 children</span>
              <h2>Begin Your Child&apos;s Journey With Us</h2>
              <p>Give your child the gift of a strong, joyful start. Places are limited and the new academic year fills quickly — book a visit today and see our campus on Hoima Road, Nampunge.</p>
              <div className="cta-buttons">
                <Link className="btn btn--gold btn--shine" href="/admissions"><Icon name="send" /> Apply for Admission</Link>
                <Link className="btn btn--ghost" href="/contact"><Icon name="phone" /> Talk to Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer" role="contentinfo">
        <div className="container">
          <div className="footer-grid">
            {/* Brand + newsletter */}
            <div className="footer-col">
              <Link className="brand" href="/" aria-label={`${SCHOOL_NAME} — Home`}>
                <span className="brand-logo" aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/images/logo.png" alt={`${SCHOOL_NAME} logo`} />
                </span>
                <span className="brand-text">
                  <span className="name">Ebenezer Junior</span>
                  <span className="name name--sub">School</span>
                </span>
              </Link>
              <p className="about-txt">A caring, child-centred nursery and primary school on Hoima Road, Nampunge, nurturing confident learners through academic excellence, creativity and strong moral values.</p>
              <div className="social-row">
                <a href={SOCIAL_FACEBOOK} aria-label="Facebook" title="Facebook"><Icon name="facebook" /></a>
                <a href={SOCIAL_INSTAGRAM} aria-label="Instagram" title="Instagram"><Icon name="instagram" /></a>
                <a href={SOCIAL_TWITTER} aria-label="X (Twitter)" title="X (Twitter)"><Icon name="twitter" /></a>
                <a href={SOCIAL_YOUTUBE} aria-label="YouTube" title="YouTube"><Icon name="youtube" /></a>
                <a href={SOCIAL_WHATSAPP} aria-label="WhatsApp" title="WhatsApp"><Icon name="whatsapp" /></a>
              </div>
            </div>

            {/* Quick links */}
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/admissions">Admissions</Link></li>
                <li><Link href="/curriculum">Curriculum</Link></li>
                <li><Link href="/gallery">Gallery</Link></li>
                <li><Link href="/activities">Activities</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Programmes */}
            <div className="footer-col">
              <h4>Programmes</h4>
              <ul className="footer-links">
                <li><Link href="/curriculum#nursery">Nursery School</Link></li>
                <li><Link href="/curriculum#primary">Primary School</Link></li>
                <li><Link href="/curriculum#competency">Competency Based Learning</Link></li>
                <li><Link href="/activities">Co-Curricular Activities</Link></li>
                <li><Link href="/admissions#requirements">Required Documents</Link></li>
                <li><Link href="/gallery">School Life</Link></li>
              </ul>
            </div>

            {/* Contact + newsletter */}
            <div className="footer-col">
              <h4>Get in Touch</h4>
              <ul className="footer-contact">
                <li><Icon name="map-pin" /><span>{`${SCHOOL_ADDRESS_1}, ${SCHOOL_ADDRESS_2}, ${SCHOOL_ADDRESS_3}`}</span></li>
                <li>
                  <Icon name="phone" />
                  <span>
                    <a href={`tel:${SCHOOL_PHONE_1_RAW}`}>{SCHOOL_PHONE_1}</a> /{' '}
                    <a href={`tel:${SCHOOL_PHONE_2_RAW}`}>{SCHOOL_PHONE_2}</a>
                  </span>
                </li>
                <li><Icon name="mail" /><span><a href={`mailto:${SCHOOL_EMAIL}`}>{SCHOOL_EMAIL}</a></span></li>
              </ul>

              <NewsletterForm />
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} {SCHOOL_NAME}. All rights reserved.</p>
            <p>Made with <span className="heart">&hearts;</span></p>
          </div>
        </div>
      </footer>
    </>
  );
}
