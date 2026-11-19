import Link from 'next/link';
import Icon from '@/components/Icon';
import GalleryGrid from '@/components/GalleryGrid';
import { SCHOOL_NAME } from '@/lib/site';

export const metadata = {
  title: 'Co-Curricular Activities',
  description: `Swimming, ICT, sports, music, dance, drama, art, debate, reading clubs and educational tours at ${SCHOOL_NAME} — activities that build confidence, talent and friendship.`,
  keywords:
    'school activities Uganda, co-curricular, swimming lessons, ICT club, school sports, music and dance, drama, art and craft, debate club, reading club, educational tours',
  alternates: { canonical: '/activities' },
};

const activities = [
  { icon: 'trophy', title: 'Sports', text: 'Football, netball, athletics and team games build fitness, coordination and teamwork. Friendly inter-house and inter-school fixtures let every child feel the pride of playing for Ebenezer.' },
  { icon: 'music', title: 'Music', text: 'Singing, rhythm and movement bring joy to every week. Children perform at assemblies, graduations and community events, growing confidence with every note.' },
  { icon: 'smile', title: 'Dance', text: 'Traditional and modern dance celebrate our culture and let children express themselves freely. Dance builds poise, rhythm and wonderful stage confidence.' },
  { icon: 'award', title: 'Drama', text: 'From class plays to Christmas productions, drama invites children into stories. It grows imagination, public speaking and the courage to perform in front of an audience.' },
  { icon: 'palette', title: 'Art & Craft', text: 'Painting, drawing, modelling and recycling crafts let children create with their own hands. Art develops fine motor skills, patience and the joy of making something beautiful.' },
  { icon: 'mic', title: 'Debate', text: 'Our debate and public-speaking sessions teach children to think clearly, speak confidently and listen respectfully. These skills serve them for life.' },
  { icon: 'book', title: 'Reading Club', text: 'Book lovers meet weekly to share stories, read aloud and review books from our library. Reading clubs turn children into lifelong readers.' },
  { icon: 'globe', title: 'Educational Tours', text: 'Learning leaves the classroom. Trips to museums, farms, nature sites and community landmarks make subjects come alive and create memories children treasure.' },
];

const highlights = [
  { icon: 'trophy', title: 'Confidence', text: 'Performing, competing and speaking build self-belief that flows into the classroom.' },
  { icon: 'users', title: 'Friendship', text: 'Clubs and teams create bonds across classes, teaching children teamwork and kindness.' },
  { icon: 'sparkle', title: 'Talent', text: 'Every child discovers at least one thing they love — and one thing they are great at.' },
  { icon: 'target', title: 'Balance', text: 'A healthy mix of study and play keeps children energised, happy and ready to learn.' },
];

const momentImages = [
  { src: '/assets/images/g-swimming.jpg', title: 'Swimming lessons', cat: 'Activities' },
  { src: '/assets/images/g-sports.jpg', title: 'Sports day', cat: 'Activities' },
  { src: '/assets/images/g-art.jpg', title: 'Art and craft', cat: 'Activities' },
  { src: '/assets/images/g-events.jpg', title: 'School events', cat: 'Activities' },
  { src: '/assets/images/g-tour.jpg', title: 'Educational tour', cat: 'Activities' },
  { src: '/assets/images/g-library.jpg', title: 'Reading time', cat: 'Activities' },
];

export default function ActivitiesPage() {
  return (
    <main id="main">
      {/* Page hero */}
      <section className="page-hero" style={{ backgroundImage: "url('/assets/images/g-playground.jpg')" }} aria-label="Co-curricular activities">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link> <span>&rsaquo;</span> <span>Activities</span>
          </nav>
          <h1>Co-Curricular Activities</h1>
          <p>School is more than lessons. Our rich activity programme helps every child discover talents, build confidence and make friends for life.</p>
        </div>
      </section>

      {/* Activity cards */}
      <section className="section" id="activities">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">What We Offer</span>
            <h2>Activities for every child</h2>
            <p className="lead">Something for every interest — and a place for every child to shine.</p>
          </div>

          <div className="grid grid--3">
            {activities.map((activity, index) => (
              <article className={`card reveal d-${(index % 3) + 1}`} key={activity.title}>
                <div className="card-icon"><Icon name={activity.icon} /></div>
                <h3>{activity.title}</h3>
                <p>{activity.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why activities matter */}
      <section className="section section--tint" id="why">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Why They Matter</span>
            <h2>What activities give your child</h2>
            <p className="lead">Beyond fun, our programme nurtures the whole child — mind, body and spirit.</p>
          </div>

          <div className="grid grid--4">
            {highlights.map((highlight, index) => (
              <article className={`card reveal d-${(index % 4) + 1}`} key={highlight.title}>
                <div className="card-icon"><Icon name={highlight.icon} /></div>
                <h3>{highlight.title}</h3>
                <p>{highlight.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="section" id="moment">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Moments of Joy</span>
            <h2>Life in full colour</h2>
          </div>
          <GalleryGrid images={momentImages} delayMod={3} />
          <div className="text-center mt-40">
            <Link className="btn btn--primary" href="/gallery"><Icon name="arrow-right" /> See the Full Gallery</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
