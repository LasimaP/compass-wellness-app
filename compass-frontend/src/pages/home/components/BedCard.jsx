import React from "react";

const BedCard = ({ icon, title, description, tag }) => {
  return (
    <div className="flex flex-col bg-linen gap-5 px-10 py-10">
      {icon}
      <h3 className="font-display text-moss text-xl">{title}</h3>
      <p className="font-body text-bark text-sm">{description}</p>
      <span className="font-mono text-sage text-xs mt-auto">{tag}</span>
    </div>
  );
};

export default BedCard;
