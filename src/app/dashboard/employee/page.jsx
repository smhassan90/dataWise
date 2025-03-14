

// // // // "use client"

// // // // import { useState } from "react"
// // // // import { ChevronLeft, ChevronRight, Edit, Eye, Trash2 } from "lucide-react"
// // // // import { Button } from "@/src/utils/button"
// // // // import Pagination from "@/src/components/pagination"

// // // // const tableData = [
// // // //   { id: "#1124492", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// // // //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// // // //   { id: "#W76909", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// // // //   { id: "#L243412", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// // // //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// // // //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// // // //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// // // //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// // // //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// // // //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// // // //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// // // //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// // // //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// // // //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// // // //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// // // //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// // // //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// // // //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// // // //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// // // //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// // // //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// // // //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// // // //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// // // //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// // // //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// // // //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// // // //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// // // //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// // // // ]

// // // // const entryOptions = [10, 25, 50, 100]

// // // // export default function DataTable() {
// // // //   const [entriesPerPage, setEntriesPerPage] = useState(25)
// // // //   const [currentPage, setCurrentPage] = useState(1)
// // // //   const [selectedRows, setSelectedRows] = useState([])
// // // //   const [selectAll, setSelectAll] = useState(false)

// // // //   const totalPages = Math.ceil(tableData.length / entriesPerPage)
// // // //   const indexOfLastEntry = currentPage * entriesPerPage
// // // //   const indexOfFirstEntry = indexOfLastEntry - entriesPerPage
// // // //   const currentEntries = tableData.slice(indexOfFirstEntry, indexOfLastEntry)

// // // //   const handlePageChange = (pageNumber) => {
// // // //     setCurrentPage(pageNumber)
// // // //   }

// // // //   const handleEntriesChange = (e) => {
// // // //     setEntriesPerPage(Number(e.target.value))
// // // //     setCurrentPage(1)
// // // //   }

// // // //   const handleSelectRow = (rowId) => {
// // // //     setSelectedRows((prev) => prev.includes(rowId) ? prev.filter((id) => id !== rowId) : [...prev, rowId])
// // // //   }

// // // //   const handleSelectAll = () => {
// // // //     if (selectAll) {
// // // //       setSelectedRows([])
// // // //     } else {
// // // //       setSelectedRows(currentEntries.map((item) => item.id))
// // // //     }
// // // //     setSelectAll(!selectAll)
// // // //   }

// // // //   return (
// // // //       <div className="w-full mx-auto p-normal bg-gray-50 rounded-large">
// // // //         <div className="flex justify-between items-center mb-normal">
// // // //           <div className="flex items-center space-x-2">
// // // //             <span className="text-sm text-gray-600">SHOW</span>
// // // //             <select value={entriesPerPage} onChange={handleEntriesChange} className="border border-secondary rounded-large px-2 py-1 text-sm bg-white">
// // // //               {entryOptions.map((option) => (
// // // //                 <option className="rounded-large w-40 hover:bg-secondary !bg-red " key={option} value={option}>{option}</option>
// // // //               ))}
// // // //             </select>
// // // //             <span className="text-sm text-gray-600">ENTRIES</span>
// // // //           </div>
// // // //           <Button>Filters</Button>
// // // //         </div>

// // // //         <div className="bg-white rounded-large shadow-md overflow-hidden">
// // // //           <div className="overflow-x-auto">
// // // //             <table className="w-full">
// // // //               <thead>
// // // //                 <tr className="bg-gray-50 border border-[#EBF0ED] text-left">
// // // //                   <th className="px-normal py-normal w-10">
// // // //                     <input type="checkbox" checked={selectAll} onChange={handleSelectAll} className="h-4 w-4 rounded-large text-secondary focus:ring-secondary" />
// // // //                   </th>
// // // //                   <th className="px-normal py-normal text-xs font-medium text-gray-500 uppercase tracking-wider">First Name </th>
// // // //                   <th className="px-normal py-normal text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
// // // //                   <th className="px-normal py-normal text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
// // // //                   <th className="px-normal py-normal text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
// // // //                   <th className="px-normal py-normal text-xs font-medium text-gray-500 uppercase tracking-wider">ACTIONS</th>
// // // //                 </tr>
// // // //               </thead>
// // // //               <tbody className="divide-y divide-[#EBF0ED]">
// // // //                 {currentEntries.map((item) => (
// // // //                   <tr key={item.id} className="hover:bg-gray-50">
// // // //                     <td className="px-normal py-normal">
// // // //                       <input type="checkbox" checked={selectedRows.includes(item.id)} onChange={() => handleSelectRow(item.id)} className="h-4 w-4 rounded-large text-secondary focus:ring-secondary" />
// // // //                     </td>
// // // //                     <td className="px-normal py-normal text-sm text-gray-900">{item.id}</td>
// // // //                     <td className="px-normal py-normal text-sm text-gray-900">{item.storyName}</td>
// // // //                     <td className="px-normal py-normal text-sm text-gray-900">{item.storyInfo}</td>
// // // //                     <td className="px-normal py-normal text-sm text-gray-900">{item.connectedDeployment}</td>
// // // //                     <td className="px-normal py-normal text-sm text-gray-500">
// // // //                       <div className="flex space-x-3">
// // // //                         <button className="text-gray-600"><Edit size={16} /></button>
// // // //                         <button className="text-gray-600"><Eye size={16} /></button>
// // // //                         <button className="text-gray-600"><Trash2 size={16} /></button>
// // // //                       </div>
// // // //                     </td>
// // // //                   </tr>
// // // //                 ))}
// // // //               </tbody>
// // // //             </table>
// // // //           </div>

// // // //         <div className="px-normal py-normal rounded-large flex items-center justify-between border-t border-[#EBF0ED]">
// // // //           <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }

// // // "use client"

// // // import { useState } from "react"
// // // import { ChevronLeft, ChevronRight } from "lucide-react"
// // // import { Button } from "@/src/utils/button"
// // // import Pagination from "@/src/components/pagination"
// // // import TableRow from "@/src/components/TableRow"

// // // const tableData = [
// // //   { id: "#1124492", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// // //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// // //   { id: "#W76909", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// // // ]

// // // const entryOptions = [10, 25, 50, 100]

// // // export default function DataTable() {
// // //   const [entriesPerPage, setEntriesPerPage] = useState(25)
// // //   const [currentPage, setCurrentPage] = useState(1)
// // //   const [selectedRows, setSelectedRows] = useState([])
// // //   const [selectAll, setSelectAll] = useState(false)

// // //   const totalPages = Math.ceil(tableData.length / entriesPerPage)
// // //   const indexOfLastEntry = currentPage * entriesPerPage
// // //   const indexOfFirstEntry = indexOfLastEntry - entriesPerPage
// // //   const currentEntries = tableData.slice(indexOfFirstEntry, indexOfLastEntry)

// // //   const handlePageChange = (pageNumber) => setCurrentPage(pageNumber)
// // //   const handleEntriesChange = (e) => {
// // //     setEntriesPerPage(Number(e.target.value))
// // //     setCurrentPage(1)
// // //   }
// // //   const handleSelectRow = (rowId) => {
// // //     setSelectedRows((prev) => prev.includes(rowId) ? prev.filter((id) => id !== rowId) : [...prev, rowId])
// // //   }
// // //   const handleSelectAll = () => {
// // //     if (selectAll) {
// // //       setSelectedRows([])
// // //     } else {
// // //       setSelectedRows(currentEntries.map((item) => item.id))
// // //     }
// // //     setSelectAll(!selectAll)
// // //   }

// // //   return (
// // //     <div className="w-full mx-auto p-normal bg-gray-50 rounded-large">
// // //       <div className="flex justify-between items-center mb-normal">
// // //         <div className="flex items-center space-x-2">
// // //           <span className="text-sm text-gray-600">SHOW</span>
// // //           <select value={entriesPerPage} onChange={handleEntriesChange} className="border border-secondary rounded-large px-2 py-1 text-sm bg-white">
// // //             {entryOptions.map((option) => (
// // //               <option key={option} value={option}>{option}</option>
// // //             ))}
// // //           </select>
// // //           <span className="text-sm text-gray-600">ENTRIES</span>
// // //         </div>
// // //         <Button>Filters</Button>
// // //       </div>

// // //       <div className="bg-white rounded-large shadow-md overflow-hidden">
// // //         <div className="overflow-x-auto">
// // //           <table className="w-full">
// // //             <thead>
// // //               <tr className="bg-gray-50 border border-[#EBF0ED] text-left">
// // //                 <th className="px-normal py-normal w-10">
// // //                   <input type="checkbox" checked={selectAll} onChange={handleSelectAll} className="h-4 w-4 rounded-large text-secondary focus:ring-secondary" />
// // //                 </th>
// // //                 <th className="px-normal py-normal text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
// // //                 <th className="px-normal py-normal text-xs font-medium text-gray-500 uppercase tracking-wider">Story Name</th>
// // //                 <th className="px-normal py-normal text-xs font-medium text-gray-500 uppercase tracking-wider">Story Info</th>
// // //                 <th className="px-normal py-normal text-xs font-medium text-gray-500 uppercase tracking-wider">Connected Deployment</th>
// // //                 <th className="px-normal py-normal text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody className="divide-y divide-[#EBF0ED]">
// // //               {currentEntries.map((item) => (
// // //                 <TableRow key={item.id} item={item} selectedRows={selectedRows} handleSelectRow={handleSelectRow} />
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //         </div>

// // //         <div className="px-normal py-normal rounded-large flex items-center justify-between border-t border-[#EBF0ED]">
// // //           <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }


// // "use client"
// // import React from "react"
// // import { useState } from "react"
// // import { Eye } from "lucide-react"
// // import { Button } from "@/src/utils/button"
// // import Pagination from "@/src/components/pagination"
// // const tableData = [
// //   { id: "#1124492", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// //   { id: "#W76909", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// // ]

// // const entryOptions = [10, 25, 50, 100]

// // export default function DataTable() {
// //   const [entriesPerPage, setEntriesPerPage] = useState(25)
// //   const [currentPage, setCurrentPage] = useState(1)
// //   const [expandedRow, setExpandedRow] = useState(null) // Track expanded row

// //   const totalPages = Math.ceil(tableData.length / entriesPerPage)
// //   const indexOfLastEntry = currentPage * entriesPerPage
// //   const indexOfFirstEntry = indexOfLastEntry - entriesPerPage
// //   const currentEntries = tableData.slice(indexOfFirstEntry, indexOfLastEntry)

// //   const handlePageChange = (pageNumber) => setCurrentPage(pageNumber)
// //   const handleEntriesChange = (e) => {
// //     setEntriesPerPage(Number(e.target.value))
// //     setCurrentPage(1)
// //   }

// //   const toggleRow = (rowId) => {
// //     setExpandedRow(expandedRow === rowId ? null : rowId)
// //   }

// //   return (
// //     <div className="w-full mx-auto p-4 bg-gray-50 rounded-lg">
// //       <div className="flex justify-between items-center mb-4">
// //         <div className="flex items-center space-x-2">
// //           <span className="text-sm text-gray-600">SHOW</span>
// //           <select value={entriesPerPage} onChange={handleEntriesChange} className="border border-gray-300 rounded-lg px-2 py-1 text-sm bg-white">
// //             {entryOptions.map((option) => (
// //               <option key={option} value={option}>{option}</option>
// //             ))}
// //           </select>
// //           <span className="text-sm text-gray-600">ENTRIES</span>
// //         </div>
// //         <Button>Filters</Button>
// //       </div>

// //       <div className="bg-white rounded-lg shadow-md overflow-hidden">
// //         <div className="overflow-x-auto">
// //           <table className="w-full">
// //             <thead>
// //               <tr className="bg-gray-100 border text-left">
// //                 <th className="px-4 py-3">ID</th>
// //                 <th className="px-4 py-3">Story Name</th>
// //                 <th className="px-4 py-3">Story Info</th>
// //                 <th className="px-4 py-3">Connected Deployment</th>
// //                 <th className="px-4 py-3">Actions</th>
// //               </tr>
// //             </thead>
// //             <tbody className="divide-y">
// //               {currentEntries.map((item) => (
// //                 <React.Fragment key={item.id}>
// //                   <tr className="border-b">
// //                     <td className="px-4 py-3">{item.id}</td>
// //                     <td className="px-4 py-3">{item.storyName}</td>
// //                     <td className="px-4 py-3">{item.storyInfo}</td>
// //                     <td className="px-4 py-3">{item.connectedDeployment}</td>
// //                     <td className="px-4 py-3">
// //                       <button onClick={() => toggleRow(item.id)} className="text-gray-600 hover:text-gray-800">
// //                         <Eye className="w-5 h-5" />
// //                       </button>
// //                     </td>
// //                   </tr>
// //                   {expandedRow === item.id && (
// //                     <tr className="bg-gray-50">
// //                       <td colSpan="5" className="px-4 py-3">
// //                         <div className="p-4 border border-gray-300 rounded-lg">
// //                           <p className="text-sm text-gray-700">
// //                             <strong>More Details:</strong> This is additional information for {item.storyName}.
// //                           </p>
// //                         </div>
// //                       </td>
// //                     </tr>
// //                   )}
// //                 </React.Fragment>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>

// //         <div className="px-4 py-3 flex items-center justify-between border-t border-gray-200">
// //           <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }


// // // import React from 'react'

// // // const page = () => {
// // //   return (
// // //     <div>page</div>
// // //   )
// // // }

// // // export default page



// "use client"
// import React from "react"

// import { useState } from "react"
// import { Eye } from "lucide-react"
// import { Button } from "@/src/utils/button"
// import Pagination from "@/src/components/pagination"

// const tableData = [
//   { id: "#1124492", storyName: "User 1", storyInfo: "Info 1", connectedDeployment: "Deployment 1", details: "This is user 1's additional information." },
//   { id: "#PP98097", storyName: "User 2", storyInfo: "Info 2", connectedDeployment: "Deployment 2", details: "This is user 2's additional information." },
//   { id: "#W76909", storyName: "User 3", storyInfo: "Info 3", connectedDeployment: "Deployment 3", details: "This is user 3's additional information." },
// ]

// const entryOptions = [10, 25, 50, 100]

// export default function DataTable() {
//   const [entriesPerPage, setEntriesPerPage] = useState(25)
//   const [currentPage, setCurrentPage] = useState(1)
//   const [expandedRow, setExpandedRow] = useState(null)

//   const totalPages = Math.ceil(tableData.length / entriesPerPage)
//   const currentEntries = tableData.slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage)

//   const handlePageChange = (pageNumber) => setCurrentPage(pageNumber)
//   const handleEntriesChange = (e) => {
//     setEntriesPerPage(Number(e.target.value))
//     setCurrentPage(1)
//   }

//   const toggleRow = (rowId) => {
//     setExpandedRow(expandedRow === rowId ? null : rowId)
//   }

//   return (
//     <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
//       <div className="flex justify-between items-center mb-4">
//         <div className="flex items-center space-x-2">
//           <span className="text-sm text-gray-600">SHOW</span>
//           <select value={entriesPerPage} onChange={handleEntriesChange} className="border border-gray-300 rounded-lg px-3 py-1 text-sm bg-white shadow-sm">
//             {entryOptions.map((option) => (
//               <option key={option} value={option}>{option}</option>
//             ))}
//           </select>
//           <span className="text-sm text-gray-600">ENTRIES</span>
//         </div>
//         <Button>Filters</Button>
//       </div>

//       <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="bg-gray-200 text-gray-700 text-left">
//                 <th className="px-6 py-3">ID</th>
//                 <th className="px-6 py-3">Story Name</th>
//                 <th className="px-6 py-3">Story Info</th>
//                 <th className="px-6 py-3">Connected Deployment</th>
//                 <th className="px-6 py-3">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y">
//               {currentEntries.map((item) => (
//                 <>
//                   <tr key={item.id} className="border-b hover:bg-gray-100 transition duration-300">
//                     <td className="px-6 py-3">{item.id}</td>
//                     <td className="px-normal py-3">{item.storyName}</td>
//                     <td className="px-6 py-3">{item.storyInfo}</td>
//                     <td className="px-6 py-3">{item.connectedDeployment}</td>
//                     <td className="px-6 py-3">
//                       <button onClick={() => toggleRow(item.id)} className="text-gray-600 hover:text-gray-800">
//                         <Eye className="w-5 h-5" />
//                       </button>
//                     </td>
//                   </tr>
//                   {expandedRow === item.id && (
//                     <tr>
//                       <td colSpan="5" className="px-6 py-3 bg-gray-50">
//                         <div className="p-4 border-l-4 border-blue-500 bg-white rounded-lg shadow-md">
//                           <p className="text-sm text-gray-700"><strong>Details:</strong> {item.details}</p>
//                         </div>
//                       </td>
//                     </tr>
//                   )}
//                 </>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <div className="px-6 py-3 flex items-center justify-between border-t border-gray-200">
//           <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
//         </div>
//       </div>
//     </div>
//   )
// }
"use client"
import React, { useState } from "react"
import { Eye } from "lucide-react"
import { Button } from "@/src/utils/button"
import Pagination from "@/src/components/pagination"

const tableData = [
  { id: "#1124492", storyName: "User 1", storyInfo: "Info 1", connectedDeployment: "Deployment 1", details: "This is user 1's additional information." },
  { id: "#PP98097", storyName: "User 2", storyInfo: "Info 2", connectedDeployment: "Deployment 2", details: "This is user 2's additional information." },
  { id: "#W76909", storyName: "User 3", storyInfo: "Info 3", connectedDeployment: "Deployment 3", details: "This is user 3's additional information." },
]

const entryOptions = [10, 25, 50, 100]

export default function DataTable() {
  const [entriesPerPage, setEntriesPerPage] = useState(25)
  const [currentPage, setCurrentPage] = useState(1)
  const [expandedRow, setExpandedRow] = useState(null)

  const totalPages = Math.ceil(tableData.length / entriesPerPage)
  const currentEntries = tableData.slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage)

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber)
  const handleEntriesChange = (e) => {
    setEntriesPerPage(Number(e.target.value))
    setCurrentPage(1)
  }

  const toggleRow = (rowId) => {
    setExpandedRow(expandedRow === rowId ? null : rowId)
  }

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">SHOW</span>
          <select value={entriesPerPage} onChange={handleEntriesChange} className="border border-gray-300 rounded-lg px-3 py-1 text-sm bg-white shadow-sm">
            {entryOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <span className="text-sm text-gray-600">ENTRIES</span>
        </div>
        <Button>Filters</Button>
      </div>

      <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200 text-gray-700 text-left">
                <th className="px-4 py-3">
                  <input type="checkbox" className="w-4 h-4" />
                </th>
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Story Name</th>
                <th className="px-6 py-3">Story Info</th>
                <th className="px-6 py-3">Connected Deployment</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {currentEntries.map((item) => (
                <>
                  <tr key={item.id} className="border-b hover:bg-gray-100 transition duration-300">
                    <td className="px-4 py-3">
                      <input type="checkbox" className="w-4 h-4" />
                    </td>
                    <td className="px-6 py-3">{item.id}</td>
                    <td className="px-6 py-3">{item.storyName}</td>
                    <td className="px-6 py-3">{item.storyInfo}</td>
                    <td className="px-6 py-3">{item.connectedDeployment}</td>
                    <td className="px-6 py-3">
                      <button onClick={() => toggleRow(item.id)} className="text-gray-600 hover:text-gray-800">
                        <Eye className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                  {expandedRow === item.id && (
                    <tr>
                      <td colSpan="6" className="px-6 py-3 bg-gray-50">
                        <div className="p-4 border-l-4 border-blue-500 bg-white rounded-lg shadow-md">
                          <p className="text-sm text-gray-700"><strong>Details:</strong> {item.details}</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-3 flex items-center justify-between border-t border-gray-200">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      </div>
    </div>
  )
}
