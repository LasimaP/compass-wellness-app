import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <header className="grid md:grid-cols-2 pt-24 pb-16 gap-14">
      <div className="flex flex-col gap-8">
        <p className="flex items-center gap-2.5 uppercase text-sm text-sage font-mono tracking-wider before:content-[''] before:w-[22px] before:h-px before:bg-sage">
          A quieter kind of self-care
        </p>
        <h1 className="font-display font-medium text-5xl text-moss leading-tight">
          Small roots, <br />
          <em className="text-clay">steady</em> growth.
        </h1>
        <p className="font-body text-bark max-w-[26rem]">
          Understory helps you build habits, notice your moods, and write things
          down without the guilt spiral when a day gets missed. Growth isn't
          linear. Your tracker shouldn't pretend it is.
        </p>
        <div className="flex items-center gap-3">
          <Button variant="primary" href="#">
            Plant your first habit
          </Button>
          <Button variant="ghost" href="#beds">
            See how it works
          </Button>
        </div>
        <p className="text-sm text-sage font-mono tracking-wider">
          no streak-shaming · no data selling · just yours
        </p>
      </div>
      <div className="border">
        <p>picture</p>
      </div>
    </header>
  );
};

export default Hero;
