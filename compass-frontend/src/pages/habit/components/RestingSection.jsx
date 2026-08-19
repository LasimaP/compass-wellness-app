import React from "react";
import Leaf from "../../../components/Leaf";

const RestingSection = ({ habits }) => {
  const count = habits.length;

  return (
    <div>
      <details className="group">
        <summary className="list-none [&::-webkit-details-marker]:hidden font-body text-bark text-sm cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-moss">
          <div className="flex items-center gap-2">
            <p className="flex items-center gap-2">
              <span className="inline-block transition-transform group-open:rotate-90">
                {"\u203A"}
              </span>
              Resting today
            </p>
            <p className="text-sm text-bark/60">{`(${count})`}</p>
          </div>
        </summary>
        <div className="divide-y divide-bark/15">
          {habits.map((habit) => (
            <div key={habit.id} className="flex gap-4 px-2 py-2 items-center">
              <div className="opacity-45">
                <Leaf state="hollow" size={18} />
              </div>

              <div className="font-body text-bark/60">
                <p className="font-medium text-base">{habit.name}</p>
                <p className="text-xs">{habit.cadence}</p>
              </div>
            </div>
          ))}
        </div>
      </details>
      <p className="italic font-body text-bark text-sm">
        Not "skipped." Not "missed." Just not scheduled
      </p>
    </div>
  );
};

export default RestingSection;
