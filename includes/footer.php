<?php
/**
 * Site Footer — reusable across every page.
 */
?>

<!-- Call to action -->
<section class="section" id="cta">
  <div class="container">
    <div class="cta reveal" style="background-image:url('assets/images/cta-bg.jpg')">
      <div class="container">
        <span class="offer-pill"><?= svg_icon('gift') ?> Free admission &amp; school uniform for the first 20 children</span>
        <h2>Begin Your Child's Journey With Us</h2>
        <p>Give your child the gift of a strong, joyful start. Places are limited and the new academic year fills quickly — book a visit today and see our campus on Hoima Road, Nampunge.</p>
        <div class="cta-buttons">
          <a class="btn btn--gold btn--shine" href="admissions.php"><?= svg_icon('send') ?> Apply for Admission</a>
          <a class="btn btn--ghost" href="contact.php"><?= svg_icon('phone') ?> Talk to Us</a>
        </div>
      </div>
    </div>
  </div>
</section>

<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">

      <!-- Brand + newsletter -->
      <div class="footer-col">
        <a class="brand" href="index.php" aria-label="<?= htmlspecialchars(SCHOOL_NAME) ?> — Home">
          <span class="brand-logo" aria-hidden="true"><?= svg_icon('graduation-cap', 30) ?></span>
          <span class="brand-text">
            <span class="name">Ebenezer Junior School</span>
            <span class="tag">Nampunge &middot; Every Child Matters</span>
          </span>
        </a>
        <p class="about-txt">A caring, child-centred nursery and primary school on Hoima Road, Nampunge, nurturing confident learners through academic excellence, creativity and strong moral values.</p>
        <div class="social-row">
          <a href="<?= htmlspecialchars(SOCIAL_FACEBOOK) ?>" aria-label="Facebook" title="Facebook"><?= svg_icon('facebook') ?></a>
          <a href="<?= htmlspecialchars(SOCIAL_INSTAGRAM) ?>" aria-label="Instagram" title="Instagram"><?= svg_icon('instagram') ?></a>
          <a href="<?= htmlspecialchars(SOCIAL_TWITTER) ?>" aria-label="X (Twitter)" title="X (Twitter)"><?= svg_icon('twitter') ?></a>
          <a href="<?= htmlspecialchars(SOCIAL_YOUTUBE) ?>" aria-label="YouTube" title="YouTube"><?= svg_icon('youtube') ?></a>
          <a href="<?= htmlspecialchars(SOCIAL_WHATSAPP) ?>" aria-label="WhatsApp" title="WhatsApp"><?= svg_icon('whatsapp') ?></a>
        </div>
      </div>

      <!-- Quick links -->
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul class="footer-links">
          <li><a href="index.php">Home</a></li>
          <li><a href="about.php">About Us</a></li>
          <li><a href="admissions.php">Admissions</a></li>
          <li><a href="curriculum.php">Curriculum</a></li>
          <li><a href="gallery.php">Gallery</a></li>
          <li><a href="activities.php">Activities</a></li>
          <li><a href="contact.php">Contact</a></li>
        </ul>
      </div>

      <!-- Programmes -->
      <div class="footer-col">
        <h4>Programmes</h4>
        <ul class="footer-links">
          <li><a href="curriculum.php#nursery">Nursery School</a></li>
          <li><a href="curriculum.php#primary">Primary School</a></li>
          <li><a href="curriculum.php#competency">Competency Based Learning</a></li>
          <li><a href="activities.php">Co-Curricular Activities</a></li>
          <li><a href="admissions.php#requirements">Required Documents</a></li>
          <li><a href="gallery.php">School Life</a></li>
        </ul>
      </div>

      <!-- Contact + newsletter -->
      <div class="footer-col">
        <h4>Get in Touch</h4>
        <ul class="footer-contact">
          <li><?= svg_icon('map-pin') ?><span><?= htmlspecialchars(SCHOOL_ADDRESS_1 . ', ' . SCHOOL_ADDRESS_2 . ', ' . SCHOOL_ADDRESS_3) ?></span></li>
          <li><?= svg_icon('phone') ?><span><a href="tel:<?= htmlspecialchars(SCHOOL_PHONE_1_RAW) ?>"><?= htmlspecialchars(SCHOOL_PHONE_1) ?></a> / <a href="tel:<?= htmlspecialchars(SCHOOL_PHONE_2_RAW) ?>"><?= htmlspecialchars(SCHOOL_PHONE_2) ?></a></span></li>
          <li><?= svg_icon('mail') ?><span><a href="mailto:<?= htmlspecialchars(SCHOOL_EMAIL) ?>"><?= htmlspecialchars(SCHOOL_EMAIL) ?></a></span></li>
        </ul>

        <div class="newsletter">
          <p>Subscribe for school news, term dates and updates.</p>
          <form id="newsletterForm" novalidate>
            <label for="newsletterEmail" class="sr-only">Email address</label>
            <input type="email" id="newsletterEmail" name="email" placeholder="Your email address" autocomplete="email">
            <button class="btn btn--gold" type="submit" aria-label="Subscribe"><?= svg_icon('send') ?></button>
          </form>
          <p class="newsletter-msg" id="newsletterMsg" role="status" aria-live="polite"></p>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; <?= date('Y') ?> <?= htmlspecialchars(SCHOOL_NAME) ?>. All rights reserved.</p>
      <p>Made with <span class="heart">&hearts;</span> for our children in Uganda</p>
    </div>
  </div>
</footer>

<!-- Back to top -->
<button class="back-to-top" id="backToTop" aria-label="Back to top"><?= svg_icon('chevron-up', 22) ?></button>

<!-- Global image lightbox -->
<div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Image preview">
  <div class="lightbox-inner">
    <button class="lightbox-close" id="lbClose" aria-label="Close preview"><?= svg_icon('x') ?></button>
    <button class="lightbox-prev" id="lbPrev" aria-label="Previous image"><?= svg_icon('chevron-left') ?></button>
    <img id="lbImage" src="" alt="Enlarged gallery image">
    <button class="lightbox-next" id="lbNext" aria-label="Next image"><?= svg_icon('chevron-right') ?></button>
    <div class="lightbox-caption">
      <p id="lbTitle"></p>
      <small id="lbCat"></small>
    </div>
  </div>
</div>

<!-- Scripts -->
<script src="assets/js/main.js" defer></script>
</body>
</html>
