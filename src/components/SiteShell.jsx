export default function SiteShell({ children }) {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Global background (one place, all pages) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        {/* red glows – keep subtle */}
        <div className="absolute -top-56 -left-40 size-[60rem] rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute -bottom-[30%] -right-40 size-[70rem] rounded-full bg-red-500/15 blur-3xl" />

        {/* soft vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_15%,rgba(255,255,255,0.05),transparent_70%)]" />

        {/* fine grid overlay */}
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
