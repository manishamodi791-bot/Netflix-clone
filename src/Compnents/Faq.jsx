import React, { useState } from 'react';
import faqData from '../data/faq.json';

const Faq = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="faq-section">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <ul className="faq-list">
        {faqData.map((item) => (
          <li key={item.id} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleFaq(item.id)}
              aria-expanded={openId === item.id}
            >
              <span>{item.question}</span>
              <svg
                className={`faq-icon ${openId === item.id ? 'open' : ''}`}
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <div className={`faq-answer ${openId === item.id ? 'open' : ''}`}>
              <div className="faq-answer-content">
                {item.answer.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
