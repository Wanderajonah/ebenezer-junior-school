<?php
/**
 * Home Page
 */
require_once __DIR__ . '/includes/config.php';
$pageTitle       = 'Welcome';
$pageDescription = 'Welcome to ' . SCHOOL_NAME . ' — ' . SCHOOL_TAGLINE . '. A nurturing nursery and primary school in Nampunge, Wakiso, Uganda, delivering academic excellence, moral values and creative learning.';
$pageKeywords    = 'Ebenezer Junior School, Nampunge, Wakiso, primary school Uganda, nursery school Uganda, Every Child Matters, admission, schooling Wakiso';
$currentPage     = 'index.php';

include 'includes/header.php';

/* Why choose us */
$whyChoose = [
    ['icon' => 'users',   'title' => 'Experienced Teachers',       'text' => 'Caring, qualified educators who know every child by name and teach with patience, warmth and skill.'],
    ['icon' => 'award',   'title' => 'Qualified Staff',            'text' => 'A dedicated team of trained and certified staff committed to the wellbeing and progress of every learner.'],
    ['icon' => 'smile',   'title' => 'Learning Through Play',      'text' => 'We make learning joyful — children explore, discover and grow through play, songs and hands-on activities.'],
    ['icon' => 'apple',   'title' => 'Balanced Meals',             'text' => 'Nutritious, freshly prepared meals keep our children healthy, energised and ready to learn every day.'],
    ['icon' => 'heart',   'title' => 'Special Needs Support',      'text' => 'Every child matters — we offer inclusive care and extra support for learners with special needs.'],
    ['icon' => 'school',  'title' => 'Modern Facilities',          'text' => 'Bright classrooms, a computer lab, library, playground and more — designed for happy learning.'],
];

/* Curriculum highlights */
$curriculum = [
    ['icon' => 'baby',      'title' => 'Nursery',                  'text' => 'A gentle, play-based foundation for our youngest learners aged 1½ to 5 years.'],
    ['icon' => 'book-open', 'title' => 'Primary',                  'text' => 'A rich primary programme from P1 to P7 that builds strong academic foundations.'],
    ['icon' => 'lightbulb', 'title' => 'Competency Based Learning', 'text' => 'Learning by doing — children gain real skills, not just knowledge, through active lessons.'],
    ['icon' => 'cpu',       'title' => 'ICT Integration',          'text' => 'Computers and digital tools woven into everyday lessons for 21st-century readiness.'],
    ['icon' => 'clipboard-check', 'title' => 'Continuous Assessment', 'text' => 'Ongoing, gentle assessment that tracks each child’s progress so no one is left behind.'],
    ['icon' => 'book',      'title' => 'Reading Programmes',       'text' => 'Daily reading clubs and guided literacy that grow confident, lifelong readers.'],
];

/* Activities */
$activities = [
    ['icon' => 'trophy',   'title' => 'Sports',     'text' => 'Football, netball, athletics and team games that build fitness and teamwork.'],
    ['icon' => 'music',    'title' => 'Music',      'text' => 'Singing, rhythm and movement that unlock creativity and expression.'],
    ['icon' => 'palette',  'title' => 'Art & Craft', 'text' => 'Painting, drawing and craft that spark imagination and fine motor skills.'],
    ['icon' => 'mic',      'title' => 'Debate',     'text' => 'Speeches and discussion that build confidence and clear thinking.'],
];

/* Facilities */
$facilities = [
    ['icon' => 'school',  'title' => 'Modern Classrooms', 'text' => 'Bright, airy and well-resourced learning spaces.'],
    ['icon' => 'seesaw',  'title' => 'Playground',        'text' => 'A spacious outdoor area for play and sports.'],
    ['icon' => 'shield',  'title' => 'Safe Compound',     'text' => 'Secure, fenced and fully supervised grounds.'],
    ['icon' => 'bus',     'title' => 'School Transport',  'text' => 'Dependable pick-up and drop-off service.'],
    ['icon' => 'book-open', 'title' => 'Library',         'text' => 'A growing collection to feed young imaginations.'],
    ['icon' => 'sparkle', 'title' => 'Clean Environment', 'text' => 'Hygienic, well-kept facilities in every corner.'],
];

/* News & events */
$news = [
    ['day' => '05', 'month' => 'Sep', 'cat' => 'Upcoming Event',  'title' => 'New Academic Term Begins',          'text' => 'Term one kicks off with a welcome assembly for all learners and parents. Mark your calendars!'],
    ['day' => '18', 'month' => 'Sep', 'cat' => 'School Calendar', 'title' => 'Parents & Teachers Meeting',        'text' => 'Join us to review progress, share feedback and plan a successful term together.'],
    ['day' => '02', 'month' => 'Oct', 'cat' => 'School Event',    'title' => 'Annual Sports Day',                'text' => 'A fun-filled day of athletics, games and house competition. Parents are warmly invited.'],
    ['day' => '30', 'month' => 'Oct', 'cat' => 'PTA',            'title' => 'PTA General Meeting',               'text' => 'The Parents–Teachers Association convenes to discuss the school’s development.'],
    ['day' => '20', 'month' => 'Nov', 'cat' => 'Academics',       'title' => 'End of Term Examinations',         'text' => 'Continuous assessment and end-of-term tests help us celebrate every child’s growth.'],
    ['day' => '15', 'month' => 'Dec', 'cat' => 'Holiday Program', 'title' => 'Christmas Holiday Program',        'text' => 'Arts, games, music and reading keep children engaged safely through the holiday.'],
];

/* Testimonials */
$testimonials = [
    ['name' => 'Sarah Nakato',   'role' => 'Mother of a P3 learner', 'text' => 'Ebenezer has been a blessing to our family. My daughter reads confidently and greets her teachers with so much joy every morning. The care here is genuine.'],
    ['name' => 'David Okello',   'role' => 'Father of a Nursery child', 'text' => 'We chose Ebenezer because of the small classes and the teachers’ attention to every child. Our son has blossomed — he loves school and his meals are healthy too.'],
    ['name' => 'Grace Namuli',   'role' => 'Mother of a P5 learner', 'text' => 'The discipline and moral values taught here are excellent. My children have grown in confidence, manners and performance since joining. I recommend this school highly.'],
    ['name' => 'Joseph Ssewanyana', 'role' => 'Father of twins in P1', 'text' => 'The swimming and ICT lessons are a big bonus. My twins look forward to school every single day. The compound is safe and the transport is very reliable.'],
    ['name' => 'Ruth Atim',      'role' => 'Mother of a P6 learner', 'text' => 'As a working mother, the support and communication from teachers gives me great peace of mind. My daughter’s results have improved steadily under their guidance.'],
    ['name' => 'Peter Wasswa',   'role' => 'Guardian of a P4 learner', 'text' => 'Special needs support here is outstanding. They truly believe every child matters. My nephew’s progress has been remarkable, and he feels loved and included.'],
];

$stats = [
    ['icon' => 'users',          'num' => 500, 'suffix' => '+', 'label' => 'Happy Learners'],
    ['icon' => 'graduation-cap', 'num' => 25,  'suffix' => '+', 'label' => 'Qualified Staff'],
    ['icon' => 'award',          'num' => 12,  'suffix' => '+', 'label' => 'Years of Excellence'],
    ['icon' => 'school',         'num' => 15,  'suffix' => '+', 'label' => 'Modern Classrooms'],
];
?>

<main id="main">

  <!-- ======================= HERO ======================= -->
  <section class="hero" id="hero" aria-label="Welcome to Ebenezer Junior School">
    <div class="hero-bg" aria-hidden="true">
      <div class="hero-dots"></div>
      <div class="hero-blob hero-blob--1"></div>
      <div class="hero-blob hero-blob--2"></div>
    </div>

    <div class="container hero-inner">
      <div class="hero-copy">
        <span class="hero-badge">Nampunge, Wakiso &mdash; Nursery to P7</span>
        <h1>Every Child <strong class="accent">Matters</strong></h1>
        <p class="sub">A warm, child-centred school in Nampunge, Wakiso — from nursery to P7.</p>
        <div class="hero-buttons">
          <a class="btn btn--gold btn--shine" href="admissions.php"><?= svg_icon('send') ?> Apply Now</a>
          <a class="btn btn--glass" href="about.php"><?= svg_icon('arrow-right') ?> Tour the School</a>
        </div>
      </div>

      <div class="hero-graphic">
        <div class="hero-graphic-ring">
          <div class="hero-graphic-inner">
            <img class="hero-graphic-img" src="assets/images/hero.jpg" alt="Happy Ebenezer Junior School pupils" loading="eager">
          </div>
        </div>
        <div class="hero-float hero-float--1">
          <div class="hero-float__icon"><?= svg_icon('users') ?></div>
          <div class="hero-float__body">
            <strong>Experienced Teachers</strong>
            <span>Who know every child</span>
          </div>
        </div>
        <div class="hero-float hero-float--2">
          <div class="hero-float__icon"><?= svg_icon('award') ?></div>
          <div class="hero-float__body">
            <strong><?= $stats[2]['num'] . $stats[2]['suffix'] ?> Years</strong>
            <span>Of excellence &amp; care</span>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-angle" aria-hidden="true">
      <svg viewBox="0 0 1440 70" preserveAspectRatio="none"><polygon points="0,70 1440,0 1440,70" fill="#F2F7FD"></polygon></svg>
    </div>
  </section>

  <!-- ======================= OVERLAP FEATURE CARDS ======================= -->
  <section class="overlap-cards" aria-label="What makes our school special">
    <div class="container">
      <div class="overlap-grid">
        <div class="overlap-card reveal d-1">
          <div class="overlap-icon"><?= svg_icon('book-open') ?></div>
          <h3>Quality Education</h3>
          <p>A balanced curriculum from nursery to P7 that builds strong academic foundations and a lasting love of learning.</p>
        </div>
        <div class="overlap-card reveal d-2">
          <div class="overlap-icon"><?= svg_icon('users') ?></div>
          <h3>Caring Teachers</h3>
          <p>Experienced, qualified teachers who know every child by name and teach with patience, warmth and skill.</p>
        </div>
        <div class="overlap-card reveal d-3">
          <div class="overlap-icon"><?= svg_icon('shield') ?></div>
          <h3>Safe &amp; Happy Campus</h3>
          <p>A secure compound with balanced meals, modern facilities and reliable transport — so parents have total peace of mind.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ======================= WELCOME ======================= -->
  <section class="section" id="welcome">
    <div class="container split">
      <div class="split-media reveal reveal--left">
        <div class="img-frame img-main">
          <img src="assets/images/about.jpg" alt="A teacher guiding a young learner in the classroom" loading="lazy" width="800" height="1000">
        </div>
        <div class="img-frame img-secondary">
          <img src="assets/images/about-secondary.jpeg" alt="Books and study materials that support every child's learning" loading="lazy" width="400" height="300">
        </div>
        <div class="media-badge">
          <span class="yr"><?= SCHOOL_ESTABLISHED ?></span>
          <span class="tx">Established</span>
        </div>
      </div>

      <div class="split-text reveal reveal--right">
        <span class="eyebrow">Welcome Message</span>
        <h2>A warm welcome from our school family</h2>
        <p style="margin-bottom:16px;">We believe the early years are the most important of a child’s life — so we nurture every child with love, patience and care while building a strong foundation of <strong>academic excellence</strong>.</p>
        <p>Beyond the classroom, we grow <strong>character</strong> through Christian values, discipline and creativity.</p>
        <ul class="check-list">
          <li><?= svg_icon('check-circle') ?> Child-centred, play-based teaching that makes learning joyful</li>
          <li><?= svg_icon('check-circle') ?> A safe, loving environment where values are caught and taught</li>
          <li><?= svg_icon('check-circle') ?> ICT, swimming, reading and creative programmes for every child</li>
        </ul>
        <div class="hero-buttons" style="margin-top:14px;">
          <a class="btn btn--primary" href="about.php"><?= svg_icon('arrow-right') ?> Learn More About Us</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ======================= STATS ======================= -->
  <section class="section stats" id="stats" aria-label="School statistics">
    <div class="container stats-grid">
      <?php foreach ($stats as $s): ?>
        <div class="stat reveal d-<?= $i = ($i ?? 0) + 1 ?>">
          <div class="stat-icon"><?= svg_icon($s['icon']) ?></div>
          <div class="num"><span class="counter" data-target="<?= $s['num'] ?>">0</span><sup><?= htmlspecialchars($s['suffix']) ?></sup></div>
          <div class="label"><?= htmlspecialchars($s['label']) ?></div>
        </div>
      <?php endforeach; ?>
    </div>
  </section>

  <!-- ======================= ABOUT TEASER ======================= -->
  <section class="section" id="about">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">About the School</span>
        <h2>A school with a heart, built on strong values</h2>
        <p class="lead">Our mission, vision and daily practice are united around one simple belief — every child is a gift deserving of excellent education and genuine love.</p>
      </div>

      <div class="mv-grid">
        <div class="mv-card reveal d-1">
          <div class="mv-icon"><?= svg_icon('target') ?></div>
          <h3>Our Mission</h3>
          <p>To provide quality, affordable and Christ-centred education that nurtures every child academically, morally and socially — preparing confident, disciplined and creative future leaders.</p>
        </div>
        <div class="mv-card reveal d-2">
          <div class="mv-icon"><?= svg_icon('eye') ?></div>
          <h3>Our Vision</h3>
          <p>To be the leading nursery and primary school in Wakiso, recognised for academic excellence, character formation and a joyful love of learning in every child.</p>
        </div>
        <div class="mv-card reveal d-3">
          <div class="mv-icon"><?= svg_icon('flag') ?></div>
          <h3>Our Motto</h3>
          <p><?= SCHOOL_MOTTO ?> — the values that guide every lesson, every friendship and every achievement on our campus.</p>
        </div>
      </div>

      <div class="text-center mt-40">
        <a class="btn btn--outline" href="about.php"><?= svg_icon('arrow-right') ?> Discover Our Full Story</a>
      </div>
    </div>
  </section>

  <!-- ======================= WHY CHOOSE US ======================= -->
  <section class="section section--tint" id="why-us">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">Why Choose Us</span>
        <h2>Reasons parents trust Ebenezer</h2>
        <p class="lead">Everything we offer is designed with one goal in mind — a happy, safe and excellent start for your child.</p>
      </div>

      <div class="why-grid">
        <?php foreach ($whyChoose as $i => $c): ?>
          <article class="card why-card reveal d-<?= ($i % 4) + 1 ?>">
            <div class="card-icon"><?= svg_icon($c['icon']) ?></div>
            <div class="card-body">
              <h3><?= htmlspecialchars($c['title']) ?></h3>
              <p><?= htmlspecialchars($c['text']) ?></p>
            </div>
          </article>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- ======================= CURRICULUM ======================= -->
  <section class="section" id="curriculum">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">Our Curriculum</span>
        <h2>Learning that prepares children for life</h2>
        <p class="lead">A balanced, modern curriculum combining academic rigour with creativity, technology and character.</p>
      </div>

      <div class="curriculum-grid">
        <?php foreach ($curriculum as $i => $c): ?>
          <div class="curriculum-item reveal d-<?= ($i % 3) + 1 ?>">
            <div class="curriculum-icon"><?= svg_icon($c['icon']) ?></div>
            <div>
              <h3><?= htmlspecialchars($c['title']) ?></h3>
              <p><?= htmlspecialchars($c['text']) ?></p>
            </div>
          </div>
        <?php endforeach; ?>
      </div>

      <div class="chips text-center" style="justify-content:center;">
        <span class="chip"><?= svg_icon('check') ?> Creative Learning</span>
        <span class="chip"><?= svg_icon('check') ?> Health Education</span>
        <span class="chip"><?= svg_icon('check') ?> Continuous Assessment</span>
        <span class="chip"><?= svg_icon('check') ?> ICT Integration</span>
      </div>

      <div class="text-center mt-40">
        <a class="btn btn--sky" href="curriculum.php"><?= svg_icon('arrow-right') ?> Explore Our Curriculum</a>
      </div>
    </div>
  </section>

  <!-- ======================= ACTIVITIES ======================= -->
  <section class="section section--tint" id="activities">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">Co-Curricular Activities</span>
        <h2>Growing talents beyond the classroom</h2>
        <p class="lead">From the pool to the stage, every child finds a place to shine.</p>
      </div>

      <div class="activities-showcase">
        <?php foreach ($activities as $i => $a): ?>
          <div class="activity-card reveal d-<?= ($i % 4) + 1 ?>">
            <div class="activity-card__icon"><?= svg_icon($a['icon']) ?></div>
            <div class="activity-card__body">
              <h3><?= htmlspecialchars($a['title']) ?></h3>
              <p><?= htmlspecialchars($a['text']) ?></p>
            </div>
            <div class="activity-card__arrow"><?= svg_icon('arrow-right') ?></div>
          </div>
        <?php endforeach; ?>
      </div>

      <div class="text-center mt-40">
        <a class="btn btn--primary" href="activities.php"><?= svg_icon('arrow-right') ?> View All Activities</a>
      </div>
    </div>
  </section>

  <!-- ======================= FACILITIES ======================= -->
  <section class="section" id="facilities">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">Our Facilities</span>
        <h2>A campus designed for happy learning</h2>
        <p class="lead">Clean, safe and modern — everything your child needs within one secure compound.</p>
      </div>

      <div class="grid grid--4">
        <?php foreach ($facilities as $i => $f): ?>
          <article class="card reveal d-<?= ($i % 4) + 1 ?>">
            <div class="card-icon"><?= svg_icon($f['icon']) ?></div>
            <h3><?= htmlspecialchars($f['title']) ?></h3>
            <p><?= htmlspecialchars($f['text']) ?></p>
          </article>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- ======================= GALLERY PREVIEW ======================= -->
  <section class="section section--tint" id="gallery-preview">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">Life at School</span>
        <h2>A glimpse of school life</h2>
        <p class="lead">Moments of joy, discovery and friendship captured on our campus.</p>
      </div>

      <div class="gallery-grid">
        <?php
        $preview = [
            ['src' => 'assets/images/g-children.jpg',   'title' => 'Playtime',      'cat' => 'Children'],
            ['src' => 'assets/images/g-classroom.jpg',  'title' => 'Our Classrooms', 'cat' => 'Classrooms'],
            ['src' => 'assets/images/g-swimming.jpg',   'title' => 'Swimming',      'cat' => 'Swimming'],
            ['src' => 'assets/images/g-lab.jpg',        'title' => 'Computer Lab',  'cat' => 'Computer Lab'],
            ['src' => 'assets/images/g-library.jpg',    'title' => 'Our Library',   'cat' => 'Library'],
            ['src' => 'assets/images/g-sports.jpg',     'title' => 'Sports Day',    'cat' => 'Sports'],
            ['src' => 'assets/images/g-events.jpg',     'title' => 'School Events', 'cat' => 'Events'],
            ['src' => 'assets/images/g-campus.jpg',     'title' => 'Our Campus',    'cat' => 'Campus'],
        ];
        foreach ($preview as $i => $img):
        ?>
          <figure class="gallery-item reveal d-<?= ($i % 3) + 1 ?>" data-cat="<?= htmlspecialchars($img['cat']) ?>" data-title="<?= htmlspecialchars($img['title']) ?>" data-full="<?= htmlspecialchars($img['src']) ?>">
            <img src="<?= htmlspecialchars($img['src']) ?>" alt="<?= htmlspecialchars($img['title']) ?> at Ebenezer Junior School" loading="lazy" width="800" height="600">
            <figcaption class="gallery-overlay">
              <span class="zoom"><?= svg_icon('zoom-in') ?></span>
              <h3><?= htmlspecialchars($img['title']) ?></h3>
              <p><?= htmlspecialchars($img['cat']) ?></p>
            </figcaption>
          </figure>
        <?php endforeach; ?>
      </div>

      <div class="text-center mt-40">
        <a class="btn btn--primary" href="gallery.php"><?= svg_icon('arrow-right') ?> View Full Gallery</a>
      </div>
    </div>
  </section>

  <!-- ======================= TESTIMONIALS ======================= -->
  <section class="section testimonials" id="testimonials" aria-label="Testimonials">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">Testimonials</span>
        <h2>What Parents Say</h2>
        <p class="lead">Real words from families who trust Ebenezer with their children's future.</p>
      </div>

      <div class="t-carousel reveal" data-tcarousel tabindex="0" role="region" aria-roledescription="carousel" aria-label="Parent testimonials carousel">
        <button class="t-arrow t-arrow--prev" type="button" data-tprev aria-label="Previous testimonial"><?= svg_icon('chevron-left') ?></button>

        <div class="t-viewport" data-tviewport>
          <div class="t-track" data-ttrack>
            <?php foreach ($testimonials as $i => $t):
                $tp = explode(' ', $t['name']);
                $ti = mb_strtoupper(mb_substr($tp[0], 0, 1) . (isset($tp[1]) ? mb_substr($tp[1], 0, 1) : ''));
            ?>
              <div class="t-slide<?= $i === 0 ? ' is-active' : '' ?>" data-tslide aria-label="<?= htmlspecialchars($t['name']) ?>'s testimonial">
                <article class="t-card">
                  <span class="t-avatar" aria-hidden="true"><?= htmlspecialchars($ti) ?></span>
                  <div class="t-stars">
                    <?php for ($s = 0; $s < 5; $s++): ?><?= svg_icon('star') ?><?php endfor; ?>
                  </div>
                  <blockquote class="t-text">&ldquo;<?= htmlspecialchars($t['text']) ?>&rdquo;</blockquote>
                  <footer class="t-meta">
                    <p class="t-author"><?= htmlspecialchars($t['name']) ?></p>
                    <p class="t-role"><?= htmlspecialchars($t['role']) ?></p>
                  </footer>
                  <span class="t-mark" aria-hidden="true"><?= svg_icon('quote') ?></span>
                </article>
              </div>
            <?php endforeach; ?>
          </div>
        </div>

        <button class="t-arrow t-arrow--next" type="button" data-tnext aria-label="Next testimonial"><?= svg_icon('chevron-right') ?></button>
      </div>
    </div>
  </section>

  <!-- ======================= NEWS & EVENTS ======================= -->
  <section class="section" id="news">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">News &amp; Events</span>
        <h2>What's happening at school</h2>
        <p class="lead">Upcoming events, key dates and holiday programmes for our families.</p>
      </div>

      <div class="news-grid">
        <?php foreach ($news as $i => $n): ?>
          <article class="news-card reveal d-<?= ($i % 3) + 1 ?>">
            <div class="news-thumb">
              <img src="assets/images/g-events.jpg" alt="<?= htmlspecialchars($n['title']) ?>" loading="lazy" width="640" height="400">
              <span class="news-date"><span class="d"><?= htmlspecialchars($n['day']) ?></span><span class="m"><?= htmlspecialchars($n['month']) ?></span></span>
            </div>
            <div class="news-body">
              <span class="news-cat"><?= htmlspecialchars($n['cat']) ?></span>
              <h3><?= htmlspecialchars($n['title']) ?></h3>
              <p><?= htmlspecialchars($n['text']) ?></p>
              <a class="news-more" href="contact.php">Read more <?= svg_icon('arrow-right') ?></a>
            </div>
          </article>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

</main>

<?php include 'includes/footer.php'; ?>
