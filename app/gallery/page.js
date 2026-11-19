import Link from 'next/link';
import GalleryGrid from '@/components/GalleryGrid';
import { SCHOOL_NAME } from '@/lib/site';

export const metadata = {
  title: 'Photo Gallery',
  description: `Browse photos of our campus, classrooms, children, swimming lessons, computer lab and school events at ${SCHOOL_NAME} Nampunge, Wakiso.`,
  keywords:
    'school gallery, school photos Uganda, Ebenezer Junior School campus, classrooms, computer lab, swimming, school events',
  alternates: { canonical: '/gallery' },
};

const categories = ['All', 'Campus', 'Classrooms', 'Children', 'Swimming', 'Computer Lab', 'Events'];

const images = [
  { src: '/assets/images/g-campus.jpg', title: 'Our Campus', cat: 'Campus' },
  { src: '/assets/images/g-classroom.jpg', title: 'Primary Classroom', cat: 'Classrooms' },
  { src: '/assets/images/g-children.jpg', title: 'Playtime', cat: 'Children' },
  { src: '/assets/images/g-swimming.jpg', title: 'Swimming Lessons', cat: 'Swimming' },
  { src: '/assets/images/g-lab.jpg', title: 'Computer Lab', cat: 'Computer Lab' },
  { src: '/assets/images/g-events.jpg', title: 'Graduation Day', cat: 'Events' },
  { src: '/assets/images/g-playground.jpg', title: 'Playground', cat: 'Campus' },
  { src: '/assets/images/g-library.jpg', title: 'School Library', cat: 'Classrooms' },
  { src: '/assets/images/g-nursery.jpg', title: 'Nursery Learners', cat: 'Children' },
  { src: '/assets/images/g-sports.jpg', title: 'Sports Day', cat: 'Events' },
  { src: '/assets/images/g-art.jpg', title: 'Art & Craft', cat: 'Events' },
  { src: '/assets/images/g-tour.jpg', title: 'Educational Tour', cat: 'Events' },
];

export default function GalleryPage() {
  return (
    <main id="main">
      {/* Page hero */}
      <section className="page-hero" style={{ backgroundImage: "url('/assets/images/g-children.jpg')" }} aria-label="School gallery">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link> <span>&rsaquo;</span> <span>Gallery</span>
          </nav>
          <h1>Photo Gallery</h1>
          <p>A collection of moments from campus life — classrooms, swimming, computer lab, events and the smiling faces of our learners.</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section" id="gallery">
        <div className="container">
          <GalleryGrid
            images={images}
            categories={categories}
            gridId="galleryGrid"
            delayMod={4}
          />
        </div>
      </section>
    </main>
  );
}
