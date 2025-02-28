"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { FaChevronDown, FaBars } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { navbarTitle } from "../redux/sidebar"
import { sideBarMenu, others } from "../data/sidebar"
import { RxCross2 } from "react-icons/rx";
const Sidebar = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [openDropdown, setOpenDropdown] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const sidebarOpen = useSelector((state) => state.sideBar.sidebar)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu)
  }

  const navigateTo = (menu) => {
    router.push(menu.link)
    dispatch(navbarTitle(menu.title))

    if (window.innerWidth < 1024) {
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <button className={`lg:hidden fixed top-4 left-4 z-50 bg-sideBarBg p-2 rounded-md text-white ${isMobileMenuOpen && 'hidden'}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle sidebar menu"
        aria-expanded={isMobileMenuOpen}
      >
        <FaBars size={24} />
      </button>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div className={`fixed top-0 left-0 h-screen bg-sideBarBg text-white transition-all duration-300 ease-in-out z-40
          ${sidebarOpen ? "lg:w-[21rem] lg:rounded-[24px]" : "lg:w-[4rem] lg:rounded-[15px]"}
          ${isMobileMenuOpen ? "w-[80%] max-w-[25rem]" : "w-0 -translate-x-full"}
          lg:translate-x-0 lg:m-2 lg:h-[calc(100vh-1rem)]`}
      >
        <div className={`h-full overflow-y-auto flex flex-col p-5`}>
          <div className="flex items-center justify-between mb-6">
            <h1 className={`text-2xl transition-all duration-300 ${sidebarOpen ? "block" : "hidden"}`}>LOGO</h1>
            <button className="lg:hidden text-white"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close sidebar"
            >
              <RxCross2 size={25}/>
            </button>
          </div>

          <nav className="flex-1">
            <ul className="mt-2 flex flex-col gap-y-7">
              {sideBarMenu.map((menu, index) => (
                <li key={index} className="cursor-pointer hover:text-gray-300">
                  {menu.children ? (
                    <>
                      <div className="flex items-center justify-between"
                        onClick={() => toggleDropdown(menu.title)}
                        role="button"
                        aria-expanded={openDropdown === menu.title}
                        aria-controls={`dropdown-${menu.title}`}
                        tabIndex={0}
                      >
                        <div className="flex items-center space-x-4">
                          {menu.icon}
                          <span
                            className={`${sidebarOpen || isMobileMenuOpen ? "block" : "hidden"} transition-all duration-300 text-lg`}
                          >
                            {menu.title}
                          </span>
                        </div>
                        {(sidebarOpen || isMobileMenuOpen) && (
                          <FaChevronDown
                            className={`transition-transform ${openDropdown === menu.title ? "rotate-180" : ""}`}
                          />
                        )}
                      </div>

                      <div id={`dropdown-${menu.title}`}
                        className={`overflow-hidden transition-all duration-300 ease-in-out 
                          ${openDropdown === menu.title && (sidebarOpen || isMobileMenuOpen)
                              ? "max-h-[500px] opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                      >
                        <ul className="ml-6 mt-6 space-y-3">
                          {menu.children.map((child, childIndex) => (
                            <li key={childIndex}
                              className="flex items-center gap-4 cursor-pointer hover:text-gray-400 transition-all duration-200 transform hover:translate-x-1 text-lg"
                              onClick={() => navigateTo(child)}
                              role="menuitem"
                            >
                              {menu.icon}
                              {child.title}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <div
                      className="flex items-center space-x-4"
                      onClick={() => navigateTo(menu)}
                      role="button"
                      tabIndex={0}
                    >
                      {menu.icon}
                      <span
                        className={`${sidebarOpen || isMobileMenuOpen ? "block" : "hidden"} transition-all duration-300 text-lg`}
                      >
                        {menu.title}
                      </span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Others */}
          <div className="border-t border-gray-700 mt-8 pt-6">
            <p className={`text-neutral-300 text-base mb-4 transition-all duration-300 ${sidebarOpen ||  isMobileMenuOpen ? "block" : "hidden"}`}>
              OTHER
            </p>
            <ul className="space-y-4">
              {others.map((menu, index) => (
                <li key={index}
                  className="flex items-center space-x-4 cursor-pointer hover:text-gray-300 text-lg"
                  onClick={() => navigateTo(menu)}
                  role="menuitem"
                >
                  {menu.icon}
                  <span className={`${sidebarOpen || isMobileMenuOpen ? "block" : "hidden"} transition-all duration-300`}>
                    {menu.title}
                  </span>
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
