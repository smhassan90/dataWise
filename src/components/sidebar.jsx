"use client";
import Navbar from "@/utils/navbar";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import Next.js router
import {
  FaTachometerAlt,
  FaUserTie,
  FaBook,
  FaUserShield,
  FaDatabase,
  FaPuzzlePiece,
  FaCog,
  FaSignOutAlt,
  FaChevronDown,
} from "react-icons/fa";
import { others, sideBarMenu } from "@/data/sidebar";
import Image from "next/image";
import { navbarTitle } from "@/redux/sidebar";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const router = useRouter();
  // const dispatch = useDispatch()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const navigateTo = (menu) => {
    router.push(menu.link);
    // dispatch(navbarTitle(menu.title))
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`min-h-screen bg-sideBarBg rounded-[24px] m-2 text-white p-5 flex flex-col fixed left-0 top-0 transition-all duration-300 ${
          isSidebarOpen ? "w-[21rem]" : "w-16"
        }`}
      >
        <h1
          className={`text-2xl mb-6 transition-all duration-300 ${
            isSidebarOpen ? "block" : "hidden"
          }`}
        >
          LOGO
        </h1>

        <ul className="mt-2 flex flex-col gap-y-7">
          {sideBarMenu.map((menu, index) => (
            <li key={index} className="cursor-pointer hover:text-gray-300">
              {menu.children ? (
                <>
                  <div
                    className="flex items-center justify-between"
                    onClick={() => toggleDropdown(menu.title)}
                  >
                    <div className="flex items-center space-x-4">
                      {menu.icon}
                      <span
                        className={`${
                          isSidebarOpen ? "block" : "hidden"
                        } transition-all duration-300 text-lg`}
                      >
                        {menu.title}
                      </span>
                    </div>
                    {isSidebarOpen && (
                      <FaChevronDown
                        className={`transition-transform ${
                          openDropdown === menu.title ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </div>
                  {openDropdown === menu.title && isSidebarOpen && (
                    <ul className="ml-6 mt-2 space-y-2 text-sm">
                      {menu.children.map((child, childIndex) => (
                        <li
                          key={childIndex}
                          className="cursor-pointer hover:text-gray-400"
                          onClick={() => navigateTo(child)}
                        >
                          {child.title}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <div
                  className="flex items-center space-x-4"
                  onClick={() => navigateTo(menu.link)}
                >
                  {menu.icon}
                  <span
                    className={`${
                      isSidebarOpen ? "block" : "hidden"
                    } transition-all duration-300 text-lg`}
                  >
                    {menu.title}
                  </span>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <p
            className={`text-neutral-300 text-base mb-4 transition-all duration-300 ${
              isSidebarOpen ? "block" : "hidden"
            }`}
          >
            OTHER
          </p>
          <ul className="space-y-4">
            {others.map((menu, index) => (
              <li
                key={index}
                className="flex items-center space-x-4 cursor-pointer hover:text-gray-300 text-lg"
                onClick={() => navigateTo(menu.link)}
              >
                {menu.icon}
                <span
                  className={`${
                    isSidebarOpen ? "block" : "hidden"
                  } transition-all duration-300`}
                >
                  {menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      {/* <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-[340px]" : "ml-28"}`}>
        <Navbar title="Dashboard" isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      </div> */}
    </div>
  );
};

export default Sidebar;
