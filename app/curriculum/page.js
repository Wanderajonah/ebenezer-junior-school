import Link from 'next/link';
import Icon from '@/components/Icon';
import CurriculumTabs from '@/components/CurriculumTabs';
import { SCHOOL_NAME } from '@/lib/site';

export const metadata = {
  title: 'Our Curriculum',
  description: `Explore the balanced curriculum at ${SCHOOL_NAME} — nursery, primary, competency based learning, ICT integration, continuous assessment, reading, creative learning and health education.`,
  keywords:
    'curriculum, nursery curriculum Uganda, primary school curriculum, competency based curriculum, ICT in schools Uganda, continuous assessment, reading programs, creative learning, health education',
  alternates: { canonical: '/curriculum' },
};

const tabs = [
  { id: 'nursery', label: 'Nursery', icon: 'baby' },
  { id: 'primary', label: 'Primary', icon: 'book-open' },
  { id: 'competency', label: 'Competency Based', icon: 'lightbulb' },
  { id: 'ict', label: 'ICT Integration', icon: 'cpu' },
  { id: 'assessment', label: 'Assessment', icon: 'clipboard-check' },
];

const panels = {
  nursery: {
    title: 'Nursery School (1½ – 5 years)',
    lead: 'Where little hands explore and little hearts grow.',
    text: 'Our nursery classes welcome children from one-and-a-half years old into a bright, safe and loving environment. We understand that these early years shape the rest of a child’s life, so every activity is carefully designed to develop fine and gross motor skills, early language, number sense and social confidence.',
    points: [
      'Play-based learning in a colourful, child-safe setting',
      'Early literacy and numeracy through songs, rhymes and stories',
      'Toilet training, independence and daily routine skills',
      'Creative play, art, music and movement every day',
      'Rest, healthy snacks and balanced meals included',
      'Regular reports and warm daily communication with parents',
    ],
  },
  primary: {
    title: 'Primary School (P1 – P7)',
    lead: 'A strong academic foundation for a bright future.',
    text: 'Our primary section follows the Uganda national curriculum while embedding modern, competency based teaching. Learners master English, mathematics, science and social studies, alongside Luganda and other languages. Small class sizes mean every child is known, supported and stretched to achieve their personal best.',
    points: [
      'All core subjects taught by passionate, qualified teachers',
      'Small classes for focused, individual attention',
      'Exam preparation for PLE and continuous school assessments',
      'Homework guidance, reading records and termly progress reports',
      'Leadership opportunities — class monitors, clubs and prefects',
      'Smooth transition to leading secondary schools in Wakiso and Kampala',
    ],
  },
  competency: {
    title: 'Competency Based Learning',
    lead: 'Children learn by doing, not just by remembering.',
    text: 'Beyond memorisation, we help children acquire real competencies — the skills, knowledge, attitudes and values they will use for life. Lessons are hands-on, interactive and connected to everyday situations, so children understand why they are learning and how to apply it.',
    points: [
      'Project work, experiments and group problem-solving',
      'Lessons linked to real-life situations children know and love',
      'Skills-based outcomes — communication, thinking, creativity and collaboration',
      'Learner-centred classrooms where every voice is heard',
      'Teachers trained in the new competency based curriculum',
    ],
  },
  ict: {
    title: 'ICT Integration',
    lead: 'Digital skills for the world of tomorrow.',
    text: 'Technology is woven into learning from the earliest grades. Our computer lab is equipped with learner-friendly computers, and ICT lessons teach typing, drawing, educational games, research skills and coding basics — always under safe, guided supervision.',
    points: [
      'Weekly ICT lessons in our modern computer lab',
      'Educational software that makes maths and reading fun',
      'Safe internet use and digital citizenship from an early age',
      'Coding and robotics clubs for curious young minds',
      'Digital presentations and projects in higher primary classes',
    ],
  },
  assessment: {
    title: 'Continuous Assessment',
    lead: 'We celebrate progress, not just marks.',
    text: 'Rather than waiting for one exam, we assess children gently and continuously — through classwork, projects, participation, quizzes and termly tests. This gives us an accurate, caring picture of each child’s growth and lets us give help the moment it is needed, so no child is left behind.',
    points: [
      'Ongoing teacher observation and marking in every subject',
      'Weekly quizzes and termly tests aligned to the curriculum',
      'Individual progress tracking and early support for strugglers',
      'Termly report cards with comments for parents',
      'Awards and recognition that motivate and build confidence',
    ],
  },
};

const extraProgrammes = [
  { icon: 'book', title: 'Reading Programmes', text: 'Daily guided reading, story corners and a school library build fluent, joyful readers. Every child keeps a reading record, and reading clubs turn books into adventures.' },
  { icon: 'palette', title: 'Creative Learning', text: 'Art, music, dance and drama are timetabled, not optional extras. Creativity boosts confidence, concentration and problem-solving across every subject.' },
  { icon: 'heart-pulse', title: 'Health Education', text: 'We teach personal hygiene, nutrition, safety and healthy living from nursery upwards — reinforced by balanced meals, exercise and our caring school nurse.' },
];

export default function CurriculumPage() {
  return (
    <main id="main">
      {/* Page hero */}
      <section className="page-hero" style={{ backgroundImage: "url('/assets/images/g-classroom.jpg')" }} aria-label="Our curriculum">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link> <span>&rsaquo;</span> <span>Curriculum</span>
          </nav>
          <h1>Our Curriculum</h1>
          <p>A balanced, modern and child-centred curriculum that builds strong academics, real skills and good character — from nursery to primary.</p>
        </div>
      </section>

      {/* Tabs */}
      <section className="section" id="overview">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">What We Teach</span>
            <h2>Explore each stage of learning</h2>
            <p className="lead">Every child moves through a seamless, carefully planned journey from the first day of nursery to confident readiness for secondary school.</p>
          </div>

          <CurriculumTabs tabs={tabs} panels={panels} />
        </div>
      </section>

      {/* Extra programmes */}
      <section className="section section--tint" id="programmes">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Enrichment</span>
            <h2>Programmes woven through every day</h2>
            <p className="lead">Three threads run through all our teaching, enriching every child’s experience.</p>
          </div>

          <div className="curriculum-grid">
            {extraProgrammes.map((programme, index) => (
              <div className={`curriculum-item reveal d-${(index % 3) + 1}`} key={programme.title}>
                <div className="curriculum-icon"><Icon name={programme.icon} /></div>
                <div>
                  <h3>{programme.title}</h3>
                  <p>{programme.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action strip */}
      <section className="section">
        <div className="container">
          <div className="cta reveal" style={{ backgroundImage: "url('/assets/images/cta-bg.jpg')" }}>
            <div className="container">
              <h2>Curriculum questions? Let&apos;s talk.</h2>
              <p>Our teachers and admissions team are happy to explain our programme in detail and arrange a personal school visit.</p>
              <div className="cta-buttons">
                <Link className="btn btn--gold btn--shine" href="/contact"><Icon name="send" /> Ask a Question</Link>
                <Link className="btn btn--ghost" href="/admissions"><Icon name="arrow-right" /> Admission Process</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
