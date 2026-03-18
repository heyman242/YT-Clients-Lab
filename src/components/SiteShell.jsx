export default function SiteShell({ children }) {
  return (
    <div className="relative min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      {/* Subtle background decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        {/* Subtle warm glow accents */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[var(--color-accent)]/5 blur-[150px]" />
        <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-[var(--color-accent)]/3 blur-[120px]" />
      </div>

      {/* Page content goes above */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
