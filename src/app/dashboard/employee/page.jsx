"use client"
import React, { useEffect, useState } from "react"
import { Eye } from "lucide-react"
import { LiaEditSolid } from "react-icons/lia";
import { AiTwotoneDelete } from "react-icons/ai";
import { motion } from "framer-motion";
import { Button } from "@/src/utils/button"
import Pagination from "@/src/components/pagination"
import { AxiosError } from "@/src/utils/axiosError";
import { Axios, summary } from "@/src/config/summaryAPI";

const tableData = [
  { id: "#1124492", storyName: "User 1", storyInfo: "Info 1", connectedDeployment: "Deployment 1", details: "This is user 1's additional information." },
  { id: "#PP98097", storyName: "User 2", storyInfo: "Info 2", connectedDeployment: "Deployment 2", details: "This is user 2's additional information." },
  { id: "#W76909", storyName: "User 3", storyInfo: "Info 3", connectedDeployment: "Deployment 3", details: "This is user 3's additional information." },
]

const entryOptions = [10, 25, 50, 100]

const DataTable = () => {
  useEffect(() => {
    employees()
  }, [])
  const [employee, setEmployee] = useState()
  const [entriesPerPage, setEntriesPerPage] = useState(25)
  const [currentPage, setCurrentPage] = useState(1)
  const [expandedRow, setExpandedRow] = useState(null)
  const employees = async () => {
    try {
      const response = await Axios({
        ...summary.fetchEmployees
      })
      console.log(response)
      if (response.data.success){
        setEmployee(response.data.data)
      }
    } catch (error) {
      AxiosError(error)
    }
  }
  console.log(employee)
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

  const columns = ["ID","Employee Name","Created Date","Actions"]
  return (
    <div className="">

      {employee && <Pagination data={employee} columns={columns}/>}
      {/* <div className="rounded-large bg-white shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200 text-gray-700 text-left">
                <th className="px-normal  py-normal">
                  <input type="checkbox" className="w-4 h-4" />
                </th>
                <th className="px-normal py-normal">ID</th>
                <th className="px-normal py-normal">Employee Name </th>
                <th className="px-normal py-normal">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {currentEntries.map((item) => (
                <>
                  <tr key={item.id} className="border-b hover:bg-gray-100 transition duration-300">
                    <td className="px-normal py-normal">
                      <input type="checkbox" className="w-4 h-4" />
                    </td>
                    <td className="px-normal py-normal">{item.id}</td>
                    <td className="px-normal py-normal">{item.storyName}</td>

                    <td className="px-normal py-normal space-x-5">
                      <button onClick={() => toggleRow(item.id)} className="text-gray-600 hover:text-gray-800">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-800">
                        <LiaEditSolid className="w-5 h-5" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-800">
                        <AiTwotoneDelete className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                  {expandedRow === item.id && (
                    <tr>
                      <td colSpan="3" className="px-normal py-normal">
                        <motion.div
                          initial={{ rotateX: -60, opacity: 0, scale: 0.8, transformOrigin: "top", perspective: 1000 }}
                          animate={{ rotateX: 0, opacity: 1, scale: 1 }}
                          exit={{ rotateX: -70, opacity: 0, scale: 0.8 }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="w-full"
                        >
                          <p className="text-sm text-gray-700"><strong>Details:</strong> {item.details}</p>
                          <p className="text-sm text-gray-700"><strong>Details:</strong> {item.details}</p>
                        </motion.div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  )
}

export default DataTable
