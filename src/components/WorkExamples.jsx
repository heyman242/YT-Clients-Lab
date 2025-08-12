import { motion } from "framer-motion";

/** Small helper: extract the YouTube ID from any common URL form */
function ytId(url = "") {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1);
    if (u.searchParams.get("v")) return u.searchParams.get("v");
    // shorts or embed
    const m =
      u.pathname.match(/\/shorts\/([^/]+)/) ||
      u.pathname.match(/\/embed\/([^/]+)/);
    return m ? m[1] : "";
  } catch {
    return url; // if user already passed an ID
  }
}

/** >>> Replace this array with your real videos (name, role/company, url) */
const examples = [
  {
    name: "Michele Torti",
    role: "Founder @ ",
    url: "https://www.youtube.com/watch?v=4_5JLm7sMz4",
  },
  {
    name: "Stijn Verhagen",
    role: "Founder @ Courselaunchr",
    url: "https://www.youtube.com/watch?v=eFz-LcA2KZs",
  },
];

export default function WorkExamples() {
  return (
    <section id="work" className="relative">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Examples Of Our Work:
          </h2>
        </div>

        {/* List */}
        <div className="space-y-16">
          {examples.map((item, i) => {
            const id = ytId(item.url);
            return (
              <motion.article
                key={id + i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="mx-auto max-w-4xl"
              >
                {/* Name + Role */}
                <header className="mb-3 text-center">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-white/75 italic">{item.role}</p>
                </header>

                {/* Video card */}
                <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
                  {/* soft red/black glow behind the video */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                  >
                    <div className="absolute -left-24 -top-24 size-[28rem] rounded-full blur-3xl" />
                    <div className="absolute -right-24 -bottom-24 size-[26rem] rounded-full  blur-3xl" />
                  </div>

                  <div className="aspect-[16/9] bg-black/40">
                    <iframe
                      title={`${item.name} – YouTube`}
                      src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Optional CTA under list */}
        <div className="mt-14 flex justify-center">
          <a
            href="#book"
            className="inline-flex items-center rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(239,68,68,0.45)] transition-transform hover:-translate-y-0.5"
          >
            Book a Call
            <svg
              className="ml-2 size-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M12.293 3.293a1 1 0 011.414 0l4.999 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L15.586 11H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
