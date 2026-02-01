import { useState } from "react";
import { motion } from "framer-motion";

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
const videos = [
  {
    url: "https://www.youtube.com/watch?v=ZSH20Y9V0d8", // Replace with your YouTube URL
  },

  {
    url: "https://www.youtube.com/watch?v=lqt1xZwJBjA", // Replace with your YouTube URL
  },

];

/** Infinite Slider Card Component */
function VideoSlideCard({ item }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const id = ytId(item.url);

  return (
    <div className="flex-shrink-0 w-[280px] sm:w-[400px] md:w-[640px] lg:w-[720px] px-2 md:px-4">
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
                <div className="flex h-14 w-14 md:h-24 md:w-24 items-center justify-center rounded-full bg-red-600 shadow-[0_0_50px_rgba(239,68,68,0.7)] transition-all group-hover:scale-110 group-hover:shadow-[0_0_70px_rgba(239,68,68,0.9)]">
                  <svg
                    className="ml-1 h-6 w-6 md:ml-1.5 md:h-10 md:w-10 text-white"
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

export default function HowWeDoIt() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate the array for seamless infinite loop
  const duplicatedVideos = [...videos, ...videos];

  return (
    <section id="how-we-do-it" className="relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute left-0 top-1/3 h-[400px] w-[400px] animate-pulse rounded-full bg-red-600/10 blur-[100px]" />
        <div className="absolute right-0 bottom-1/4 h-[300px] w-[300px] animate-pulse rounded-full bg-red-500/8 blur-[80px]" />
      </div>

      <div className="relative z-10 py-20 md:py-28">
        {/* Section Header */}
        <div className="mx-auto max-w-7xl px-6 mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              How We Do It{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
                For Our Clients
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg md:text-xl text-white/80">
              Watch our videos to learn our strategies and methods.
            </p>
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
            {duplicatedVideos.map((item, index) => (
              <VideoSlideCard key={`${item.url}-${index}`} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
