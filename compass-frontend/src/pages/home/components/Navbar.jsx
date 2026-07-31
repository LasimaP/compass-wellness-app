import React from "react";
import Button from "../../../components/Button";

const Navbar = () => {
  return (
    <nav className="bg-parchment/80 backdrop-blur-md border-b border-bark/20 sticky top-0 z-10">
      <div className="max-w-[1120px] mx-auto px-10 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            <path
              d="M12 21V10"
              stroke="#3F4B3B"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path d="M12 13C12 13 6 12 6 6C6 6 12 6.5 12 13Z" fill="#8A9A80" />
            <path
              d="M12 10C12 10 18 9.5 18 4C18 4 12 4.2 12 10Z"
              fill="#A8623F"
            />
          </svg>
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
