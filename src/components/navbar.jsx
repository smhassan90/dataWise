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
          <FiAlignLeft className=" text-black w-5 h-5 lg:w-[30px] lg:h-[30px] cursor-pointer" onClick={() => {
            if (window.innerWidth <= 1024) {
              dispatch(toogleMobile());
            } else {
              dispatch(openSideBar())
            }
          }} />
          <h1 className="font-bold text-black text-lg md:text-2xl">{title}</h1>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden sm:flex items-center gap-2">
            <input type="text" placeholder="Search" className="border sm:w-60 border-sideBarBg px-2 py-1 rounded-md text-md text-neutral-900 focus:border-neutral-500 focus:outline-none" />
            <FaSearch className="text-gray-600 cursor-pointer w-3 h-3 sm:w-5 sm:h-5" />
          </div>
          <div className="relative">
            <FaBell className="text-gray-600 cursor-pointer w-6 h-6 md:w-[27px] md:h-[29px]" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">!</span>
          </div>
          <button className="bg-black text-white px-2 md:px-3 md:py-1 rounded-md flex gap-2">
            <span className="text-base">+</span>
            <span className="hidden lg:block">Add Story</span>
          </button>
          <div className="flex items-center flex-col md:flex-row gap-1 md:gap-2">
            <div className="w-7 h-7 md:w-10 md:h-10 bg-gray-300 rounded-full flex items-center justify-center border border-gray-400">
              <span className="text-xs">GK</span>
            </div>
            <div>
              <p className="font-medium text-sm md:text-base hidden md:block">Gladys Kanyinda</p>
              <p className="text-gray-600 text-sm bg-gray-500 px-2 rounded-md hidden md:block">Admin</p>
            </div>
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