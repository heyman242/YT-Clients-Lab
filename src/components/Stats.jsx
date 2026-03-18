import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    label: "Calls Booked",
    value: 400,
    prefix: "",
    suffix: "+",
  },
  {
    label: "Revenue Generated",
    value: 300000,
    prefix: "$",
    suffix: "+",
  },
  {
    label: "Videos Published",
    value: 450,
    prefix: "",
    suffix: "+",
  },
  {
    label: "Views Generated",
    value: 3000000,
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-dashed text-center"
    >
      {/* Number */}
      <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--color-accent)]">
        <Counter
          target={stat.value}
          prefix={stat.prefix}
          suffix={stat.suffix}
          duration={2500}
        />
      </div>

      {/* Label */}
      <h3 className="mt-3 text-lg md:text-xl font-semibold text-[var(--color-text-primary)]">
        {stat.label}
      </h3>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="relative bg-[var(--color-bg-primary)]">
      <div className="mx-auto max-w-[1200px] px-8 py-20 md:py-28">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--color-text-primary)]">
            Results That{" "}
            <span className="text-[var(--color-accent)]">
              Speak Volumes
            </span>
          </h2>
        </motion.div>

        {/* Stats Grid - 2x2 */}
        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
