import Link from 'next/link';
import Icon from '@/components/Icon';
import Counter from '@/components/Counter';
import GalleryGrid from '@/components/GalleryGrid';
import CurriculumMarquee from '@/components/CurriculumMarquee';
import HeroSlider from '@/components/HeroSlider';
import StatementSection from '@/components/StatementSection';
import Testimonials from '@/components/Testimonials';
import {
  SCHOOL_ESTABLISHED,
  SCHOOL_NAME,
  SCHOOL_TAGLINE,
} from '@/lib/site';

export const metadata = {
  title: 'Welcome',
  description: `Welcome to ${SCHOOL_NAME} — ${SCHOOL_TAGLINE}. A nurturing nursery and primary school in Nampunge, Wakiso, Uganda, delivering academic excellence, moral values and creative learning.`,
  keywords:
    'Ebenezer Junior School, Nampunge, Wakiso, primary school Uganda, nursery school Uganda, Every Child Matters, admission, schooling Wakiso',
  alternates: { canonical: '/' },
};

const whyChoose = [
  { icon: 'users', tag: 'Teaching', title: 'Experienced Teachers', text: 'Caring, qualified teachers who know every child by name.', href: '/about' },
  { icon: 'award', tag: 'Staff', title: 'Qualified Staff', text: 'Trained, certified staff committed to every learner.', href: '/about' },
  { icon: 'smile', tag: 'Learning', title: 'Learning Through Play', text: 'Joyful, hands-on learning through play, songs and discovery.', href: '/curriculum' },
  { icon: 'apple', tag: 'Wellbeing', title: 'Balanced Meals', text: 'Fresh, nutritious meals that keep children ready to learn.', href: '/activities' },
];

const curriculum = [
  { icon: 'baby', title: 'Nursery', text: 'A gentle, play-based foundation for our youngest learners aged 1½ to 5 years.' },
  { icon: 'book-open', title: 'Primary', text: 'A rich primary programme from P1 to P7 that builds strong academic foundations.' },
  { icon: 'lightbulb', title: 'Competency Based Learning', text: 'Learning by doing — children gain real skills, not just knowledge, through active lessons.' },
  { icon: 'clipboard-check', title: 'Continuous Assessment', text: 'Ongoing, gentle assessment that tracks each child’s progress so no one is left behind.' },
];

// The two curriculum feature cards are kept for future use.
// Flip this to true to render them again below the marquee.
const SHOW_CURRICULUM_CARDS = false;

const activities = [
  { icon: 'trophy', title: 'Sports', text: 'Football, netball, athletics and team games that build fitness and teamwork.' },
  { icon: 'music', title: 'Music', text: 'Singing, rhythm and movement that unlock creativity and expression.' },
  { icon: 'palette', title: 'Art & Craft', text: 'Painting, drawing and craft that spark imagination and fine motor skills.' },
];

const news = [
  { day: '05', month: 'Sep', cat: 'Upcoming Event', title: 'New Academic Term Begins', text: 'Term one kicks off with a welcome assembly for all learners and parents. Mark your calendars!' },
  { day: '18', month: 'Sep', cat: 'School Calendar', title: 'Parents & Teachers Meeting', text: 'Join us to review progress, share feedback and plan a successful term together.' },
  { day: '02', month: 'Oct', cat: 'School Event', title: 'Annual Sports Day', text: 'A fun-filled day of athletics, games and house competition. Parents are warmly invited.' },
  { day: '30', month: 'Oct', cat: 'PTA', title: 'PTA General Meeting', text: 'The Parents–Teachers Association convenes to discuss the school’s development.' },
  { day: '20', month: 'Nov', cat: 'Academics', title: 'End of Term Examinations', text: 'Continuous assessment and end-of-term tests help us celebrate every child’s growth.' },
  { day: '15', month: 'Dec', cat: 'Holiday Program', title: 'Christmas Holiday Program', text: 'Arts, games, music and reading keep children engaged safely through the holiday.' },
];

const testimonials = [
  { name: 'Sarah Nakato', role: 'Mother of a P3 learner', text: 'Ebenezer has been a blessing to our family. My daughter reads confidently and greets her teachers with so much joy every morning. The care here is genuine.' },
  { name: 'David Okello', role: 'Father of a Nursery child', text: 'We chose Ebenezer because of the small classes and the teachers’ attention to every child. Our son has blossomed — he loves school and his meals are healthy too.' },
  { name: 'Grace Namuli', role: 'Mother of a P5 learner', text: 'The discipline and moral values taught here are excellent. My children have grown in confidence, manners and performance since joining. I recommend this school highly.' },
  { name: 'Joseph Ssewanyana', role: 'Father of twins in P1', text: 'The swimming and ICT lessons are a big bonus. My twins look forward to school every single day. The compound is safe and the transport is very reliable.' },
  { name: 'Ruth Atim', role: 'Mother of a P6 learner', text: 'As a working mother, the support and communication from teachers gives me great peace of mind. My daughter’s results have improved steadily under their guidance.' },
  { name: 'Peter Wasswa', role: 'Guardian of a P4 learner', text: 'Special needs support here is outstanding. They truly believe every child matters. My nephew’s progress has been remarkable, and he feels loved and included.' },
];

const stats = [
  { icon: 'users', num: 500, suffix: '+', label: 'Happy Learners' },
  { icon: 'graduation-cap', num: 25, suffix: '+', label: 'Qualified Staff' },
  { icon: 'award', num: 12, suffix: '+', label: 'Years of Excellence' },
  { icon: 'school', num: 15, suffix: '+', label: 'Modern Classrooms' },
];

const galleryPreview = [
  { src: '/assets/images/g-children.jpg', title: 'Playtime', cat: 'Children' },
  { src: '/assets/images/g-classroom.jpg', title: 'Our Classrooms', cat: 'Classrooms' },
  { src: '/assets/images/g-swimming.jpg', title: 'Swimming', cat: 'Swimming' },
  { src: '/assets/images/g-lab.jpg', title: 'Computer Lab', cat: 'Computer Lab' },
  { src: '/assets/images/g-library.jpg', title: 'Our Library', cat: 'Library' },
  { src: '/assets/images/g-sports.jpg', title: 'Sports Day', cat: 'Sports' },
  { src: '/assets/images/g-events.jpg', title: 'School Events', cat: 'Events' },
  { src: '/assets/images/g-campus.jpg', title: 'Our Campus', cat: 'Campus' },
];

export default function HomePage() {
  return (
    <main id="main">
      {/* ======================= HERO SLIDER ======================= */}
      <HeroSlider />

      {/* ======================= OVERLAP FEATURE CARDS ======================= */}
      <section className="overlap-cards" aria-label="What makes our school special">
        <div className="container">
          <div className="overlap-grid">
            <div className="overlap-card reveal d-1">
              <div className="overlap-icon"><Icon name="book-open" /></div>
              <h3>Quality Education</h3>
              <p>A balanced curriculum from nursery to P7 that builds strong academic foundations and a lasting love of learning.</p>
            </div>
            <div className="overlap-card reveal d-2">
              <div className="overlap-icon"><Icon name="users" /></div>
              <h3>Caring Teachers</h3>
              <p>Experienced, qualified teachers who know every child by name and teach with patience, warmth and skill.</p>
            </div>
            <div className="overlap-card reveal d-3">
              <div className="overlap-icon"><Icon name="shield" /></div>
              <h3>Safe &amp; Happy Campus</h3>
              <p>A secure compound with balanced meals, modern facilities and reliable transport — so parents have total peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= WELCOME ======================= */}
      <section className="section" id="welcome">
        <div className="container split">
          <div className="split-media reveal reveal--left">
            <div className="img-frame img-main">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/images/about.jpg" alt="A teacher guiding a young learner in the classroom" loading="lazy" width="800" height="1000" />
            </div>
            <div className="img-frame img-secondary">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/images/about-secondary.jpeg" alt="Books and study materials that support every child's learning" loading="lazy" width="400" height="300" />
            </div>
            <div className="media-badge">
              <span className="yr">{SCHOOL_ESTABLISHED} </span>
              <span className="tx">Established</span>
            </div>
          </div>

          <div className="split-text reveal reveal--right">
            <span className="eyebrow">Welcome Message</span>
            <h2>A warm welcome from our school family</h2>
            <p style={{ marginBottom: 16 }}>We believe the early years are the most important of a child’s life, so we nurture every child with love, patience and care while building a strong foundation of <strong>academic excellence</strong>.</p>
            <p>Beyond the classroom, we grow <strong>character</strong> through Christian values, discipline and creativity.</p>
            <ul className="check-list">
              <li><Icon name="check-circle" /> Child-centred, play-based teaching that makes learning joyful</li>
              <li><Icon name="check-circle" /> A safe, loving environment where values are caught and taught</li>
              <li><Icon name="check-circle" /> ICT, swimming, reading and creative programmes for every child</li>
            </ul>
            <div className="hero-buttons" style={{ marginTop: 14 }}>
              <Link className="btn btn--primary" href="/about"><Icon name="arrow-right" /> Learn More About Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= STATS ======================= */}
      <section className="section stats" id="stats" aria-label="School statistics">
        <div className="container stats-grid">
          {stats.map((stat, index) => (
            <div className={`stat reveal d-${index + 1}`} key={stat.label}>
              <div className="stat-icon"><Icon name={stat.icon} /></div>
              <div className="num"><Counter target={stat.num} suffix={stat.suffix} /></div>
              <div className="label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================= ABOUT ======================= */}
      <section className="section about-feature" id="about">
        <div className="container about-feature__grid">
          <div className="about-feature__media reveal reveal--left">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/about-main.jpg"
              alt="A teacher guiding young learners in the classroom"
              loading="lazy"
              width="1600"
              height="1217"
            />
            <div className="about-feature__caption">
              <span className="about-feature__since">Since {SCHOOL_ESTABLISHED}</span>
              <h3>Education with purpose and a joyful start.</h3>
              <Link className="btn btn--gold about-feature__cta" href="/about">
                <Icon name="arrow-right" /> Discover our story
              </Link>
            </div>
          </div>

          <div className="about-feature__body reveal reveal--right">
            <span className="eyebrow">About the School</span>
            <h2>A school with a heart, built on strong values</h2>
            <p>
              Our mission, vision and daily practice are united around one simple belief: every
              child is a gift deserving of excellent education and genuine love.
            </p>
            <p>
              From nursery to P7, we nurture confident, curious learners through quality teaching,
              creativity and genuine care for every child.
            </p>

            <div className="about-feature__stats">
              <div className="about-feature__stat">
                <strong>{SCHOOL_ESTABLISHED}</strong>
                <span>Established</span>
              </div>
              <div className="about-feature__stat">
                <strong>12+</strong>
                <span>Years of excellence</span>
              </div>
              <div className="about-feature__stat">
                <strong>500+</strong>
                <span>Happy learners</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= CURRICULUM ======================= */}
      <section className="curriculum-section" id="curriculum">
        <CurriculumMarquee />

        {SHOW_CURRICULUM_CARDS && (
        <div className="curriculum-below">
          <div className="container">
            <div className="curriculum-cards">
            <article className="curriculum-feature reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="curriculum-feature__img" src="/assets/images/african-kids-classroom.jpg" alt="" loading="lazy" />
              <div className="curriculum-feature__body">
                <span className="curriculum-panel__icon"><Icon name="baby" /></span>
                <h3>Early years &amp; primary</h3>
                <p>
                  A gentle, play-based foundation that grows into a rich primary programme from P1 to P7.
                </p>
                <ul className="curriculum-panel__list">
                  <li><span className="curriculum-panel__check"><Icon name="check" /></span> {curriculum[0].title} (1½ to 5 years)</li>
                  <li><span className="curriculum-panel__check"><Icon name="check" /></span> {curriculum[1].title} (P1 to P7)</li>
                  <li><span className="curriculum-panel__check"><Icon name="check" /></span> Play-based, child-centred learning</li>
                  <li><span className="curriculum-panel__check"><Icon name="check" /></span> Strong academic foundations</li>
                </ul>
                <Link className="btn btn--primary" href="/curriculum">
                  Explore Curriculum <Icon name="arrow-right" />
                </Link>
              </div>
            </article>

            <article className="curriculum-feature curriculum-feature--alt reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="curriculum-feature__img" src="/assets/images/g-classroom.jpg" alt="" loading="lazy" />
              <div className="curriculum-feature__body">
                <span className="curriculum-panel__icon"><Icon name="lightbulb" /></span>
                <h3>How we teach</h3>
                <p>
                  Learning by doing, with gentle ongoing assessment that helps every child make steady progress.
                </p>
                <ul className="curriculum-panel__list">
                  <li><span className="curriculum-panel__check"><Icon name="check" /></span> {curriculum[2].title}</li>
                  <li><span className="curriculum-panel__check"><Icon name="check" /></span> Real skills through active lessons</li>
                  <li><span className="curriculum-panel__check"><Icon name="check" /></span> {curriculum[3].title}</li>
                  <li><span className="curriculum-panel__check"><Icon name="check" /></span> No child left behind</li>
                </ul>
                <Link className="btn btn--gold" href="/curriculum">
                  See How We Teach <Icon name="arrow-right" />
                </Link>
              </div>
            </article>
            </div>
          </div>
        </div>
        )}
      </section>

      {/* ======================= WHY CHOOSE US ======================= */}
      <section className="section why-section" id="why-us">
        <div className="container">
          <div className="why-layout">
            {/* Dark panel */}
            <div className="why-panel reveal">
              <span className="why-pill">Why Choose Us</span>
              <h2>Reasons parents trust Ebenezer</h2>
              <p>Everything we offer is designed with one goal in mind — a happy, safe and excellent start for your child.</p>
              <Link className="btn btn--gold" href="/about">
                Explore our school <Icon name="arrow-right" />
              </Link>

              <div className="why-quicklinks">
                <Link href="/curriculum#nursery">Nursery</Link>
                <Link href="/curriculum#primary">Primary</Link>
                <Link href="/activities">Activities</Link>
                <Link href="/admissions">Admissions</Link>
              </div>
            </div>

            {/* Feature cards */}
            <div className="why-content reveal d-1">
              <span className="eyebrow">Our strengths</span>
              <h2>What your child gains</h2>
              <p>What families notice from the very first visit.</p>

              <div className="why-cards">
                {whyChoose.map((card, index) => (
                  <Link className="why-feature" href={card.href} key={card.title}>
                    <span className="why-feature__num">{String(index + 1).padStart(2, '0')}</span>
                    <span className="why-feature__icon"><Icon name={card.icon} /></span>
                    <span className="why-feature__tag">{card.tag}</span>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                    <span className="why-feature__arrow"><Icon name="arrow-right" /></span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= ACTIVITIES ======================= */}
      <section className="section section--tint" id="activities">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Co-Curricular Activities</span>
            <h2>Growing talents beyond the classroom</h2>
            <p className="lead">From the pool to the stage, every child finds a place to shine.</p>
          </div>

          <div className="activities-showcase">
            {activities.map((activity, index) => (
              <div className={`activity-card reveal d-${(index % 4) + 1}`} key={activity.title}>
                <div className="activity-card__icon"><Icon name={activity.icon} /></div>
                <div className="activity-card__body">
                  <h3>{activity.title}</h3>
                  <p>{activity.text}</p>
                </div>
                <div className="activity-card__arrow"><Icon name="arrow-right" /></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-40">
            <Link className="btn btn--primary" href="/activities"><Icon name="arrow-right" /> View All Activities</Link>
          </div>
        </div>
      </section>

      {/* ======================= STATEMENT ======================= */}
      <StatementSection />

      {/* ======================= HEADMASTER'S MESSAGE ======================= */}
      <section className="section headmaster-section" id="headmaster">
        <div className="container headmaster-grid">
          <div className="headmaster-media reveal reveal--left">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/headmaster.jpg"
              alt="The Headmaster of Ebenezer Junior School"
              loading="lazy"
              width="1024"
              height="1536"
            />
          </div>

          <div className="headmaster-body reveal reveal--right">
            <h2 className="headmaster-title">
              Being part of something big starts with something small
            </h2>

            <blockquote className="headmaster-quote">
              <p>
                At Ebenezer Junior School, every child is known by name. We believe that big
                achievements begin with small, daily moments of care, encouragement and curiosity.
              </p>
              <p>
                Our teachers are committed to helping each child discover their talents, grow in
                confidence and feel safe, valued and inspired every day. From the first morning
                greeting to the last lesson, we build a community where children are seen, heard
                and celebrated.
              </p>
              <p>
                We are proud of the partnership we share with parents, and we warmly invite you to
                visit us, meet our team and see the joyful learning that happens here every day.
              </p>
              <footer className="headmaster-sign">
                <span className="headmaster-sign__name">The Headmaster</span>
                <span className="headmaster-sign__role">Ebenezer Junior School</span>
              </footer>
            </blockquote>

            <Link className="btn btn--primary" href="/about">
              Read the Headmaster&apos;s Message <Icon name="arrow-right" />
            </Link>
          </div>
        </div>
      </section>

      {/* ======================= TESTIMONIALS ======================= */}
      <section className="section testimonials" id="testimonials" aria-label="Testimonials">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Testimonials</span>
            <h2>What Parents Say</h2>
            <p className="lead">Real words from families who trust Ebenezer with their children&apos;s future.</p>
          </div>

          <Testimonials items={testimonials} />
        </div>
      </section>
    </main>
  );
}
