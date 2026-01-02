import { useState } from "react";

const AnimatedLogo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="/"
      className="flex items-center gap-2 group relative h-10 md:h-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
    >
      {/* Bullseye SVG - Rotates and fades out on hover/tap */}
      <div
        className={`
          transition-all duration-500 ease-in-out
          ${isHovered ? "rotate-[360deg] scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}
        `}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-foreground w-8 h-8 md:w-10 md:h-10"
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

      {/* Text Logo - Fades in on hover/tap */}
      <div
        className={`
          absolute left-0 transition-all duration-500 ease-in-out
          opacity-0 scale-95
          ${isHovered ? "opacity-100 scale-100" : ""}
          pointer-events-none
        `}
        style={{ transitionDelay: isHovered ? "200ms" : "0ms" }}
      >
        <span
          className="text-lg md:text-2xl font-bold text-foreground whitespace-nowrap"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          Creative Core
        </span>
      </div>
    </a>
  );
};

export default AnimatedLogo;
