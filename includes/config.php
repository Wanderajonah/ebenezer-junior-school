<?php
/**
 * Ebenezer Junior School Nampunge - Site Configuration
 * --------------------------------------------------
 * Central configuration for the entire website.
 * Keeping settings here makes future maintenance simple and
 * prepares the site to connect to MySQL without changing layout code.
 */

/* =========================================================
 * SCHOOL PROFILE
 * ========================================================= */
define('SCHOOL_NAME', 'Ebenezer Junior School Nampunge');
define('SCHOOL_TAGLINE', 'Every Child Matters');
define('SCHOOL_ESTABLISHED', '2014');

/* =========================================================
 * CONTACT DETAILS
 * ========================================================= */
define('SCHOOL_ADDRESS_1', 'Hoima Road');
define('SCHOOL_ADDRESS_2', 'Nampunge, Wakiso');
define('SCHOOL_ADDRESS_3', 'Uganda');
define('SCHOOL_PHONE_1', '0782 011079');
define('SCHOOL_PHONE_2', '0701 626281');
define('SCHOOL_PHONE_1_RAW', '+256782011079');
define('SCHOOL_PHONE_2_RAW', '+256701626281');
define('SCHOOL_EMAIL', 'ebenezerjuniorn@gmail.com');
define('SCHOOL_EMAIL_ADMISSIONS', 'ebenezerjuniorn@gmail.com');

/* =========================================================
 * SOCIAL MEDIA PLACEHOLDERS
 * Update these with the school's real profiles.
 * ========================================================= */
define('SOCIAL_FACEBOOK', '#');
define('SOCIAL_INSTAGRAM', '#');
define('SOCIAL_TWITTER', '#');
define('SOCIAL_YOUTUBE', '#');
define('SOCIAL_WHATSAPP', 'https://wa.me/256782011079');

/* =========================================================
 * MAP EMBED (Google Maps placeholder)
 * Replace the src below with a real Google Maps embed link.
 * ========================================================= */
define('MAP_EMBED_SRC', 'https://maps.google.com/maps?q=Hoima%20Road%2C%20Nampunge%2C%20Wakiso%2C%20Uganda&t=&z=13&ie=UTF8&iwloc=&output=embed');

/* =========================================================
 * SCHOOL MOTTO
 * ========================================================= */
define('SCHOOL_MOTTO', 'Knowledge, Virtue and Integrity');

/* =========================================================
 * CURRENCY / FEES PLACEHOLDER
 * ========================================================= */
define('CURRENCY', 'UGX');

/* =========================================================
 * FUTURE DATABASE CONNECTION (optional)
 * ----------------------------------------------------------
 * When ready to go live with a database, uncomment and set the
 * credentials below. A single PDO connection is exposed through
 * the getDB() function so every page can reuse it without
 * changing the page layouts.
 * ========================================================= */
define('DB_ENABLED', false);
define('DB_HOST', 'localhost');
define('DB_NAME', 'ebenezer_junior');
define('DB_USER', 'root');
define('DB_PASS', '');

function getDB(): ?PDO
{
    if (!DB_ENABLED) {
        return null;
    }
    try {
        $dsn = 'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8mb4';
        return new PDO($dsn, DB_USER, DB_PASS, [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]);
    } catch (PDOException $e) {
        error_log('DB connection failed: ' . $e->getMessage());
        return null;
    }
}

/* =========================================================
 * HELPER: current page slug (for active navigation states)
 * ========================================================= */
function current_page(): string
{
    return basename($_SERVER['PHP_SELF'] ?? 'index.php');
}
