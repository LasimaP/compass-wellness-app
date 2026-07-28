import React from "react";
import { motion } from "motion/react";

const circleStyles = {
  completed: { fill: "#8A9A80" },
  missed: {
    fill: "none",
    stroke: "#5B4636",
    strokeOpacity: 0.4,
    strokeWidth: 1.3,
  },
  milestone: { fill: "#A8623F" },
};

const Circle = ({ cx, cy, r, type, delay }) => {
  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r={r}
      {...circleStyles[type]}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: delay, duration: 0.4 }}
    />
  );
};

export default Circle;
