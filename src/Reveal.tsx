import { useEffect, useRef, useState, type ReactNode } from "react";

type Direction = "left" | "right" | "up" | "down" | "zoom";

const hidden: Record<Direction, string> = {
  left: "opacity-0 -translate-x-16",
  right: "opacity-0 translate-x-16",
  up: "opacity-0 translate-y-16",
  down: "opacity-0 -translate-y-16",
  zoom: "opacity-0 scale-90",
};

export default function Reveal({
  children,
  from = "up",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  from?: Direction;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform-gpu transition-all duration-700 ease-out will-change-transform ${
        visible ? "opacity-100 translate-x-0 translate-y-0 scale-100" : hidden[from]
      } ${className}`}
    >
      {children}
    </div>
  );
}
