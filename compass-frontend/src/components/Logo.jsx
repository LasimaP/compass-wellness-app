import React from "react";

const Logo = () => {
  return (
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
      <path d="M12 10C12 10 18 9.5 18 4C18 4 12 4.2 12 10Z" fill="#A8623F" />
    </svg>
  );
};

export default Logo;
