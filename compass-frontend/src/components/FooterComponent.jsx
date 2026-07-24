import React from "react";

const FooterComponent = () => {
  return (
    <div className="bg-parchment position-absolute">
      <footer className="max-w-[1120px] mx-auto px-10 py-10">
        <div className="flex justify-center items-center">
          <p className="text-sage font-mono text-center text-sm">
            &copy; 2026 Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;
