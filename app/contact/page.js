import Link from 'next/link';
import Icon from '@/components/Icon';
import ContactForm from '@/components/ContactForm';
import {
  MAP_EMBED_SRC,
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
} from '@/lib/site';

export const metadata = {
  title: 'Contact Us',
  description: `Contact ${SCHOOL_NAME} — Hoima Road, Nampunge, Wakiso, Uganda. Call 0782 011079 / 0701 626281 or email ebenezerjuniorn@gmail.com for admissions and enquiries.`,
  keywords:
    'contact school Uganda, Ebenezer Junior School, Nampunge Wakiso, Hoima Road, school phone, school email, school enquiry',
  alternates: { canonical: '/contact' },
};

export default async function ContactPage({ searchParams }) {
  const params = await searchParams;
  const sent = params?.sent === '1' || params?.sent === 'true';

  return (
    <main id="main">
      {/* Page hero */}
      <section className="page-hero" style={{ backgroundImage: "url('/assets/images/hero-1.jpg')" }} aria-label="Contact us">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link> <span>&rsaquo;</span> <span>Contact Us</span>
          </nav>
          <h1>Contact Us</h1>
          <p>We would love to hear from you — visit us, call us, or send us a message and we will reply promptly.</p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="section" id="contact">
        <div className="container">
          <div className="contact-grid">
            {/* Info card */}
            <aside className="contact-info-card reveal reveal--left">
              <span className="eyebrow" style={{ color: 'var(--gold)' }}>Get in Touch</span>
              <h2>{SCHOOL_NAME}</h2>
              <p>Our doors (and our hearts) are open. Reach out to us for admissions, school visits or any enquiry.</p>

              <div className="c-detail">
                <span className="c-icon"><Icon name="map-pin" /></span>
                <div>
                  <h4>Visit Us</h4>
                  <p>{SCHOOL_ADDRESS_1}<br />{SCHOOL_ADDRESS_2}, {SCHOOL_ADDRESS_3}</p>
                </div>
              </div>

              <div className="c-detail">
                <span className="c-icon"><Icon name="phone" /></span>
                <div>
                  <h4>Call Us</h4>
                  <p>
                    <a href={`tel:${SCHOOL_PHONE_1_RAW}`}>{SCHOOL_PHONE_1}</a><br />
                    <a href={`tel:${SCHOOL_PHONE_2_RAW}`}>{SCHOOL_PHONE_2}</a>
                  </p>
                </div>
              </div>

              <div className="c-detail">
                <span className="c-icon"><Icon name="mail" /></span>
                <div>
                  <h4>Email Us</h4>
                  <p><a href={`mailto:${SCHOOL_EMAIL}`}>{SCHOOL_EMAIL}</a></p>
                </div>
              </div>

              <div className="c-detail">
                <span className="c-icon"><Icon name="clock" /></span>
                <div>
                  <h4>Office Hours</h4>
                  <p>Monday – Friday: 8:00am – 5:00pm<br />Saturday: 9:00am – 1:00pm</p>
                </div>
              </div>

              <div className="social-row" style={{ marginTop: 26 }}>
                <a href={SOCIAL_FACEBOOK} aria-label="Facebook"><Icon name="facebook" /></a>
                <a href={SOCIAL_INSTAGRAM} aria-label="Instagram"><Icon name="instagram" /></a>
                <a href={SOCIAL_TWITTER} aria-label="X (Twitter)"><Icon name="twitter" /></a>
                <a href={SOCIAL_WHATSAPP} aria-label="WhatsApp"><Icon name="whatsapp" /></a>
              </div>
            </aside>

            {/* Form */}
            <ContactForm sent={sent} />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section section--tight" id="map">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Find Us</span>
            <h2>We are on Hoima Road, Nampunge</h2>
            <p className="lead">Easily accessible from Kampala and surrounding areas of Wakiso District.</p>
          </div>
          <div className="map-wrap reveal">
            <iframe
              src={MAP_EMBED_SRC}
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map showing the location of ${SCHOOL_NAME} on Hoima Road, Nampunge, Wakiso`}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
