import React from "react";

export const Button = ({children,className,onClick }) => {
  return (
    <button type="submit" className={`mt-normal bg-secondary text-white text-small rounded-large md:mt-0 py-1 px-3 ${className}`}
    onClick={onClick}
    >
      {children}
    </button>
  );
};
