import { motion } from "framer-motion";

export default function ContentMachine() {
  // Tunables (spacing/size)
  const W = 1180; // svg width
  const H = 740; // svg height
  const laneX = {
    // lane centers
    strategy: 220,
    production: 590,
    promo: 950,
  };
  const card = { w: 300, h: 70, rx: 16 };
  const gap = 88; // vertical gap between cards

  // Y positions per lane
  const Y = {
    strategy: [
      110,
      110 + gap,
      110 + gap * 2,
      110 + gap * 3,
      110 + gap * 4,
      110 + gap * 5,
    ],
    production: [160, 160 + gap, 160 + gap * 2, 160 + gap * 3, 160 + gap * 4],
    promo: [
      210,
      210 + gap,
      210 + gap * 2,
      210 + gap * 3,
      210 + gap * 4,
      210 + gap * 5,
    ],
  };

  const text = {
    strategy: [
      "Market research /\ncompetitor analysis",
      "Consultation",
      "Content ideation",
      "Validate ideas\n(SEO tools)",
      "Write 4 long-form\nvideo scripts",
      "Recording session\n(long-form)",
    ],
    production: [
      "Edit long-form videos",
      "Thumbnail creation",
      "SEO optimization",
      "Title • Description • Tags",
      "Publish on YouTube",
    ],
    promo: [
      "Promotion",
      "LinkedIn Post",
      "Instagram Post",
      "YouTube Home Feed",
      "Twitter/X Post",
      "Book a Call",
    ],
  };

  // helper to render a card
  const Node = (x, y, label, strong = false) => (
    <g key={`${x}-${y}-${label}`}>
      <rect
        x={x - card.w / 2}
        y={y - card.h / 2}
        width={card.w}
        height={card.h}
        rx={card.rx}
        fill={strong ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.04)"}
        stroke="rgba(255,255,255,0.13)"
      />
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#fff"
        fontSize="15"
        fontWeight="600"
      >
        {label.split("\n").map((line, i) => (
          <tspan key={i} x={x} dy={i === 0 ? 0 : 18}>
            {line}
          </tspan>
        ))}
      </text>
    </g>
  );

  // build arrays of nodes
  const strategyNodes = Y.strategy.map((y, i) =>
    Node(laneX.strategy, y, text.strategy[i])
  );
  const productionNodes = Y.production.map((y, i) =>
    Node(laneX.production, y, text.production[i], true)
  );
  const promoNodes = Y.promo.map((y, i) =>
    Node(laneX.promo, y, text.promo[i], true)
  );

  // connectors
  const arrowStroke = "#ef4444";

  // vertical arrows within a lane
  const verticalArrows = (x, ys) =>
    ys
      .slice(0, -1)
      .map((y, i) => (
        <path
          key={`v-${x}-${i}`}
          d={`M ${x} ${y + card.h / 2} V ${ys[i + 1] - card.h / 2}`}
          stroke={arrowStroke}
          strokeWidth="2.5"
          fill="none"
          markerEnd="url(#arrow)"
          opacity="0.95"
        />
      ));

  // L-shaped connector from end of one lane to top of next
  const elbow = (fromX, fromY, toX, toY, key) => (
    <path
      key={`elbow-${key}`}
      d={`M ${fromX + card.w / 2} ${fromY} H ${toX - card.w / 2} V ${
        toY - card.h / 2
      }`}
      stroke={arrowStroke}
      strokeWidth="2.5"
      fill="none"
      markerEnd="url(#arrow)"
      opacity="0.95"
    />
  );

  return (
    <section id="machine" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <header className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Become an{" "}
            <span className="text-red-500">Automated Content Machine</span>
          </h2>
          <p className="mt-3 text-white/80">
            We research, script, guide your recording, edit, publish and promote
            long-form videos—so a few hours per month turns into a flywheel that
            drives booked calls.
          </p>
        </header>

        {/* subtle backdrop glow */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[48%] -translate-x-1/2 size-[70rem] rounded-full bg-red-600/10 blur-3xl" />
        </div>

        {/* MOBILE LIST (simple & tidy) */}
        <div className="md:hidden space-y-8">
          <div>
            <p className="mb-2 text-sm font-semibold text-white/70">Strategy</p>
            <ul className="space-y-2 text-white/85">
              {text.strategy.map((t) => (
                <li
                  key={t}
                  className="rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2"
                >
                  {t.replace(/\n/g, " ")}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold text-white/70">
              Production
            </p>
            <ul className="space-y-2 text-white/85">
              {text.production.map((t) => (
                <li
                  key={t}
                  className="rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2"
                >
                  {t.replace(/\n/g, " ")}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold text-white/70">
              Promotion
            </p>
            <ul className="space-y-2 text-white/85">
              {text.promo.map((t) => (
                <li
                  key={t}
                  className="rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2"
                >
                  {t.replace(/\n/g, " ")}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* DESKTOP SVG */}
        <div className="hidden md:block overflow-x-auto">
          <motion.svg
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            viewBox={`0 0 ${W} ${H}`}
            className="mx-auto max-w-[1100px]"
          >
            <defs>
              <marker
                id="arrow"
                markerWidth="8"
                markerHeight="8"
                refX="7"
                refY="4"
                orient="auto"
              >
                <path d="M0,0 L8,4 L0,8 z" fill={arrowStroke} />
              </marker>
              <filter id="soft" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow
                  dx="0"
                  dy="0"
                  stdDeviation="6"
                  floodColor="rgba(239,68,68,0.35)"
                />
              </filter>
            </defs>

            {/* lane rails (faint) */}
            {Object.values(laneX).map((x, i) => (
              <line
                key={`rail-${i}`}
                x1={x}
                y1="70"
                x2={x}
                y2={H - 60}
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="2"
              />
            ))}

            {/* connectors */}
            {/* strategy vertical */}
            {verticalArrows(laneX.strategy, Y.strategy)}
            {/* production vertical */}
            {verticalArrows(laneX.production, Y.production)}
            {/* promo vertical */}
            {verticalArrows(laneX.promo, Y.promo)}
            {/* strategy last -> production first */}
            {elbow(
              laneX.strategy,
              Y.strategy.at(-1),
              laneX.production,
              Y.production[0],
              "s2p"
            )}
            {/* production last -> promo first */}
            {elbow(
              laneX.production,
              Y.production.at(-1),
              laneX.promo,
              Y.promo[0],
              "p2m"
            )}

            {/* nodes with soft glow */}
            <g filter="url(#soft)">
              {strategyNodes}
              {productionNodes}
              {promoNodes}
            </g>
          </motion.svg>
        </div>

        <div className="mt-10 flex justify-center">
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
