import React from "react";

const FooterComponent = () => {
  return (
    <footer className="bg-parchment border-t border-bark/20">
      <div className="max-w-[1120px] mx-auto px-10 py-10 flex flex-wrap items-center justify-between text-bark font-body text-sm gap-4">
        <p>&copy; 2026 Understory. Grown, not built overnight.</p>
        <ul className="flex gap-5">
          <li>
            <a href="#" className="hover:text-clay-dark">
              Privacy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-clay-dark">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-clay-dark">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterComponent;
