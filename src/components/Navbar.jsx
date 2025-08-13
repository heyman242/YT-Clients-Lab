import { useState } from "react";

/** Put your actual socials here */
const SOCIAL = {
  x: "https://x.com/YOUR_HANDLE",
  linkedin: "https://www.linkedin.com/in/YOUR_HANDLE/",
  instagram: "https://www.instagram.com/YOUR_HANDLE/",
  youtube: "https://www.youtube.com/@YOUR_HANDLE",
};

export default function Navbar({ sticky = false }) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#method", label: "5-Step Process" },
    { href: "#work", label: "Portfolio" },
    { href: "#testimonials", label: "Testimonials" }, // add this section later if you want
  ];

  return (
    <header
      className={[
        "z-50 w-full",
        sticky ? "sticky top-0 backdrop-blur" : "",
      ].join(" ")}
    >
      {/* container */}
      <nav className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-6 py-3 md:py-4">
        {/* LEFT — Brand */}
        <a href="#home" className="group inline-flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-xl bg-red-600 text-white shadow-[0_8px_24px_rgba(239,68,68,0.35)]">
            {/* simple video-mark logo */}
            <svg
              viewBox="0 0 24 24"
              className="size-5"
              fill="currentColor"
              aria-hidden
            >
              <path d="M9 7h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9a2 2 0 012-2z" />
              <path d="M10 12l5-3v6l-5-3z" className="opacity-90" />
            </svg>
          </span>
          <span className="text-3xl font-semibold tracking-tight">
            YT Clients Lab
          </span>
        </a>

        {/* CENTER — Main links (desktop) */}
        <div className="hidden justify-self-center md:flex md:items-center md:gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-2xl font-medium text-white/90 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* RIGHT — CTA + socials (desktop) */}
        <div className="hidden items-center justify-self-end gap-6 md:flex">
          <a
            href="#book"
            className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-2xl font-semibold text-white hover:bg-white/10"
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

          <div className="flex items-center gap-4 text-white/90">
            <a
              href={SOCIAL.x}
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter)"
              className="hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="size-8" fill="currentColor">
                <path d="M17.53 3H21l-7.68 8.78L22 21h-6.2l-4.86-5.5L5.4 21H3l8.2-9.39L2 3h6.24l4.39 4.97L17.53 3Z" />
              </svg>
            </a>
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="size-8" fill="currentColor">
                <path d="M6.94 8.5V21H3.5V8.5h3.44ZM5.22 3a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2ZM21 21h-3.44v-6.36c0-1.52-.54-2.56-1.9-2.56-1.04 0-1.66.7-1.94 1.38-.1.24-.13.58-.13.92V21H10.1s.05-10.96 0-12.1h3.44v1.72c.46-.7 1.28-1.7 3.1-1.7 2.27 0 4.36 1.48 4.36 4.67V21Z" />
              </svg>
            </a>
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="size-8" fill="currentColor">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.8A5.2 5.2 0 1 1 6.8 13 5.2 5.2 0 0 1 12 7.8Zm0 2a3.2 3.2 0 1 0 3.2 3.2A3.2 3.2 0 0 0 12 9.8ZM18.5 6.5a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z" />
              </svg>
            </a>
            <a
              href={SOCIAL.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="size-8" fill="currentColor">
                <path d="M23 12s0-3.4-.43-5a3.1 3.1 0 0 0-2.2-2.2C18.7 4.4 12 4.4 12 4.4s-6.7 0-8.4.4A3.1 3.1 0 0 0 1.4 7C1 8.6 1 12 1 12s0 3.4.4 5a3.1 3.1 0 0 0 2.2 2.2c1.7.4 8.4.4 8.4.4s6.7 0 8.4-.4a3.1 3.1 0 0 0 2.2-2.2c.4-1.6.4-5 .4-5ZM10 15.5v-7l6 3.5-6 3.5Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile burger (right edge) */}
        <button
          className="justify-self-end rounded-lg border border-white/15 bg-white/5 p-2 text-white/90 md:hidden"
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
          <div className="mx-auto max-w-7xl px-6 pb-6">
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

              <div className="mt-2 flex items-center gap-4 px-1 text-white/80">
                <a
                  href={SOCIAL.x}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X (Twitter)"
                  className="hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="size-5"
                    fill="currentColor"
                  >
                    <path d="M17.53 3H21l-7.68 8.78L22 21h-6.2l-4.86-5.5L5.4 21H3l8.2-9.39L2 3h6.24l4.39 4.97L17.53 3Z" />
                  </svg>
                </a>
                <a
                  href={SOCIAL.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="size-5"
                    fill="currentColor"
                  >
                    <path d="M6.94 8.5V21H3.5V8.5h3.44ZM5.22 3a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2ZM21 21h-3.44v-6.36c0-1.52-.54-2.56-1.9-2.56-1.04 0-1.66.7-1.94 1.38-.1.24-.13.58-.13.92V21H10.1s.05-10.96 0-12.1h3.44v1.72c.46-.7 1.28-1.7 3.1-1.7 2.27 0 4.36 1.48 4.36 4.67V21Z" />
                  </svg>
                </a>
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="size-5"
                    fill="currentColor"
                  >
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.8A5.2 5.2 0 1 1 6.8 13 5.2 5.2 0 0 1 12 7.8Zm0 2a3.2 3.2 0 1 0 3.2 3.2A3.2 3.2 0 0 0 12 9.8ZM18.5 6.5a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z" />
                  </svg>
                </a>
                <a
                  href={SOCIAL.youtube}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="size-5"
                    fill="currentColor"
                  >
                    <path d="M23 12s0-3.4-.43-5a3.1 3.1 0 0 0-2.2-2.2C18.7 4.4 12 4.4 12 4.4s-6.7 0-8.4.4A3.1 3.1 0 0 0 1.4 7C1 8.6 1 12 1 12s0 3.4.4 5a3.1 3.1 0 0 0 2.2 2.2c1.7.4 8.4.4 8.4.4s6.7 0 8.4-.4a3.1 3.1 0 0 0 2.2-2.2c.4-1.6.4-5 .4-5ZM10 15.5v-7l6 3.5-6 3.5Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
