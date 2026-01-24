import { motion } from "framer-motion";
import { useState } from "react";

/** Extract a YouTube ID from common URL formats */
function ytId(url = "") {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1);
    if (u.searchParams.get("v")) return u.searchParams.get("v");
    const m =
      u.pathname.match(/\/shorts\/([^/]+)/) ||
      u.pathname.match(/\/embed\/([^/]+)/);
    return m ? m[1] : "";
  } catch {
    return url;
  }
}

/** Add your YouTube video URLs here - The slider will loop through these infinitely */
const examples = [
  {
    url: "https://www.youtube.com/watch?v=g8TwasIoC3Q",
  },
  {
    url: "https://www.youtube.com/watch?v=RVLCNy5AGls",
  },
  {
    url: "https://www.youtube.com/watch?v=r1wea1evlgk",
  },
  {
    url: "https://www.youtube.com/watch?v=tf1mnCVWJkQ", // Replace with real URL
  },
  {
    url: "https://www.youtube.com/watch?v=BTqzP4UYlL8", // Replace with real URL
  },
  {
    url: "https://www.youtube.com/watch?v=EKpIcEUUMec", // Replace with real URL
  },
  {
    url: "https://www.youtube.com/watch?v=GHmJoCvRp2I", // Replace with real URL
  },
  {
    url: "https://www.youtube.com/watch?v=7HbhGbMwt9w", // Replace with real URL
  },
  {
    url: "https://www.youtube.com/watch?v=53OoHeQIc34", // Replace with real URL
  },
];

/** Infinite Slider Card Component */
function VideoSlideCard({ item }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const id = ytId(item.url);

  return (
    <div className="flex-shrink-0 w-[500px] md:w-[640px] lg:w-[720px] px-4">
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="group relative"
      >
        {/* Video Container */}
        <div className="relative overflow-hidden rounded-3xl ring-2 ring-white/10 shadow-2xl bg-black/40">
          {!isPlaying ? (
            // Thumbnail with Play Button
            <div
              className="relative aspect-[16/9] cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              {/* Thumbnail Image - auto-fetched from YouTube */}
              <img
                src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
                alt="YouTube Video Thumbnail"
                className="h-full w-full object-cover"
                loading="lazy"
              />

              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-red-600 shadow-[0_0_50px_rgba(239,68,68,0.7)] transition-all group-hover:scale-110 group-hover:shadow-[0_0_70px_rgba(239,68,68,0.9)]">
                  <svg
                    className="ml-1.5 h-10 w-10 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          ) : (
            // Embedded Video Player
            <div className="aspect-[16/9]">
              <iframe
                title="YouTube Video"
                src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function WorkExamples() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate the array for seamless infinite loop
  const duplicatedExamples = [...examples, ...examples];

  return (
    <section id="work" className="relative overflow-hidden">
      {/* Red glow effects */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute right-1/3 top-1/4 h-[450px] w-[450px] animate-pulse rounded-full bg-red-600/12 blur-[100px] animation-delay-1000" />
        <div className="absolute left-1/3 bottom-1/3 h-[400px] w-[400px] animate-pulse rounded-full bg-red-500/10 blur-[90px] animation-delay-3000" />
      </div>

      <div className="relative z-10 py-16 md:py-24">
        {/* Section Header */}
        <div className="mx-auto max-w-7xl px-6 mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Examples Of Our Work
            </h2>
          </motion.div>
        </div>

        {/* Infinite Horizontal Slider */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex"
            animate={{
              x: isPaused ? 0 : ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {duplicatedExamples.map((item, index) => (
              <VideoSlideCard key={`${item.url}-${index}`} item={item} />
            ))}
          </motion.div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center px-6">
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="#book"
            className="inline-flex items-center rounded-xl bg-red-600 px-8 py-4 text-lg md:text-xl font-semibold text-white shadow-[0_10px_30px_rgba(239,68,68,0.45)] transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Get Similar Results
            <svg
              className="ml-2 size-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M12.293 3.293a1 1 0 011.414 0l4.999 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L15.586 11H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z" />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
