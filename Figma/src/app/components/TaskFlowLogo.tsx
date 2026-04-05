/**
 * TaskFlowLogo — uses the official Figma Logomark (blue mosaic grid).
 *
 * Props:
 *  collapsed  — show mark only, no text (used when sidebar is collapsed)
 *  size       — 'sm' (header/sidebar) | 'md' | 'lg' (auth pages)
 *  textColor  — 'white' (dark backgrounds) | 'dark' (light backgrounds)
 */

interface LogomarkProps {
  /** Height in px for the mark container (the SVG grid scales to fill it) */
  height: number;
}

function Logomark({ height }: LogomarkProps) {
  // The Figma mark is a 4-column × 4-row grid of blue squares.
  // Each cell is (height/4) × (height/4) with varying opacities.
  const cell = height / 4;

  // [row][col] → opacity (from Figma source)
  const grid: number[][] = [
    [1,   0,    0.6,  0   ],
    [0,   0.6,  0.45, 0.3 ],
    [0.6, 0.45, 0.3,  0.15],
    [0,   0.3,  0.15, 0   ],
  ];

  return (
    <div
      style={{ width: cell * 4, height: cell * 4, position: "relative", flexShrink: 0 }}
    >
      {grid.map((row, r) =>
        row.map((opacity, c) =>
          opacity === 0 ? null : (
            <div
              key={`${r}-${c}`}
              style={{
                position: "absolute",
                top: r * cell,
                left: c * cell,
                width: cell,
                height: cell,
                background: "#155eef",
                opacity,
              }}
            />
          )
        )
      )}
    </div>
  );
}

const SIZE_MAP = {
  sm: 28,   // header & sidebar
  md: 36,   // medium auth contexts
  lg: 48,   // full-size auth pages
};

export function TaskFlowLogo({
  collapsed  = false,
  size       = "sm",
  textColor  = "white",
}: {
  collapsed?:  boolean;
  size?:       "sm" | "md" | "lg";
  textColor?:  "white" | "dark";
}) {
  const markHeight = SIZE_MAP[size];

  // Font size scales with the mark
  const fontSize = size === "lg" ? 16 : size === "md" ? 13 : 12;

  const nameColor =
    textColor === "dark"
      ? "#0a0a0a"
      : "white";

  return (
    <div className="flex items-center" style={{ gap: markHeight * 0.35 }}>
      <Logomark height={markHeight} />

      {!collapsed && (
        <span
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize,
            color: nameColor,
            letterSpacing: "0.02em",
            lineHeight: 1.3,
          }}
        >
          TaskFlow
        </span>
      )}
    </div>
  );
}