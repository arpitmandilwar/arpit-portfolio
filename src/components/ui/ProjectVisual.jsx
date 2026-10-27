// Original SVG illustrations for the project cards.
// `kind` comes from the "visual" field in portfolioData.js.

function GroceryScene() {
  return (
    <svg
      viewBox="0 0 400 240"
      className="h-full w-full"
      role="img"
      aria-label="Illustration of a shopping cart filled with groceries and an order placed tag"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="gro-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0f766e" />
          <stop offset="1" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>

      <rect width="400" height="240" fill="url(#gro-bg)" />
      <circle cx="350" cy="40" r="80" fill="#fff" opacity="0.08" />
      <circle cx="30" cy="215" r="95" fill="#fff" opacity="0.07" />

      {/* groceries peeking out of the cart */}
      <circle cx="182" cy="88" r="22" fill="#f87171" />
      <path d="M182 66 C182 56 190 52 198 54 C196 62 190 66 182 66 Z" fill="#4ade80" />
      <rect x="212" y="58" width="36" height="56" rx="5" fill="#fde68a" />
      <path d="M212 66 L230 50 L248 66 Z" fill="#fbbf24" />
      <circle cx="274" cy="92" r="20" fill="#fb923c" />

      {/* cart */}
      <path d="M108 108 H306 L289 156 H153 Z" fill="#ffffff" opacity="0.22" />
      <path
        d="M92 66 H124 L152 160 H286 L312 96 H132"
        fill="none"
        stroke="#ffffff"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="172" cy="188" r="13" fill="#ffffff" />
      <circle cx="268" cy="188" r="13" fill="#ffffff" />

      {/* order placed tag */}
      <rect x="24" y="24" width="140" height="36" rx="18" fill="#0b1020" opacity="0.55" />
      <circle cx="44" cy="42" r="9" fill="#34d399" />
      <path d="M40 42 L43 45 L49 38" fill="none" stroke="#0b1020" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="60" y="47" fontSize="14" fontWeight="600" fill="#ffffff" fontFamily="Inter, sans-serif">
        Order placed
      </text>
    </svg>
  );
}

function EventsScene() {
  return (
    <svg
      viewBox="0 0 400 240"
      className="h-full w-full"
      role="img"
      aria-label="Illustration of a calendar with a highlighted date next to an event ticket"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="evt-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6d28d9" />
          <stop offset="1" stopColor="#2563eb" />
        </linearGradient>
      </defs>

      <rect width="400" height="240" fill="url(#evt-bg)" />
      <circle cx="40" cy="40" r="85" fill="#fff" opacity="0.07" />
      <circle cx="370" cy="220" r="95" fill="#fff" opacity="0.08" />

      {/* calendar */}
      <rect x="48" y="48" width="150" height="146" rx="16" fill="#ffffff" opacity="0.96" />
      <path d="M48 64 a16 16 0 0 1 16 -16 H182 a16 16 0 0 1 16 16 V84 H48 Z" fill="#7c3aed" />
      <rect x="82" y="36" width="8" height="24" rx="4" fill="#e9d5ff" />
      <rect x="156" y="36" width="8" height="24" rx="4" fill="#e9d5ff" />
      {[0, 1, 2, 3, 4].map((col) =>
        [0, 1, 2].map((row) => (
          <rect
            key={`${col}-${row}`}
            x={66 + col * 25}
            y={100 + row * 26}
            width="16"
            height="16"
            rx="4"
            fill="#cbd5e1"
          />
        ))
      )}
      <circle cx="141" cy="134" r="12" fill="#22d3ee" />

      {/* ticket */}
      <g transform="rotate(-8 290 140)">
        <rect x="215" y="102" width="150" height="80" rx="12" fill="#22d3ee" />
        <line x1="290" y1="110" x2="290" y2="174" stroke="#0b1020" strokeOpacity="0.4" strokeWidth="2" strokeDasharray="5 5" />
        <circle cx="215" cy="142" r="9" fill="#4c1d95" />
        <circle cx="365" cy="142" r="9" fill="#4c1d95" />
        <text x="232" y="134" fontSize="13" fontWeight="700" fill="#0b1020" fontFamily="Inter, sans-serif">
          EVENT
        </text>
        <text x="232" y="154" fontSize="13" fontWeight="700" fill="#0b1020" fontFamily="Inter, sans-serif">
          TICKET
        </text>
        <path d="M327 128 l5 11 12 1 -9 8 3 12 -11 -6 -11 6 3 -12 -9 -8 12 -1 z" fill="#0b1020" opacity="0.75" />
      </g>
    </svg>
  );
}

const scenes = {
  grocery: GroceryScene,
  events: EventsScene,
};

export default function ProjectVisual({ kind }) {
  const Scene = scenes[kind] || GroceryScene;
  return <Scene />;
}