import React from "react";
import { motion } from "motion/react";

const GrowthIllustration = () => {
  const leafStems = [
    {
      d: "M190 300 C160 280 140 285 118 258",
      delay: 0.6,
    },
    {
      d: "M190 260 C220 244 232 248 254 220",
      delay: 1.2,
    },
    {
      d: "M190 200 C162 188 150 190 128 166",
      delay: 1.8,
    },
    {
      d: "M190 155 C218 142 228 144 248 120",
      delay: 2.4,
    },
    {
      d: "M190 95 C165 82 155 84 136 62",
      delay: 3.0,
    },
  ];
  const leafNodes = [
    { cx: 118, cy: 258, r: 7, color: "#8A9A80", delay: 0.6 },
    { cx: 254, cy: 220, r: 7, color: "#8A9A80", delay: 1.2 },
    { cx: 128, cy: 166, r: 7, color: "#8A9A80", delay: 1.8 },
    { cx: 248, cy: 120, r: 8, color: "#A8623F", delay: 2.4 },
    { cx: 136, cy: 62, r: 8, color: "#A8623F", delay: 3.0 },
    { cx: 190, cy: 40, r: 9, color: "#3F4B3B", delay: 3.6 },
  ];
  const dayLabels = [
    { x: 84, y: 268, delay: 1, day: "day 4" },
    { x: 88, y: 176, delay: 2.2, day: "day 11" },
    { x: 148, y: 50, delay: 4.0, day: "day 21" },
  ];
  return (
    <div className="flex justify-center">
      <svg viewBox="0 0 380 420" className="w-full max-w-[420px] h-auto">
        <ellipse
          cx="190"
          cy="405"
          rx="60"
          ry="7"
          fill="#5B4636"
          opacity="0.12"
        />
        <motion.path
          d="M190 400 C188 340 200 320 190 280 C182 250 195 220 190 190 C186 160 196 140 190 110 C186 90 190 70 190 40"
          fill="none"
          stroke="#3F4B3B"
          strokeWidth="2.2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0, duration: 3.6, ease: "easeInOut" }}
        />
        {leafStems.map((stem, index) => (
          <motion.path
            key={index}
            d={stem.d}
            fill="none"
            stroke="#8A9A80"
            strokeWidth="1.6"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              delay: stem.delay,
              duration: 2,
              ease: "easeInOut",
            }}
          ></motion.path>
        ))}

        {leafNodes.map((leaf, index) => (
          <motion.circle
            key={index}
            cx={leaf.cx}
            cy={leaf.cy}
            r={leaf.r}
            fill={leaf.color}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: leaf.delay, duration: 0.4 }}
          ></motion.circle>
        ))}
        {dayLabels.map((label, index) => (
          <motion.text
            key={index}
            x={label.x}
            y={label.y}
            className="font-mono text-[9px] fill-bark"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: label.delay, duration: 0.4 }}
          >
            {label.day}
          </motion.text>
        ))}
      </svg>
    </div>
  );
};

export default GrowthIllustration;
