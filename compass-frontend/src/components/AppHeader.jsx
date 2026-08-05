import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

const AppHeader = () => {
  const navLinks = [
    { label: "Habits", path: "/habits" },
    { label: "Mood", path: "/mood" },
    { label: "Journal", path: "/journal" },
    { label: "Insight", path: "/insight" },
  ];

  return (
    <nav className="bg-parchment/80 backdrop-blur-md border-b border-bark/20 sticky top-0 z-50">
      <div className="max-w-[1120px] mx-auto px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-1">
            <Logo />
            <h1 className="font-display font-semibold text-moss text-xl">
              Understory
            </h1>
          </div>

          <div className="flex font-body text-bark/80 gap-6">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-moss underline underline-offset-4 decoration-2 decoration-clay"
                    : "hover:text-moss"
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-sage text-sm font-semibold text-white">
          S
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;
