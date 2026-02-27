import { useEffect, useRef, useState, useCallback } from "react";

export default function MouseGlowEffect() {
  const [displayPos, setDisplayPos] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [showGlow, setShowGlow] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const displayPosRef = useRef({ x: 0, y: 0 });
  const stopTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const fadeTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const rafRef = useRef<number>();

  useEffect(() => {
    const isMobile = /iPhone|iPad|Android|webOS|BlackBerry/i.test(navigator.userAgent);
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
      setShowGlow(true);
      setIsMoving(true);
      setIsPulsing(false);

      if (stopTimeoutRef.current) clearTimeout(stopTimeoutRef.current);
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);

      stopTimeoutRef.current = setTimeout(() => {
        setIsMoving(false);
        setIsPulsing(true);
        fadeTimeoutRef.current = setTimeout(() => {
          setIsPulsing(false);
          setShowGlow(false);
        }, 500);
      }, 200);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (stopTimeoutRef.current) clearTimeout(stopTimeoutRef.current);
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
    };
  }, []);

  // Smooth inertia animation loop
  useEffect(() => {
    const animate = () => {
      displayPosRef.current = {
        x: displayPosRef.current.x + (mousePosRef.current.x - displayPosRef.current.x) * 0.15,
        y: displayPosRef.current.y + (mousePosRef.current.y - displayPosRef.current.y) * 0.15,
      };
      setDisplayPos({ ...displayPosRef.current });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-50 transition-opacity duration-300 ${
        showGlow ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      <div
        className={isPulsing ? "animate-pulse-glow" : ""}
        style={{
          position: "absolute",
          left: displayPos.x,
          top: displayPos.y,
          width: 300,
          height: 300,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: `radial-gradient(circle, hsl(217 91% 53% / ${isMoving ? 0.12 : 0.08}) 0%, transparent 70%)`,
          filter: "blur(40px)",
          transition: "background 0.3s ease",
        }}
      />
    </div>
  );
}
