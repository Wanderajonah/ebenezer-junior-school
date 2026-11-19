import Link from 'next/link';
import Icon from '@/components/Icon';
import { SCHOOL_MOTTO, SCHOOL_NAME } from '@/lib/site';

export const metadata = {
  title: 'About Us',
  description: `Discover the story, mission, vision, core values and educational philosophy of ${SCHOOL_NAME} — a nurturing nursery and primary school in Nampunge, Wakiso, Uganda.`,
  keywords:
    'about Ebenezer Junior School, school mission Uganda, school vision, core values, school history Nampunge, educational philosophy',
  alternates: { canonical: '/about' },
};

const values = [
  { num: '01', title: 'Love & Care', text: 'We treat every child with warmth, patience and genuine affection — the foundation of all learning.' },
  { num: '02', title: 'Academic Excellence', text: 'We set high expectations and give every child the support to reach them.' },
  { num: '03', title: 'Integrity', text: 'We teach honesty, responsibility and doing the right thing — even when no one is watching.' },
  { num: '04', title: 'Respect', text: 'We honour God, our parents, our teachers, our peers and our beautiful country.' },
  { num: '05', title: 'Creativity', text: 'We celebrate imagination, curiosity and original thinking in every lesson and activity.' },
  { num: '06', title: 'Discipline', text: 'We nurture self-control, hard work and order — the quiet keys to lasting success.' },
  { num: '07', title: 'Teamwork', text: 'We learn, play and grow together, supporting one another like a family.' },
  { num: '08', title: 'Joyful Learning', text: 'School should be a happy place. We make sure it is, every single day.' },
];

const history = [
  { year: '2014', text: 'Ebenezer Junior School opens its doors in Nampunge, Wakiso, with a small class of nursery children and a big dream — to give every child a loving, excellent start.' },
  { year: '2016', text: 'The school expands into the primary section, welcoming P1 learners and growing our family of dedicated teachers.' },
  { year: '2019', text: 'New classrooms, a computer lab and a library are added, and ICT lessons become part of every learner’s week.' },
  { year: '2021', text: 'A swimming programme is introduced, and our balanced meals and special-needs support win the trust of more families.' },
  { year: '2024', text: 'Ebenezer celebrates a decade of nurturing children, with hundreds of confident young graduates moving on to secondary schools.' },
  { year: 'Today', text: 'We continue to grow — modern classrooms, safe transport, joyful activities and a community of parents and teachers united around one belief: Every Child Matters.' },
];

export default function AboutPage() {
  return (
    <main id="main">
      {/* Page hero */}
      <section className="page-hero" style={{ backgroundImage: "url('/assets/images/about-main.jpg')" }} aria-label="About Ebenezer Junior School">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link> <span>&rsaquo;</span> <span>About Us</span>
          </nav>
          <h1>About Our School</h1>
          <p>A caring community on Hoima Road, Nampunge, where academic excellence meets character formation — and every child truly matters.</p>
        </div>
      </section>

      {/* Mission / Vision / Motto */}
      <section className="section" id="mission">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Who We Are</span>
            <h2>Our mission, vision and motto</h2>
            <p className="lead">These three statements shape every decision we make and every moment your child spends with us.</p>
          </div>

          <div className="mv-grid">
            <article className="mv-card reveal d-1">
              <div className="mv-icon"><Icon name="hands-helping" /></div>
              <h3>Our Mission</h3>
              <p>To provide quality, affordable and Christ-centred education that nurtures every child academically, morally and socially — preparing confident, disciplined and creative future leaders who will serve their families, communities and nation.</p>
            </article>
            <article className="mv-card reveal d-2">
              <div className="mv-icon"><Icon name="eye" /></div>
              <h3>Our Vision</h3>
              <p>To be the leading nursery and primary school in Wakiso District — a beacon of academic excellence, character formation and joyful learning that parents trust and children love.</p>
            </article>
            <article className="mv-card reveal d-3">
              <div className="mv-icon"><Icon name="pen-nib" /></div>
              <h3>Our Motto</h3>
              <p><em>{SCHOOL_MOTTO}</em><br />Knowledge lights the way, virtue keeps us steady, and integrity makes us trustworthy — the three strands woven through everything we teach.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="section section--tint" id="values">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Core Values</span>
            <h2>The values we live and teach</h2>
            <p className="lead">Character is caught as much as it is taught. These are the values we model daily and encourage in every child.</p>
          </div>

          <div className="values">
            {values.map((value, index) => (
              <div className={`value-item reveal d-${(index % 4) + 1}`} key={value.num}>
                <div className="v-num">{value.num}</div>
                <h4>{value.title}</h4>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History timeline */}
      <section className="section" id="history">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">School History</span>
            <h2>Our journey of growth</h2>
            <p className="lead">From a single nursery class to a thriving school community — this is the story of Ebenezer.</p>
          </div>

          <div className="timeline">
            {history.map((item, index) => (
              <div className={`tl-item reveal d-${(index % 3) + 1}`} key={item.year}>
                <span className="tl-dot" aria-hidden="true" />
                <p className="tl-year">{item.year}</p>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section section--royal" id="philosophy">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow" style={{ color: 'var(--gold)' }}>Educational Philosophy</span>
            <h2 style={{ color: '#fff' }}>The Ebenezer way of learning</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)' }}>Our philosophy is simple yet profound — we grow the whole child: head, heart and hands.</p>
          </div>

          <div className="grid grid--3">
            <article className="card reveal d-1" style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.15)' }}>
              <div className="card-icon" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}><Icon name="lightbulb" /></div>
              <h3 style={{ color: '#fff' }}>Learning with the head</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)' }}>Strong foundations in literacy, numeracy, science and languages, taught in small classes where every child participates, asks questions and thinks for themselves.</p>
            </article>
            <article className="card reveal d-2" style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.15)' }}>
              <div className="card-icon" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}><Icon name="heart" /></div>
              <h3 style={{ color: '#fff' }}>Learning with the heart</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)' }}>Moral and spiritual education, kindness, respect and resilience — we nurture children’s hearts so they grow into compassionate, honest and confident young people.</p>
            </article>
            <article className="card reveal d-3" style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.15)' }}>
              <div className="card-icon" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}><Icon name="rocket" /></div>
              <h3 style={{ color: '#fff' }}>Learning with the hands</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)' }}>Through play, art, sport, swimming, ICT and projects, children learn by doing. Every activity builds real skills, confidence and a lifelong love of discovery.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
