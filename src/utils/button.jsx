import React from "react";

export const Button = ({children,className,onClick }) => {
  return (
    <button className={`bg-secondary items-center justify-center flex text-white rounded-large shadow-md px-normal py-2 text-sm font-medium transition-all duration-300 ${className}`}
    onClick={onClick}
    >
      {children}
    </button>
  );
};
