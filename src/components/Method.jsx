import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    num: "01",
    t: "Research & 90-Day Plan",
    d: "We turn your ICP and keywords into a simple 90-day YouTube plan.",
    bullets: [
      "Quick ICP & Competitor Analysis",
      "Keyword + Topic Mapping",
      "Strategic Content Ideas",
    ],
  },
  {
    num: "02",
    t: "Done-For-You Scriptwriting",
    d: "Scripts that hook, build trust, and ask for the call.",
    bullets: ["Strong hook", "Proof & Objections Handled", "Clear CTA"],
  },
  {
    num: "03",
    t: "You Just Record",
    d: "We prep you so recording is easy.",
    bullets: ["10-min Prep Call", "Fast Room/Gear Tweaks", "Easy Uploads"],
  },
  {
    num: "04",
    t: "Post-Production & SEO",
    d: "We edit, design thumbnails, and publish for you.",
    bullets: [
      "Retention Editing",
      "Click Worthy Thumbnails",
      "Title Tags Description",
    ],
  },
  {
    num: "05",
    t: "Analyze & Scale",
    d: "We track what works and double down.",
    bullets: [
      "Simple Performance Report",
      "Improve Hooks/Offers",
      "More Views → More Booked Calls",
    ],
  },
];

function StepCard({ step, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-dashed relative overflow-hidden p-8 md:p-10"
    >
      {/* Step Number - Background */}
      <div className="absolute top-4 right-4 text-7xl md:text-8xl font-extrabold text-[var(--color-accent)]/10 leading-none">
        {step.num}
      </div>

      <div className="relative">
        {/* Step Badge */}
        <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-4">
          Step {step.num}
        </span>

        <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)]">
          {step.t}
        </h3>
        <p className="mt-3 text-base md:text-lg text-[var(--color-text-secondary)]">
          {step.d}
        </p>

        <ul className="mt-6 space-y-3">
          {step.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <span className="mt-1.5 size-2.5 rounded-full bg-[var(--color-accent)] flex-shrink-0" />
              <span className="text-[var(--color-text-secondary)] text-base">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Method() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="method" className="relative bg-[var(--color-bg-secondary)] scroll-mt-24">
      <div className="mx-auto max-w-[1400px] px-8 py-20 md:py-28" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="badge-accent mb-4 inline-block">Our Process</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--color-text-primary)]">
            The 5-Step{" "}
            <span className="text-[var(--color-accent)]">YT Clients Lab</span>{" "}
            Method
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
            How we research, script, produce and optimize long-form YouTube content that fills your calendar with qualified sales calls.
          </p>
        </motion.div>

        {/* Steps Grid with Progress Line */}
        <div className="relative">
          {/* Vertical Progress Line (desktop only) */}
          <div className="absolute left-1/2 top-0 bottom-0 hidden lg:block -translate-x-1/2">
            <div className="h-full w-[2px] bg-[var(--color-border)]" />
            <motion.div
              className="absolute top-0 w-[2px] bg-[var(--color-accent)]"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-8 lg:space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.t}
                className={`lg:w-[48%] ${
                  index % 2 === 0 ? "lg:mr-auto lg:pr-16" : "lg:ml-auto lg:pl-16"
                }`}
              >
                <StepCard step={step} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <a href="#book" className="btn-primary text-lg">
            Start Your Growth Journey
            <svg
              className="size-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden
            >
              <path d="M12.293 3.293a1 1 0 011.414 0l4.999 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L15.586 11H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
