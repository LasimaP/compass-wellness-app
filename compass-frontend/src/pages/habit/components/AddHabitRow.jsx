import React from "react";

const AddHabitRow = ({ onAdd }) => {
  return (
    <div
      onClick={onAdd}
      className="group relative z-20 w-full flex items-center gap-4 px-4 py-4 bg-parchment text-bark/60 transition-colors duration-300 hover:text-clay cursor-pointer"
    >
      <div className="w-[40px] h-[40px] flex justify-center items-center border border-dashed border-bark/30 rounded-xl transition-colors duration-300 group-hover:border-clay">
        +
      </div>
      <p className="text-sm">Plant a new habit</p>
    </div>
  );
};

export default AddHabitRow;
