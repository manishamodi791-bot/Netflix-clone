import React from 'react';

const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <p className="newsletter-note">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <form
        className="newsletter-form"
        onSubmit={(e) => e.preventDefault()}
        noValidate
      >
        <input
          className="newsletter-form__input"
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
        />
        <button className="newsletter-form__btn" type="submit">
          Get Started
          <span aria-hidden="true" className="newsletter-form__arrow">›</span>
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
