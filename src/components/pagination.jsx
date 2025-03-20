"use client"
import { useState } from "react"
import Link from "next/link"
import { Eye } from "lucide-react"
import { Button } from "../utils/button"
import StoryBoardList from "./storyBoardData"
import EmployeesList from "./employeesList"

const Pagination = ({ data, columns, page, storyBoards, employees, levels }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [expandedViewRow, setExpandedViewRow] = useState(null)
  const [expandedEditRow, setExpandedEditRow] = useState(null)
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
    <div className="w-full mt-normal">
      <div className="w-full overflow-x-auto">
        {page === "storyBoard" &&
          <StoryBoardList
            columns={columns}
            currentItems={currentItems}
            indexOfFirstItem={indexOfFirstItem}
            expandedViewRow={expandedViewRow}
            setExpandedViewRow={setExpandedViewRow}
            expandedEditRow={expandedEditRow}
            setExpandedEditRow={setExpandedEditRow}
            storyBoards={storyBoards}
            levels={levels}
          />}
        {page === "employees" &&
          <EmployeesList columns={columns}
            currentItems={currentItems}
            indexOfFirstItem={indexOfFirstItem}
            expandedViewRow={expandedViewRow}
            setExpandedViewRow={setExpandedViewRow}
            expandedEditRow={expandedEditRow}
            setExpandedEditRow={setExpandedEditRow}
            storyBoards={storyBoards}
            employees={employees}
          />}
      </div>

      <div className="flex items-center justify-center py-normal">
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
              className={`px-3 py-1.5 rounded-md ${currentPage === number ? "bg-Quinary border border-Quinary text-white" : "border"
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
