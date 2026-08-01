<?php
/**
 * Activities Page — co-curricular programme
 */
require_once __DIR__ . '/includes/config.php';
$pageTitle       = 'Co-Curricular Activities';
$pageDescription = 'Swimming, ICT, sports, music, dance, drama, art, debate, reading clubs and educational tours at ' . SCHOOL_NAME . ' — activities that build confidence, talent and friendship.';
$pageKeywords    = 'school activities Uganda, co-curricular, swimming lessons, ICT club, school sports, music and dance, drama, art and craft, debate club, reading club, educational tours';
$currentPage     = 'activities.php';

include 'includes/header.php';

$activities = [
    ['icon' => 'swim',  'title' => 'Swimming',   'text' => 'Weekly lessons in our safe, supervised pool. Children gain water confidence, learn proper strokes and master vital water-safety skills — all while having enormous fun. Qualified instructors keep every session joyful and safe.'],
    ['icon' => 'cpu',   'title' => 'ICT',        'text' => 'Our computer club turns curious kids into young digital creators. They learn typing, drawing, research, safe internet use and even the first steps of coding through fun, guided projects.'],
    ['icon' => 'trophy', 'title' => 'Sports',    'text' => 'Football, netball, athletics and team games build fitness, coordination and teamwork. Friendly inter-house and inter-school fixtures let every child feel the pride of playing for Ebenezer.'],
    ['icon' => 'music', 'title' => 'Music',      'text' => 'Singing, rhythm and movement bring joy to every week. Children perform at assemblies, graduations and community events, growing confidence with every note.'],
    ['icon' => 'smile', 'title' => 'Dance',      'text' => 'Traditional and modern dance celebrate our culture and let children express themselves freely. Dance builds poise, rhythm and wonderful stage confidence.'],
    ['icon' => 'award', 'title' => 'Drama',      'text' => 'From class plays to Christmas productions, drama invites children into stories. It grows imagination, public speaking and the courage to perform in front of an audience.'],
    ['icon' => 'palette', 'title' => 'Art & Craft', 'text' => 'Painting, drawing, modelling and recycling crafts let children create with their own hands. Art develops fine motor skills, patience and the joy of making something beautiful.'],
    ['icon' => 'mic',   'title' => 'Debate',     'text' => 'Our debate and public-speaking sessions teach children to think clearly, speak confidently and listen respectfully. These skills serve them for life.'],
    ['icon' => 'book',  'title' => 'Reading Club', 'text' => 'Book lovers meet weekly to share stories, read aloud and review books from our library. Reading clubs turn children into lifelong readers.'],
    ['icon' => 'globe', 'title' => 'Educational Tours', 'text' => 'Learning leaves the classroom. Trips to museums, farms, nature sites and community landmarks make subjects come alive and create memories children treasure.'],
];

$highlights = [
    ['icon' => 'trophy', 'title' => 'Confidence',   'text' => 'Performing, competing and speaking build self-belief that flows into the classroom.'],
    ['icon' => 'users',  'title' => 'Friendship',   'text' => 'Clubs and teams create bonds across classes, teaching children teamwork and kindness.'],
    ['icon' => 'sparkle', 'title' => 'Talent',      'text' => 'Every child discovers at least one thing they love — and one thing they are great at.'],
    ['icon' => 'target', 'title' => 'Balance',      'text' => 'A healthy mix of study and play keeps children energised, happy and ready to learn.'],
];
?>

<main id="main">

  <!-- Page hero -->
  <section class="page-hero" style="background-image:url('assets/images/g-playground.jpg')" aria-label="Co-curricular activities">
    <div class="container">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <a href="index.php">Home</a> <span>&rsaquo;</span> <span>Activities</span>
      </nav>
      <h1>Co-Curricular Activities</h1>
      <p>School is more than lessons. Our rich activity programme helps every child discover talents, build confidence and make friends for life.</p>
    </div>
  </section>

  <!-- Activity cards -->
  <section class="section" id="activities">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">What We Offer</span>
        <h2>Activities for every child</h2>
        <p class="lead">Something for every interest — and a place for every child to shine.</p>
      </div>

      <div class="grid grid--3">
        <?php foreach ($activities as $i => $a): ?>
          <article class="card reveal d-<?= ($i % 3) + 1 ?>">
            <div class="card-icon"><?= svg_icon($a['icon']) ?></div>
            <h3><?= htmlspecialchars($a['title']) ?></h3>
            <p><?= htmlspecialchars($a['text']) ?></p>
          </article>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- Why activities matter -->
  <section class="section section--tint" id="why">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">Why They Matter</span>
        <h2>What activities give your child</h2>
        <p class="lead">Beyond fun, our programme nurtures the whole child — mind, body and spirit.</p>
      </div>

      <div class="grid grid--4">
        <?php foreach ($highlights as $i => $h): ?>
          <article class="card reveal d-<?= ($i % 4) + 1 ?>">
            <div class="card-icon"><?= svg_icon($h['icon']) ?></div>
            <h3><?= htmlspecialchars($h['title']) ?></h3>
            <p><?= htmlspecialchars($h['text']) ?></p>
          </article>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- Gallery strip -->
  <section class="section" id="moment">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">Moments of Joy</span>
        <h2>Life in full colour</h2>
      </div>
      <div class="gallery-grid">
        <?php
        $imgs = [
            ['src' => 'assets/images/g-swimming.jpg', 't' => 'Swimming lessons'],
            ['src' => 'assets/images/g-sports.jpg',   't' => 'Sports day'],
            ['src' => 'assets/images/g-art.jpg',      't' => 'Art and craft'],
            ['src' => 'assets/images/g-events.jpg',   't' => 'School events'],
            ['src' => 'assets/images/g-tour.jpg',     't' => 'Educational tour'],
            ['src' => 'assets/images/g-library.jpg',  't' => 'Reading time'],
        ];
        foreach ($imgs as $i => $img):
        ?>
          <figure class="gallery-item reveal d-<?= ($i % 3) + 1 ?>" data-cat="Activities" data-title="<?= htmlspecialchars($img['t']) ?>" data-full="<?= htmlspecialchars($img['src']) ?>">
            <img src="<?= htmlspecialchars($img['src']) ?>" alt="<?= htmlspecialchars($img['t']) ?> at Ebenezer Junior School" loading="lazy" width="800" height="600">
            <figcaption class="gallery-overlay">
              <span class="zoom"><?= svg_icon('zoom-in') ?></span>
              <h3><?= htmlspecialchars($img['t']) ?></h3>
            </figcaption>
          </figure>
        <?php endforeach; ?>
      </div>
      <div class="text-center mt-40">
        <a class="btn btn--primary" href="gallery.php"><?= svg_icon('arrow-right') ?> See the Full Gallery</a>
      </div>
    </div>
  </section>

</main>

<?php include 'includes/footer.php'; ?>
