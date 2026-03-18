import { useEffect } from "react";
import { motion } from "framer-motion";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function BookCall() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "website" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <section id="book" className="relative bg-[var(--color-bg-secondary)] scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="badge-accent mb-4 inline-block">Free Strategy Call</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--color-text-primary)]">
            Ready to{" "}
            <span className="text-[var(--color-accent)]">Scale Your Pipeline?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
            Book a free strategy call and let's map out your YouTube content funnel together.
          </p>
        </motion.header>

        {/* Cal.com inline widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 card-dashed"
          style={{ minHeight: "700px" }}
        >
          <Cal
            namespace="website"
            calLink="himanshu-bobade-fjcpts/website"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
