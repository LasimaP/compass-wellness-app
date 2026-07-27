import React from "react";
import Button from "./Button";

const CtaBand = () => {
  return (
    <section className="max-w-[1120px] mx-auto px-10 py-20 gap-10 relative z-2">
      <div className="flex flex-col items-center bg-moss px-10 py-20 rounded-sm gap-10 text-center">
        <h3 className="font-display font-medium text-[clamp(1.8rem,3.4vw,2.5rem)] text-linen">
          Start your understory today.
        </h3>
        <p className="font-body text-sage">
          Free to begin. No credit card. Your data stays yours.
        </p>
        <Button variant="primary" href="#">
          Plant your first habit
        </Button>
      </div>
    </section>
  );
};

export default CtaBand;
