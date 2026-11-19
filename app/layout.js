import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SiteEffects from '@/components/SiteEffects';
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_KEYWORDS,
  SCHOOL_NAME,
  SCHOOL_TAGLINE,
  SITE_URL,
} from '@/lib/site';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SCHOOL_NAME,
    template: `%s | ${SCHOOL_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  authors: [{ name: SCHOOL_NAME }],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    title: SCHOOL_NAME,
    description: DEFAULT_DESCRIPTION,
    siteName: SCHOOL_NAME,
    images: [{ url: '/assets/images/og-cover.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SCHOOL_NAME,
    description: DEFAULT_DESCRIPTION,
    images: ['/assets/images/og-cover.jpg'],
  },
  icons: {
    icon: '/assets/images/favicon.png',
    apple: '/assets/images/apple-touch-icon.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#16317A',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js');" }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">Skip to main content</a>
        <Navbar />
        {children}
        <Footer />
        <SiteEffects />
      </body>
    </html>
  );
}
