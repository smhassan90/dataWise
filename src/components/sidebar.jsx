"use client"
import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { FaChevronDown, FaBars } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { navbarTitle, toogleMobile } from "../redux/sidebar"
import { sideBarMenu, others } from "../data/sidebar"
import { RxCross2 } from "react-icons/rx";
import { debounce } from "lodash"
import { formatTitle } from "../config/caplitalizeWords"
import { logout } from "../redux/auth"
import { Hidden } from "@mui/material"
import Image from 'next/image'

const Sidebar = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [openDropdown, setOpenDropdown] = useState(null)
  const pathName = usePathname()
  const path = pathName.split('/')[2]
  console.log(path)
  const [active, setActive] = useState(formatTitle(path) || "DashBoard");
  const [loading, setLoading] = useState(false)
  const sidebarOpen = useSelector((state) => state.sideBar.sidebar)
  const isMobileMenuOpen = useSelector((state) => state.sideBar.isMobileMenuOpen)
  const {level} = useSelector((state) => state?.auth?.user)
  const showHide = sidebarOpen || isMobileMenuOpen ? "block" : "hidden"

  useEffect(() => {
    const handleResize = debounce(() => {
      if (window.innerWidth > 1024) {
        dispatch(toogleMobile(false))
      }
    }, 200)

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      handleResize.cancel()
    }
  }, [])

  useEffect(() => {
    setActive(formatTitle(path) || 'DashBoard')
  }, [path])

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu)
  }

  const navigateTo = (menu) => {
    setLoading(true);
    if (menu.title === 'Logout') {
      console.log("Click Hua")
      localStorage.removeItem("token")
      dispatch(logout())
      router.push('/login')
      setLoading(false);
      return
    }
    // router.push(menu.link)
    router.push(menu.link).then(() => {
      setLoading(false); // Stop loading after navigation
    });
    dispatch(navbarTitle(menu.title))
    setActive(formatTitle(menu.title))
    if (window.innerWidth < 1024) {
      dispatch(toogleMobile(false))
    }
  }

  return (
    <>
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => dispatch(toogleMobile(false))}
        />
      )}

      <div className={`fixed top-0 left-0 bg-secondary text-white transition-all duration-300 ease-in-out z-40
          ${sidebarOpen ? "lg:w-[16rem] lg:rounded-large" : "lg:w-[3rem] lg:rounded-large"}
          ${isMobileMenuOpen ? "w-[80%] max-w-[25rem]" : "w-0 -translate-x-full"}
          lg:translate-x-0 lg:m-normal lg:h-[calc(100vh-24px)]`}
      >
        <div className={`h-full overflow-y-auto flex flex-col`}>
          <div className="flex items-center justify-between p-3">
            {/* <h1 className={`text-medium transition-all duration-300 ${sidebarOpen ? "block" : "hidden"}`}>LOGO</h1> */}
            <div className={`w-full rounded-large shadow-md bg-white h-14 transition-all duration-300 ${sidebarOpen ? "block" : "hidden"}`}>
              <Image 
                src="/logo.png"
                alt="Logo"
                width={128}
                height={40}
                className="mt-3 ml-12 items-center text-center"
                priority
              />
            </div>

            <button className="lg:hidden text-white"
              onClick={() => dispatch(toogleMobile(false))}
              aria-label="Close sidebar"
            >
              <RxCross2 size={25} />
            </button>
          </div>

          <div className="flex items-center gap-3 md:hidden cursor-pointer hover:text-gray-300 p-5 pt-0">
            <div className="p-2 bg-gray-300 rounded-full flex items-center justify-center border border-gray-400">
              <span className="text-xs">GK</span>
            </div>
            <div>
              <p className="text-lg">Gladys Kanyinda</p>
              <p className="text-gray-600 text-lg bg-gray-500 rounded-md ">Admin</p>
            </div>
          </div>

          <nav className="pt-0">
            <p className={`text-neutral-300 text-labelSize mb-4 px-4 transition-all duration-300 ${showHide}`}>
              OVERVIEW
            </p>
            <ul className="mt-2 flex flex-col">
              {sideBarMenu.filter(menu => menu.level.includes(parseInt(level.levelNumber)))
                .map((menu, index) => (
                  <li key={index} className="cursor-pointer hover:text-gray-300 flex justify-between">
                    <p className={`w-full flex items-center space-x-3 py-3 px-4 ${active === menu.title && sidebarOpen ? "bg-white text-black" : ""}`}
                      onClick={() => navigateTo(menu)}
                      role="button"
                      tabIndex={0}
                    >
                      {menu.icon}
                      <span className={`${showHide} transition-all duration-300 text-labelSize`}>
                        {menu.title}
                      </span>
                    </p>
                    <span className={`${active === menu.title ? "bg-orange-600 w-1" : ""} rounded-l-lg`}></span>
                  </li>
                ))}

            </ul>
          </nav>

          {/* Others */}
          <div className="border-t border-gray-700 mt-4 pt-4">
            <p className={`text-neutral-300 text-labelSize mb-2 px-4 transition-all duration-300 ${showHide}`}>
              OTHER
            </p>
            {/* <ul className="space-y-4">
              {others.map((menu, index) => (
                <li key={index}
                  className={`flex items-center space-x-4 cursor-pointer hover:text-gray-300 text-labelSize ${active === menu.title
                    ? "bg-gray-800 text-white"
                    : "text-gray-700"
                    }`}
                  onClick={() => navigateTo(menu)}
                  role="menuitem"
                >
                  {menu.icon}
                  <span className={`${showHide} transition-all duration-300`}>
                    {menu.title}
                  </span>
                </li>
              ))}
            </ul> */}
            <ul className="mt-2 flex flex-col">
              {others.map((menu, index) => (
                <li key={index} className="cursor-pointer hover:text-gray-300 flex justify-between">
                  <p className={`w-full flex items-center space-x-3 py-3 px-4 ${active === menu.title && sidebarOpen
                    ? "bg-white text-black"
                    : ""
                    }`}
                    onClick={() => navigateTo(menu)}
                    role="button"
                    tabIndex={0}
                  >
                    {menu.icon}
                    <span
                      className={`${showHide} transition-all duration-300 text-labelSize`}
                    >
                      {menu.title}
                    </span>
                  </p>
                  <span
                    className={`${active === menu.title ? "bg-orange-600 w-1" : ""} rounded-l-lg`}
                  ></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar