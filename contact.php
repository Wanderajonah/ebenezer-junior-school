<?php
/**
 * Contact Page — contact details, map and working enquiry form
 */
require_once __DIR__ . '/includes/config.php';
$pageTitle       = 'Contact Us';
$pageDescription = 'Contact ' . SCHOOL_NAME . ' — Hoima Road, Nampunge, Wakiso, Uganda. Call 0782 011079 / 0701 626281 or email ebenezerjuniorn@gmail.com for admissions and enquiries.';
$pageKeywords    = 'contact school Uganda, Ebenezer Junior School, Nampunge Wakiso, Hoima Road, school phone, school email, school enquiry';
$currentPage     = 'contact.php';

include 'includes/header.php';

/* ---------------------------------------------------------
 * Form handling
 * ---------------------------------------------------------
 * The enquiry form posts to FormSubmit.co (free email relay),
 * because InfinityFree does not support PHP mail(). After a
 * successful send, FormSubmit redirects back to contact.php?sent=1
 * where we show the confirmation message below.
 * --------------------------------------------------------- */
$alert    = null;
$alertType = '';

if (isset($_GET['sent'])) {
    $alertType = 'success';
    $alert = 'Thank you! Your message has been received. Our team will contact you shortly.';
}

$formSubmitUrl  = 'https://formsubmit.co/' . urlencode(SCHOOL_EMAIL);
$formNextUrl    = ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http')
    . '://' . ($_SERVER['HTTP_HOST'] ?? 'localhost')
    . rtrim(str_replace(basename($_SERVER['SCRIPT_NAME'] ?? 'contact.php'), '', $_SERVER['SCRIPT_NAME'] ?? ''), '/')
    . '/contact.php?sent=1';
?>

<main id="main">

  <!-- Page hero -->
  <section class="page-hero" style="background-image:url('assets/images/hero-1.jpg')" aria-label="Contact us">
    <div class="container">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <a href="index.php">Home</a> <span>&rsaquo;</span> <span>Contact Us</span>
      </nav>
      <h1>Contact Us</h1>
      <p>We would love to hear from you — visit us, call us, or send us a message and we will reply promptly.</p>
    </div>
  </section>

  <!-- Contact info + form -->
  <section class="section" id="contact">
    <div class="container">
      <div class="contact-grid">

        <!-- Info card -->
        <aside class="contact-info-card reveal reveal--left">
          <span class="eyebrow" style="color:var(--gold);">Get in Touch</span>
          <h2><?= htmlspecialchars(SCHOOL_NAME) ?></h2>
          <p>Our doors (and our hearts) are open. Reach out to us for admissions, school visits or any enquiry.</p>

          <div class="c-detail">
            <span class="c-icon"><?= svg_icon('map-pin') ?></span>
            <div>
              <h4>Visit Us</h4>
              <p><?= htmlspecialchars(SCHOOL_ADDRESS_1) ?><br><?= htmlspecialchars(SCHOOL_ADDRESS_2) ?>, <?= htmlspecialchars(SCHOOL_ADDRESS_3) ?></p>
            </div>
          </div>

          <div class="c-detail">
            <span class="c-icon"><?= svg_icon('phone') ?></span>
            <div>
              <h4>Call Us</h4>
              <p><a href="tel:<?= htmlspecialchars(SCHOOL_PHONE_1_RAW) ?>"><?= htmlspecialchars(SCHOOL_PHONE_1) ?></a><br><a href="tel:<?= htmlspecialchars(SCHOOL_PHONE_2_RAW) ?>"><?= htmlspecialchars(SCHOOL_PHONE_2) ?></a></p>
            </div>
          </div>

          <div class="c-detail">
            <span class="c-icon"><?= svg_icon('mail') ?></span>
            <div>
              <h4>Email Us</h4>
              <p><a href="mailto:<?= htmlspecialchars(SCHOOL_EMAIL) ?>"><?= htmlspecialchars(SCHOOL_EMAIL) ?></a></p>
            </div>
          </div>

          <div class="c-detail">
            <span class="c-icon"><?= svg_icon('clock') ?></span>
            <div>
              <h4>Office Hours</h4>
              <p>Monday – Friday: 8:00am – 5:00pm<br>Saturday: 9:00am – 1:00pm</p>
            </div>
          </div>

          <div class="social-row" style="margin-top:26px;">
            <a href="<?= htmlspecialchars(SOCIAL_FACEBOOK) ?>" aria-label="Facebook"><?= svg_icon('facebook') ?></a>
            <a href="<?= htmlspecialchars(SOCIAL_INSTAGRAM) ?>" aria-label="Instagram"><?= svg_icon('instagram') ?></a>
            <a href="<?= htmlspecialchars(SOCIAL_TWITTER) ?>" aria-label="X (Twitter)"><?= svg_icon('twitter') ?></a>
            <a href="<?= htmlspecialchars(SOCIAL_WHATSAPP) ?>" aria-label="WhatsApp"><?= svg_icon('whatsapp') ?></a>
          </div>
        </aside>

        <!-- Form -->
        <div class="form-card reveal reveal--right">
          <h2>Send us a message</h2>
          <p>Fill in the form below and our team will get back to you as soon as possible.</p>

          <?php if ($alert): ?>
            <div class="form-alert <?= htmlspecialchars($alertType) ?>" role="alert"><?= htmlspecialchars($alert) ?></div>
          <?php endif; ?>

          <form id="contactForm" action="<?= htmlspecialchars($formSubmitUrl) ?>" method="POST" novalidate>
            <input type="hidden" name="_subject" value="New website enquiry from the contact page">
            <input type="hidden" name="_template" value="box">
            <input type="hidden" name="_captcha" value="false">
            <input type="hidden" name="_next" value="<?= htmlspecialchars($formNextUrl) ?>">
            <input type="text" name="_honey" style="display:none" tabindex="-1" autocomplete="off">
            <div class="form-grid">
              <div class="field">
                <label for="name">Your Name <span>*</span></label>
                <input type="text" id="name" name="name" placeholder="e.g. Sarah Nakato" required autocomplete="name">
                <small class="error-msg"></small>
              </div>

              <div class="field">
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="e.g. 0782 011079" autocomplete="tel">
                <small class="error-msg"></small>
              </div>

              <div class="field field--full">
                <label for="email">Email Address <span>*</span></label>
                <input type="email" id="email" name="email" placeholder="e.g. parent@example.com" required autocomplete="email">
                <small class="error-msg"></small>
              </div>

              <div class="field field--full">
                <label for="message">Your Message <span>*</span></label>
                <textarea id="message" name="message" placeholder="Tell us about your enquiry — admissions, school visit, fees…" required></textarea>
                <small class="error-msg"></small>
              </div>

              <div class="field field--full">
                <button type="submit" class="btn btn--primary btn--block"><?= svg_icon('send') ?> Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Map -->
  <section class="section section--tight" id="map">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">Find Us</span>
        <h2>We are on Hoima Road, Nampunge</h2>
        <p class="lead">Easily accessible from Kampala and surrounding areas of Wakiso District.</p>
      </div>
      <div class="map-wrap reveal">
        <iframe src="<?= htmlspecialchars(MAP_EMBED_SRC) ?>" width="100%" height="420" style="border:0;" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade"
                title="Map showing the location of <?= htmlspecialchars(SCHOOL_NAME) ?> on Hoima Road, Nampunge, Wakiso"></iframe>
      </div>
    </div>
  </section>

</main>

<?php include 'includes/footer.php'; ?>
