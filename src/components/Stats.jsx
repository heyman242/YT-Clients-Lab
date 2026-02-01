import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  // Row 1
  {
    label: "Calls Booked",
    value: 350,
    prefix: "",
    suffix: "+",
  },
  {
    label: "Revenue Generated",
    value: 250000,
    prefix: "$",
    suffix: "+",
  },
  // Row 2
  {
    label: "Videos Published",
    value: 400,
    prefix: "",
    suffix: "+",
  },
  {
    label: "Views Generated",
    value: 2000000,
    prefix: "",
    suffix: "+",
  },
];

function Counter({ target, prefix = "", suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic for smooth deceleration
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOutCubic * target);

      setCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, target, duration]);

  // Format number with commas
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <span ref={ref}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
}

function StatCard({ stat, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative group"
    >
      {/* Card */}
      <div className="relative h-full min-h-[180px] md:min-h-[280px] overflow-visible rounded-2xl md:rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-5 md:p-8 lg:p-12 backdrop-blur-sm transition-all duration-300 hover:border-red-500/30 hover:shadow-[0_0_40px_rgba(239,68,68,0.15)]">
        {/* Animated gradient background on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-red-600/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Red glow effect on hover */}
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-red-500/20 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative z-10 flex h-full flex-col justify-between">
          {/* Number */}
          <div className="mb-6">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none whitespace-nowrap">
              <span className="bg-gradient-to-br from-white via-white to-white/80 bg-clip-text text-transparent">
                <Counter
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={2500}
                />
              </span>
            </div>
          </div>

          {/* Label & Description */}
          <div>
            <h3 className="mb-2 text-xl md:text-2xl font-bold text-white">
              {stat.label}
            </h3>

            <p className="text-sm md:text-base text-white/70 leading-relaxed">
              {stat.description}
            </p>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-500 to-red-600 transition-all duration-500 group-hover:w-full" />
      </div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="relative overflow-hidden">
      {/* Red glow effects */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute right-0 top-1/4 h-[500px] w-[500px] animate-pulse rounded-full bg-red-600/15 blur-[120px]" />
        <div className="absolute left-1/4 bottom-0 h-[400px] w-[400px] animate-pulse rounded-full bg-red-500/12 blur-[100px] animation-delay-3000" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-28">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Results That{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
              Speak Volumes
            </span>
          </h2>
        </motion.div>

        {/* Stats Grid - 2x2 layout */}
        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#book"
            className="inline-flex items-center rounded-xl bg-red-600 px-8 py-4 text-lg md:text-xl font-semibold text-white shadow-[0_10px_30px_rgba(239,68,68,0.45)] transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Start Your Growth Journey
            <svg
              className="ml-2 size-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M12.293 3.293a1 1 0 011.414 0l4.999 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L15.586 11H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
