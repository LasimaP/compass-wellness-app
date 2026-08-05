import React from "react";
import Button from "../../../components/Button";
import Logo from "../../../components/Logo";

const Navbar = () => {
  return (
    <nav className="bg-parchment/80 backdrop-blur-md border-b border-bark/20 sticky top-0 z-10">
      <div className="max-w-[1120px] mx-auto px-10 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo />
          <h1 className="font-display font-semibold text-moss text-xl">
            Understory
          </h1>
        </div>
        <div className="flex gap-7 text-bark text-sm font-body text-body">
          <a href="#beds" className="hover:text-clay-dark">
            How it works
          </a>
          <a href="#timeline" className="hover:text-clay-dark">
            Your progress
          </a>
          <a href="#philosophy" className="hover:text-clay-dark">
            Our approach
          </a>
        </div>
        <div>
          <Button variant="primary" href="#" className="px-7 py-3.5">
            Start growing
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
