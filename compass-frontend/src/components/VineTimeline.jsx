import React from "react";
import Circle from "./Circle";
import { motion } from "motion/react";

const VineTimeline = () => {
  const vineNodes = [
    { cx: 30, cy: 170, r: 5, type: "completed", delay: 0 },
    { cx: 170, cy: 135, r: 5, type: "completed", delay: 0.6 },
    { cx: 310, cy: 145, r: 5, type: "missed", delay: 1.2 },
    { cx: 440, cy: 115, r: 6, type: "milestone", delay: 1.8 },
    { cx: 580, cy: 125, r: 5, type: "missed", delay: 2.4 },
    { cx: 720, cy: 98, r: 5, type: "completed", delay: 3 },
    { cx: 860, cy: 102, r: 6, type: "milestone", delay: 3.6 },
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
        <motion.path
          d="M30 170 C90 160 110 140 170 135 C230 130 250 150 310 145 C360 140 380 120 440 115 C500 110 520 130 580 125 C640 120 660 100 720 98 C770 96 800 110 860 102"
          fill="none"
          stroke="#3F4B3B"
          strokeWidth="2.4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 0, pathLength: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0, duration: 3.6, ease: "easeInOut" }}
        />
        {vineNodes.map((node, index) => (
          <Circle key={index} {...node} />
        ))}
        {missNodes.map((node, index) => (
          <motion.text
            key={index}
            x={node.cx - 12}
            y={node.cy + 20}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: node.delay + 0.2, duration: 0.4 }}
            className="font-mono text-[9px] fill-sage"
          >
            missed
          </motion.text>
        ))}
      </svg>
    </div>
  );
};

export default VineTimeline;
