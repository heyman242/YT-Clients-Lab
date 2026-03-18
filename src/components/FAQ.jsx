import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How long until I see results?",
    answer:
      "Most clients start seeing increased engagement within the first 2-4 weeks. Significant results like booked calls and revenue typically come within 2-3 months of consistent content.",
  },
  {
    question: "Do you guarantee results?",
    answer:
      "While we can't guarantee specific numbers (no one honestly can), we have a proven track record of delivering results. Our clients have generated over $250K+ in revenue and booked 350+ calls through our strategies.",
  },
  {
    question: "What's your pricing?",
    answer:
      "Our pricing depends on your specific needs and goals. Book a call with us to discuss your situation and we'll create a custom package that fits your budget and objectives.",
  },
  {
    question: "Do I need to be on camera?",
    answer:
      "It depends on your content strategy. We can work with talking-head videos, screen recordings, animations, or a mix. We'll find what works best for you and your audience.",
  },
  {
    question: "How much of my time is required?",
    answer:
      "We handle everything from strategy to editing to optimization. You'll typically need 30 min per week for filming/recording. We take care of the rest.",
  },
  {
    question: "What if I'm just starting on YouTube?",
    answer:
      "That's perfectly fine! Many of our most successful clients started from zero. We'll help you build a strong foundation and grow your channel strategically from day one.",
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-dashed border-[var(--color-border-dashed)] last:border-b-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <span className="text-lg md:text-xl font-semibold text-[var(--color-text-primary)] pr-4">
          {faq.question}
        </span>
        <span className="shrink-0 text-[var(--color-accent)]">
          <svg
            className={`size-6 transition-transform duration-300 ${
              isOpen ? "rotate-45" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative bg-[var(--color-bg-primary)]">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="badge-accent mb-4 inline-block">FAQ</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--color-text-primary)]">
            Frequently Asked{" "}
            <span className="text-[var(--color-accent)]">Questions</span>
          </h2>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-dashed"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-[var(--color-text-secondary)] mb-6">
            Still have questions? Let's talk.
          </p>
          <a href="#book" className="btn-primary">
            Book a Free Call
            <svg
              className="size-5"
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
