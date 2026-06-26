import React from 'react';
import footerLinks from '../data/footer.json';

const Footer = () => {
  return (
    <footer className="footer-section">
      <p className="footer-top">
        Questions? Call <a href="tel:000-800-919-1743">000-800-919-1743</a>
      </p>
      <ul className="footer-links">
        {footerLinks.map((link, index) => (
          <li key={index} className="footer-link-item">
            <a href="#" className="footer-link">{link}</a>
          </li>
        ))}
      </ul>
      <div className="footer-lang">
        <div className="lang-selector">
          <span className="lang-selector__globe" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm4.78 4.5h-2.13a10.94 10.94 0 0 0-.97-2.52A5.52 5.52 0 0 1 12.78 5.5ZM8 2.52c.67.7 1.2 1.84 1.54 2.98H6.46C6.8 4.36 7.33 3.22 8 2.52ZM2.56 9.5A5.55 5.55 0 0 1 2.5 8c0-.52.07-1.03.18-1.5h2.56A11.3 11.3 0 0 0 5.18 8c0 .52.04 1.02.1 1.5H2.56Zm.66 1h2.13c.22.92.56 1.78.97 2.52A5.52 5.52 0 0 1 3.22 10.5Zm2.13-5H3.22a5.52 5.52 0 0 1 3.1-2.52A10.94 10.94 0 0 0 5.35 5.5ZM8 13.48c-.67-.7-1.2-1.84-1.54-2.98h3.08c-.34 1.14-.87 2.28-1.54 2.98Zm1.88-3.98H6.12A9.63 9.63 0 0 1 6.02 8c0-.52.04-1.02.1-1.5h3.76c.07.48.1.98.1 1.5 0 .52-.03 1.02-.1 1.5Zm.24 3.02a10.94 10.94 0 0 0 .97-2.52h2.13a5.52 5.52 0 0 1-3.1 2.52Zm1.15-3.52c.06-.48.1-.98.1-1.5 0-.52-.04-1.02-.1-1.5h2.56c.11.47.18.98.18 1.5s-.07 1.03-.18 1.5h-2.56Z" fill="white"/>
            </svg>
          </span>
          <select defaultValue="en" aria-label="Select language">
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
          </select>
          <span className="lang-selector__arrow" aria-hidden="true">▾</span>
        </div>
      </div>
      <p className="footer-country">Netflix India</p>
      <p className="footer-recaptcha">
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
      </p>
    </footer>
  );
};

export default Footer;
