"use client";
import React from "react";
import { FaSearch, FaBell, FaBars } from "react-icons/fa";
import { FiAlignLeft } from "react-icons/fi";
// import { useSelector } from "react-redux";

const Navbar = ({title,isSidebarOpen, setIsSidebarOpen }) => {
  // const title = useSelector(state=>state.sideBar.title)
  // console.log(title)
  return (
    <div className={`bg-white mt-2 flex justify-between items-center px-1 py-1 h-[57px] fixed top-0 left-0 right-0 transition-all duration-300 w-[calc(100vw-21.5rem)] ml-auto
      ${isSidebarOpen ? "ml-[304px]" : ""}
    `}>
      {/* Left Section */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Toggle Sidebar */}
        <FiAlignLeft className="text-black w-24 h-24 md:w-[21px] md:h-[24px] cursor-pointer" onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        <h1 className="font-bold text-black text-lg md:text-2xl">{title}</h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 md:gap-6">
        <FaSearch className="text-gray-600 cursor-pointer w-5 h-5 md:w-6 md:h-6" />
        <div className="relative">
          <FaBell className="text-gray-600 cursor-pointer w-6 h-6 md:w-[27px] md:h-[29px]" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">!</span>
        </div>
        <button className="bg-black text-white px-3 md:px-4 py-1 md:py-2 rounded-md text-xs md:text-sm">+ Add Story</button>
        <div className="flex items-center gap-1 md:gap-2">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded-full flex items-center justify-center border border-gray-400">
            <span className="text-xs">GK</span>
          </div>
          <div>
            <p className="font-medium text-sm md:text-base">Gladys Kanyinda</p>
            <p className="text-gray-600 text-xs bg-gray-500 px-2 rounded-md">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
