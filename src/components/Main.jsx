import { motion } from "framer-motion";
import Wistia from "./Wistia";

export default function Main() {
  return (
    <header id="home" className="relative">
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-8 ">
        {/* audience pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <span className="inline-flex items-center rounded-full border border-red-500/40 bg-white/5 px-4 py-1 text-2xl font-semibold text-white/90">
            Coaches, Agency Owners & SaaS Companies
          </span>
        </motion.div>

        {/* HEADLINE (two lines) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mx-auto mt-6 max-w-[1200px] text-center"
        >
          <h1
            className="text-white font-extrabold leading-tight tracking-tight
                 text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
          >
            <span className="block lg:whitespace-nowrap">
              We Will Add You{" "}
              <span className="text-red-500">10–15 Qualified Sales Calls</span>
            </span>
            <span className="block">
              Every Month Through a YouTube Content Funnel
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mx-auto mt-6 max-w-[1200px] text-center"
        >
        </motion.div>

        {/* CTAs */}

      

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 1.2 }}
          className="mx-auto mt-10 max-w-4xl"
        >
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#book"
              className="group inline-flex items-center justify-center rounded-xl bg-red-600 px-5 py-3 text-3xl font-semibold text-white shadow-lg shadow-red-600/30 transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Book a Call
              <svg
                className="ml-2 size-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M12.293 3.293a1 1 0 011.414 0l4.999 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L15.586 11H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
