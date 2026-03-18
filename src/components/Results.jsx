import { motion } from "framer-motion";

const clientResults = [
  {
    name: "Michele Torti",
    description: "Booked 200+ calls in 4 months",
    youtubeId: "-rya1NWScZw",
  },
  {
    name: "Riccardo Contarini",
    description: "Booked 96+ calls in 3 months",
    youtubeId: "ol7H7whTSMA",
  },
  {
    name: "Euan Davies",
    description: "Booked 20+ calls in 2 months",
    youtubeId: "tg-oKTRR5qg",
  },
  {
    name: "Stijn Verhagen",
    description: "Generated 100+ leads in 3 months",
    youtubeId: "mxZt-H9Ex9Q",
  },
  {
    name: "Joe Milnes",
    description: "Scaled YouTube presence",
    youtubeId: "Im47fiTX3Jg",
  },
];

function VideoCard({ client, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-dashed p-6 md:p-8"
    >
      {/* Client Info */}
      <div className="mb-5 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)]">
          {client.name}
        </h3>
        <p className="mt-2 text-lg text-[var(--color-accent)] font-semibold">
          {client.description}
        </p>
      </div>

      {/* Video Container */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-[var(--color-bg-secondary)]">
        <iframe
          src={`https://www.youtube.com/embed/${client.youtubeId}`}
          title={`${client.name} - Case Study`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    </motion.div>
  );
}

export default function Results() {
  return (
    <section id="results" className="relative bg-[var(--color-bg-primary)]">
      <div className="mx-auto max-w-[1600px] px-8 py-20 md:py-28">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="badge-accent mb-4 inline-block">Case Studies</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--color-text-primary)]">
            Client{" "}
            <span className="text-[var(--color-accent)]">Success Stories</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
            Hear directly from our clients about their experience and results.
          </p>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {clientResults.slice(0, 4).map((client, index) => (
            <VideoCard key={client.name} client={client} index={index} />
          ))}
        </div>

        {/* Featured Video (if 5th exists) */}
        {clientResults[4] && (
          <div className="mt-8 max-w-3xl mx-auto">
            <VideoCard client={clientResults[4]} index={4} />
          </div>
        )}
      </div>
    </section>
  );
}
