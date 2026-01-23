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
      "While we can't guarantee specific numbers (no one honestly can), we have a proven track record of delivering results. Our clients have generated over $500K+ in revenue and booked 1000+ calls through our strategies.",
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
      "We handle everything from strategy to editing to optimization. You'll typically need 2-4 hours per week for filming/recording. We take care of the rest.",
  },
  {
    question: "What if I'm just starting on YouTube?",
    answer:
      "That's perfectly fine! Many of our most successful clients started from zero. We'll help you build a strong foundation and grow your channel strategically from day one.",
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <span className="text-lg md:text-xl font-semibold text-white pr-4">
          {faq.question}
        </span>
        <span className="shrink-0 text-white/60">
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
            <p className="pb-6 text-base md:text-lg text-white/70 leading-relaxed">
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
    <section id="faq" className="relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute right-1/4 top-1/4 h-[400px] w-[400px] animate-pulse rounded-full bg-red-600/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 md:py-28">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-6 md:p-10"
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
      </div>
    </section>
  );
}
