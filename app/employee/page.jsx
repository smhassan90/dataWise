// // "use client";
// // import Navbar from '@/utils/navbar';
// // import React, { useState } from 'react';
// // import { FaTachometerAlt, FaUserTie, FaBook, FaUserShield, FaDatabase, FaPuzzlePiece, FaCog, FaSignOutAlt } from 'react-icons/fa';

// // const Sidebar = () => {
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

// //   return (
// //     <div className="flex">
// //       {/* Sidebar */}
// //       <div className={`h-screen bg-[#021A22] rounded-[13px] text-white p-4 flex flex-col fixed left-0 top-0 transition-all duration-300 
// //         ${isSidebarOpen ? "w-64" : "w-0 overflow-hidden"}
// //       `}>
// //         {isSidebarOpen && (
// //           <>
// //             <h1 className="text-lg font-bold mb-6">LOGO</h1>
// //             <p className="text-gray-400 text-sm mb-4">OVERVIEW</p>
// //             <ul className="space-y-4">
// //               <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-300"><FaTachometerAlt /><span>Dashboard</span></li>
// //               <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-300"><FaUserTie /><span>Employees</span></li>
// //               <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-300"><FaBook /><span>Story Boards</span></li>
// //               <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-300"><FaUserShield /><span>Investigations</span></li>
// //               <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-300"><FaDatabase /><span>Complimentary Datasets</span></li>
// //               <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-300"><FaPuzzlePiece /><span>Integrations</span></li>
// //             </ul>

// //             <div className="border-t border-gray-700 mt-6 pt-4">
// //               <p className="text-gray-400 text-sm mb-4">OTHER</p>
// //               <ul className="space-y-4">
// //                 <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-300"><FaCog /><span>Settings</span></li>
// //                 <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-300"><FaSignOutAlt /><span>Logout</span></li>
// //               </ul>
// //             </div>
// //           </>
// //         )}
// //       </div>

// //       {/* Main Content */}
// //       <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
// //         <Navbar title="Dashboard" isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
// //           <h2 className="text-black text-2xl font-bold">Dashboard Content</h2>
        
// //       </div>
// //     </div>
// //   );
// // };

// // export default Sidebar;

// "use client";
// import Navbar from '@/utils/navbar';
// import React, { useState } from 'react';
// import { FiAlignLeft } from "react-icons/fi";

// import { FaTachometerAlt, FaUserTie, FaBook, FaUserShield, FaDatabase, FaPuzzlePiece, FaCog, FaSignOutAlt, FaChevronDown } from 'react-icons/fa';

// const Sidebar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open

//   // Toggle dropdown function
//   const toggleDropdown = (menu) => {
//     setOpenDropdown(openDropdown === menu ? null : menu);
//   };

//   return (
//     <div className="flex mt-10">
//       {/* Sidebar */}
//       <div className={`h-screen bg-[#036666] rounded-[24px] mt-3  ml-4 text-white p-10 flex flex-col fixed left-0 top-0 transition-all duration-300 
//         ${isSidebarOpen ? "w-64" : "w-0 overflow-hidden"}
//       `}>
//         {isSidebarOpen && (
//           <>
//             <h1 className="text-lg font-bold mb-6">LOGO</h1>
//             <p className="text-gray-400 text-sm mb-4">OVERVIEW</p>
//             <ul className="space-y-4">
//               <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-300"><FaTachometerAlt /><span>Dashboard</span></li>

//               {/* Employees Dropdown */}
//               <li className="cursor-pointer hover:text-gray-300">
//                 <div className="flex items-center justify-between" onClick={() => toggleDropdown("employees")}>
//                   <div className="flex items-center space-x-2">
//                     <FaUserTie />
//                     <span>Employees</span>
//                   </div>
//                   <FaChevronDown className={`transition-transform ${openDropdown === "employees" ? "rotate-180" : ""}`} />
//                 </div>
//                 {/* Child Pages */}
//                 {openDropdown === "employees" && (
//                   <ul className="ml-6 mt-2 space-y-2 text-sm">
//                     <li className="cursor-pointer hover:text-gray-400">Employee List</li>
//                     <li className="cursor-pointer hover:text-gray-400">Add Employee</li>
//                   </ul>
//                 )}
//               </li>

//               {/* Story Boards Dropdown */}
//               <li className="cursor-pointer hover:text-gray-300">
//                 <div className="flex items-center justify-between" onClick={() => toggleDropdown("storyBoards")}>
//                   <div className="flex items-center space-x-2">
//                     <FaBook />
//                     <span>Story Boards</span>
//                   </div>
//                   <FaChevronDown className={`transition-transform ${openDropdown === "storyBoards" ? "rotate-180" : ""}`} />
//                 </div>
//                 {/* Child Pages */}
//                 {openDropdown === "storyBoards" && (
//                   <ul className="ml-6 mt-2 space-y-2 text-sm">
//                     <li className="cursor-pointer hover:text-gray-400">All Stories</li>
//                     <li className="cursor-pointer hover:text-gray-400">Create Story</li>
//                   </ul>
//                 )}
//               </li>

//               <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-300"><FaUserShield /><span>Investigations</span></li>
//               <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-300"><FaDatabase /><span>Complimentary Datasets</span></li>
//               <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-300"><FaPuzzlePiece /><span>Integrations</span></li>
//             </ul>

//             <div className="border-t border-gray-700 mt-6 pt-4">
//               <p className="text-gray-400 text-sm mb-4">OTHER</p>
//               <ul className="space-y-4">
//                 <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-300"><FaCog /><span>Settings</span></li>
//                 <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-300"><FaSignOutAlt /><span>Logout</span></li>
//               </ul>
//             </div>
//           </>
//         )}
//       </div>

//       {/* Main Content */}
//       <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-80" : "ml-32"}`}>
//         <Navbar title="Dashboard" isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
//         <div className="mt-16">
//           <h2 className="text-black text-2xl font-bold">Dashboard Content</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;






// "use client";
// import Navbar from "@/utils/navbar";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation"; // Import Next.js router
// import { 
//   FaTachometerAlt, FaUserTie, FaBook, FaUserShield, FaDatabase, 
//   FaPuzzlePiece, FaCog, FaSignOutAlt, FaChevronDown 
// } from "react-icons/fa";

// const Sidebar = () => {
//   const router = useRouter(); // Initialize Next.js router
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [openDropdown, setOpenDropdown] = useState(null); // Track open dropdowns

//   // Toggle dropdown function
//   const toggleDropdown = (menu) => {
//     setOpenDropdown(openDropdown === menu ? null : menu);
//   };

//   // Function to navigate to a page
//   const navigateTo = (path) => {
//     router.push(path);
//   };

//   return (
//     <div className="flex mt-10">
//       {/* Sidebar */}
//       <div className={`h-screen bg-[#036666] rounded-[24px] mt-3 ml-4 text-white p-10 flex flex-col fixed left-0 top-0 transition-all duration-300 
//         ${isSidebarOpen ? "w-72" : "w-0 overflow-hidden"}
//       `}>
//         {isSidebarOpen && (
//           <>
//             <h1 className="text-lg font-bold mb-6">LOGO</h1>
//             <p className="text-gray-400 text-sm mb-4">OVERVIEW</p>
//             <ul className="space-y-4">
//               {/* Dashboard */}
//               <li 
//                 className="flex items-center space-x-2 cursor-pointer hover:text-gray-300" 
//                 onClick={() => navigateTo("/dashboard")}
//               >
//                 <FaTachometerAlt />
//                 <span>Dashboard</span>
//               </li>

//               {/* Employees Dropdown */}
//               <li className="cursor-pointer hover:text-gray-300">
//                 <div className="flex items-center justify-between" onClick={() => toggleDropdown("employees")}>
//                   <div className="flex items-center space-x-2">
//                     <FaUserTie />
//                     <span>Employees</span>
//                   </div>
//                   <FaChevronDown className={`transition-transform ${openDropdown === "employees" ? "rotate-180" : ""}`} />
//                 </div>
//                 {/* Child Pages */}
//                 {openDropdown === "employees" && (
//                   <ul className="ml-6 mt-2 space-y-2 text-sm">
//                     <li className="cursor-pointer hover:text-gray-400" onClick={() => navigateTo("/employees/list")}>Employee List</li>
//                     <li className="cursor-pointer hover:text-gray-400" onClick={() => navigateTo("/employees/add")}>Add Employee</li>
//                   </ul>
//                 )}
//               </li>

//               {/* Story Boards Dropdown */}
//               <li className="cursor-pointer hover:text-gray-300">
//                 <div className="flex items-center justify-between" onClick={() => toggleDropdown("storyBoards")}>
//                   <div className="flex items-center space-x-2">
//                     <FaBook />
//                     <span>Story Boards</span>
//                   </div>
//                   <FaChevronDown className={`transition-transform ${openDropdown === "storyBoards" ? "rotate-180" : ""}`} />
//                 </div>
//                 {/* Child Pages */}
//                 {openDropdown === "storyBoards" && (
//                   <ul className="ml-6 mt-2 space-y-2 text-sm">
//                     <li className="cursor-pointer hover:text-gray-400" onClick={() => navigateTo("/storyboards/all")}>All Stories</li>
//                     <li className="cursor-pointer hover:text-gray-400" onClick={() => navigateTo("/storyboards/create")}>Create Story</li>
//                   </ul>
//                 )}
//               </li>

//               {/* Other Links */}
//               <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-300" onClick={() => navigateTo("/investigations")}>
//                 <FaUserShield />
//                 <span>Investigations</span>
//               </li>
//               <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-300" onClick={() => navigateTo("/datasets")}>
//                 <FaDatabase />
//                 <span>Complimentary Datasets</span>
//               </li>
//               <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-300" onClick={() => navigateTo("/integrations")}>
//                 <FaPuzzlePiece />
//                 <span>Integrations</span>
//               </li>
//             </ul>

//             {/* Other Settings */}
//             <div className="border-t border-gray-700 mt-6 pt-4">
//               <p className="text-gray-400 text-sm mb-4">OTHER</p>
//               <ul className="space-y-4">
//                 <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-300" onClick={() => navigateTo("/settings")}>
//                   <FaCog />
//                   <span>Settings</span>
//                 </li>
//                 <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-300" onClick={() => navigateTo("/logout")}>
//                   <FaSignOutAlt />
//                   <span>Logout</span>
//                 </li>
//               </ul>
//             </div>
//           </>
//         )}
//       </div>

//       {/* Main Content */}
//       <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-80" : "ml-32"}`}>
//         <Navbar title="Dashboard" isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
//         <div className="mt-16">
//           <h2 className="text-black text-2xl font-bold">Dashboard Content</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


"use client";
import Navbar from "@/utils/navbar";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import Next.js router
import { 
  FaTachometerAlt, FaUserTie, FaBook, FaUserShield, FaDatabase, 
  FaPuzzlePiece, FaCog, FaSignOutAlt, FaChevronDown 
} from "react-icons/fa";

const Sidebar = () => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <div className="flex mt-10">
      {/* Sidebar */}
      <div className={`h-screen bg-[#036666] rounded-[24px] mt-3 ml-4 text-white p-5 flex flex-col fixed left-0 top-0 transition-all duration-300 
        ${isSidebarOpen ? "w-72" : "w-16"}
      `}>
        {/* Logo */}
        <h1 className={`text-lg font-bold mb-6 transition-all duration-300 ${isSidebarOpen ? "block" : "hidden"}`}>LOGO</h1>

        {/* Overview */}
        <p className={`text-gray-400 text-sm mb-4 transition-all duration-300 ${isSidebarOpen ? "block" : "hidden"}`}>OVERVIEW</p>

        <ul className="space-y-4">
          {/* Dashboard */}
          <li 
            className="flex items-center space-x-2 cursor-pointer hover:text-gray-300" 
            onClick={() => navigateTo("/dashboard")}
          >
            <FaTachometerAlt />
            <span className={`${isSidebarOpen ? "block" : "hidden"} transition-all duration-300`}>Dashboard</span>
          </li>

          {/* Employees Dropdown */}
          <li className="cursor-pointer hover:text-gray-300">
            <div className="flex items-center justify-between" onClick={() => toggleDropdown("employees")}>
              <div className="flex items-center space-x-2">
                <FaUserTie />
                <span className={`${isSidebarOpen ? "block" : "hidden"} transition-all duration-300`}>Employees</span>
              </div>
              {isSidebarOpen && (
                <FaChevronDown className={`transition-transform ${openDropdown === "employees" ? "rotate-180" : ""}`} />
              )}
            </div>
            {/* Child Pages */}
            {openDropdown === "employees" && isSidebarOpen && (
              <ul className="ml-6 mt-2 space-y-2 text-sm">
                <li className="cursor-pointer hover:text-gray-400" onClick={() => navigateTo("/employees/list")}>Employee List</li>
                <li className="cursor-pointer hover:text-gray-400" onClick={() => navigateTo("/employees/add")}>Add Employee</li>
              </ul>
            )}
          </li>

          {/* Story Boards Dropdown */}
          <li className="cursor-pointer hover:text-gray-300">
            <div className="flex items-center justify-between" onClick={() => toggleDropdown("storyBoards")}>
              <div className="flex items-center space-x-2">
                <FaBook />
                <span className={`${isSidebarOpen ? "block" : "hidden"} transition-all duration-300`}>Story Boards</span>
              </div>
              {isSidebarOpen && (
                <FaChevronDown className={`transition-transform ${openDropdown === "storyBoards" ? "rotate-180" : ""}`} />
              )}
            </div>
            {/* Child Pages */}
            {openDropdown === "storyBoards" && isSidebarOpen && (
              <ul className="ml-6 mt-2 space-y-2 text-sm">
                <li className="cursor-pointer hover:text-gray-400" onClick={() => navigateTo("/storyboards/all")}>All Stories</li>
                <li className="cursor-pointer hover:text-gray-400" onClick={() => navigateTo("/storyboards/create")}>Create Story</li>
              </ul>
            )}
          </li>

          {/* Other Links */}
          <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-300" onClick={() => navigateTo("/investigations")}>
            <FaUserShield />
            <span className={`${isSidebarOpen ? "block" : "hidden"} transition-all duration-300`}>Investigations</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-300" onClick={() => navigateTo("/datasets")}>
            <FaDatabase />
            <span className={`${isSidebarOpen ? "block" : "hidden"} transition-all duration-300`}>Complimentary Datasets</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-300" onClick={() => navigateTo("/integrations")}>
            <FaPuzzlePiece />
            <span className={`${isSidebarOpen ? "block" : "hidden"} transition-all duration-300`}>Integrations</span>
          </li>
        </ul>

        {/* Other Settings */}
        <div className="border-t border-gray-700 mt-6 pt-4">
          <p className={`text-gray-400 text-sm mb-4 transition-all duration-300 ${isSidebarOpen ? "block" : "hidden"}`}>OTHER</p>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-300" onClick={() => navigateTo("/settings")}>
              <FaCog />
              <span className={`${isSidebarOpen ? "block" : "hidden"} transition-all duration-300`}>Settings</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-300" onClick={() => navigateTo("/logout")}>
              <FaSignOutAlt />
              <span className={`${isSidebarOpen ? "block" : "hidden"} transition-all duration-300`}>Logout</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-[340px]" : "ml-28"}`}>
        <Navbar title="Dashboard" isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <div className="mt-16">
          <h2 className="text-black text-2xl font-bold">Dashboard Content</h2>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
