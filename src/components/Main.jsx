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
    <header id="home" className="relative">
      <div className="relative z-10 mx-auto max-w-8xl px-6 pt-8 ">
        {/* audience pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <span className="inline-flex items-center rounded-full border border-red-500/40 bg-white/5 px-3 py-1 text-sm md:text-lg lg:text-2xl font-semibold text-white/90 text-center">
            Coaches, Agency Owners & SaaS Companies
          </span>
        </motion.div>

        {/* HEADLINE (two lines) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mx-auto mt-6 max-w-[1800px] text-center"
        >
          <h1 className="text-white font-extrabold leading-tight tracking-tight text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center">
            <span className="block">
              We Will Add You{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
                10–15 Qualified Sales Calls
              </span>
            </span>
            <span className="block mt-2">
              Every Month Through a YouTube Content Funnel
            </span>
          </h1>
        </motion.div>

        {/* VSL Video */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mx-auto mt-10 max-w-4xl"
        >
          <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl shadow-red-500/20" style={{ paddingBottom: "56.25%" }}>
            <div id="yt-player" className="absolute top-0 left-0 h-full w-full" />
            {isMuted && (
              <button
                onClick={handleUnmute}
                className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center bg-black/30 transition-opacity hover:bg-black/40"
                aria-label="Click to unmute and play from start"
              >
                <div className="flex items-center gap-2 rounded-full bg-white/90 px-6 py-3 text-lg font-semibold text-gray-900 shadow-lg">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                  </svg>
                  Click to Unmute
                </div>
              </button>
            )}
          </div>
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
              className="group inline-flex items-center justify-center rounded-xl bg-red-600 px-5 py-3 text-lg md:text-xl lg:text-2xl font-semibold text-white shadow-lg shadow-red-600/30 transition-transform hover:-translate-y-0.5 active:translate-y-0"
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
