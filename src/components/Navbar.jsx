// Navbar.jsx
import { useState } from "react";

const LOGO_PATH = "/logo.svg";

const socials = [
  {
    name: "X",
    href: "https://x.com/hvnterhimanshu",
    icon: (
      <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
        <path d="M17.53 3H21l-7.68 8.78L22 21h-6.2l-4.86-5.5L5.4 21H3l8.2-9.39L2 3h6.24l4.39 4.97L17.53 3Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/himanshu-bobade-9306ba321/",
    icon: (
      <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
        <path d="M6.94 8.5V21H3.5V8.5h3.44ZM5.22 3a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2ZM21 21h-3.44v-6.36c0-1.52-.54-2.56-1.9-2.56-1.04 0-1.66.7-1.94 1.38-.1.24-.13.58-.13.92V21H10.1s.05-10.96 0-12.1h3.44v1.72c.46-.7 1.28-1.7 3.1-1.7 2.27 0 4.36 1.48 4.36 4.67V21Z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@himanshubobade6960/videos",
    icon: (
      <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
        <path d="M23 12s0-3.4-.43-5a3.1 3.1 0 0 0-2.2-2.2C18.7 4.4 12 4.4 12 4.4s-6.7 0-8.4.4A3.1 3.1 0 0 0 1.4 7C1 8.6 1 12 1 12s0 3.4.4 5a3.1 3.1 0 0 0 2.2 2.2c1.7.4 8.4.4 8.4.4s6.7 0 8.4-.4a3.1 3.1 0 0 0 2.2-2.2c.4-1.6.4-5 .4-5ZM10 15.5v-7l6 3.5-6 3.5Z" />
      </svg>
    ),
  },
];

export default function Navbar({ sticky = false }) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#method", label: "5-Step Process" },
    { href: "#work", label: "Portfolio" },
    { href: "#results", label: "Results" },
  ];

  return (
    <header
      className={[
        "z-50 w-full",
        sticky ? "sticky top-0 backdrop-blur" : "",
      ].join(" ")}
    >
      {/* unified container width */}
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10 py-4 md:py-5">
        {/* LEFT — Brand */}
        <a
          href="#home"
          className="group inline-flex items-center gap-2 shrink-0"
        >
          <img
            src={LOGO_PATH}
            alt="YT Clients Lab"
            className="h-9 w-9 md:h-11 md:w-11"
            loading="eager"
            decoding="async"
            draggable={false}
          />
          <span className="text-xl md:text-3xl font-semibold tracking-tight">
            YT Clients Lab
          </span>
        </a>

        {/* CENTER — absolutely centered, independent of left/right widths */}
        <div className="pointer-events-auto absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-12">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-base md:text-2xl font-medium text-white/90 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* RIGHT — CTA + Socials */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a
            href="#book"
            className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-base md:text-lg font-semibold text-white hover:bg-white/10 transition"
          >
            Book a call
            <svg
              className="ml-2 size-4"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden
            >
              <path d="M12.293 3.293a1 1 0 011.414 0l4.999 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L15.586 11H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z" />
            </svg>
          </a>

          {/* Social Links - Square boxes matching footer style */}
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="grid size-11 place-items-center rounded-xl border border-white/15 bg-white/[0.03] text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Mobile burger */}
        <button
          className="rounded-lg border border-white/15 bg-white/5 p-2 text-white/90 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            viewBox="0 0 24 24"
            className="size-5"
            fill="currentColor"
            aria-hidden
          >
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden">
          <div className="mx-auto max-w-6xl px-6 pb-6">
            <div className="space-y-2 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#book"
                className="block rounded-lg bg-red-600 px-3 py-2 text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Book a call
              </a>

              {/* Social Links - Square boxes matching footer style */}
              <div className="flex items-center justify-center gap-3 pt-4 border-t border-white/10 mt-2">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="grid size-11 place-items-center rounded-xl border border-white/15 bg-white/[0.03] text-white/80 transition hover:bg-white/10 hover:text-white"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
