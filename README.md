# Ebenezer Junior School Nampunge — Official Website

A modern, responsive, production-ready school website for **Ebenezer Junior School Nampunge** (Hoima Road, Nampunge, Wakiso, Uganda). The site is built entirely with hand-coded **PHP, HTML5, CSS3 and Vanilla JavaScript** — no frameworks, no libraries, no build tools.

> Tagline: **Every Child Matters**

---

## Features at a glance

- **7 pages** — Home, About, Curriculum, Activities, Gallery, Admissions, Contact
- **Reusable PHP includes** — header, navbar, footer, config, icon library
- **Premium design system** — Deep Royal Blue, Sky Blue, Warm Gold, White, Very Light Blue cards, Dark Gray text
- **Fully responsive** — desktop, laptop, tablet, mobile and large screens
- **Interactions** — hero image slider, gallery lightbox, scroll reveal animations, sticky transparent→solid navbar, counter animations, parallax, back-to-top, button ripple, FAQ accordion, testimonials slider, gallery filters, smooth scrolling
- **Working contact form** — server-side PHP validation, success/error feedback
- **SEO ready** — meta title, description, keywords, Open Graph tags, semantic HTML, accessible labels, alt text on every image
- **Performance** — lazy-loaded images, optimized CSS, deferred JavaScript, reusable components, zero duplicated code
- **Database-ready** — a single `getDB()` helper prepares the site to connect to MySQL without touching page layouts

---

## Project structure

```
/
├── index.php            # Home page
├── about.php            # About the school
├── curriculum.php       # Curriculum overview
├── activities.php       # Co-curricular activities
├── gallery.php          # Photo gallery + lightbox
├── contact.php          # Contact details + form + map
├── admissions.php       # Admissions process + FAQ
│
├── assets/
│   ├── css/
│   │   └── style.css    # Full design system (single stylesheet)
│   ├── js/
│   │   └── main.js      # All interactive behaviour (vanilla JS)
│   ├── images/          # Real photos (JPG) — swap freely
│   └── icons/           # Reserved for future static icon files
│
├── includes/
│   ├── config.php       # Site-wide settings (contact, social, DB)
│   ├── header.php       # <head> + SEO meta + opening shell
│   ├── navbar.php       # Topbar + sticky navigation + mobile drawer
│   ├── footer.php       # CTA, footer, newsletter, back-to-top
│   └── icons.php        # Reusable inline SVG icon library
│
└── README.md
```

---

## Running the site

### Option A — PHP built-in server (recommended for development)

```bash
php -S localhost:8000
```

Then open http://localhost:8000 in your browser.

### Option B — Apache / Nginx

Point your document root at the project folder and make sure PHP is enabled.
A ready-to-use `.htaccess` (compression, caching, security headers) is included for Apache hosts.
The site uses no URL rewriting or routing, so it also works on any standard PHP host.

---

## Customising content

All site-wide information lives in **one place**: `includes/config.php`.

| Setting | Purpose |
| --- | --- |
| `SCHOOL_NAME`, `SCHOOL_TAGLINE` | Used across headers, footers, meta tags |
| `SCHOOL_PHONE_1`, `SCHOOL_PHONE_2` | Phone numbers |
| `SCHOOL_EMAIL` | Contact email |
| `SOCIAL_FACEBOOK`, `SOCIAL_INSTAGRAM` … | Social media profile URLs (currently placeholders) |
| `MAP_EMBED_SRC` | Google Maps embed URL (replace with your real embed link) |

Individual page content (text, cards, images) is edited directly inside each page file, typically as PHP arrays at the top of the file — easy to read and update.

---

## Replacing the photos

The site ships with **real photographs** (CC0 / public-domain, free for commercial use, no attribution required) in `assets/images/`. To use your own school photos:

1. Add your photos to `assets/images/` (JPG or WebP recommended for speed).
2. Replace the matching files (e.g. `hero-1.jpg`, `g-campus.jpg`, `about-main.jpg`). The site is wired by filename, so no code changes are needed if you keep the same names.
3. Update the `alt` text next to each image so it describes the actual photo (good for accessibility and SEO).

> Tip: serve compressed JPGs at ~1600px wide for the hero and ~800px wide for gallery cards.

---

## Working with the contact form

The form in `contact.php`:

- Validates **name, email, phone and message** on the server
- Attempts to send an email to `SCHOOL_EMAIL` via PHP `mail()`
- (Optionally) saves enquiries to MySQL when enabled (see below)
- Shows clear success / error messages

On shared hosting, `mail()` may require an SMTP plugin (e.g. WP Mail SMTP equivalent for plain PHP) — ask your host for their mail settings if emails don't arrive.

---

## Connecting MySQL (future upgrade)

The site is **database-ready** without any layout changes:

1. In `includes/config.php`, set `DB_ENABLED` to `true` and fill in `DB_HOST`, `DB_NAME`, `DB_USER`, `DB_PASS`.
2. Use the shared `getDB()` helper in any page to run queries.

Example table used by the contact form:

```sql
CREATE TABLE enquiries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  email VARCHAR(160) NOT NULL,
  phone VARCHAR(40) DEFAULT NULL,
  message TEXT NOT NULL,
  created_at DATETIME NOT NULL
);
```

---

## Browser support

Chrome, Firefox, Safari, Edge — current two versions. Built with CSS3 features only (grid, custom properties, `backdrop-filter` with graceful fallback).

---

## Design notes

- **Palette:** `#16317A` royal blue · `#33A9E0` sky blue · `#E8B04B` warm gold · `#F2F7FD` card blue · `#243043` text
- **Typography:** Playfair Display (headings) + Plus Jakarta Sans (body) via Google Fonts
- The design is **original** — inspired by the premium feel of top international school sites, not copied from any of them.

---

## Deployment to a web host

1. **Upload** the whole project folder to your host's `public_html` (or equivalent), keeping the structure intact.
2. **Permissions:** folders `755`, files `644`. If the host wants writable upload folders, adjust only those.
3. **Apache** picks up the bundled `.htaccess` automatically (compression, caching, security headers).
4. **Contact form:** if `mail()` doesn't deliver on your host, ask them for SMTP settings or use their mail plugin — update `contact.php` accordingly.
5. **Google Maps:** replace `MAP_EMBED_SRC` in `includes/config.php` with your real embed URL.
6. **Git** (optional): `git init && git add . && git commit` — a `.gitignore` is included so no OS junk or logs get committed.

---

## License

Provided for the use of Ebenezer Junior School Nampunge. All content, layout and code are original.
