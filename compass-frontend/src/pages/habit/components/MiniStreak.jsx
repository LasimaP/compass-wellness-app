import React from "react";
import Leaf from "../../../components/Leaf";

const MiniStreak = ({ recent }) => {
  return (
    <div className="flex gap-1" aria-hidden="true">
      {recent.map((done, index) => (
        <Leaf key={index} size={12} state={done ? "filled" : "hollow"} />
      ))}
    </div>
  );
};

export default MiniStreak;
