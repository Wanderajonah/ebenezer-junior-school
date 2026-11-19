'use client';

import { useRef, useState } from 'react';
import Icon from '@/components/Icon';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function NewsletterForm() {
  const inputRef = useRef(null);
  const [message, setMessage] = useState('');
  const [tone, setTone] = useState('');

  function onSubmit(event) {
    event.preventDefault();
    const value = inputRef.current?.value.trim() ?? '';

    if (!EMAIL_RE.test(value)) {
      setMessage('Please enter a valid email address.');
      setTone('error');
      return;
    }

    setMessage('Thank you! You have been subscribed to our newsletter.');
    setTone('success');
    if (inputRef.current) inputRef.current.value = '';
    window.setTimeout(() => setMessage(''), 5000);
  }

  return (
    <div className="newsletter">
      <p>Subscribe for school news, term dates and updates.</p>
      <form id="newsletterForm" onSubmit={onSubmit} noValidate>
        <label htmlFor="newsletterEmail" className="sr-only">Email address</label>
        <input
          type="email"
          id="newsletterEmail"
          name="email"
          placeholder="Your email address"
          autoComplete="email"
          ref={inputRef}
        />
        <button className="btn btn--gold" type="submit" aria-label="Subscribe">
          <Icon name="send" />
        </button>
      </form>
      <p
        className="newsletter-msg"
        id="newsletterMsg"
        role="status"
        aria-live="polite"
        style={tone ? { color: tone === 'error' ? '#F2C14E' : '#7ED9A0' } : undefined}
      >
        {message}
      </p>
    </div>
  );
}
