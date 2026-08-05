import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../components/Logo";

const AppHeader = () => {
  return (
    <nav className="bg-parchment/80 backdrop-blur-md border-b border-bark/20 sticky top-0 z-10">
      <div className="max-w-[1120px] mx-auto px-10 py-5 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1">
            <Logo />
            <h1 className="font-display font-semibold text-moss text-xl">
              Understory
            </h1>
          </div>

          <div className="flex font-body text-bark gap-4">
            <Link>Habits</Link>
            <Link>Mood</Link>
            <Link>Journals</Link>
            <Link>Insights</Link>
          </div>
        </div>
        <div className="font-body font-semibold text-bark">User</div>
      </div>
    </nav>
  );
};

export default AppHeader;
