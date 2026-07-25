import React from "react";
import Circle from "./Circle";

const VineTimeline = () => {
  const vineNodes = [
    { cx: 30, cy: 170, r: 5, type: "completed" },
    { cx: 170, cy: 135, r: 5, type: "completed" },
    { cx: 310, cy: 145, r: 5, type: "missed" },
    { cx: 440, cy: 115, r: 6, type: "milestone" },
    { cx: 580, cy: 125, r: 5, type: "missed" },
    { cx: 720, cy: 98, r: 5, type: "completed" },
    { cx: 860, cy: 102, r: 6, type: "milestone" },
  ];

  const missNodes = vineNodes.filter((node) => node.type === "missed");

  return (
    <div>
      <svg viewBox="0 0 900 220" className="w-full min-w-[640px] h-auto">
        <line
          x1="20"
          y1="180"
          x2="880"
          y2="180"
          stroke="#5B4636"
          strokeOpacity="0.15"
          strokeWidth="1"
        />
        <path
          d="M30 170 C90 160 110 140 170 135 C230 130 250 150 310 145 C360 140 380 120 440 115 C500 110 520 130 580 125 C640 120 660 100 720 98 C770 96 800 110 860 102"
          stroke="#3F4B3B"
          strokeWidth="2.4"
          fill="none"
          strokeLinecap="round"
        />
        {vineNodes.map((node, index) => (
          <Circle key={index} {...node} />
        ))}
        {missNodes.map((node, index) => (
          <text
            key={index}
            x={node.cx - 12}
            y={node.cy + 20}
            className="font-mono text-[9px] fill-sage"
          >
            missed
          </text>
        ))}
      </svg>
    </div>
  );
};

export default VineTimeline;
