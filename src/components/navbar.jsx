"use client";
import React, { useEffect } from "react";
import { FaSearch, FaBell, FaBars } from "react-icons/fa";
import { FiAlignLeft } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { openSideBar, toogleMobile } from "../redux/sidebar";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const dispatch = useDispatch()
  const title = useSelector(state => state.sideBar.title)
  const { width, sidebar } = useSelector(state => state.sideBar)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        dispatch(toogleMobile(false))
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  return (
    <section className="fixed top-0 left-0 right-0 lg:z-50 flex flex-col justify-center w-full">
      <div className={`bg-white mt-2 flex justify-between items-center px-1 py-1 h-[57px] transition-all duration-300
      ${sidebar ? `lg:w-[calc(100vw-22rem)] lg:ml-auto` : `lg:w-[calc(100vw-5rem)] lg:ml-auto`}
    `}>
      <div className="flex items-center gap-2 md:gap-4">
        <FiAlignLeft className="text-black w-24 h-24 md:w-[21px] md:h-[24px] cursor-pointer" onClick={() => dispatch(openSideBar())} />
        <h1 className="font-manrope font-large text-black text-lg md:text-2xl">{title}</h1>
      </div>
      
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
      <div className="flex items-center gap-2 mx-auto sm:hidden">
        <input type="text" placeholder="Search" className="border w-80 border-sideBarBg px-2 py-1 rounded-md text-md text-neutral-900 focus:border-neutral-500 focus:outline-none" />
        <FaSearch className="text-gray-600 cursor-pointer w-5 h-5" />
      </div>
    </section>
  );
};

export default Navbar;
