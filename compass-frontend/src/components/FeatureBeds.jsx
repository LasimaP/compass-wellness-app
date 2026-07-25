import React from "react";
import BedCard from "./BedCard";

const FeatureBeds = () => {
  const beds = [
    {
      icon: (
        <svg
          viewBox="0 0 40 40"
          fill="none"
          className="w-10 h-10 text-clay-dark"
        >
          <path
            d="M20 34V18"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M20 22c0 0-9-1-9-9 0 0 9 0.5 9 9z"
            fill="#8A9A80"
            opacity="0.6"
          />
          <path
            d="M20 18c0 0 9-1 9-9 0 0-9 0.5-9 9z"
            fill="currentColor"
            opacity="0.8"
          />
        </svg>
      ),
      title: "Habits",
      description:
        "Set the practices that matter to you. Understory tracks consistency over perfection. A missed day doesn't reset your progress, it just marks the day.",
      tag: "→ build at your pace",
    },
    {
      icon: (
        <svg
          viewBox="0 0 40 40"
          fill="none"
          className="w-10 h-10 text-clay-dark"
        >
          <circle
            cx="20"
            cy="20"
            r="9"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M20 11v3M20 26v3M11 20h3M26 20h3"
            stroke="#8A9A80"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Mood",
      description:
        "A ten-second check-in, most days. Over weeks it becomes a quiet map of what actually affects how you feel, not a guess, a pattern you can see.",
      tag: "→ notice, don't judge",
    },
    {
      icon: (
        <svg
          viewBox="0 0 40 40"
          fill="none"
          className="w-10 h-10 text-clay-dark"
        >
          <rect
            x="10"
            y="7"
            width="20"
            height="26"
            rx="1.5"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M15 15h10M15 20h10M15 25h6"
            stroke="#8A9A80"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Journal",
      description:
        "Free-write, prompted, or just three words before bed. Private by default. This is one plot in the garden that's only ever for you.",
      tag: "→ no audience, ever",
    },
  ];
  return (
    <section
      id="beds"
      className="max-w-[1120px] mx-auto px-10 py-20 flex flex-col gap-10 relative z-2"
    >
      <div className="flex flex-col gap-5 max-w-[30rem]">
        <p className="flex items-center gap-2.5 uppercase text-sm text-sage font-mono tracking-wider before:content-[''] before:w-[22px] before:h-px before:bg-sage">
          Three plots, one garden
        </p>
        <h2 className="font-display font-medium text-moss text-[clamp(1.8rem,2.6vw,2rem)]">
          Everything stays connected — nothing feels like homework.
        </h2>
        <p className="font-body text-bark">
          Habits, mood, and journaling aren't separate apps bolted together.
          Notice a pattern in one and you'll see it echoed in the others.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-px bg-bark/20 border border-bark/20 rounded-sm overflow-hidden">
        {beds.map((bed, index) => (
          <BedCard
            key={index}
            icon={bed.icon}
            title={bed.title}
            description={bed.description}
            tag={bed.tag}
          />
        ))}
      </div>
    </section>
  );
};

export default FeatureBeds;
