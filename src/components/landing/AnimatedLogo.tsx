import { useState } from "react";

const AnimatedLogo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="/"
      className="flex items-center gap-2 group relative h-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Bullseye SVG - Rotates and fades out on hover */}
      <div
        className={`
          transition-all duration-500 ease-in-out
          ${isHovered ? "md:rotate-[360deg] md:scale-0 md:opacity-0" : "rotate-0 scale-100 opacity-100"}
        `}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-foreground"
        >
          {/* Outer ring */}
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="3" fill="none" />
          {/* Second ring */}
          <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="3" fill="none" />
          {/* Third ring */}
          <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="3" fill="none" />
          {/* Inner ring */}
          <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="3" fill="none" />
          {/* Center dot */}
          <circle cx="50" cy="50" r="6" fill="currentColor" />
          {/* Crosshairs */}
          <line x1="50" y1="0" x2="50" y2="20" stroke="currentColor" strokeWidth="2" />
          <line x1="50" y1="80" x2="50" y2="100" stroke="currentColor" strokeWidth="2" />
          <line x1="0" y1="50" x2="20" y2="50" stroke="currentColor" strokeWidth="2" />
          <line x1="80" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      {/* Text Logo - Fades in on hover (desktop) / Always visible (mobile) */}
      <div
        className={`
          absolute left-0 transition-all duration-500 ease-in-out
          md:opacity-0 md:scale-95 md:translate-x-0
          ${isHovered ? "md:opacity-100 md:scale-100" : ""}
          opacity-0 pointer-events-none
          md:block hidden
        `}
        style={{ transitionDelay: isHovered ? "200ms" : "0ms" }}
      >
        <span
          className="text-2xl font-bold text-foreground whitespace-nowrap"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          Creative Core
        </span>
      </div>

      {/* Mobile: Always show text next to bullseye */}
      <div className="md:hidden flex items-center">
        <span
          className="text-xl font-bold text-foreground whitespace-nowrap"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          Creative Core
        </span>
      </div>
    </a>
  );
};

export default AnimatedLogo;
