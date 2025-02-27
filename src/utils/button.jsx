import React from "react";

export const Button = ({children}) => {
  return (
    <button
      type="submit"
      className="mt-3 bg-button text-white h-[40px] rounded-md md:h-[45px] md:mt-0"
    >
      {children}
    </button>
  );
};
