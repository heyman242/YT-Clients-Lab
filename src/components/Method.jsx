import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const steps = [
  {
    t: "Research & 90-Day Plan",
    d: "We turn your ICP and keywords into a simple 90-day YouTube plan.",
    bullets: [
      "Quick ICP & Competitor Analysis",
      "Keyword + Topic Mapping",
      "Strategic Content Ideas",
    ],
  },
  {
    t: "Done-For-You Scriptwriting",
    d: "Scripts that hook, build trust, and ask for the call.",
    bullets: ["Strong hook", "Proof & Objections Handled", "Clear CTA"],
  },
  {
    t: "You Just Record",
    d: "We prep you so recording is easy.",
    bullets: ["10-min Prep Call", "Fast Room/Gear Tweaks", "Easy Uploads"],
  },
  {
    t: "Post-Production & SEO",
    d: "We edit, design thumbnails, and publish for you.",
    bullets: [
      "Retention Editing",
      "Click Worthy Thumbnails",
      "Title Tags Description",
    ],
  },
  {
    t: "Analyze & Scale",
    d: "We track what works and double down.",
    bullets: [
      "Simple Performance Report",
      "Improve Hooks/Offers",
      "More Views → More Booked Calls",
    ],
  },
];

export default function Method() {
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 10%", "end 80%"], // progress is bounded to the list
  });

  return (
    <section id="method" className="relative scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.6fr]">
          {/* LEFT — sticky intro */}
          <div className="self-start lg:sticky lg:top-24">
            <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm md:text-lg font-semibold text-white/80">
              YT Clients Lab Method
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
              How We Scale
              <br className="hidden sm:block" />
              Your Pipeline
              <br className="hidden sm:block" /> With YouTube
            </h2>
            <p className="mt-4 max-w-md text-base md:text-xl text-white/90">
              The 5-step system we use to research, script, produce and optimize
              long-form YouTube content that fills your calendar with qualified
              sales calls.
            </p>

            <a
              href="#book"
              className="mt-6 inline-flex items-center rounded-xl bg-red-600 px-5 py-3 text-sm md:text-base font-semibold text-white shadow-[0_10px_30px_rgba(239,68,68,0.45)] transition-transform hover:-translate-y-0.5"
            >
              Book a Call
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

          {/* RIGHT — list with bounded progress rail */}
          <div className="relative pb-2" ref={listRef}>
            {/* rail + progress (bounded by this container) */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-4 top-0 bottom-0 hidden lg:block"
            >
              <div className="absolute inset-0 flex justify-center">
                <div className="h-full w-[2px] rounded bg-white/10" />
              </div>
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 origin-top"
                style={{ scaleY: scrollYProgress }}
              >
                <div className="h-full w-[2px] rounded bg-gradient-to-b from-red-500 to-red-400 shadow-[0_0_20px_rgba(239,68,68,0.35)]" />
              </motion.div>
            </div>

            <ol className="space-y-10">
              {steps.map((s) => (
                <li key={s.t} className="relative pl-10">
                  {/* dot on the rail (kept subtle) */}
                  <div
                    aria-hidden
                    className="absolute left-3.5 top-1.5 hidden lg:block"
                  ></div>

                  {/* card */}
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.06]">
                    {/* brand logo on the right */}

                    <div className="mb-3">
                      <h3 className="text-xl md:text-2xl lg:text-4xl font-semibold">{s.t}</h3>
                    </div>

                    <p className="text-base md:text-xl text-white/90">{s.d}</p>

                    <ul className="mt-3 space-y-1.5 text-base md:text-xl text-white/70">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="mt-2.5 size-2.5 rounded-full bg-red-500/80" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
