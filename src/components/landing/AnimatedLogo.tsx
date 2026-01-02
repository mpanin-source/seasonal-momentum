import { useState } from "react";
import logo from "@/assets/logo.png";

const AnimatedLogo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="/"
      className="flex items-center gap-3 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Bullseye Logo Icon */}
      <img
        src={logo}
        alt="Creative Core"
        className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105"
      />

      {/* Expanding Text Container - Stacked Layout */}
      <div
        className={`
          overflow-hidden transition-all duration-[400ms] ease-in-out
          md:w-0 md:group-hover:w-[100px]
          w-[100px]
        `}
      >
        <div className="flex flex-col leading-tight whitespace-nowrap">
          <span
            className={`
              font-display text-base font-bold text-foreground tracking-wider
              transition-opacity duration-300 ease-in-out
              md:opacity-0 md:group-hover:opacity-100
              opacity-100
              ${isHovered ? "md:delay-100" : ""}
            `}
          >
            CREATIVE
          </span>
          <span
            className={`
              font-display text-base font-bold text-foreground tracking-wider
              transition-opacity duration-300 ease-in-out
              md:opacity-0 md:group-hover:opacity-100
              opacity-100
              ${isHovered ? "md:delay-200" : ""}
            `}
          >
            CORE
          </span>
        </div>
      </div>
    </a>
  );
};

export default AnimatedLogo;
