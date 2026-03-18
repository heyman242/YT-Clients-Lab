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

// 8 videos for 2x4 grid
const examples = [
  { url: "https://www.youtube.com/watch?v=g8TwasIoC3Q" },
  { url: "https://www.youtube.com/watch?v=RVLCNy5AGls" },
  { url: "https://www.youtube.com/watch?v=r1wea1evlgk" },
  { url: "https://www.youtube.com/watch?v=tf1mnCVWJkQ" },
  { url: "https://www.youtube.com/watch?v=BTqzP4UYlL8" },
  { url: "https://www.youtube.com/watch?v=EKpIcEUUMec" },
  { url: "https://www.youtube.com/watch?v=GHmJoCvRp2I" },
  { url: "https://www.youtube.com/watch?v=7HbhGbMwt9w" },
];

function VideoCard({ item, index }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const id = ytId(item.url);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
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

export default function WorkExamples() {
  return (
    <section id="work" className="relative bg-[var(--color-bg-primary)]">
      <div className="mx-auto max-w-[1600px] px-8 py-20 md:py-28">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="badge-accent mb-4 inline-block">Portfolio</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--color-text-primary)]">
            Examples Of{" "}
            <span className="text-[var(--color-accent)]">Our Work</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
            Videos we've produced that drive results for our clients.
          </p>
        </motion.div>

        {/* 2 columns x 4 rows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {examples.slice(0, 8).map((item, index) => (
            <VideoCard key={item.url} item={item} index={index} />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <a href="#book" className="btn-primary text-lg">
            Get Similar Results
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
