import React from "react";

export const Button = ({children,className,onClick }) => {
  return (
    <button type="submit" className={`bg-secondary items-center flex text-white rounded-large shadow-md px-4 py-2 text-sm font-medium transition-all duration-300 ${className}`}
    onClick={onClick}
    >
      {children}
    </button>
  );
};
