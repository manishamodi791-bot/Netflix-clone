import { useRef, useState } from 'react';
import trendingData from '../data/trending.json';


const Trends = () => {
  const rowRef = useRef(null);
  const [showLeft,  setShowLeft]  = useState(false);
  const [showRight, setShowRight] = useState(true);

  /* ── scroll helpers ── */
  const scrollRow = (dir) => {
    rowRef.current?.scrollBy({
      left: dir === 'right' ? 680 : -680,
      behavior: 'smooth',
    });
  };

  const onScroll = () => {
    const el = rowRef.current;
    if (!el) return;
    setShowLeft(el.scrollLeft > 10);
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  };

  return (
    <section className="trends-section">

      {/* ── Section title ── */}
      <h2 className="trends-heading">Trending Now</h2>

      {/* ── Wrapper holds row + chevrons ── */}
      <div className="trends-row-wrapper">

        {/* Left scroll chevron – only visible after user has scrolled */}
        {showLeft && (
          <button
            className="trends-chevron trends-chevron--left"
            onClick={() => scrollRow('left')}
            aria-label="Scroll left"
          >
            &#8249;
          </button>
        )}

        {/* ── Scrollable card row ── */}
        <div className="trends-row" ref={rowRef} onScroll={onScroll}>
          {trendingData.map((item) => (
            <div className="trends-card" key={item.id}>

             
              <span className="trends-rank" aria-hidden="true">
                {item.rank}
              </span>

             
              <div className="trends-poster">

                {/* Netflix N badge – shown on Netflix Originals */}
                {item.hasNetflixBadge && (
                  <span className="trends-badge" aria-hidden="true">
                    <svg viewBox="0 0 24 34" xmlns="http://www.w3.org/2000/svg">
                      {/* Red bookmark ribbon shape */}
                      <path d="M0 0h24v34l-12-5.5L0 34z" fill="#E50914"/>
                      {/* White N letterform */}
                      <path
                        d="M6 6h3l3 8.5L15 6h3v13l-1.8-.65L15 12.8V19H12V12.8l-1.2 5.55L9 19V6z"
                        fill="#fff"
                      />
                    </svg>
                  </span>
                )}

                <img
                  src={item.poster}
                  alt={item.title}
                  loading="lazy"
                  draggable="false"
                  /* Fallback to a dark placeholder if image fails */
                  onError={(e) => {
                    e.currentTarget.style.background = '#333';
                    e.currentTarget.removeAttribute('src');
                  }}
                />

                {/* Semi-transparent hover tint */}
                <div className="trends-poster__hover" aria-hidden="true" />
              </div>

            </div>
          ))}
        </div>

        {/* Right scroll chevron */}
        {showRight && (
          <button
            className="trends-chevron trends-chevron--right"
            onClick={() => scrollRow('right')}
            aria-label="Scroll right"
          >
            &#8250;
          </button>
        )}

      </div>
    </section>
  );
};

export default Trends;
