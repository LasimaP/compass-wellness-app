import React from "react";
import Leaf from "../../../components/Leaf";
const LeafCheck = ({ done, onToggle, name }) => {
  return (
    <button
      className="flex items-center justify-center"
      onClick={onToggle}
      aria-pressed={done}
      aria-label={`Mark ${name} ${done ? "not done" : "done"}`}
    >
      <Leaf size={24} state={done ? "filled" : "hollow"} />
    </button>
  );
};

export default LeafCheck;
