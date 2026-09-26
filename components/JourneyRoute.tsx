/**
 * Decorative animated "Canada journey" route — from before you arrive to building your future.
 * Pure SVG + CSS keyframes (see globals.css); disabled under prefers-reduced-motion.
 */
const stages = [
  { label: "Before you arrive", sub: "Documents · lodging" },
  { label: "First week", sub: "SIM · transit · SIN" },
  { label: "First months", sub: "Health card · banking" },
  { label: "Work & study", sub: "Resume · campus · PGWP" },
  { label: "Building your future", sub: "Taxes · housing · community" },
];

// Points along a gently winding path (viewBox 0 0 360 420)
const points = [
  { x: 56, y: 44 },
  { x: 250, y: 120 },
  { x: 90, y: 210 },
  { x: 262, y: 298 },
  { x: 120, y: 380 },
];
const path =
  "M56 44 C 160 44, 260 70, 250 120 S 70 160, 90 210 S 270 250, 262 298 S 140 340, 120 380";

export function JourneyRouteVertical({ className }: { className?: string }) {
  return (
    <div aria-hidden className={className}>
      <svg viewBox="0 0 360 420" className="w-full h-auto overflow-visible">
        <defs>
          <linearGradient id="norra-route-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C8D9D6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#D4A574" />
          </linearGradient>
        </defs>
        <path d={path} fill="none" stroke="rgba(247,243,236,0.14)" strokeWidth="3" strokeDasharray="2 8" strokeLinecap="round" />
        <path
          d={path}
          pathLength={1}
          fill="none"
          stroke="url(#norra-route-grad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          className="norra-route-path"
        />
        {points.map((p, i) => {
          const last = i === points.length - 1;
          const d = `${0.45 + i * 0.42}s`;
          const labelLeft = p.x > 180;
          return (
            <g key={i} style={{ ["--d" as string]: d }}>
              {last && <circle cx={p.x} cy={p.y} r="10" fill="#D4A574" className="norra-pulse" />}
              <circle
                cx={p.x}
                cy={p.y}
                r={last ? 10 : 8}
                fill={last ? "#D4A574" : "#0A1F1C"}
                stroke={last ? "#F7F3EC" : "#C8D9D6"}
                strokeWidth="3"
                className="norra-route-dot"
              />
              <g className="norra-route-label">
                <text
                  x={labelLeft ? p.x - 18 : p.x + 18}
                  y={p.y - 2}
                  textAnchor={labelLeft ? "end" : "start"}
                  className="fill-cream"
                  style={{ font: "600 15px var(--font-dm-sans), system-ui, sans-serif" }}
                >
                  {stages[i].label}
                </text>
                <text
                  x={labelLeft ? p.x - 18 : p.x + 18}
                  y={p.y + 16}
                  textAnchor={labelLeft ? "end" : "start"}
                  style={{ font: "400 12px var(--font-dm-sans), system-ui, sans-serif", fill: "#C8D9D6" }}
                >
                  {stages[i].sub}
                </text>
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/** Compact horizontal version for phones / small tablets */
export function JourneyRouteHorizontal({ className }: { className?: string }) {
  return (
    <div aria-hidden className={className}>
      <svg viewBox="0 0 340 64" className="w-full h-auto overflow-visible">
        <line x1="14" y1="20" x2="326" y2="20" stroke="rgba(247,243,236,0.16)" strokeWidth="3" strokeDasharray="2 7" strokeLinecap="round" />
        <path d="M14 20 L326 20" pathLength={1} fill="none" stroke="#D4A574" strokeWidth="3" strokeLinecap="round" className="norra-route-path" />
        {stages.map((s, i) => {
          const x = 14 + i * 78;
          const last = i === stages.length - 1;
          return (
            <g key={s.label} style={{ ["--d" as string]: `${0.4 + i * 0.35}s` }}>
              {last && <circle cx={x} cy={20} r="7" fill="#D4A574" className="norra-pulse" />}
              <circle
                cx={x}
                cy={20}
                r="7"
                fill={last ? "#D4A574" : "#0A1F1C"}
                stroke={last ? "#F7F3EC" : "#C8D9D6"}
                strokeWidth="2.5"
                className="norra-route-dot"
              />
            </g>
          );
        })}
        <text x="0" y="52" className="norra-route-label" style={{ ["--d" as string]: "0.5s", font: "600 11px var(--font-dm-sans), system-ui, sans-serif", fill: "#C8D9D6" }}>
          Before you arrive
        </text>
        <text x="340" y="52" textAnchor="end" className="norra-route-label" style={{ ["--d" as string]: "1.9s", font: "600 11px var(--font-dm-sans), system-ui, sans-serif", fill: "#D4A574" }}>
          Building your future
        </text>
      </svg>
    </div>
  );
}
