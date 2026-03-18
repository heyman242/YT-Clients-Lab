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

// 4 videos for 2x2 grid
const videos = [
  { url: "https://www.youtube.com/watch?v=ZSH20Y9V0d8" },
  { url: "https://www.youtube.com/watch?v=lqt1xZwJBjA" },
];

function VideoCard({ item, index }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const id = ytId(item.url);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="image-frame bg-white">
        {!isPlaying ? (
          <div
            className="relative aspect-[16/9] cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            <img
              src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
              alt="YouTube Video Thumbnail"
              className="h-full w-full object-cover"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-[var(--color-accent)] shadow-lg transition-transform group-hover:scale-110">
                <svg
                  className="ml-1 h-5 w-5 md:h-6 md:w-6 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        ) : (
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
  );
}

export default function HowWeDoIt() {
  return (
    <section id="how-we-do-it" className="relative bg-[var(--color-bg-secondary)]">
      <div className="mx-auto max-w-[1600px] px-8 py-20 md:py-28">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="badge-accent mb-4 inline-block">Learn More</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--color-text-primary)]">
            How We Do It{" "}
            <span className="text-[var(--color-accent)]">For Our Clients</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
            Watch our videos to learn our strategies and methods.
          </p>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.slice(0, 4).map((item, index) => (
            <VideoCard key={`${item.url}-${index}`} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
