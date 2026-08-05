import React from "react";

const LEAF_STYLES = {
  filled: { fill: "var(--color-sage)", stroke: "var(--color-sage)" },
  hollow: {
    fill: "none",
    stroke: "var(--color-bark)",
    strokeOpacity: 0.4,
    strokeWidth: 1.2,
  },
  milestone: { fill: "var(--color-clay)", stroke: "var(--color-clay)" },
};

const Leaf = ({ size, state }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        d="M5 19C5 11 11 5 19 5C19 13 13 19 5 19Z"
        fill={LEAF_STYLES[state].fill}
        stroke={LEAF_STYLES[state].stroke}
        strokeWidth={LEAF_STYLES[state].strokeWidth ?? 1.6}
        strokeOpacity={LEAF_STYLES[state].strokeOpacity}
        strokeLinejoin="round"
      />
      {state !== "hollow" && (
        <path
          d="M6.2 17.8L17.8 6.2"
          stroke="rgba(255,255,255,.55)"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
};

export default Leaf;
