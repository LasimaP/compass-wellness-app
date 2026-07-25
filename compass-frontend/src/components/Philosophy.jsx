import React from "react";

const Philosophy = () => {
  return (
    <section
      id="philosophy"
      className="max-w-[1120px] mx-auto px-10 py-20 flex flex-col md:flex-row gap-10 relative z-2"
    >
      <blockquote className="md:w-[45%] font-display font-medium text-[clamp(1.5rem,2.6vw,2rem)] text-moss">
        "The forest floor doesn't rush the seedling. It just keeps being good
        soil."
      </blockquote>
      <div className="md:w-[55%] flex flex-col gap-4">
        <p className="font-body text-bark">
          Understory was built on one belief: the apps meant to help your mental
          health shouldn't add more pressure to it. No red numbers counting
          down. No shame emails when you skip a week.
        </p>
        <p className="font-body text-bark">
          Just a private, patient place to notice how you're doing, and a little
          visual proof, over time, that you're growing more than it feels like
          on the hard days.
        </p>
      </div>
    </section>
  );
};

export default Philosophy;
