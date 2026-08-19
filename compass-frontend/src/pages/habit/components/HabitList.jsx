import React from "react";
import HabitRow from "./HabitRow";
import AddHabitRow from "./AddHabitRow";

const HabitList = ({
  habits,
  onToggle,
  onEdit,
  onArchive,
  onDelete,
  onAdd,
}) => {
  return (
    <div className="flex flex-col gap-px bg-bark/10 border border-bark/10 rounded-2xl overflow-hidden mb-6">
      {habits.map((habit) => (
        <HabitRow
          key={habit.id}
          habit={habit}
          onToggle={onToggle}
          onEdit={onEdit}
          onArchive={onArchive}
          onDelete={onDelete}
        />
      ))}
      <AddHabitRow onAdd={onAdd} />
    </div>
  );
};

export default HabitList;
