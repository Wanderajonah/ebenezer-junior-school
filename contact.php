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
 * Form handling (server-side validation)
 * --------------------------------------------------------- */
$errors   = [];
$alert    = null;
$alertType = '';
$old = ['name' => '', 'email' => '', 'phone' => '', 'message' => ''];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $old['name']    = trim($_POST['name'] ?? '');
    $old['email']   = trim($_POST['email'] ?? '');
    $old['phone']   = trim($_POST['phone'] ?? '');
    $old['message'] = trim($_POST['message'] ?? '');

    // Validate
    if ($old['name'] === '' || mb_strlen($old['name']) < 2) {
        $errors['name'] = 'Please enter the parent / guardian name.';
    }
    if ($old['email'] === '' || !filter_var($old['email'], FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = 'Please enter a valid email address.';
    }
    if ($old['phone'] !== '' && !preg_match('/^[0-9+\-\s]{9,15}$/', $old['phone'])) {
        $errors['phone'] = 'Please enter a valid phone number.';
    }
    if ($old['message'] === '' || mb_strlen($old['message']) < 10) {
        $errors['message'] = 'Please write a message of at least 10 characters.';
    }

    if (empty($errors)) {
        // Attempt to save to the database when enabled (optional future upgrade)
        $db = getDB();
        if ($db !== null) {
            try {
                $stmt = $db->prepare('INSERT INTO enquiries (name, email, phone, message, created_at) VALUES (?, ?, ?, ?, NOW())');
                $stmt->execute([$old['name'], $old['email'], $old['phone'], $old['message']]);
            } catch (PDOException $e) {
                error_log('Enquiry insert failed: ' . $e->getMessage());
            }
        }

        // Attempt to email the school
        $subject = 'New website enquiry from ' . $old['name'];
        $body    = "Name: {$old['name']}\nEmail: {$old['email']}\nPhone: {$old['phone']}\n\nMessage:\n{$old['message']}\n";
        $headers = 'From: ' . SCHOOL_EMAIL . "\r\n" . 'Reply-To: ' . $old['email'];
        $sent    = @mail(SCHOOL_EMAIL, $subject, $body, $headers);

        $alertType = 'success';
        $alert = 'Thank you, ' . htmlspecialchars($old['name']) . '! Your message has been received. Our team will contact you shortly.';
        $old = ['name' => '', 'email' => '', 'phone' => '', 'message' => ''];
        unset($sent);
    } else {
        $alertType = 'error';
        $alert = 'Please fix the highlighted fields below and try again.';
    }
}
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

          <form id="contactForm" action="contact.php" method="post" novalidate>
            <div class="form-grid">
              <div class="field <?= isset($errors['name']) ? 'error' : '' ?>">
                <label for="name">Your Name <span>*</span></label>
                <input type="text" id="name" name="name" value="<?= htmlspecialchars($old['name']) ?>" placeholder="e.g. Sarah Nakato" required autocomplete="name">
                <small class="error-msg"><?= $errors['name'] ?? '' ?></small>
              </div>

              <div class="field <?= isset($errors['phone']) ? 'error' : '' ?>">
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" value="<?= htmlspecialchars($old['phone']) ?>" placeholder="e.g. 0782 011079" autocomplete="tel">
                <small class="error-msg"><?= $errors['phone'] ?? '' ?></small>
              </div>

              <div class="field field--full <?= isset($errors['email']) ? 'error' : '' ?>">
                <label for="email">Email Address <span>*</span></label>
                <input type="email" id="email" name="email" value="<?= htmlspecialchars($old['email']) ?>" placeholder="e.g. parent@example.com" required autocomplete="email">
                <small class="error-msg"><?= $errors['email'] ?? '' ?></small>
              </div>

              <div class="field field--full <?= isset($errors['message']) ? 'error' : '' ?>">
                <label for="message">Your Message <span>*</span></label>
                <textarea id="message" name="message" placeholder="Tell us about your enquiry — admissions, school visit, fees…" required><?= htmlspecialchars($old['message']) ?></textarea>
                <small class="error-msg"><?= $errors['message'] ?? '' ?></small>
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
