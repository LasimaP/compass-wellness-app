import React from "react";
import Leaf from "../../../components/Leaf";

const RestingSection = ({ habits }) => {
  const count = habits.filter((habit) => !habit.activeToday).length;
  return (
    <div>
      <details className="group">
        <summary className="font-body text-bark text-sm cursor-pointer">
          <div className="flex items-center gap-2">
            <p>
              <span className="pr-2">›</span> Resting today
            </p>
            <p className="text-sm text-bark/60">{`(${count})`}</p>
          </div>
        </summary>
        {habits.flatMap((habit) => {
          if (!habit.activeToday) {
            return (
              <div key={habit.id} className="flex gap-4 py-2 items-center">
                <Leaf state="hollow" size={20} />
                <div className="font-body text-bark/90">
                  <p className="font-medium text-base">{habit.name}</p>
                  <p className="text-xs">{habit.cadence}</p>
                </div>
              </div>
            );
          }
        })}
      </details>
    </div>
  );
};

export default RestingSection;
