import React from "react";
import VineTimeline from "./VineTimeline";

const StreakTimeline = () => {
  const stats = [
    { value: 47, label: "total days practiced", colorClass: "text-sage" },
    { value: 6, label: "current week streak", colorClass: "text-clay" },
    { value: 2, label: "gaps, and that's fine", colorClass: "text-bark" },
  ];
  return (
    <section
      id="timeline"
      className="max-w-[1120px] mx-auto px-10 py-20 flex flex-col gap-10 relative z-2"
    >
      <div className="flex flex-col gap-5 max-w-[26rem]">
        <p className="flex items-center gap-2.5 uppercase text-sm text-sage font-mono tracking-wider before:content-[''] before:w-[22px] before:h-px before:bg-sage">
          What growth actually looks like
        </p>
        <h2 className="font-display font-medium text-moss text-3xl">
          Streaks that tell the truth.
        </h2>
        <p className="font-body text-bark">
          Most trackers punish a missed day by wiping your progress. Understory
          keeps the roots. A gap just means a thinner ring, not a dead plant.
        </p>
      </div>
      <div className="flex flex-col bg-linen border border-bark/20 rounded-sm gap-10 px-10 py-10 overflow-x-auto">
        <VineTimeline />
        <div className="flex flex-wrap justify-between">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-end gap-1 p-2">
              <h3 className={`font-body text-5xl ${stat.colorClass}`}>
                {stat.value}
              </h3>
              <span className="font-body text-sm text-bark">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StreakTimeline;
