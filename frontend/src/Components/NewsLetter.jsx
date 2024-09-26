import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = () => {
    if (email.trim() === '') {
      setMessage('Please enter a valid email address.');
    } else {
      setMessage('You have subscribed successfully!');
    }
  };

  return (
    <div className="newsletter-container">
      <h2 className="newsletter-title">Get 25% off your first order</h2>
      <p className="newsletter-subtitle">Subscribe to receive the latest news and promotions</p>
      <div className="newsletter-input-container">
        <input
          className="newsletter-input"
          type="email"
          placeholder="Your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="newsletter-button"
          onClick={handleSubscribe}
        >
          Subscribe
        </button>
      </div>
      {message && (
        <p className={`newsletter-message ${message.includes('successfully') ? 'success-message' : 'error-message'}`}>
          {message}
        </p>
      )}
    </div>
  );
}


export default NewsLetter 