// "use client";

// import { Button } from "@/src/utils/button";
// import { useState } from "react";

// export default function IntegrationsPage() {
//   // Sample data for the integration items
//   const handleDescriptionChange = (id, value) => {
//     setItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id ? { ...item, description: value } : item
//       )
//     );
//   };
//   const [items, setItems] = useState([
//     {
//       id: 1,
//       title: "Lorem ipsum is simply dummy",
//       description:
//         "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
//       checked: true,
//     },
//     {
//       id: 2,
//       title: "Lorem ipsum is simply dummy",
//       description:
//         "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
//       checked: false,
//     },
//     {
//       id: 3,
//       title: "Lorem ipsum is simply dummy",
//       description:
//         "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
//       checked: false,
//     },
//   ]);

//   // Current page state for pagination
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = 7;

//   // Toggle checkbox state
//   const toggleCheckbox = (id) => {
//     setItems(
//       items.map((item) => {
//         if (item.id === id) {
//           return { ...item, checked: !item.checked };
//         }
//         return item;
//       })
//     );
//   };

//   return (
//     <div className="w-full  p-1 bg-white rounded-large">
//       {/* Header */}
//       <div className="flex flex-col items-center mb-8">
//         <h1 className="text-2xl font-semibold text-center mb-2">
//           Integrations
//         </h1>
//         <p className="text-center text-gray-600 max-w-md">
//           Uncheck the tables that you do not want to include in analysis.
//         </p>
//         <div className="relative w-full max-w-md">
//           <div className="bg-black absolute top-8  w-full h-[2px] bg-gray-400 -translate-y-1/2"></div>
//           <div className="flex justify-between relative">
//             <div className="flex flex-col items-center">
//               <div className="w-14 h-14 rounded-full bg-[#D9D9D9] flex items-center justify-center text-[#036666] font-medium z-10 relative">
//                 01
//               </div>
//               <span className="mt-2 text-sm">Step</span>
//             </div>

//             <div className="flex flex-col items-center">
//               <div className="w-14 h-14 rounded-full bg-teal-700 flex items-center justify-center text-white font-medium z-10 relative">
//                 02
//               </div>

//               <span className="mt-2 text-sm text-black">Step</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Step Indicator */}

//       {/* Integration Items */}
//       <div className="space-y-4 mb-8">
//         {items.map((item) => (
//           <div
//             key={item.id}
//             className="shadow-md rounded-large border-gray-100  overflow-hidden"
//           >
//             {/* Item header with checkbox, title, and right label */}
//             <div className="flex p-4 bg-gray-50 ">
//               <div className="mr-4 pt-1">
//                 <div
//                   className="relative w-5 h-5 cursor-pointer"
//                   onClick={() => toggleCheckbox(item.id)}
//                 >
//                   <input
//                     type="checkbox"
//                     checked={item.checked}
//                     onChange={() => {}}
//                     className="appearance-none w-5 h-5 mb-4  border border-gray-300 rounded checked:bg-[#00696B] checked:border-transparent"
//                   />
//                   {item.checked && (
//                     <svg
//                       className="absolute inset-0 w-5 h-5 text-white pointer-events-none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <polyline points="20 6 9 17 4 12"></polyline>
//                     </svg>
//                   )}
//                 </div>
//               </div>
//               <div className="flex-1">
//                 <div className="flex justify-between">
//                   <h3 className="text-sm mt-1 mr-3 font-medium text-gray-800">
//                     {item.title}
//                   </h3>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gray-50 rounded p-2">
//               <input
//                 type="text"
//                 className="h-[40px] w-full border border-[#EBF0ED] rounded-large bg-primary px-3 pr-10 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
//                 value={item.description || ""}
//                 onChange={(e) =>
//                   handleDescriptionChange(item.id, e.target.value)
//                 }
//                 placeholder="Enter description..."
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-end space-x-3 items-center mt-3">
//         <Button className="bg-white !text-black">Cancel</Button>

//         <Button>Saved</Button>
//       </div>
//     </div>
//   );
// }
import React from 'react'

const page = () => {
  return (
    <div>
      
    </div>
  )
}

export default page