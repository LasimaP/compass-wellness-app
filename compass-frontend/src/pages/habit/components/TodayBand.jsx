import React from "react";
import LeafProgress from "./LeafProgress";

const TodayBand = ({ habits }) => {
  const today = new Date();
  const weekday = today.toLocaleDateString(undefined, { weekday: "long" });
  const monthAndDay = today.toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
  });

  const count = habits.length;
  const completed = habits.filter((habit) => habit.done).length;
  const remaining = count - completed;

  return (
    <div className="max-w-[860px] mx-auto pt-11 pb-6">
      <div className="flex flex-col gap-3">
        <p className="font-mono text-bark/80 text-xs uppercase tracking-widest">
          {weekday} · {monthAndDay}
        </p>
        <h1 className="font-display font-light text-moss text-4xl tracking-tight">
          {completed === count
            ? "All tended. Rest well."
            : `${remaining} ${remaining === 1 ? "thing" : "things"} still growing.`}
        </h1>
        <p className="font-body text-bark/80 text-base">
          {completed === count
            ? "Nothing left to do today"
            : "Tend what you can. The rest keeps"}
        </p>
        <LeafProgress habits={habits} />
      </div>
    </div>
  );
};

export default TodayBand;
