'use client';

export default function ScrollIndicator() {
  function handleClick() {
    document
      .getElementById('hero')
      ?.nextElementSibling
      ?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <style>{`
        @keyframes scroll-bounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(6px); }
        }
        .scroll-indicator-arrow {
          animation: scroll-bounce 1.5s ease-in-out infinite;
        }
        @keyframes highlight-draw {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .scroll-indicator-highlight {
          transform-box: fill-box;
          transform-origin: left center;
          animation: highlight-draw 0.7s ease-out forwards;
        }
      `}</style>
      <button
        type="button"
        onClick={handleClick}
        aria-label="Scroll to next section"
        className="cursor-pointer block bg-transparent border-none p-0 w-11 lg:w-16 shrink-0"
      >
        <svg
          viewBox="0 0 64 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          aria-hidden="true"
        >
          <rect className="scroll-indicator-highlight" y="29" width="64" height="27" fill="#00FFA3" />
          <path
            className="scroll-indicator-arrow"
            d="M48.5 28.875L32.4688 44.8125C32.1875 45.0938 31.7188 45.0938 31.4375 44.8125L15.4062 28.875C15.125 28.5 15.125 28.0312 15.4062 27.75C15.6875 27.4688 16.25 27.4688 16.5312 27.75L31.1562 42.4688V3.84375C31.1562 3.375 31.5312 3.09375 32 3.09375C32.375 3.09375 32.75 3.375 32.75 3.84375V42.4688L47.375 27.75C47.75 27.4688 48.2188 27.4688 48.5 27.75C48.7812 28.0312 48.7812 28.5 48.5 28.875Z"
            fill="#0D0D0D"
          />
        </svg>
      </button>
    </>
  );
}
