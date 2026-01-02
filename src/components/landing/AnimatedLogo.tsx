import { useState } from "react";
import logo from "@/assets/logo.png";

const AnimatedLogo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="/"
      className="flex items-center gap-2 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Logo Icon */}
      <img
        src={logo}
        alt="Creative Core"
        className="h-8 w-8 object-contain"
      />

      {/* Expanding Text Container */}
      <div
        className={`
          overflow-hidden transition-all duration-[400ms] ease-in-out
          md:w-0 md:group-hover:w-[140px]
          w-[140px]
        `}
      >
        <div className="flex whitespace-nowrap">
          <span
            className={`
              font-display text-lg font-bold text-foreground tracking-wide
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
              font-display text-lg font-bold text-foreground tracking-wide ml-1
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
