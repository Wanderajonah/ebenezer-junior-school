<?php
/**
 * Navigation Bar — sticky, transparent→solid, dropdowns + mobile drawer.
 */

$nav = [
    ['slug' => 'index.php',  'label' => 'Home'],
    ['slug' => 'about.php',  'label' => 'About', 'children' => [
        ['slug' => 'about.php', 'label' => 'About the School'],
        ['slug' => 'about.php#mission', 'label' => 'Mission &amp; Vision'],
        ['slug' => 'about.php#values', 'label' => 'Our Core Values'],
        ['slug' => 'about.php#history', 'label' => 'School History'],
        ['slug' => 'about.php#philosophy', 'label' => 'Our Philosophy'],
    ]],
    ['slug' => 'curriculum.php', 'label' => 'Curriculum', 'children' => [
        ['slug' => 'curriculum.php#nursery', 'label' => 'Nursery'],
        ['slug' => 'curriculum.php#primary', 'label' => 'Primary'],
        ['slug' => 'curriculum.php#competency', 'label' => 'Competency Based Learning'],
        ['slug' => 'curriculum.php#ict', 'label' => 'ICT Integration'],
        ['slug' => 'curriculum.php#assessment', 'label' => 'Continuous Assessment'],
    ]],
    ['slug' => 'activities.php', 'label' => 'Activities'],
    ['slug' => 'gallery.php',  'label' => 'Gallery'],
    ['slug' => 'admissions.php', 'label' => 'Admissions'],
    ['slug' => 'contact.php',  'label' => 'Contact'],
];

$isActive = function (string $slug) use ($currentPage): string {
    return strtok($slug, '#') === $currentPage ? 'active' : '';
};

$childSlugToFile = function (string $slug): string {
    return strtok($slug, '#');
};
?>

<!-- Main navigation (topbar + navbar, fixed) -->
<header class="navbar" id="navbar">

  <!-- Top utility bar -->
  <div class="topbar" role="complementary" aria-label="School contact information">
    <div class="container">
      <ul class="topbar-info">
        <li>
          <?= svg_icon('phone') ?>
          <a href="tel:<?= htmlspecialchars(SCHOOL_PHONE_1_RAW) ?>"><?= htmlspecialchars(SCHOOL_PHONE_1) ?></a>
        </li>
        <li>
          <?= svg_icon('mail') ?>
          <a href="mailto:<?= htmlspecialchars(SCHOOL_EMAIL) ?>"><?= htmlspecialchars(SCHOOL_EMAIL) ?></a>
        </li>
        <li>
          <?= svg_icon('map-pin') ?>
          <span><?= htmlspecialchars(SCHOOL_ADDRESS_2 . ', ' . SCHOOL_ADDRESS_3) ?></span>
        </li>
      </ul>
      <div class="topbar-social">
        <a href="<?= htmlspecialchars(SOCIAL_FACEBOOK) ?>" aria-label="Facebook" title="Facebook"><?= svg_icon('facebook', 13) ?></a>
        <a href="<?= htmlspecialchars(SOCIAL_INSTAGRAM) ?>" aria-label="Instagram" title="Instagram"><?= svg_icon('instagram', 13) ?></a>
        <a href="<?= htmlspecialchars(SOCIAL_TWITTER) ?>" aria-label="X (Twitter)" title="X (Twitter)"><?= svg_icon('twitter', 13) ?></a>
        <a href="<?= htmlspecialchars(SOCIAL_WHATSAPP) ?>" aria-label="WhatsApp" title="WhatsApp"><?= svg_icon('whatsapp', 13) ?></a>
      </div>
    </div>
  </div>

  <div class="container navbar-inner">
    <a class="brand" href="index.php" aria-label="<?= htmlspecialchars(SCHOOL_NAME) ?> — Home">
      <span class="brand-logo" aria-hidden="true"><?= svg_icon('graduation-cap', 30) ?></span>
      <span class="brand-text">
        <span class="name">Ebenezer Junior School</span>
        <span class="tag">Nampunge &middot; Every Child Matters</span>
      </span>
    </a>

    <nav class="nav-links" aria-label="Primary navigation">
      <ul>
        <?php foreach ($nav as $item): ?>
          <?php $active = $isActive($item['slug']); ?>
          <li class="<?= $active ?> <?= isset($item['children']) ? 'has-dropdown' : '' ?>">
            <a class="nav-link" href="<?= htmlspecialchars($item['slug']) ?>"
               <?= isset($item['children']) ? 'aria-haspopup="true" aria-expanded="false"' : '' ?>>
              <?= htmlspecialchars($item['label']) ?>
              <?php if (isset($item['children'])): ?>
                <?= svg_icon('chevron-down', 10, 'caret') ?>
              <?php endif; ?>
            </a>
            <?php if (isset($item['children'])): ?>
              <ul class="dropdown-menu" role="menu">
                <?php foreach ($item['children'] as $child): ?>
                  <li role="none">
                    <a role="menuitem" href="<?= htmlspecialchars($child['slug']) ?>"><?= $child['label'] ?></a>
                  </li>
                <?php endforeach; ?>
              </ul>
            <?php endif; ?>
          </li>
        <?php endforeach; ?>
      </ul>
    </nav>

    <div class="nav-actions">
      <a class="btn btn--gold btn--sm nav-cta" href="admissions.php">
        <?= svg_icon('send') ?> Apply Now
      </a>
      <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="mobileNav">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>

<!-- Mobile drawer -->
<div class="scrim" id="scrim"></div>
<nav class="mobile-nav" id="mobileNav" aria-label="Mobile navigation">
  <?php foreach ($nav as $item): ?>
    <?php if (isset($item['children'])): ?>
      <div class="mobile-group">
        <button class="mobile-drop" aria-expanded="false">
          <?= htmlspecialchars($item['label']) ?> <?= svg_icon('chevron-down', 14) ?>
        </button>
        <div class="mobile-sub">
          <?php foreach ($item['children'] as $child): ?>
            <a href="<?= htmlspecialchars($child['slug']) ?>"><?= $child['label'] ?></a>
          <?php endforeach; ?>
        </div>
      </div>
    <?php else: ?>
      <a class="mobile-link" href="<?= htmlspecialchars($item['slug']) ?>"><?= htmlspecialchars($item['label']) ?></a>
    <?php endif; ?>
  <?php endforeach; ?>
  <a class="btn btn--gold btn--block mobile-cta" href="admissions.php"><?= svg_icon('send') ?> Apply Now</a>
</nav>
