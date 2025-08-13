// Navbar.jsx
import { useState } from "react";

const LOGO_PATH = "/logo.svg";

export default function Navbar({ sticky = false }) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#method", label: "5-Step Process" },
    { href: "#work", label: "Portfolio" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <header
      className={[
        "z-50 w-full",
        sticky ? "sticky top-0 backdrop-blur" : "",
      ].join(" ")}
    >
      {/* unified container width = hero's container (max-w-6xl) */}
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:py-4">
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
        <div className="pointer-events-auto absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-10">
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

        {/* RIGHT — CTA */}
        <div className="hidden md:flex items-center gap-6 shrink-0">
          <a
            href="#book"
            className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-base md:text-2xl font-semibold text-white hover:bg-white/10"
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
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
