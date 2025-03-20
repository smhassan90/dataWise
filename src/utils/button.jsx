// import React from "react";

// export const Button = ({children,className,onClick }) => {
//   return (
//     <button className={`bg-secondary items-center justify-center flex text-white rounded-large shadow-md px-normal py-2 text-sm font-medium transition-all duration-300 ${className}`}
//     onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// };

import React, { useState } from "react";

export const Button = ({ children, className, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    setIsClicked(true);
    if (onClick) {
      onClick(e);
    }

    setTimeout(() => {
      setIsClicked(false);
    }, 700);
  };

  return (
    <button
      className={`items-center justify-center flex rounded-large shadow-md px-normal py-2 text-sm font-medium transition-all duration-300 ${
        isClicked ? "bg-white text-secondary border border-secondary" : "bg-secondary text-white"
      } ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
