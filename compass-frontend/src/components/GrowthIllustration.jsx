import React from "react";

const GrowthIllustration = () => {
  const leafNodes = [
    { cx: 118, cy: 258, r: 7, color: "#8A9A80" },
    { cx: 254, cy: 220, r: 7, color: "#8A9A80" },
    { cx: 128, cy: 166, r: 7, color: "#8A9A80" },
    { cx: 248, cy: 120, r: 8, color: "#A8623F" },
    { cx: 136, cy: 62, r: 8, color: "#A8623F" },
    { cx: 190, cy: 40, r: 9, color: "#3F4B3B" },
  ];
  return (
    <div className="flex justify-center">
      <svg viewBox="0 0 380 420" className="w-full max-w-[420px] h-auto">
        <path
          d="M190 400 C188 340 200 320 190 280 C182 250 195 220 190 190 C186 160 196 140 190 110 C186 90 190 70 190 40"
          fill="none"
          stroke="#3F4B3B"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        <path
          d="M190 300 C160 280 140 285 118 258"
          fill="none"
          stroke="#8A9A80"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M190 260 C220 244 232 248 254 220"
          fill="none"
          stroke="#8A9A80"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M190 200 C162 188 150 190 128 166"
          fill="none"
          stroke="#8A9A80"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M190 155 C218 142 228 144 248 120"
          fill="none"
          stroke="#8A9A80"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M190 95 C165 82 155 84 136 62"
          fill="none"
          stroke="#8A9A80"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {leafNodes.map((leaf, index) => (
          <circle
            key={index}
            cx={leaf.cx}
            cy={leaf.cy}
            r={leaf.r}
            fill={leaf.color}
          ></circle>
        ))}
      </svg>
    </div>
  );
};

export default GrowthIllustration;
