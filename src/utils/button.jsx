import React from "react";

export const Button = ({children}) => {
  return (
    <button type="submit" className="mt-3 bg-secondary text-white text-small h-[40px] rounded-lg md:h-[45px] md:mt-0"
    >
      {children}
    </button>
  );
};
