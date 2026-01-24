import { motion } from "framer-motion";

const clientResults = [
  {
    name: "Michele Torti",
    description: "Booked 200+ calls In 4 months",
    youtubeId: "-rya1NWScZw", // Replace with actual YouTube video ID
  },
    {
    name: "Riccardo Contarini",
    description: "Booked 96+ calls In 3 months",
    youtubeId: "ol7H7whTSMA", // Replace with actual YouTube video ID
  },
  {
    name: "Euan Davies",
    description: "Booked 20+ calls In 2 months",
    youtubeId: "tg-oKTRR5qg", // Replace with actual YouTube video ID
  },
];

function VideoCard({ client, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
    >
      {/* Client Info - Above Video */}
      <div className="mb-6 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white">{client.name}</h3>
        <p className="mt-2 text-lg md:text-xl text-white/70">{client.description}</p>
      </div>

      {/* Video Container */}
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black/50">
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
    <section id="results" className="relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute left-0 top-1/3 h-[400px] w-[400px] animate-pulse rounded-full bg-red-600/10 blur-[100px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[300px] w-[300px] animate-pulse rounded-full bg-red-500/10 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-28">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Client{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
              Results
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg md:text-xl text-white/80">
            Hear directly from our clients about their experience and results.
          </p>
        </motion.div>

        {/* Videos - Vertical Stack */}
        <div className="flex flex-col gap-12 max-w-4xl mx-auto">
          {clientResults.map((client, index) => (
            <VideoCard key={client.name} client={client} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
