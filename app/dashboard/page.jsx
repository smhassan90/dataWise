"use client";
import Navbar from '@/utils/navbar';
import Sidebar from '@/utils/sidebar';
// import React, { useState } from "react";

// const App = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <div
//       className={`flex flex-col items-center justify-center h-screen ${
//         isModalOpen ? "bg-[#D9D9D980]" : "bg-gray-100"
//       }`}
//     >
//       {/* Open Modal Button */}
//       <button
//         className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800"
//         onClick={() => setIsModalOpen(true)}
//       >
//         Open Add Story Modal
//       </button>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
//           <div
//             className="bg-white rounded-lg p-6 shadow-lg"
//             style={{
//               width: "640px",
//               height: "660px",
//               position: "absolute",
//               top: "270px",
//               left: "666.5px",
//             }}
//           >
//             {/* Header */}
//             <div className="flex justify-between items-center border-b pb-3">
//               <h2
//                 style={{
//                   width: "129px",
//                   height: "32px",
//                   fontFamily: "Poppins, sans-serif",
//                   fontWeight: "500",
//                   fontSize: "22px",
//                   lineHeight: "33px",
//                   letterSpacing: "0%",
//                   color: "black",
//                   padding: "5px 10px",
//                   borderRadius: "5px",
//                 }}
//               >
//                 Add A Story
//               </h2>
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 style={{
//                   width: "24px",
//                   height: "24px",
//                   borderRadius: "29px",
//                   padding: "4px",
//                   background: "#E5E5E5",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   fontSize: "18px",
//                   fontWeight: "bold",
//                   cursor: "pointer",
//                 }}
//               >
//                 &times;
//               </button>
//             </div>

//             {/* Input Fields */}
//             <div className="mt-4">
//               <input
//                 type="text"
//                 placeholder="Story Board Name"
//                 className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
//               />
//               <input
//                 type="text"
//                 placeholder="Description"
//                 className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
//               />
//               <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
//                 <option>Select an option</option>
//                 <option>Option 1</option>
//                 <option>Option 2</option>
//               </select>
//             </div>

//             {/* Buttons */}
//             <div className="mt-6 flex justify-between">
//               <button
//                 className="px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-100"
//                 onClick={() => setIsModalOpen(false)}
//               >
//                 Cancel
//               </button>
//               <button className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-900">
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

import React from 'react'

export const dashboard = () => {
  return (
    <div>
        <Sidebar/>
    </div>
  )
}
export default dashboard;
