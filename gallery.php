<?php
/**
 * Gallery Page — filterable gallery with lightbox preview
 */
require_once __DIR__ . '/includes/config.php';
$pageTitle       = 'Photo Gallery';
$pageDescription = 'Browse photos of our campus, classrooms, children, swimming lessons, computer lab and school events at ' . SCHOOL_NAME . ' Nampunge, Wakiso.';
$pageKeywords    = 'school gallery, school photos Uganda, Ebenezer Junior School campus, classrooms, computer lab, swimming, school events';
$currentPage     = 'gallery.php';

include 'includes/header.php';

$categories = ['All', 'Campus', 'Classrooms', 'Children', 'Swimming', 'Computer Lab', 'Events'];

$images = [
    ['src' => 'assets/images/g-campus.jpg',     'title' => 'Our Campus',       'cat' => 'Campus'],
    ['src' => 'assets/images/g-classroom.jpg',  'title' => 'Primary Classroom', 'cat' => 'Classrooms'],
    ['src' => 'assets/images/g-children.jpg',   'title' => 'Playtime',         'cat' => 'Children'],
    ['src' => 'assets/images/g-swimming.jpg',   'title' => 'Swimming Lessons', 'cat' => 'Swimming'],
    ['src' => 'assets/images/g-lab.jpg',        'title' => 'Computer Lab',     'cat' => 'Computer Lab'],
    ['src' => 'assets/images/g-events.jpg',     'title' => 'Graduation Day',   'cat' => 'Events'],
    ['src' => 'assets/images/g-playground.jpg', 'title' => 'Playground',       'cat' => 'Campus'],
    ['src' => 'assets/images/g-library.jpg',    'title' => 'School Library',   'cat' => 'Classrooms'],
    ['src' => 'assets/images/g-nursery.jpg',    'title' => 'Nursery Learners', 'cat' => 'Children'],
    ['src' => 'assets/images/g-sports.jpg',     'title' => 'Sports Day',       'cat' => 'Events'],
    ['src' => 'assets/images/g-art.jpg',        'title' => 'Art & Craft',      'cat' => 'Events'],
    ['src' => 'assets/images/g-tour.jpg',       'title' => 'Educational Tour', 'cat' => 'Events'],
];
?>

<main id="main">

  <!-- Page hero -->
  <section class="page-hero" style="background-image:url('assets/images/g-children.jpg')" aria-label="School gallery">
    <div class="container">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <a href="index.php">Home</a> <span>&rsaquo;</span> <span>Gallery</span>
      </nav>
      <h1>Photo Gallery</h1>
      <p>A collection of moments from campus life — classrooms, swimming, computer lab, events and the smiling faces of our learners.</p>
    </div>
  </section>

  <!-- Gallery -->
  <section class="section" id="gallery">
    <div class="container">
      <div class="filters reveal" role="group" aria-label="Filter gallery by category">
        <?php foreach ($categories as $i => $cat): ?>
          <button class="filter-btn<?= $i === 0 ? ' active' : '' ?>" data-filter="<?= htmlspecialchars($cat) ?>"><?= htmlspecialchars($cat) ?></button>
        <?php endforeach; ?>
      </div>

      <div class="gallery-grid" id="galleryGrid">
        <?php foreach ($images as $i => $img): ?>
          <figure class="gallery-item reveal d-<?= ($i % 4) + 1 ?>" data-cat="<?= htmlspecialchars($img['cat']) ?>"
                  data-title="<?= htmlspecialchars($img['title']) ?>" data-full="<?= htmlspecialchars($img['src']) ?>">
            <img src="<?= htmlspecialchars($img['src']) ?>" alt="<?= htmlspecialchars($img['title']) ?> at Ebenezer Junior School" loading="lazy" width="800" height="600">
            <figcaption class="gallery-overlay">
              <span class="zoom"><?= svg_icon('zoom-in') ?></span>
              <h3><?= htmlspecialchars($img['title']) ?></h3>
              <p><?= htmlspecialchars($img['cat']) ?></p>
            </figcaption>
          </figure>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

</main>

<?php include 'includes/footer.php'; ?>
