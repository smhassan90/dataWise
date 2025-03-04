"use client";
import React, { useEffect, useState } from "react";
import { FaSearch, FaBell, FaBars } from "react-icons/fa";
import { FiAlignLeft } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { openSideBar, toogleMobile } from "../redux/sidebar";
import { usePathname } from "next/navigation";
import { formatTitle } from "../config/caplitalizeWords";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const dispatch = useDispatch()
  const [title,setTitle] = useState(useSelector(state => state.sideBar.title))
  const [loading, setLoading] = useState(true);
  const { sidebar } = useSelector(state => state.sideBar)
  const pathName = usePathname()
  const path = pathName.split('/')[2]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        dispatch(toogleMobile(false))
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(()=>{
    setTitle(formatTitle(path) || 'DashBoard')
    setLoading(false);
  },[path])
  
  return (
    <section className="fixed top-0 left-0 right-0 lg:z-50 flex flex-col justify-center w-full mt-3">
      <div className={` flex justify-between items-center px-1 py-1 h-[57px] transition-all duration-300
      ${sidebar ? `lg:w-[calc(100vw-17.5rem-12px)] lg:ml-auto mr-3` : `lg:w-[calc(100vw-4.6rem-12px)] lg:ml-auto mr-3`}
    `}>
        <div className="flex items-center gap-2 md:gap-4">
          <FiAlignLeft className=" text-black w-5 h-5 lg:w-6 lg:h-6 cursor-pointer" onClick={() => {
            if (window.innerWidth <= 1024) {
              dispatch(toogleMobile());
            } else {
              dispatch(openSideBar())
            }
          }} />
          {!loading && <h1 className="text-Tertiary font-semibold text-small">{title}</h1>}
        </div>
      </div>
    </section>
  );
};

export default Navbar;