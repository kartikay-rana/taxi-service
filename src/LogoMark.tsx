/* Professional vector logo mark for Amit Taxi Service.
   Gold gradient badge + bold "A" monogram + classic taxi checker band. */
export default function LogoMark({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 96" className={className} aria-label="Amit Taxi Service logo">
      <defs>
        <linearGradient id="lg-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="45%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
        <linearGradient id="lg-gold-soft" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <linearGradient id="lg-dark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#27272a" />
          <stop offset="100%" stopColor="#09090b" />
        </linearGradient>
      </defs>

      {/* Outer gold ring */}
      <circle cx="48" cy="48" r="46" fill="url(#lg-gold)" />
      {/* Inner dark face */}
      <circle cx="48" cy="48" r="40" fill="url(#lg-dark)" />
      {/* Thin inner gold pinstripe */}
      <circle cx="48" cy="48" r="36.5" fill="none" stroke="url(#lg-gold)" strokeWidth="1.2" opacity="0.9" />

      {/* Monogram "A" */}
      <path
        d="M48 22 L66 64 L57.5 64 L53.5 54 L42.5 54 L38.5 64 L30 64 Z M48 38.5 L44.8 47 L51.2 47 Z"
        fill="url(#lg-gold-soft)"
      />

      {/* Taxi checker band */}
      <g>
        <rect x="22" y="68" width="52" height="9" rx="2" fill="#0c0a09" stroke="url(#lg-gold)" strokeWidth="1" />
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <rect
            key={i}
            x={23.5 + i * 6.2}
            y={i % 2 === 0 ? 69.2 : 72.8}
            width="5.4"
            height="3.6"
            fill="#fbbf24"
          />
        ))}
      </g>

      {/* Top star accent */}
      <path d="M48 8.5 l1.8 3.6 4 .6 -2.9 2.8 .7 4 -3.6 -1.9 -3.6 1.9 .7 -4 -2.9 -2.8 4 -.6 Z" fill="url(#lg-gold-soft)" />
    </svg>
  );
}
