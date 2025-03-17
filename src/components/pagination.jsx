// "use client"
// import React, { useState } from 'react'
// import { LiaEditSolid } from "react-icons/lia";
// import { AiTwotoneDelete } from "react-icons/ai";
// import { FaRegEyeSlash } from "react-icons/fa6";
// import { FaRegEye } from "react-icons/fa6";

// const Pagination = ({ data, columns }) => {
//   const [currentPage, setCurrentPage] = useState(1)
//   const [itemsPerPage, setItemsPerPage] = useState(10)

//   const totalPages = Math.ceil(data.length / itemsPerPage)
//   const indexOfLastItem = currentPage * itemsPerPage
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage
//   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

//   // Pagination handlers
//   const goToPage = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page)
//     }
//   }

//   const handleItemsPerPageChange = (e) => {
//     setItemsPerPage(e.target.value)
//     setCurrentPage(1) // Reset to first page when changing items per page
//   }
//   return (
//     <div className="flex flex-col gap-4">
//       {/* Table with horizontal and vertical scrolling */}
//       <div className="rounded-large border border-secondary">
//         <div className="overflow-x-auto">
//           <div className="overflow-y-auto ">
//             <table className="w-full min-w-max table-auto">
//               <thead className="sticky top-0">
//                 <tr className="border-b border-gray-200">
//                   {columns.map((column) => (
//                     <th
//                       key={column.key}
//                       className="whitespace-nowrap border-r border-gray-200 px-4 py-3 text-left font-medium text-gray-600 last:border-r-0"
//                     >
//                       {column.label}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {currentItems.map((row, rowIndex) => (
//                   <tr
//                     key={row.id}
//                     className={`border-b border-secondary transition-colors hover:bg-gray-50 ${rowIndex === currentItems.length - 1 ? "border-b-0" : ""
//                       }`}
//                   >
//                     {columns.map((column) => (
//                       <td
//                         key={`${row.id}-${column.key}`}
//                         className="border-r border-secondary px-normal py-2 last:border-r-0"
//                       >
//                         {column.key === "id" ? rowIndex + 1 : column.key === "actions" ? (
//                           <td className="px-normal py-normal space-x-5">
//                             <button onClick={() => toggleRow(item.id)} className="text-gray-600 hover:text-gray-800">
//                               <FaRegEyeSlash className="w-5 h-5" />
//                             </button>
//                             <button className="text-gray-600 hover:text-gray-800">
//                               <LiaEditSolid className="w-5 h-5" />
//                             </button>
//                             <button className="text-gray-600 hover:text-gray-800">
//                               <AiTwotoneDelete className="w-5 h-5" />
//                             </button>
//                           </td>
//                         ) : row[column.key]}
//                       </td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       {/* Pagination controls */}
//       <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
//         <div className="flex items-center gap-2 text-sm text-gray-600">
//           <span>
//             {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, data.length)} of {data.length} items
//           </span>
//         </div>

//         <div className="flex items-center gap-1">
//           <button
//             className={`h-8 w-8 rounded-md border border-gray-300 flex items-center justify-center ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
//               }`}
//             onClick={() => goToPage(1)}
//             disabled={currentPage === 1}
//           >
//             <span className="sr-only">First page</span>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="16"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <polyline points="11 17 6 12 11 7"></polyline>
//               <polyline points="18 17 13 12 18 7"></polyline>
//             </svg>
//           </button>
//           <button
//             className={`h-8 w-8 rounded-md border border-gray-300 flex items-center justify-center ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
//               }`}
//             onClick={() => goToPage(currentPage - 1)}
//             disabled={currentPage === 1}
//           >
//             <span className="sr-only">Previous page</span>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="16"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <polyline points="15 18 9 12 15 6"></polyline>
//             </svg>
//           </button>

//           <div className="flex items-center gap-1 px-1">
//             {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
//               let pageNum

//               if (totalPages <= 5) {
//                 // If we have 5 or fewer pages, show all page numbers
//                 pageNum = i + 1
//               } else if (currentPage <= 3) {
//                 // If we're near the start, show pages 1-5
//                 pageNum = i + 1
//               } else if (currentPage >= totalPages - 2) {
//                 // If we're near the end, show the last 5 pages
//                 pageNum = totalPages - 4 + i
//               } else {
//                 // Otherwise show 2 pages before and 2 pages after the current page
//                 pageNum = currentPage - 2 + i
//               }

//               return (
//                 <button
//                   key={pageNum}
//                   className={`h-8 w-8 rounded-md border ${currentPage === pageNum
//                     ? "bg-secondary text-white"
//                     : "hover:bg-Quinary hover:text-white"
//                     }`}
//                   onClick={() => goToPage(pageNum)}
//                 >
//                   {pageNum}
//                 </button>
//               )
//             })}
//           </div>

//           <button
//             className={`h-8 w-8 rounded-md border border-secondary flex items-center justify-center ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
//               }`}
//             onClick={() => goToPage(currentPage + 1)}
//             disabled={currentPage === totalPages}
//           >
//             <span className="sr-only">Next page</span>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="16"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <polyline points="9 18 15 12 9 6"></polyline>
//             </svg>
//           </button>
//           <button
//             className={`h-8 w-8 rounded-md border border-gray-300 flex items-center justify-center ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
//               }`}
//             onClick={() => goToPage(totalPages)}
//             disabled={currentPage === totalPages}
//           >
//             <span className="sr-only">Last page</span>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="16"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <polyline points="13 17 18 12 13 7"></polyline>
//               <polyline points="6 17 11 12 6 7"></polyline>
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Pagination


"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye } from "lucide-react"
import { Button } from "../utils/button"

const Pagination = ({data,columns,page}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(data.length / itemsPerPage)

  // Generate page numbers for pagination
  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="w-full bg-white rounded-lg shadow-md mt-normal">
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b">
              {columns.map((column,index)=>(
                <th key={index} className="px-4 py-3 text-left font-semibold text-gray-600 whitespace-nowrap">{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((storyboard,index) => (
              <tr key={storyboard.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3 font-medium whitespace-nowrap">{index+1}</td>
                <td className="px-4 py-3 whitespace-nowrap">{storyboard.storyBoardName}</td>
                <td className="px-4 py-3 whitespace-nowrap">{new Date(storyboard.createdAt).toLocaleDateString()}</td>
                <td className="px-4 py-3 whitespace-nowrap">{storyboard.status == "1" ? "Active" : "InActive"}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <Link
                    href={`/dashboard/storyBoard/${storyboard._id}`}
                    className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-center mt-6">
        <nav className="flex items-center space-x-1">
          <Button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-3 py-1.5 rounded-md ${currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            Previous
          </Button>

          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={`px-3 py-1.5 rounded-md ${currentPage === number ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              {number}
            </button>
          ))}

          <Button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-3 py-1.5 rounded-md ${currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            Next
          </Button>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
