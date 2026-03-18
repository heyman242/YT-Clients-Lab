import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// YouTube Analytics Screenshots - Add your images to: public/screenshots/analytics/
const analyticsScreenshots = [
  "/screenshots/analytics/1.png",
  "/screenshots/analytics/2.png",
  "/screenshots/analytics/3.png",
  "/screenshots/analytics/4.png",
  "/screenshots/analytics/5.png",
  "/screenshots/analytics/6.png",
  "/screenshots/analytics/7.png",
  "/screenshots/analytics/8.png",
];

// Analytics Card with Parallax Effect
function AnalyticsCard({ src, index, scrollYProgress }) {
  // Alternate cards move at different speeds for stacking effect
  const isLeft = index % 2 === 0;
  const yOffset = isLeft ? [60, -60] : [30, -30];

  const y = useTransform(scrollYProgress, [0, 1], yOffset);

  return (
    <motion.div
      style={{ y }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="image-frame bg-white"
    >
      <img
        src={src}
        alt={`YouTube Analytics ${index + 1}`}
        className="w-full h-auto"
        loading="lazy"
      />
    </motion.div>
  );
}

export default function ProofGallery() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section id="proof" className="relative bg-[var(--color-bg-secondary)]">
      <div className="mx-auto max-w-[1600px] px-8 py-20 md:py-28" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="badge-accent mb-4 inline-block">Social Proof</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--color-text-primary)]">
            YouTube Analytics That{" "}
            <span className="text-[var(--color-accent)]">Prove Growth</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
            Real results from real clients. The numbers speak for themselves.
          </p>
        </motion.div>

        {/* Analytics Grid - 2 columns x 4 rows with parallax */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {analyticsScreenshots.map((src, index) => (
            <AnalyticsCard
              key={index}
              src={src}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
