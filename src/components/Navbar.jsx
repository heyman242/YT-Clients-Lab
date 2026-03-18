import { useState, useEffect } from "react";

const LOGO_PATH = "/logo.svg";

export default function Navbar({ sticky = false }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll to add background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#results", label: "Results" },
    { href: "#method", label: "Process" },
    { href: "#work", label: "Portfolio" },
  ];

  return (
    <header
      className={[
        "z-50 w-full transition-all duration-300",
        sticky ? "fixed top-0 left-0 right-0" : "",
        scrolled ? "bg-[var(--color-bg-primary)]/95 backdrop-blur-sm shadow-sm" : "",
      ].join(" ")}
    >
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="group inline-flex items-center gap-3 shrink-0"
        >
          <img
            src={LOGO_PATH}
            alt="YT Clients Lab"
            className="h-10 w-10"
            loading="eager"
            decoding="async"
            draggable={false}
          />
          <span className="text-xl font-bold tracking-tight text-[var(--color-text-primary)]">
            YT Clients Lab
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-base font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#book"
            className="btn-primary"
          >
            Book a Call
            <svg
              className="size-4"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden
            >
              <path d="M12.293 3.293a1 1 0 011.414 0l4.999 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L15.586 11H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z" />
            </svg>
          </a>
        </div>

        {/* Mobile Hamburger - Animated Lines */}
        <button
          className="relative z-50 flex h-[35px] w-[35px] flex-col items-center justify-center gap-[6px] md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={[
              "h-[2px] w-5 bg-[var(--color-text-primary)] transition-all duration-300 origin-center",
              open ? "rotate-45 translate-y-[8px]" : "",
            ].join(" ")}
          />
          <span
            className={[
              "h-[2px] w-5 bg-[var(--color-text-primary)] transition-all duration-300",
              open ? "opacity-0 scale-0" : "",
            ].join(" ")}
          />
          <span
            className={[
              "h-[2px] w-5 bg-[var(--color-text-primary)] transition-all duration-300 origin-center",
              open ? "-rotate-45 -translate-y-[8px]" : "",
            ].join(" ")}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={[
          "fixed inset-0 z-40 bg-[var(--color-bg-primary)] transition-all duration-300 md:hidden",
          open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none",
        ].join(" ")}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-2xl font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            className="btn-primary mt-4"
            onClick={() => setOpen(false)}
          >
            Book a Call
            <svg
              className="size-4"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden
            >
              <path d="M12.293 3.293a1 1 0 011.414 0l4.999 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L15.586 11H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
