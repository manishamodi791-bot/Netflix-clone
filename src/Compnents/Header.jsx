import React from 'react';


const Header = () => {
  return (
    <header className="netflix-header">
      {/* Background Dimming Layer over your asset element */}
      <div className="header-bg-overlay" />

      {/* SVG Vector Logo */}
      <div className="netflix-logo">
        <svg viewBox="0 0 111 30" aria-hidden="true">
          <path d="M10.5 0h4.8v30h-4.8zM24.4 0h4.6l9.3 19.8V0h4.8v30h-4.2l-9.7-20.7V30h-4.8zM57.4 4.3h-7.7V0h20.2v4.3h-7.7V30h-4.8zM73.2 0h4.8v25.7h11.2V30H73.2zM94.6 0h4.8v30h-4.8zM103.7 0h4.6l6.1 13.5L120.5 0h4.7l-8.5 17.6V30h-4.8V17.6z"/>
        </svg>
      </div>

      {/* Interaction Controls */}
      <div className="header-controls">
        <div className="lang-selector-wrapper">
          {/* Left Globe Unicode Icon */}
          <span className="lang-icon-left">&#12710;</span> 
          
          <select defaultValue="en">
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>

          {/* Right Arrow Unicode Icon */}
          <span className="lang-icon-right">&#9662;</span>
        </div>

        <button className="btn-signin">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;