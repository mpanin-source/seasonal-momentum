import { useState } from "react";

const BullseyeIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="3" fill="none" />
    <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="3" fill="none" />
    <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="3" fill="none" />
    <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="3" fill="none" />
    <circle cx="50" cy="50" r="6" fill="currentColor" />
    <line x1="50" y1="0" x2="50" y2="20" stroke="currentColor" strokeWidth="2" />
    <line x1="50" y1="80" x2="50" y2="100" stroke="currentColor" strokeWidth="2" />
    <line x1="0" y1="50" x2="20" y2="50" stroke="currentColor" strokeWidth="2" />
    <line x1="80" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const AnimatedLogo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="/"
      className="flex items-center gap-2 group relative h-10 md:h-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Mobile: Logo with bullseye as the O in CORE */}
      <div className="md:hidden flex items-center">
        <span 
          className="text-lg font-bold text-foreground whitespace-nowrap tracking-wide flex items-center"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          CREATIVE C
          <BullseyeIcon className="text-foreground w-4 h-4 mx-[-1px] inline-block" />
          RE
        </span>
      </div>

      {/* Desktop: Animated bullseye that transforms to text on hover */}
      <div className="hidden md:block">
        {/* Bullseye SVG - Rotates and fades out on hover */}
        <div
          className={`
            transition-all duration-500 ease-in-out
            ${isHovered ? "rotate-[360deg] scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}
          `}
        >
          <BullseyeIcon className="text-foreground w-10 h-10" />
        </div>

        {/* Text Logo - Fades in on hover */}
        <div
          className={`
            absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out
            opacity-0 scale-95
            ${isHovered ? "opacity-100 scale-100" : ""}
            pointer-events-none
          `}
          style={{ transitionDelay: isHovered ? "200ms" : "0ms" }}
        >
          <span
            className="text-2xl font-bold text-foreground whitespace-nowrap tracking-wider flex items-center"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            CREATIVE C
            <BullseyeIcon className="text-foreground w-5 h-5 mx-[-1px] inline-block" />
            RE
          </span>
        </div>
      </div>
    </a>
  );
};

export default AnimatedLogo;
