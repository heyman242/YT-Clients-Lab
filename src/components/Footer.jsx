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
        <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
          <path d="M17.53 3H21l-7.68 8.78L22 21h-6.2l-4.86-5.5L5.4 21H3l8.2-9.39L2 3h6.24l4.39 4.97L17.53 3Z" />
        </svg>
      ),
    },
    {
      key: "linkedin",
      href: socials.linkedin,
      label: "LinkedIn",
      icon: (
        <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
          <path d="M6.94 8.5V21H3.5V8.5h3.44ZM5.22 3a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2ZM21 21h-3.44v-6.36c0-1.52-.54-2.56-1.9-2.56-1.04 0-1.66.7-1.94 1.38-.1.24-.13.58-.13.92V21H10.1s.05-10.96 0-12.1h3.44v1.72c.46-.7 1.28-1.7 3.1-1.7 2.27 0 4.36 1.48 4.36 4.67V21Z" />
        </svg>
      ),
    },
    {
      key: "youtube",
      href: socials.youtube,
      label: "YouTube",
      icon: (
        <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
          <path d="M23 12s0-3.4-.43-5a3.1 3.1 0 0 0-2.2-2.2C18.7 4.4 12 4.4 12 4.4s-6.7 0-8.4.4A3.1 3.1 0 0 0 1.4 7C1 8.6 1 12 1 12s0 3.4.4 5a3.1 3.1 0 0 0 2.2 2.2c1.7.4 8.4.4 8.4.4s6.7 0 8.4-.4a3.1 3.1 0 0 0 2.2-2.2c.4-1.6.4-5 .4-5ZM10 15.5v-7l6 3.5-6 3.5Z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 md:flex-row md:justify-between">
        {/* Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="#home" className="flex items-center gap-2">
            <img
              src="/logo.svg"
              alt="YT Clients Lab"
              className="h-8 w-8"
            />
            <span className="text-lg font-bold text-[var(--color-text-primary)]">
              YT Clients Lab
            </span>
          </a>
          <p className="text-sm text-[var(--color-text-muted)]">
            © {year} YT Clients Lab. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href="#results"
            className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            Results
          </a>
          <a
            href="#method"
            className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            Process
          </a>
          <a
            href="#book"
            className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            Book a Call
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {items.map((i) => (
            <a
              key={i.key}
              href={i.href}
              target="_blank"
              rel="noreferrer"
              aria-label={i.label}
              className="grid size-10 place-items-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-text-secondary)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              {i.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
