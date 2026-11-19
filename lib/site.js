/**
 * Site-wide settings — the Next.js replacement for includes/config.php.
 * Update contact details, social links and the map embed here.
 */

export const SCHOOL_NAME = "Ebenezer Junior School Nampunge";
export const SCHOOL_TAGLINE = "Every Child Matters";
export const SCHOOL_ESTABLISHED = "2014";
export const SCHOOL_MOTTO = "Knowledge, Virtue and Integrity";

export const SCHOOL_ADDRESS_1 = "Hoima Road";
export const SCHOOL_ADDRESS_2 = "Nampunge, Wakiso";
export const SCHOOL_ADDRESS_3 = "Uganda";

export const SCHOOL_PHONE_1 = "+256782 011079";
export const SCHOOL_PHONE_2 = "+256701 626281";
export const SCHOOL_PHONE_1_RAW = "+256782011079";
export const SCHOOL_PHONE_2_RAW = "+256701626281";
export const SCHOOL_EMAIL = "ebenezerjuniorn@gmail.com";
export const SCHOOL_EMAIL_ADMISSIONS = "ebenezerjuniorn@gmail.com";

export const SOCIAL_FACEBOOK = "#";
export const SOCIAL_INSTAGRAM = "#";
export const SOCIAL_TWITTER = "#";
export const SOCIAL_YOUTUBE = "#";
export const SOCIAL_WHATSAPP = "https://wa.me/256782011079";

export const MAP_EMBED_SRC =
  "https://maps.google.com/maps?q=Hoima%20Road%2C%20Nampunge%2C%20Wakiso%2C%20Uganda&t=&z=13&ie=UTF8&iwloc=&output=embed";

export const CURRENCY = "UGX";

export const DEFAULT_DESCRIPTION = `Welcome to ${SCHOOL_NAME} — ${SCHOOL_TAGLINE}. A nurturing nursery and primary school in Nampunge, Wakiso, Uganda, delivering academic excellence through a competency based, child-centred curriculum.`;

export const DEFAULT_KEYWORDS =
  "school, nursery, primary, Uganda, Wakiso, Nampunge, Ebenezer Junior School, education, learning, admission";

/** Canonical site URL, used for metadata and the contact form redirect. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
