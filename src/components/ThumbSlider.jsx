import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: "0%", opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

const defaultThumbs = [
  "/Thumbs/1.png",
  "/Thumbs/2.png",
  "/Thumbs/3.png",
  "/Thumbs/4.png",
  "/Thumbs/5.png",
];

export default function ThumbSlider({
  images = defaultThumbs,
  intervalMs = 3000,
}) {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const timer = useRef(null);

  const next = () => {
    setDir(1);
    setIndex((i) => (i + 1) % images.length);
  };
  const prev = () => {
    setDir(-1);
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(next, intervalMs);
    return () => timer.current && clearInterval(timer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intervalMs, images.length]);

  const pause = () => timer.current && clearInterval(timer.current);
  const resume = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(next, intervalMs);
  };

  return (
    <section id="thumbnails" className="relative">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        {/* Heading */}
        <div className="mb-8 text-center md:mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Thumbnails
          </h2>
        </div>

        {/* Slider */}
        <div
          className="relative mx-auto max-w-4xl select-none"
          onMouseEnter={pause}
          onMouseLeave={resume}
        >
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-2xl">
            {/* soft red glow */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -left-24 -top-24 size-[28rem] rounded-full bg-red-600/20 blur-3xl" />
              <div className="absolute -right-24 -bottom-24 size-[26rem] rounded-full bg-red-500/15 blur-3xl" />
            </div>

            <AnimatePresence custom={dir} mode="popLayout">
              <motion.img
                key={index}
                src={images[index]}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: "easeOut" }}
                draggable={false}
              />
            </AnimatePresence>
          </div>

          {/* controls */}
          <div className="mt-4 flex items-center justify-between">
            <button
              onClick={prev}
              className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold hover:bg-white/10"
            >
              ← Prev
            </button>
            <div className="flex items-center gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDir(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    i === index ? "bg-red-500" : "bg-white/25 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold hover:bg-white/10"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
