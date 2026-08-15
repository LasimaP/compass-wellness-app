import React, { useState } from "react";
import LeafCheck from "./LeafCheck";
import MiniStreak from "./MiniStreak";
import RowMenu from "./RowMenu";

const HabitRow = ({ habit, onToggle, onEdit, onArchive, onDelete }) => {
  return (
    <div
      className={`group relative z-20 w-full flex justify-between items-center px-4 py-4 transition-colors duration-300 ${habit.done ? "bg-sage/15 hover:bg-sage/30" : "bg-parchment hover:bg-linen/80"}`}
    >
      <div className="flex gap-4">
        <LeafCheck done={habit.done} onToggle={onToggle} name={habit.name} />
        <div className="flex flex-col items-start">
          <h3 className="font-body font-semibold text-base text-bark">
            {habit.name}
          </h3>
          <div className="flex items-center gap-2 font-body text-xs text-bark/60">
            <MiniStreak recent={habit.recent} />
            <p className="border-l border-bark/20 pl-2">{habit.cadence}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-end">
          <p
            className={`font-mono font-bold text-xl leading-none ${habit.streak >= 30 ? "text-clay" : "text-moss"}`}
          >
            {habit.streak}
          </p>
          <p className="font-body text-xs text-bark/80 uppercase leading-tight tracking-widest">
            {habit.streak === 1 ? "Day" : "Days"}
          </p>
        </div>
        <div className="opacity-0 duration-300 transition-all group-hover:opacity-100">
          <RowMenu
            onEdit={() => onEdit(habit.id)}
            onArchive={() => onArchive(habit.id)}
            onDelete={() => onDelete(habit.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default HabitRow;
