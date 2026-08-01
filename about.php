<?php
/**
 * About Page — mission, vision, values, history, philosophy
 */
require_once __DIR__ . '/includes/config.php';
$pageTitle       = 'About Us';
$pageDescription = 'Discover the story, mission, vision, core values and educational philosophy of ' . SCHOOL_NAME . ' — a nurturing nursery and primary school in Nampunge, Wakiso, Uganda.';
$pageKeywords    = 'about Ebenezer Junior School, school mission Uganda, school vision, core values, school history Nampunge, educational philosophy';
$currentPage     = 'about.php';

include 'includes/header.php';

$values = [
    ['num' => '01', 'title' => 'Love & Care',    'text' => 'We treat every child with warmth, patience and genuine affection — the foundation of all learning.'],
    ['num' => '02', 'title' => 'Academic Excellence', 'text' => 'We set high expectations and give every child the support to reach them.'],
    ['num' => '03', 'title' => 'Integrity',       'text' => 'We teach honesty, responsibility and doing the right thing — even when no one is watching.'],
    ['num' => '04', 'title' => 'Respect',         'text' => 'We honour God, our parents, our teachers, our peers and our beautiful country.'],
    ['num' => '05', 'title' => 'Creativity',      'text' => 'We celebrate imagination, curiosity and original thinking in every lesson and activity.'],
    ['num' => '06', 'title' => 'Discipline',      'text' => 'We nurture self-control, hard work and order — the quiet keys to lasting success.'],
    ['num' => '07', 'title' => 'Teamwork',        'text' => 'We learn, play and grow together, supporting one another like a family.'],
    ['num' => '08', 'title' => 'Joyful Learning', 'text' => 'School should be a happy place. We make sure it is, every single day.'],
];

$history = [
    ['year' => '2014', 'text' => 'Ebenezer Junior School opens its doors in Nampunge, Wakiso, with a small class of nursery children and a big dream — to give every child a loving, excellent start.'],
    ['year' => '2016', 'text' => 'The school expands into the primary section, welcoming P1 learners and growing our family of dedicated teachers.'],
    ['year' => '2019', 'text' => 'New classrooms, a computer lab and a library are added, and ICT lessons become part of every learner’s week.'],
    ['year' => '2021', 'text' => 'A swimming programme is introduced, and our balanced meals and special-needs support win the trust of more families.'],
    ['year' => '2024', 'text' => 'Ebenezer celebrates a decade of nurturing children, with hundreds of confident young graduates moving on to secondary schools.'],
    ['year' => 'Today', 'text' => 'We continue to grow — modern classrooms, safe transport, joyful activities and a community of parents and teachers united around one belief: Every Child Matters.'],
];
?>

<main id="main">

  <!-- Page hero -->
  <section class="page-hero" style="background-image:url('assets/images/about-main.jpg')" aria-label="About Ebenezer Junior School">
    <div class="container">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <a href="index.php">Home</a> <span>&rsaquo;</span> <span>About Us</span>
      </nav>
      <h1>About Our School</h1>
      <p>A caring community on Hoima Road, Nampunge, where academic excellence meets character formation — and every child truly matters.</p>
    </div>
  </section>

  <!-- Mission / Vision / Motto -->
  <section class="section" id="mission">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">Who We Are</span>
        <h2>Our mission, vision and motto</h2>
        <p class="lead">These three statements shape every decision we make and every moment your child spends with us.</p>
      </div>

      <div class="mv-grid">
        <div class="mv-card reveal d-1">
          <div class="mv-icon"><?= svg_icon('target') ?></div>
          <h3>Our Mission</h3>
          <p>To provide quality, affordable and Christ-centred education that nurtures every child academically, morally and socially — preparing confident, disciplined and creative future leaders who will serve their families, communities and nation.</p>
        </div>
        <div class="mv-card reveal d-2">
          <div class="mv-icon"><?= svg_icon('eye') ?></div>
          <h3>Our Vision</h3>
          <p>To be the leading nursery and primary school in Wakiso District — a beacon of academic excellence, character formation and joyful learning that parents trust and children love.</p>
        </div>
        <div class="mv-card reveal d-3">
          <div class="mv-icon"><?= svg_icon('flag') ?></div>
          <h3>Our Motto</h3>
          <p><em><?= SCHOOL_MOTTO ?></em><br>Knowledge lights the way, virtue keeps us steady, and integrity makes us trustworthy — the three strands woven through everything we teach.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Core values -->
  <section class="section section--tint" id="values">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">Core Values</span>
        <h2>The values we live and teach</h2>
        <p class="lead">Character is caught as much as it is taught. These are the values we model daily and encourage in every child.</p>
      </div>

      <div class="values">
        <?php foreach ($values as $i => $v): ?>
          <div class="value-item reveal d-<?= ($i % 4) + 1 ?>">
            <div class="v-num"><?= htmlspecialchars($v['num']) ?></div>
            <h4><?= htmlspecialchars($v['title']) ?></h4>
            <p><?= htmlspecialchars($v['text']) ?></p>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- History timeline -->
  <section class="section" id="history">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">School History</span>
        <h2>Our journey of growth</h2>
        <p class="lead">From a single nursery class to a thriving school community — this is the story of Ebenezer.</p>
      </div>

      <div class="timeline">
        <?php foreach ($history as $i => $h): ?>
          <div class="tl-item reveal d-<?= ($i % 3) + 1 ?>">
            <span class="tl-dot" aria-hidden="true"></span>
            <p class="tl-year"><?= htmlspecialchars($h['year']) ?></p>
            <p><?= htmlspecialchars($h['text']) ?></p>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- Philosophy -->
  <section class="section section--royal" id="philosophy">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow" style="color:var(--gold);">Educational Philosophy</span>
        <h2 style="color:#fff;">The Ebenezer way of learning</h2>
        <p style="color:rgba(255,255,255,0.85);">Our philosophy is simple yet profound — we grow the whole child: head, heart and hands.</p>
      </div>

      <div class="grid grid--3">
        <article class="card reveal d-1" style="background:rgba(255,255,255,0.08); border-color:rgba(255,255,255,0.15);">
          <div class="card-icon" style="background:rgba(255,255,255,0.12); color:#fff; border-color:rgba(255,255,255,0.2);"><?= svg_icon('lightbulb') ?></div>
          <h3 style="color:#fff;">Learning with the head</h3>
          <p style="color:rgba(255,255,255,0.85);">Strong foundations in literacy, numeracy, science and languages, taught in small classes where every child participates, asks questions and thinks for themselves.</p>
        </article>
        <article class="card reveal d-2" style="background:rgba(255,255,255,0.08); border-color:rgba(255,255,255,0.15);">
          <div class="card-icon" style="background:rgba(255,255,255,0.12); color:#fff; border-color:rgba(255,255,255,0.2);"><?= svg_icon('heart') ?></div>
          <h3 style="color:#fff;">Learning with the heart</h3>
          <p style="color:rgba(255,255,255,0.85);">Moral and spiritual education, kindness, respect and resilience — we nurture children’s hearts so they grow into compassionate, honest and confident young people.</p>
        </article>
        <article class="card reveal d-3" style="background:rgba(255,255,255,0.08); border-color:rgba(255,255,255,0.15);">
          <div class="card-icon" style="background:rgba(255,255,255,0.12); color:#fff; border-color:rgba(255,255,255,0.2);"><?= svg_icon('rocket') ?></div>
          <h3 style="color:#fff;">Learning with the hands</h3>
          <p style="color:rgba(255,255,255,0.85);">Through play, art, sport, swimming, ICT and projects, children learn by doing. Every activity builds real skills, confidence and a lifelong love of discovery.</p>
        </article>
      </div>
    </div>
  </section>

</main>

<?php include 'includes/footer.php'; ?>
