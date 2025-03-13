

// // "use client"

// // import { useState } from "react"
// // import { ChevronLeft, ChevronRight, Edit, Eye, Trash2 } from "lucide-react"
// // import { Button } from "@/src/utils/button"
// // import Pagination from "@/src/components/pagination"

// // const tableData = [
// //   { id: "#1124492", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// //   { id: "#W76909", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// //   { id: "#L243412", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// //   { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
// // ]

// // const entryOptions = [10, 25, 50, 100]

// // export default function DataTable() {
// //   const [entriesPerPage, setEntriesPerPage] = useState(25)
// //   const [currentPage, setCurrentPage] = useState(1)
// //   const [selectedRows, setSelectedRows] = useState([])
// //   const [selectAll, setSelectAll] = useState(false)

// //   const totalPages = Math.ceil(tableData.length / entriesPerPage)
// //   const indexOfLastEntry = currentPage * entriesPerPage
// //   const indexOfFirstEntry = indexOfLastEntry - entriesPerPage
// //   const currentEntries = tableData.slice(indexOfFirstEntry, indexOfLastEntry)

// //   const handlePageChange = (pageNumber) => {
// //     setCurrentPage(pageNumber)
// //   }

// //   const handleEntriesChange = (e) => {
// //     setEntriesPerPage(Number(e.target.value))
// //     setCurrentPage(1)
// //   }

// //   const handleSelectRow = (rowId) => {
// //     setSelectedRows((prev) => prev.includes(rowId) ? prev.filter((id) => id !== rowId) : [...prev, rowId])
// //   }

// //   const handleSelectAll = () => {
// //     if (selectAll) {
// //       setSelectedRows([])
// //     } else {
// //       setSelectedRows(currentEntries.map((item) => item.id))
// //     }
// //     setSelectAll(!selectAll)
// //   }

// //   return (
// //       <div className="w-full mx-auto p-normal bg-gray-50 rounded-large">
// //         <div className="flex justify-between items-center mb-normal">
// //           <div className="flex items-center space-x-2">
// //             <span className="text-sm text-gray-600">SHOW</span>
// //             <select value={entriesPerPage} onChange={handleEntriesChange} className="border border-secondary rounded-large px-2 py-1 text-sm bg-white">
// //               {entryOptions.map((option) => (
// //                 <option className="rounded-large w-40 hover:bg-secondary !bg-red " key={option} value={option}>{option}</option>
// //               ))}
// //             </select>
// //             <span className="text-sm text-gray-600">ENTRIES</span>
// //           </div>
// //           <Button>Filters</Button>
// //         </div>

// //         <div className="bg-white rounded-large shadow-md overflow-hidden">
// //           <div className="overflow-x-auto">
// //             <table className="w-full">
// //               <thead>
// //                 <tr className="bg-gray-50 border border-[#EBF0ED] text-left">
// //                   <th className="px-normal py-normal w-10">
// //                     <input type="checkbox" checked={selectAll} onChange={handleSelectAll} className="h-4 w-4 rounded-large text-secondary focus:ring-secondary" />
// //                   </th>
// //                   <th className="px-normal py-normal text-xs font-medium text-gray-500 uppercase tracking-wider">First Name </th>
// //                   <th className="px-normal py-normal text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
// //                   <th className="px-normal py-normal text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
// //                   <th className="px-normal py-normal text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
// //                   <th className="px-normal py-normal text-xs font-medium text-gray-500 uppercase tracking-wider">ACTIONS</th>
// //                 </tr>
// //               </thead>
// //               <tbody className="divide-y divide-[#EBF0ED]">
// //                 {currentEntries.map((item) => (
// //                   <tr key={item.id} className="hover:bg-gray-50">
// //                     <td className="px-normal py-normal">
// //                       <input type="checkbox" checked={selectedRows.includes(item.id)} onChange={() => handleSelectRow(item.id)} className="h-4 w-4 rounded-large text-secondary focus:ring-secondary" />
// //                     </td>
// //                     <td className="px-normal py-normal text-sm text-gray-900">{item.id}</td>
// //                     <td className="px-normal py-normal text-sm text-gray-900">{item.storyName}</td>
// //                     <td className="px-normal py-normal text-sm text-gray-900">{item.storyInfo}</td>
// //                     <td className="px-normal py-normal text-sm text-gray-900">{item.connectedDeployment}</td>
// //                     <td className="px-normal py-normal text-sm text-gray-500">
// //                       <div className="flex space-x-3">
// //                         <button className="text-gray-600"><Edit size={16} /></button>
// //                         <button className="text-gray-600"><Eye size={16} /></button>
// //                         <button className="text-gray-600"><Trash2 size={16} /></button>
// //                       </div>
// //                     </td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>

// //         <div className="px-normal py-normal rounded-large flex items-center justify-between border-t border-[#EBF0ED]">
// //           <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/src/utils/button"
import Pagination from "@/src/components/pagination"
import TableRow from "@/src/components/TableRow"

const tableData = [
  { id: "#1124492", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
  { id: "#PP98097", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
  { id: "#W76909", storyName: "Lorem ipsum", storyInfo: "Lorem ipsum", connectedDeployment: "Lorem ipsum" },
]

const entryOptions = [10, 25, 50, 100]

export default function DataTable() {
  const [entriesPerPage, setEntriesPerPage] = useState(25)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedRows, setSelectedRows] = useState([])
  const [selectAll, setSelectAll] = useState(false)

  const totalPages = Math.ceil(tableData.length / entriesPerPage)
  const indexOfLastEntry = currentPage * entriesPerPage
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage
  const currentEntries = tableData.slice(indexOfFirstEntry, indexOfLastEntry)

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber)
  const handleEntriesChange = (e) => {
    setEntriesPerPage(Number(e.target.value))
    setCurrentPage(1)
  }
  const handleSelectRow = (rowId) => {
    setSelectedRows((prev) => prev.includes(rowId) ? prev.filter((id) => id !== rowId) : [...prev, rowId])
  }
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([])
    } else {
      setSelectedRows(currentEntries.map((item) => item.id))
    }
    setSelectAll(!selectAll)
  }

  return (
    <div className="w-full mx-auto p-normal bg-gray-50 rounded-large">
      <div className="flex justify-between items-center mb-normal">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">SHOW</span>
          <select value={entriesPerPage} onChange={handleEntriesChange} className="border border-secondary rounded-large px-2 py-1 text-sm bg-white">
            {entryOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <span className="text-sm text-gray-600">ENTRIES</span>
        </div>
        <Button>Filters</Button>
      </div>

      <div className="bg-white rounded-large shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border border-[#EBF0ED] text-left">
                <th className="px-normal py-normal w-10">
                  <input type="checkbox" checked={selectAll} onChange={handleSelectAll} className="h-4 w-4 rounded-large text-secondary focus:ring-secondary" />
                </th>
                <th className="px-normal py-normal text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-normal py-normal text-xs font-medium text-gray-500 uppercase tracking-wider">Story Name</th>
                <th className="px-normal py-normal text-xs font-medium text-gray-500 uppercase tracking-wider">Story Info</th>
                <th className="px-normal py-normal text-xs font-medium text-gray-500 uppercase tracking-wider">Connected Deployment</th>
                <th className="px-normal py-normal text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EBF0ED]">
              {currentEntries.map((item) => (
                <TableRow key={item.id} item={item} selectedRows={selectedRows} handleSelectRow={handleSelectRow} />
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-normal py-normal rounded-large flex items-center justify-between border-t border-[#EBF0ED]">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      </div>
    </div>
  )
}

// import React from 'react'

// const page = () => {
//   return (
//     <div>page</div>
//   )
// }

// export default page