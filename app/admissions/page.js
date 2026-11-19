import Link from 'next/link';
import Icon from '@/components/Icon';
import FaqAccordion from '@/components/FaqAccordion';
import { SCHOOL_NAME, SCHOOL_PHONE_1, SCHOOL_PHONE_1_RAW } from '@/lib/site';

export const metadata = {
  title: 'Admissions',
  description: `Admissions are open at ${SCHOOL_NAME} Nampunge. Learn about our simple admission process, required documents, school visits, interviews and enrolment. Free admission and uniform for the first 20 children.`,
  keywords:
    'school admission Uganda, enrollment, school documents required, nursery admission Wakiso, primary admission, free uniform, Ebenezer Junior School admission',
  alternates: { canonical: '/admissions' },
};

const steps = [
  { num: '1', title: 'Visit the School', text: 'Book a visit, tour our campus and meet the teachers. We welcome families any school day from 8:00am to 5:00pm.' },
  { num: '2', title: 'Fill the Enrolment Form', text: 'Collect or download our admission form, complete it with your child’s details and submit it at the school office.' },
  { num: '3', title: 'Submit Documents', text: 'Hand in the required documents listed below. Our team will review them and guide you through the next step.' },
  { num: '4', title: 'Child Interview & Assessment', text: 'A friendly, informal meeting where our teachers get to know your child. It is a happy conversation, not an exam.' },
  { num: '5', title: 'Confirmation & Enrolment', text: 'Once accepted, pay the enrolment fee, receive your child’s welcome pack and get ready for their first day!' },
];

const documents = [
  'Child’s birth certificate',
  'Immunisation / child health card',
  'Two passport-size photos of the child',
  'Parent / guardian National ID or passport',
  'Previous school report (for P2 and above)',
  'Completed admission form',
  'Transfer letter from previous school (where applicable)',
];

const faqs = [
  { q: 'From what age can my child join the school?', a: 'Children can join from 1½ years in our nursery section and up to Primary level in the primary section. We accept learners at any stage of the academic year, space permitting.' },
  { q: 'When are admissions open?', a: 'Admissions are open all year round. However, places fill quickly at the start of each term, so we encourage families to apply early to secure a place.' },
  { q: 'Is there really free admission and a free uniform?', a: 'Yes! As part of our welcome offer, the first 20 children to complete enrolment receive free admission and a free school uniform. After that, our regular, affordable fees apply.' },
  { q: 'Do you provide school transport?', a: 'Yes. We offer reliable, safe school transport to and from school across surrounding areas in Wakiso. Transport routes are shared at enrolment.' },
  { q: 'What documents do I need to bring?', a: 'A birth certificate, immunisation card, passport-size photos, a parent ID and, for higher classes, the previous school report. The full list is on this page.' },
  { q: 'Can I visit the school before enrolling?', a: 'Absolutely — we encourage it! Call us on 0782 011079 or 0701 626281 to arrange a free school tour and meet our teachers.' },
];

export default function AdmissionsPage() {
  return (
    <main id="main">
      {/* Page hero */}
      <section className="page-hero" style={{ backgroundImage: "url('/assets/images/g-campus.jpg')" }} aria-label="Admissions open">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link> <span>&rsaquo;</span> <span>Admissions</span>
          </nav>
          <h1>Admissions Open</h1>
          <p>We are accepting new learners for this academic year. Give your child the warm, excellent start they deserve.</p>
        </div>
      </section>

      {/* Offer highlight */}
      <section className="section section--tight">
        <div className="container">
          <div className="offer-banner reveal">
            <div className="offer-icon"><Icon name="gift" /></div>
            <div>
              <h3>Free Admission &amp; Free School Uniform!</h3>
              <p>The first 20 children to complete enrolment receive free admission and a free school uniform. Act now — places are limited!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section section--tight" id="process">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Admission Process</span>
            <h2>Joining Ebenezer is easy</h2>
            <p className="lead">Five simple steps from your first visit to your child’s first day.</p>
          </div>

          <div className="steps">
            {steps.map((step, index) => (
              <div className={`step reveal d-${(index % 4) + 1}`} key={step.num}>
                <div className="step-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents + enquiry */}
      <section className="section section--tight" id="requirements">
        <div className="container split">
          <div className="split-text reveal">
            <span className="eyebrow">Required Documents</span>
            <h2>What to bring when enrolling</h2>
            <p>To complete your child’s enrolment, please prepare the following documents. Our office team is always happy to help if anything is missing.</p>
            <div className="doc-list" style={{ marginTop: 26 }}>
              <h3><Icon name="file-text" /> Required Documents</h3>
              <ul>
                {documents.map((document) => (
                  <li key={document}><Icon name="check-circle" /> {document} <span>&bull;</span></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="split-media reveal">
            <div className="img-frame" style={{ aspectRatio: '4 / 3.2' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/images/about-secondary.jpeg" alt="Learning materials awaiting our new learners" loading="lazy" width="800" height="640" />
            </div>
            <div className="chips" style={{ marginTop: 18 }}>
              <span className="chip"><Icon name="eye" /> School Visits</span>
              <span className="chip"><Icon name="users" /> Friendly Interview</span>
              <span className="chip"><Icon name="send" /> Easy Enrolment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Visits, interview, enrolment */}
      <section className="section section--tint section--tight" id="visits">
        <div className="container">
          <div className="grid grid--3">
            <article className="card reveal d-1">
              <div className="card-icon"><Icon name="eye" /></div>
              <h3>School Visits</h3>
              <p>See our classrooms, library, computer lab, swimming pool and playground for yourself. A visit is the best way to feel the warmth of our community — and it’s always free.</p>
            </article>
            <article className="card reveal d-2">
              <div className="card-icon"><Icon name="users" /></div>
              <h3>Child Interview</h3>
              <p>A relaxed, friendly chat where our teachers get to know your child’s personality and learning style. It’s designed to reassure, not to pressure — every child leaves smiling.</p>
            </article>
            <article className="card reveal d-3">
              <div className="card-icon"><Icon name="rocket" /></div>
              <h3>Enrolment</h3>
              <p>Complete the simple paperwork, receive your welcome pack and uniform, and your child joins our family. We support new learners through a gentle, caring transition.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="section section--tight">
        <div className="container">
          <div className="cta reveal" style={{ backgroundImage: "url('/assets/images/cta-bg.jpg')" }}>
            <div className="container">
              <span className="offer-pill"><Icon name="phone" /> Free admission &amp; uniform for the first 20 children</span>
              <h2>Ready to apply?</h2>
              <p>Our admissions team is ready to welcome you. Send us an enquiry or call today to book your school visit.</p>
              <div className="cta-buttons">
                <Link className="btn btn--gold btn--shine" href="/contact"><Icon name="send" /> Admission Enquiry</Link>
                <a className="btn btn--ghost" href={`tel:${SCHOOL_PHONE_1_RAW}`}><Icon name="phone" /> {SCHOOL_PHONE_1}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--tint" id="faq">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Admission FAQ</span>
            <h2>Frequently asked questions</h2>
            <p className="lead">Answers to the questions parents ask us most.</p>
          </div>

          <FaqAccordion items={faqs} />
        </div>
      </section>
    </main>
  );
}
