type IconProps = { name: string; className?: string };

const paths: Record<string, React.ReactNode> = {
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  map: (
    <>
      <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" />
      <path d="M9 4v14M15 6v14" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  rupee: (
    <>
      <path d="M7 5h10M7 9h10M14 5c0 4-3 5-7 5l7 9" />
    </>
  ),
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  ),
  whatsapp: (
    <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Zm0 0M8.5 8.5c.3-.6.6-.6.9-.6h.6c.2 0 .5 0 .7.6l.8 2c.1.2 0 .4-.1.6l-.5.6c-.1.2-.3.3-.1.6.2.4.9 1.5 2 2.2 1 .6 1.4.5 1.6.4l.6-.6c.2-.2.4-.2.6-.1l1.9.9c.3.1.5.3.5.5 0 .8-.6 1.7-1 1.9-.5.3-1.6.6-3-.1-2-1-3.7-2.7-4.8-4.8-.5-1.1-.5-2 .2-2.8Z" />
  ),
  seat: (
    <>
      <path d="M5 11V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v5" />
      <path d="M4 11h12a2 2 0 0 1 2 2v2H6a2 2 0 0 1-2-2v-2ZM6 15v4M16 15v4" />
    </>
  ),
  bag: (
    <>
      <rect x="6" y="7" width="12" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
    </>
  ),
  star: (
    <path d="m12 3 2.5 5.5L20 9.3l-4 4 1 5.7-5-2.8-5 2.8 1-5.7-4-4 5.5-.8L12 3Z" />
  ),
  check: <path d="m5 12 4 4 10-10" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  car: (
    <>
      <path d="M5 13 7 7h10l2 6M3 13h18v4a1 1 0 0 1-1 1h-1a2 2 0 0 1-4 0H9a2 2 0 0 1-4 0H4a1 1 0 0 1-1-1v-4Z" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="5" r="2" />
      <path d="M8 19h8a3 3 0 0 0 0-6H8a3 3 0 0 1 0-6h8" />
    </>
  ),
};

export default function Icon({ name, className = "h-6 w-6" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={name === "whatsapp" || name === "phone" ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}
