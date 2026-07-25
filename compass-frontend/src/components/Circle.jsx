import React from "react";

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

const Circle = ({ cx, cy, r, type }) => {
  return <circle cx={cx} cy={cy} r={r} {...circleStyles[type]} />;
};

export default Circle;
