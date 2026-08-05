<?php
/**
 * Site Header — reusable <head> + opening page shell.
 * -----------------------------------------------------
 * Every page must set these optional variables BEFORE including this file:
 *   $pageTitle       (string)  Page title suffix
 *   $pageDescription (string)  Meta description
 *   $pageKeywords    (string)  Meta keywords
 *   $ogImage         (string)  Open Graph image path
 *   $currentPage     (string)  Page slug (used for nav active states)
 */

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/icons.php';

$pageTitle       = isset($pageTitle) ? $pageTitle . ' | ' . SCHOOL_NAME : SCHOOL_NAME;
$pageDescription = $pageDescription ?? 'Welcome to ' . SCHOOL_NAME . ' — ' . SCHOOL_TAGLINE . '. A nurturing nursery and primary school in Nampunge, Wakiso, Uganda, delivering academic excellence through a competency based, child-centred curriculum.';
$pageKeywords    = $pageKeywords ?? 'school, nursery, primary, Uganda, Wakiso, Nampunge, Ebenezer Junior School, education, learning, admission';
$ogImage         = $ogImage ?? 'assets/images/og-cover.jpg';
$currentPage     = $currentPage ?? current_page();
$canonical       = (isset($_SERVER['HTTPS']) ? 'https' : 'http') . '://' . ($_SERVER['HTTP_HOST'] ?? 'localhost') . '/' . basename($_SERVER['SCRIPT_NAME'] ?? 'index.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Primary SEO -->
  <title><?= htmlspecialchars($pageTitle) ?></title>
  <meta name="description" content="<?= htmlspecialchars($pageDescription) ?>">
  <meta name="keywords" content="<?= htmlspecialchars($pageKeywords) ?>">
  <meta name="author" content="<?= htmlspecialchars(SCHOOL_NAME) ?>">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="<?= htmlspecialchars($canonical) ?>">
  <meta name="theme-color" content="#16317A">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="<?= htmlspecialchars($pageTitle) ?>">
  <meta property="og:description" content="<?= htmlspecialchars($pageDescription) ?>">
  <meta property="og:image" content="<?= htmlspecialchars($ogImage) ?>">
  <meta property="og:url" content="<?= htmlspecialchars($canonical) ?>">
  <meta property="og:site_name" content="<?= htmlspecialchars(SCHOOL_NAME) ?>">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="<?= htmlspecialchars($pageTitle) ?>">
  <meta name="twitter:description" content="<?= htmlspecialchars($pageDescription) ?>">

  <!-- Favicon -->
  <link rel="icon" type="image/png" href="assets/images/favicon.png">
  <link rel="apple-touch-icon" href="assets/images/apple-touch-icon.png">

  <!-- Styles -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="assets/css/style.css" media="screen">
</head>
<body>

<a class="skip-link" href="#main">Skip to main content</a>

<?php include __DIR__ . '/navbar.php'; ?>
