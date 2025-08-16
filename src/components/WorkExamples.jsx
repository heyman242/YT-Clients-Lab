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

/** Replace with your real videos */
const examples = [
  {
    name: "Michele Torti",
    role: "Founder @ JM Solutionss",
    url: "https://www.youtube.com/watch?v=4_5JLm7sMz4",
  },
  {
    name: "Stijn Verhagen",
    role: "Founder @ Courselaunchr",
    url: "https://www.youtube.com/watch?v=eFz-LcA2KZs",
  },
  {
    name: "Aidan Collins",
    role: "Founder @ Velocityinbound",
    url: "https://www.youtube.com/watch?v=e-vRXn8xhOU",
  },
];

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

function VideoCard({ item, className = "" }) {
  const id = ytId(item.url);
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={className}
    >
      <header className="mb-3 text-center">
        <h3 className="text-2xl font-semibold">{item.name}</h3>
        <p className="text-xl text-white/75 italic">{item.role}</p>
      </header>

      <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-2xl">
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
}

export default function WorkExamples() {
  const [hero, ...rest] = examples;
  const rows = chunk(rest, 2);

  return (
    <section id="work" className="relative">
      {/* wider container so the two-up row is BIG */}
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div className="mb-8 text-center md:mb-10">
          <h2 className="text-34xl md:text-5xl font-extrabold tracking-tight">
            Examples Of Our Work
          </h2>
        </div>

        {/* Top hero (still large) */}
        {hero && <VideoCard item={hero} className="mx-auto w-full max-w-4xl" />}

        {/* Two-up rows — now inside a 7xl container so each card is wider */}
        <div className="mt-12 space-y-14">
          {rows.map((pair, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 items-stretch"
            >
              {pair.map((item) => (
                <VideoCard key={item.url} item={item} className="w-full" />
              ))}
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="#book"
            className="inline-flex items-center rounded-xl bg-red-600 px-5 py-3 text-3xl font-semibold text-white shadow-[0_10px_30px_rgba(239,68,68,0.45)] transition-transform hover:-translate-y-0.5"
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
