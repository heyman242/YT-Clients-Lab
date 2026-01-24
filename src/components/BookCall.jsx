import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function BookCall() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "website" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <section id="book" className="relative scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-2 md:py-2">
        <header className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Book a Call
          </h2>
          <p className="mt-3 text-2xl text-white/90">
            Let's map your YouTube Content Funnel!
          </p>
        </header>

        {/* Cal.com inline widget */}
        <div className="mt-8" style={{ minHeight: "700px" }}>
          <Cal
            namespace="website"
            calLink="himanshu-bobade-fjcpts/website"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view" }}
          />
        </div>
      </div>
    </section>
  );
}
