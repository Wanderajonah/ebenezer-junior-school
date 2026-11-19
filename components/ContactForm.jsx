'use client';

import { useEffect, useState } from 'react';
import Icon from '@/components/Icon';
import { SCHOOL_EMAIL, SITE_URL } from '@/lib/site';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm({ sent = false }) {
  const [errors, setErrors] = useState({});
  const [nextUrl, setNextUrl] = useState(`${SITE_URL}/contact?sent=1`);

  useEffect(() => {
    setNextUrl(`${window.location.origin}/contact?sent=1`);
  }, []);

  function handleSubmit(event) {
    const form = event.currentTarget;
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const phone = form.elements.phone.value.trim();
    const message = form.elements.message.value.trim();

    const nextErrors = {};

    if (name.length < 2) nextErrors.name = 'Please enter the parent / guardian name.';
    if (!EMAIL_RE.test(email)) nextErrors.email = 'Please enter a valid email address.';
    if (phone !== '' && !/^[0-9+\-\s]{9,15}$/.test(phone)) {
      nextErrors.phone = 'Please enter a valid phone number.';
    }
    if (message.length < 10) nextErrors.message = 'Please write a message of at least 10 characters.';

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      event.preventDefault();
    }
  }

  return (
    <div className="form-card reveal reveal--right">
      <h2>Send us a message</h2>
      <p>Fill in the form below and our team will get back to you as soon as possible.</p>

      {sent ? (
        <div className="form-alert success" role="alert">
          Thank you! Your message has been received. Our team will contact you shortly.
        </div>
      ) : null}

      <form
        id="contactForm"
        action={`https://formsubmit.co/${encodeURIComponent(SCHOOL_EMAIL)}`}
        method="POST"
        onSubmit={handleSubmit}
        noValidate
      >
        <input type="hidden" name="_subject" value="New website enquiry from the contact page" />
        <input type="hidden" name="_template" value="box" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value={nextUrl} />
        <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

        <div className="form-grid">
          <div className={`field${errors.name ? ' error' : ''}`}>
            <label htmlFor="name">Your Name <span>*</span></label>
            <input type="text" id="name" name="name" placeholder="e.g. Sarah Nakato" required autoComplete="name" />
            <small className="error-msg">{errors.name ?? ''}</small>
          </div>

          <div className={`field${errors.phone ? ' error' : ''}`}>
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="e.g. 0782 011079" autoComplete="tel" />
            <small className="error-msg">{errors.phone ?? ''}</small>
          </div>

          <div className={`field field--full${errors.email ? ' error' : ''}`}>
            <label htmlFor="email">Email Address <span>*</span></label>
            <input type="email" id="email" name="email" placeholder="e.g. parent@example.com" required autoComplete="email" />
            <small className="error-msg">{errors.email ?? ''}</small>
          </div>

          <div className={`field field--full${errors.message ? ' error' : ''}`}>
            <label htmlFor="message">Your Message <span>*</span></label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your enquiry — admissions, school visit, fees…"
              required
            />
            <small className="error-msg">{errors.message ?? ''}</small>
          </div>

          <div className="field field--full">
            <button type="submit" className="btn btn--primary btn--block">
              <Icon name="send" /> Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
