<?php
/**
 * Admissions Page — process, documents, visits, interviews, enrolment
 */
require_once __DIR__ . '/includes/config.php';
$pageTitle       = 'Admissions';
$pageDescription = 'Admissions are open at ' . SCHOOL_NAME . ' Nampunge. Learn about our simple admission process, required documents, school visits, interviews and enrolment. Free admission and uniform for the first 20 children.';
$pageKeywords    = 'school admission Uganda, enrollment, school documents required, nursery admission Wakiso, primary admission, free uniform, Ebenezer Junior School admission';
$currentPage     = 'admissions.php';

include 'includes/header.php';

$steps = [
    ['num' => '1', 'title' => 'Visit the School', 'text' => 'Book a visit, tour our campus and meet the teachers. We welcome families any school day from 8:00am to 5:00pm.'],
    ['num' => '2', 'title' => 'Fill the Enrolment Form', 'text' => 'Collect or download our admission form, complete it with your child’s details and submit it at the school office.'],
    ['num' => '3', 'title' => 'Submit Documents', 'text' => 'Hand in the required documents listed below. Our team will review them and guide you through the next step.'],
    ['num' => '4', 'title' => 'Child Interview & Assessment', 'text' => 'A friendly, informal meeting where our teachers get to know your child. It is a happy conversation, not an exam.'],
    ['num' => '5', 'title' => 'Confirmation & Enrolment', 'text' => 'Once accepted, pay the enrolment fee, receive your child’s welcome pack and get ready for their first day!'],
];

$documents = [
    'Child’s birth certificate',
    'Immunisation / child health card',
    'Two passport-size photos of the child',
    'Parent / guardian National ID or passport',
    'Previous school report (for P2 and above)',
    'Completed admission form',
    'Transfer letter from previous school (where applicable)',
];

$faqs = [
    ['q' => 'From what age can my child join the school?', 'a' => 'Children can join from 1½ years in our nursery section and up to Primary level in the primary section. We accept learners at any stage of the academic year, space permitting.'],
    ['q' => 'When are admissions open?', 'a' => 'Admissions are open all year round. However, places fill quickly at the start of each term, so we encourage families to apply early to secure a place.'],
    ['q' => 'Is there really free admission and a free uniform?', 'a' => 'Yes! As part of our welcome offer, the first 20 children to complete enrolment receive free admission and a free school uniform. After that, our regular, affordable fees apply.'],
    ['q' => 'Do you provide school transport?', 'a' => 'Yes. We offer reliable, safe school transport to and from school across surrounding areas in Wakiso. Transport routes are shared at enrolment.'],
    ['q' => 'What documents do I need to bring?', 'a' => 'A birth certificate, immunisation card, passport-size photos, a parent ID and, for higher classes, the previous school report. The full list is on this page.'],
    ['q' => 'Can I visit the school before enrolling?', 'a' => 'Absolutely — we encourage it! Call us on 0782 011079 or 0701 626281 to arrange a free school tour and meet our teachers.'],
];
?>

<main id="main">

  <!-- Page hero -->
  <section class="page-hero" style="background-image:url('assets/images/g-campus.jpg')" aria-label="Admissions open">
    <div class="container">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <a href="index.php">Home</a> <span>&rsaquo;</span> <span>Admissions</span>
      </nav>
      <h1>Admissions Open</h1>
      <p>We are accepting new learners for this academic year. Give your child the warm, excellent start they deserve.</p>
    </div>
  </section>

  <!-- Offer highlight -->
  <section class="section section--tight">
    <div class="container">
      <div class="offer-banner reveal">
        <div class="offer-icon"><?= svg_icon('gift') ?></div>
        <div>
          <h3>Free Admission &amp; Free School Uniform!</h3>
          <p>The first 20 children to complete enrolment receive free admission and a free school uniform. Act now — places are limited!</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Steps -->
  <section class="section section--tight" id="process">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">Admission Process</span>
        <h2>Joining Ebenezer is easy</h2>
        <p class="lead">Five simple steps from your first visit to your child’s first day.</p>
      </div>

      <div class="steps">
        <?php foreach ($steps as $i => $s): ?>
          <div class="step reveal d-<?= ($i % 4) + 1 ?>">
            <div class="step-num"><?= htmlspecialchars($s['num']) ?></div>
            <h3><?= htmlspecialchars($s['title']) ?></h3>
            <p><?= htmlspecialchars($s['text']) ?></p>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- Documents + enquiry -->
  <section class="section section--tight" id="requirements">
    <div class="container split">
      <div class="split-text reveal">
        <span class="eyebrow">Required Documents</span>
        <h2>What to bring when enrolling</h2>
        <p>To complete your child’s enrolment, please prepare the following documents. Our office team is always happy to help if anything is missing.</p>
        <div class="doc-list" style="margin-top:26px;">
          <h3><?= svg_icon('file-text') ?> Required Documents</h3>
          <ul>
            <?php foreach ($documents as $doc): ?>
              <li><?= svg_icon('check-circle') ?> <?= htmlspecialchars($doc) ?> <span>&bull;</span></li>
            <?php endforeach; ?>
          </ul>
        </div>
      </div>

      <div class="split-media reveal">
        <div class="img-frame" style="aspect-ratio:4/3.2;">
          <img src="assets/images/about-secondary.jpeg" alt="Learning materials awaiting our new learners" loading="lazy" width="800" height="640">
        </div>
        <div class="chips" style="margin-top:18px;">
          <span class="chip"><?= svg_icon('eye') ?> School Visits</span>
          <span class="chip"><?= svg_icon('users') ?> Friendly Interview</span>
          <span class="chip"><?= svg_icon('send') ?> Easy Enrolment</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Visits, interview, enrolment -->
  <section class="section section--tint section--tight" id="visits">
    <div class="container">
      <div class="grid grid--3">
        <article class="card reveal d-1">
          <div class="card-icon"><?= svg_icon('eye') ?></div>
          <h3>School Visits</h3>
          <p>See our classrooms, library, computer lab, swimming pool and playground for yourself. A visit is the best way to feel the warmth of our community — and it’s always free.</p>
        </article>
        <article class="card reveal d-2">
          <div class="card-icon"><?= svg_icon('users') ?></div>
          <h3>Child Interview</h3>
          <p>A relaxed, friendly chat where our teachers get to know your child’s personality and learning style. It’s designed to reassure, not to pressure — every child leaves smiling.</p>
        </article>
        <article class="card reveal d-3">
          <div class="card-icon"><?= svg_icon('rocket') ?></div>
          <h3>Enrolment</h3>
          <p>Complete the simple paperwork, receive your welcome pack and uniform, and your child joins our family. We support new learners through a gentle, caring transition.</p>
        </article>
      </div>
    </div>
  </section>

  <!-- Enquiry CTA -->
  <section class="section section--tight">
    <div class="container">
      <div class="cta reveal" style="background-image:url('assets/images/cta-bg.jpg')">
        <div class="container">
          <span class="offer-pill"><?= svg_icon('phone') ?> Free admission &amp; uniform for the first 20 children</span>
          <h2>Ready to apply?</h2>
          <p>Our admissions team is ready to welcome you. Send us an enquiry or call today to book your school visit.</p>
          <div class="cta-buttons">
            <a class="btn btn--gold btn--shine" href="contact.php"><?= svg_icon('send') ?> Admission Enquiry</a>
            <a class="btn btn--ghost" href="tel:<?= htmlspecialchars(SCHOOL_PHONE_1_RAW) ?>"><?= svg_icon('phone') ?> <?= htmlspecialchars(SCHOOL_PHONE_1) ?></a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="section section--tint" id="faq">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">Admission FAQ</span>
        <h2>Frequently asked questions</h2>
        <p class="lead">Answers to the questions parents ask us most.</p>
      </div>

      <div class="faq-list">
        <?php foreach ($faqs as $i => $f): ?>
          <div class="faq-item reveal d-<?= ($i % 3) + 1 ?>">
            <button class="faq-q" aria-expanded="false">
              <?= htmlspecialchars($f['q']) ?>
              <span class="icon"><?= svg_icon('plus') ?></span>
            </button>
            <div class="faq-a"><div class="inner"><?= htmlspecialchars($f['a']) ?></div></div>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

</main>

<?php include 'includes/footer.php'; ?>
