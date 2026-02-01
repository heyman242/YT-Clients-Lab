export default function Footer({
  year = new Date().getFullYear(),
  socials = {
    x: "#",
    linkedin: "#",
    instagram: "#",
    youtube: "#",
  },
}) {
  const items = [
    {
      key: "x",
      href: socials.x,
      label: "X (Twitter)",
      icon: (
        <svg viewBox="0 0 24 24" className="size-5 md:size-8" fill="currentColor">
          <path d="M17.53 3H21l-7.68 8.78L22 21h-6.2l-4.86-5.5L5.4 21H3l8.2-9.39L2 3h6.24l4.39 4.97L17.53 3Z" />
        </svg>
      ),
    },
    {
      key: "linkedin",
      href: socials.linkedin,
      label: "LinkedIn",
      icon: (
        <svg viewBox="0 0 24 24" className="size-5 md:size-8" fill="currentColor">
          <path d="M6.94 8.5V21H3.5V8.5h3.44ZM5.22 3a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2ZM21 21h-3.44v-6.36c0-1.52-.54-2.56-1.9-2.56-1.04 0-1.66.7-1.94 1.38-.1.24-.13.58-.13.92V21H10.1s.05-10.96 0-12.1h3.44v1.72c.46-.7 1.28-1.7 3.1-1.7 2.27 0 4.36 1.48 4.36 4.67V21Z" />
        </svg>
      ),
    },
    {
      key: "instagram",
      href: socials.instagram,
      label: "Instagram",
      icon: (
        <svg viewBox="0 0 24 24" className="size-5 md:size-8" fill="currentColor">
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.8A5.2 5.2 0 1 1 6.8 13 5.2 5.2 0 0 1 12 7.8Zm0 2a3.2 3.2 0 1 0 3.2 3.2A3.2 3.2 0 0 0 12 9.8ZM18.5 6.5a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z" />
        </svg>
      ),
    },
    {
      key: "youtube",
      href: socials.youtube,
      label: "YouTube",
      icon: (
        <svg viewBox="0 0 24 24" className="size-5 md:size-8" fill="currentColor">
          <path d="M23 12s0-3.4-.43-5a3.1 3.1 0 0 0-2.2-2.2C18.7 4.4 12 4.4 12 4.4s-6.7 0-8.4.4A3.1 3.1 0 0 0 1.4 7C1 8.6 1 12 1 12s0 3.4.4 5a3.1 3.1 0 0 0 2.2 2.2c1.7.4 8.4.4 8.4.4s6.7 0 8.4-.4a3.1 3.1 0 0 0 2.2-2.2c.4-1.6.4-5 .4-5ZM10 15.5v-7l6 3.5-6 3.5Z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-6 md:flex-row md:justify-between md:py-8">
        <p className="text-sm md:text-xl text-white/70 text-center md:text-left">
          © {year} <span className="font-medium">YT Clients Lab</span>. All
          rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {items.map((i) => (
            <a
              key={i.key}
              href={i.href}
              target="_blank"
              rel="noreferrer"
              aria-label={i.label}
              className="group grid size-10 md:size-12 place-items-center rounded-xl border border-white/15 bg-white/[0.03] text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              {i.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
