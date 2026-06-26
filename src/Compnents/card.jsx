import reasonsData from '../data/reasons.json';

const ICONS = { 
  tv: (
    <svg viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="tvGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#c850c0" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#7b2ff7" stopOpacity="0.4"/>
        </radialGradient>
        <radialGradient id="screenGlow" cx="50%" cy="40%" r="60%">
          <stop offset="0%"   stopColor="#e040fb"/>
          <stop offset="100%" stopColor="#7b2ff7"/>
        </radialGradient>
      </defs>
      {/* Outer glow blob */}
      <ellipse cx="40" cy="38" rx="28" ry="18" fill="url(#tvGlow)" opacity="0.5"/>
      {/* TV body */}
      <rect x="8" y="8" width="64" height="42" rx="5" ry="5" fill="#1a0a2e" stroke="#7b2ff7" strokeWidth="2"/>
      {/* Screen */}
      <rect x="14" y="13" width="52" height="31" rx="3" fill="url(#screenGlow)" opacity="0.85"/>
      {/* Stand neck */}
      <rect x="35" y="50" width="10" height="6" rx="1" fill="#2d1a4a"/>
      {/* Stand base */}
      <rect x="24" y="56" width="32" height="4" rx="2" fill="#2d1a4a"/>
    </svg>
  ),

  /* Circle with a downward arrow – download icon */
  download: (
    <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="dlGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#f06292"/>
          <stop offset="100%" stopColor="#c850c0"/>
        </radialGradient>
      </defs>
      {/* Glowing circle background */}
      <circle cx="30" cy="30" r="26" fill="url(#dlGrad)" opacity="0.92"/>
      {/* White downward arrow */}
      <path
        d="M30 16 v18 M22 28 l8 10 8-10"
        stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
      />
      {/* Underline bar */}
      <line x1="20" y1="42" x2="40" y2="42" stroke="#fff" strokeWidth="3.5" strokeLinecap="round"/>
    </svg>
  ),

  /* Phone/tablet/laptop devices icon */
  devices: (
    <svg viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="devGlow" cx="50%" cy="50%" r="55%">
          <stop offset="0%"   stopColor="#e040fb" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#7b2ff7" stopOpacity="0.2"/>
        </radialGradient>
      </defs>
      {/* Glow */}
      <ellipse cx="44" cy="36" rx="26" ry="18" fill="url(#devGlow)"/>
      {/* Laptop base */}
      <rect x="16" y="14" width="48" height="30" rx="3" fill="#1a0a2e" stroke="#c850c0" strokeWidth="1.8"/>
      <rect x="20" y="18" width="40" height="22" rx="2" fill="#7b2ff7" opacity="0.7"/>
      <rect x="10" y="44" width="60" height="4"  rx="2" fill="#2d1a4a"/>
      {/* Phone overlay */}
      <rect x="52" y="26" width="18" height="28" rx="3" fill="#1a0a2e" stroke="#e040fb" strokeWidth="1.5"/>
      <rect x="55" y="30" width="12" height="18" rx="1" fill="#c850c0" opacity="0.7"/>
      <circle cx="61" cy="51" r="1.5" fill="#888"/>
    </svg>
  ),

  /* Two cute kid face blocks (matching screenshot) */
  kids: (
    <svg viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="kidsGlow" cx="50%" cy="50%" r="55%">
          <stop offset="0%"   stopColor="#f48fb1" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#c850c0" stopOpacity="0.1"/>
        </radialGradient>
      </defs>
      <ellipse cx="40" cy="38" rx="30" ry="18" fill="url(#kidsGlow)"/>

      {/* Left pink block face */}
      <rect x="8"  y="18" width="30" height="30" rx="6" fill="#e91e8c"/>
      {/* Left eyes */}
      <circle cx="19" cy="30" r="3" fill="#fff"/>
      <circle cx="29" cy="30" r="3" fill="#fff"/>
      <circle cx="20" cy="31" r="1.5" fill="#1a0a2e"/>
      <circle cx="30" cy="31" r="1.5" fill="#1a0a2e"/>
      {/* Left smile */}
      <path d="M17 37 q6 5 12 0" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round"/>

      {/* Right purple block face – slightly overlapping and lower */}
      <rect x="34" y="26" width="30" height="30" rx="6" fill="#7b2ff7"/>
      {/* Right eyes */}
      <circle cx="45" cy="38" r="3" fill="#fff"/>
      <circle cx="55" cy="38" r="3" fill="#fff"/>
      <circle cx="46" cy="39" r="1.5" fill="#1a0a2e"/>
      <circle cx="56" cy="39" r="1.5" fill="#1a0a2e"/>
      {/* Right smile */}
      <path d="M43 45 q6 5 12 0" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  ),
};

/* ─────────────────────────────────────────────
   ReasonCard – single feature card
───────────────────────────────────────────── */
const ReasonCard = ({ title, description, icon }) => (
  <article className="reason-card">
    {/* Text block – top half of card */}
    <div className="reason-card__text">
      <h3 className="reason-card__title">{title}</h3>
      <p  className="reason-card__desc">{description}</p>
    </div>

    {/* Icon – bottom-right area of card */}
    <div className="reason-card__icon" aria-hidden="true">
      {ICONS[icon]}
    </div>
  </article>
);

/* ─────────────────────────────────────────────
   ReasonsSection – the full "More reasons to join" section
───────────────────────────────────────────── */
const ReasonsSection = () => (
  <section className="reasons-section">
    <h2 className="reasons-heading">More reasons to join</h2>

    <div className="reasons-grid">
      {reasonsData.map((item) => (
        <ReasonCard
          key={item.id}
          title={item.title}
          description={item.description}
          icon={item.icon}
        />
      ))}
    </div>
  </section>
);

export default ReasonsSection;
