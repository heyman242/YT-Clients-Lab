import { useEffect } from "react";

export default function BookCall({
  url = "https://calendly.com/himanshu-ytclientslab/30min",
  height = 780,
}) {
  useEffect(() => {
    // inject Calendly assets once
    if (!document.getElementById("calendly-widget-css")) {
      const link = document.createElement("link");
      link.id = "calendly-widget-css";
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }
    if (!document.getElementById("calendly-widget-js")) {
      const script = document.createElement("script");
      script.id = "calendly-widget-js";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const host =
    typeof window !== "undefined" ? window.location.hostname : "localhost";
  const branded =
    `${url}?hide_gdpr_banner=1` +
    `&background_color=000000&text_color=ffffff&primary_color=ef4444` +
    `&embed_domain=${host}`;

  return (
    <section id="book" className="relative scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-2 md:py-2">
        <header className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Book a Call
          </h2>
          <p className="mt-3 text-2xl text-white/90">
            Let’s map your YouTube Content Funnel!
          </p>
        </header>

        {/* Calendly inline widget */}
        <div
          className="calendly-inline-widget overflow-hidden"
          data-url={branded}
          style={{ minWidth: "320px", height: `${height}px` }}
        />
      </div>
    </section>
  );
}
