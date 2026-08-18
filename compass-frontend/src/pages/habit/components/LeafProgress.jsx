import React from "react";
import Leaf from "../../../components/Leaf";

const LeafProgress = ({ habits }) => {
  const count = habits.filter((habit) => habit.activeToday).length;
  const completed = habits.filter(
    (habit) => habit.done && habit.activeToday,
  ).length;

  return (
    <div className="flex items-center gap-4">
      <div className="flex gap-2">
        {habits.flatMap((habit) => {
          if (habit.activeToday)
            return (
              <Leaf
                key={habit.id}
                size={15}
                state={habit.done ? "filled" : "hollow"}
              />
            );
        })}
      </div>

      <p className="font-mono text-xs text-bark/80">
        {completed} of {count} tended
      </p>
    </div>
  );
};

export default LeafProgress;
