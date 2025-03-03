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
    <section className="fixed top-0 left-0 right-0 lg:z-50 flex flex-col justify-center w-full mt-3">
      <div className={`flex justify-between items-center px-1 py-1 h-[57px] transition-all duration-300
      ${sidebar ? `lg:w-[calc(100vw-17.5rem)] lg:ml-auto mr-3` : `lg:w-[calc(100vw-4.8rem)] lg:ml-auto`}
    `}>
        <div className="flex items-center gap-2 md:gap-4">
          <FiAlignLeft className=" text-black w-5 h-5 lg:w-6 lg:h-6 cursor-pointer" onClick={() => {
            if (window.innerWidth <= 1024) {
              dispatch(toogleMobile());
            } else {
              dispatch(openSideBar())
            }
          }} />
          <h1 className="text-Tertiary font-semibold text-small">{title}</h1>
        </div>
      </div>
    </section>
  );
};

export default Navbar;