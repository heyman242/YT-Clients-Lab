import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const steps = [
  {
    t: "Initial In-Depth Research",
    d: "ICP, offer, and competitor audit to find intent gaps and angles that win now.",
    bullets: [
      "Audience + keyword intent map",
      "Competitor hook gap analysis",
      "Channel/analytics audit",
    ],
  },
  {
    t: "Strategic Video Ideation",
    d: "TOFU/MOFU/BOFU topics engineered for discovery and conversions.",
    bullets: [
      "12+ ideas/month by funnel stage",
      "Search + Suggested angles",
      "Why-this-wins notes",
    ],
  },
  {
    t: "Done-For-You Scriptwriting",
    d: "Hooks, proof, objection handling, and CTAs that book calls.",
    bullets: [
      "Hook variants & retention beats",
      "Story + proof structuring",
      "CTA frameworks to calendar",
    ],
  },
  {
    t: "You Just Record",
    d: "Guided recording setup + checklist. No on-camera experience needed.",
    bullets: [
      "Setup for any budget",
      "Teleprompter/notes & delivery cues",
      "Simple upload handoff",
    ],
  },
  {
    t: "Post-Production & SEO",
    d: "Editing, thumbnail design, titles/desc/tags, and publishing handled.",
    bullets: [
      "Retention-first editing",
      "High-CTR thumbnails",
      "SEO optimization & upload",
    ],
  },
  {
    t: "Analysis → Iterate → Scale",
    d: "Double-down on winners; iterate hooks/offers; scale what books calls.",
    bullets: [
      "Hook/retention & CTR diagnostics",
      "Topic/offer split tests",
      "Monthly growth plan & targets",
    ],
  },
];

export default function Method() {
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 10%", "end 80%"], // when the progress should start/finish
  });

  return (
    <section id="method" className="relative scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.6fr]">
          {/* LEFT: sticky intro */}
          <div className="self-start lg:sticky lg:top-24">
            <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
              YT Clients Lab Method
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
              How We Scale Your Pipeline
              <br className="hidden sm:block" /> With YouTube
            </h2>
            <p className="mt-4 max-w-md text-white/80">
              This is the overview of how we research, script, produce, and
              optimize YouTube content that fills your calendar with qualified
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

          {/* RIGHT: list + bounded progress rail */}
          <div className="relative pb-2" ref={listRef}>
            {/* Rail & progress (bounded by this container; no fixed vh height) */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-4 top-0 bottom-0 hidden lg:block"
            >
              {/* faint rail */}
              <div className="absolute inset-0 flex justify-center">
                <div className="h-full w-[2px] rounded bg-white/10" />
              </div>
              {/* progress */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 origin-top"
                style={{ scaleY: scrollYProgress }}
              >
                <div className="h-full w-[2px] rounded bg-gradient-to-b from-red-500 to-red-400 shadow-[0_0_20px_rgba(239,68,68,0.35)]" />
              </motion.div>
            </div>

            <ol className="space-y-10">
              {steps.map((s, i) => (
                <li key={s.t} className="relative pl-10">
                  {/* dot on the rail */}
                  <div
                    aria-hidden
                    className="absolute left-3.5 top-1.5 hidden lg:block"
                  >
                    <div className="size-3 rounded-full bg-red-500 ring-2 ring-white/15" />
                  </div>

                  <div className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.06]">
                    <div className="mb-3 inline-flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-red-600/90 px-2 py-0.5 text-[10px] font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-lg font-semibold">{s.t}</h3>
                    </div>
                    <p className="text-sm text-white/80">{s.d}</p>
                    <ul className="mt-3 space-y-1.5 text-sm text-white/70">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="mt-1 size-1.5 rounded-full bg-red-500/80" />
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
