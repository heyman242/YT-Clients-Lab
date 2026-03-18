import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Main() {
  const youtubeVideoId = "WYKQ8ddAOHs";
  const playerRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("yt-player", {
        videoId: youtubeVideoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 1,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
        },
        events: {
          onReady: () => setIsReady(true),
        },
      });
    };

    // If API is already loaded
    if (window.YT && window.YT.Player) {
      window.onYouTubeIframeAPIReady();
    }

    return () => {
      if (playerRef.current?.destroy) {
        playerRef.current.destroy();
      }
    };
  }, []);

  const handleUnmute = () => {
    if (playerRef.current && isReady) {
      playerRef.current.seekTo(0);
      playerRef.current.unMute();
      playerRef.current.playVideo();
      setIsMuted(false);
    }
  };

  return (
    <section id="home" className="relative bg-[var(--color-bg-secondary)]">
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-20">
        {/* Audience Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <span className="badge-accent">
            For Coaches, Agency Owners & SaaS Companies
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-8 max-w-5xl text-center"
        >
          <h1 className="text-[var(--color-text-primary)] font-extrabold leading-tight tracking-tight text-4xl md:text-5xl lg:text-6xl">
            We Add{" "}
            <span className="text-[var(--color-accent)]">
              10–15 Qualified Sales Calls
            </span>
            <br />
            Every Month Through YouTube
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-6 max-w-2xl text-center text-lg md:text-xl text-[var(--color-text-secondary)]"
        >
          We build content funnels that turn viewers into qualified leads.
        </motion.p>

        {/* VSL Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mx-auto mt-12 max-w-4xl"
        >
          <div className="image-frame relative w-full overflow-hidden" style={{ paddingBottom: "56.25%" }}>
            <div id="yt-player" className="absolute top-0 left-0 h-full w-full" />
            {isMuted && (
              <button
                onClick={handleUnmute}
                className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center bg-black/20 transition-opacity hover:bg-black/30"
                aria-label="Click to unmute and play from start"
              >
                <div className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-[var(--color-text-primary)] shadow-lg">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                  </svg>
                  Click to Unmute
                </div>
              </button>
            )}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.8 }}
          className="mx-auto mt-10 flex justify-center"
        >
          <a href="#book" className="btn-primary text-lg">
            Book a Free Strategy Call
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
