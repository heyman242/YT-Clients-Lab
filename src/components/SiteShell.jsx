export default function SiteShell({ children }) {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Global background (one place, all pages) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        {/* top glow */}
        <div className="absolute -top-56 -left-40 size-[60rem] rounded-full bg-red-600/20 blur-3xl" />
        {/* bottom glow — keep inside and nudge with translate */}
        <div className="absolute bottom-0 right-[-10rem] translate-y-1/3 size-[70rem] rounded-full bg-red-500/15 blur-3xl" />
        {/* vignette + grid remain the same */}
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_15%,rgba(255,255,255,0.05),transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-soft-light"
          style={{
            backgroundImage: `
        linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
      `,
            backgroundSize: "40px 40px, 40px 40px",
          }}
        />
      </div>

      {/* Page content goes above */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
