// import React from "react";
// import Link from "next/link";
// import { Eye } from "lucide-react";
// import { BsGraphUpArrow } from "react-icons/bs";
// import { LiaEditSolid } from "react-icons/lia";

// const StoryBoardData = ({ columns, currentItems, indexOfFirstItem }) => {
//   return (
//     <table className="w-full border-collapse">
//       <thead>
//         <tr className="bg-gray-50 border-b">
//           {columns.map((column, index) => (
//             <th
//               key={index}
//               className="px-4 py-3 text-left font-semibold text-gray-600 whitespace-nowrap"
//             >
//               {column}
//             </th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {currentItems.map((storyboard, index) => (
//           <tr key={storyboard.id} className="border-b hover:bg-gray-50">
//             <td className="px-4 py-3 font-medium whitespace-nowrap">
//               {indexOfFirstItem + index + 1}
//             </td>
//             <td className="px-4 py-3 whitespace-nowrap">
//               {storyboard.storyBoardName}
//             </td>
//             <td className="px-4 py-3 whitespace-nowrap">
//               {new Date(storyboard.createdAt).toLocaleDateString()}
//             </td>
//             <td className="px-4 py-3 whitespace-nowrap">
//               {storyboard.status == "1" ? "Active" : "InActive"}
//             </td>
//             <td className="px-4 py-3 whitespace-nowrap">
//               <button>
//                 <Eye className="h-4 w-4 mr-2" />
//               </button>
//               <button className="text-gray-600 hover:text-gray-800">
//                 <LiaEditSolid className="w-5 h-5" />
//               </button>

//               <Link
//                 href={`/dashboard/storyBoard/${storyboard._id}`}
//                 className="inline-flex items-center "
//               >
//                 <BsGraphUpArrow className="h-4 w-4 mr-2" />
//               </Link>

//               {/* <button onClick={() => toggleViewRow(indexOfFirstItem + index + 1)} className="text-gray-600 hover:text-gray-800">
//                                                                 {expandedViewRow === (indexOfFirstItem + index + 1) ?
//                                                                     <FaRegEye className="w-5 h-5" /> : <FaRegEyeSlash className="w-5 h-5" />}
//                                                             </button> */}
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default StoryBoardData;


// import React, { useState } from "react";
// import Link from "next/link";
// import { Eye } from "lucide-react";
// import { BsGraphUpArrow } from "react-icons/bs";
// import { LiaEditSolid } from "react-icons/lia";
// import StoryBoard from "./storyInfo";

// const StoryBoardData = ({ columns, currentItems, indexOfFirstItem }) => {
//   const [expandedRow, setExpandedRow] = useState(null);

//   const toggleRow = (id) => {
//     setExpandedRow(expandedRow === id ? null : id);
//   };

//   return (
//     <table className="w-full border-collapse">
//       <thead>
//         <tr className="bg-gray-50 border-b">
//           {columns.map((column, index) => (
//             <th
//               key={index}
//               className="px-4 py-3 text-left font-semibold text-gray-600 whitespace-nowrap"
//             >
//               {column}
//             </th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {currentItems.map((storyboard, index) => (
//           <React.Fragment key={storyboard.id}>
//             <tr className="border-b hover:bg-gray-50">
//               <td className="px-4 py-3 font-medium whitespace-nowrap">
//                 {indexOfFirstItem + index + 1}
//               </td>
//               <td className="px-4 py-3 whitespace-nowrap">
//                 {storyboard.storyBoardName}
//               </td>
//               <td className="px-4 py-3 whitespace-nowrap">
//                 {new Date(storyboard.createdAt).toLocaleDateString()}
//               </td>
//               <td className="px-4 py-3 whitespace-nowrap">
//                 {storyboard.status == "1" ? "Active" : "InActive"}
//               </td>
//               <td className="px-4 py-3 whitespace-nowrap">
//                 <button onClick={() => toggleRow(storyboard.id)}>
//                   <Eye className="h-4 w-4 mr-2" />
//                 </button>
//                 <button className="text-gray-600 hover:text-gray-800">
//                   <LiaEditSolid className="w-5 h-5" />
//                 </button>
//                 <Link
//                   href={`/dashboard/storyBoard/${storyboard._id}`}
//                   className="inline-flex items-center "
//                 >
//                   <BsGraphUpArrow className="h-4 w-4 mr-2" />
//                 </Link>
//               </td>
//             </tr>
//             {expandedRow === storyboard.id && (
//               <tr>
//                 <td colSpan={columns.length} className="bg-gray-100 p-4">
//                   {/* Yahan jo bhi component render karwana hai, wo likhein */}
//                   <StoryBoard/>
//                   <div className="p-4 bg-white shadow-md rounded-md">
//                     <h3 className="text-lg font-semibold">Details:</h3>
//                     <p><strong>ID:</strong> {storyboard.id}</p>
//                     <p><strong>Name:</strong> {storyboard.storyBoardName}</p>
//                     <p><strong>Status:</strong> {storyboard.status === "1" ? "Active" : "Inactive"}</p>
//                   </div>
//                 </td>
//               </tr>
//             )}
//           </React.Fragment>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default StoryBoardData;



import React, { useState } from "react";
import Link from "next/link";
import { Eye } from "lucide-react";
import { BsGraphUpArrow } from "react-icons/bs";
import { LiaEditSolid } from "react-icons/lia";
import StoryBoard from "./storyInfo";

const StoryBoardData = ({ columns, currentItems, indexOfFirstItem }) => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [activeComponent, setActiveComponent] = useState(null);

  const toggleRow = (id, component) => {
    if (expandedRow === id && activeComponent === component) {
      setExpandedRow(null); // Close row if clicking again
      setActiveComponent(null);
    } else {
      setExpandedRow(id);
      setActiveComponent(component);
    }
  };

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-50 border-b">
          {columns.map((column, index) => (
            <th
              key={index}
              className="px-4 py-3 text-left font-semibold text-gray-600 whitespace-nowrap"
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {currentItems.map((storyboard, index) => (
          <React.Fragment key={storyboard.id}>
            <tr className="border-b hover:bg-gray-50">
              <td className="px-4 py-3 font-medium whitespace-nowrap">
                {indexOfFirstItem + index + 1}
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                {storyboard.storyBoardName}
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                {new Date(storyboard.createdAt).toLocaleDateString()}
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                {storyboard.status == "1" ? "Active" : "InActive"}
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                {/* 👁 Eye Button for StoryBoard */}
                <button
                  className="mr-2"
                  onClick={() => toggleRow(storyboard.id, "story")}
                >
                  <Eye className="h-4 w-4" />
                </button>

                {/* ✏ Edit Button for EditStoryBoard */}
                <button
                  className="text-gray-600 hover:text-gray-800"
                  onClick={() => toggleRow(storyboard.id, "edit")}
                >
                  <LiaEditSolid className="w-5 h-5" />
                </button>

                <Link
                  href={`/dashboard/storyBoard/${storyboard._id}`}
                  className="inline-flex items-center "
                >
                  <BsGraphUpArrow className="h-4 w-4 ml-2" />
                </Link>
              </td>
            </tr>

            {/* Component Render Condition */}
            {expandedRow === storyboard.id && (
              <tr>
                <td colSpan={columns.length} className="bg-gray-100 p-4">
                  {activeComponent === "story" && <StoryBoard />}
                  {activeComponent === "edit" && <EditStoryBoard storyboard={storyboard} />}
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default StoryBoardData;
