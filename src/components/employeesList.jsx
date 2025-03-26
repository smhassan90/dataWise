
"use client"

import { RiDeleteBin7Line } from "react-icons/ri"
import { LiaEditSolid } from "react-icons/lia"
import { FaRegEyeSlash } from "react-icons/fa6"
import { FaRegEye } from "react-icons/fa6"
import EmployeeInfo from "./employeeInfo"
import EmployeeEdit from "./employeeEdit"

const EmployeesList = ({
  columns,
  currentItems,
  indexOfFirstItem,
  expandedViewRow,
  setExpandedViewRow,
  expandedEditRow,
  setExpandedEditRow,
  storyBoards,
  employees,
  data,
}) => {
  const toggleViewRow = (id) => {
    if (expandedViewRow === id) {
      setExpandedViewRow(null)
    } else {
      setExpandedViewRow(id)
      setExpandedEditRow(null)
    }
  }

  const toggleEditRow = (id) => {
    if (expandedEditRow === id) {
      setExpandedEditRow(null)
    } else {
      setExpandedEditRow(id)
      setExpandedViewRow(null)
    }
  }

  // Inline styles for animations
  const fadeInKeyframes = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `

  const slideDownKeyframes = `
        @keyframes slideDown {
            from { max-height: 0; opacity: 0; }
            to { max-height: 1000px; opacity: 1; }
        }
    `

  const pulseKeyframes = `
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
        }
    `

  const buttonHoverKeyframes = `
        @keyframes buttonHover {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1.1); }
        }
    `

  return (
    <>
      {/* Inject CSS animations */}
      <style>
        {fadeInKeyframes}
        {slideDownKeyframes}
        {pulseKeyframes}
        {buttonHoverKeyframes}
      </style>

      <div className="overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-gray-50 transition-colors duration-300">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="p-normal text-left font-semibold text-gray-600 whitespace-nowrap transition-all duration-300 hover:bg-gray-100"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((employee, index) => (
              <>
                <tr
                  key={employee._id}
                  className={`${expandedViewRow === (indexOfFirstItem + index + 1) ? "" : "border-b"} transition-all duration-300 hover:bg-gray-50`}
                  style={{
                    animation: `fadeIn 0.5s ease-out forwards`,
                    animationDelay: `${index * 0.05}s`,
                    opacity: 0,
                  }}
                >
                  <td className="p-normal w-1/12 font-medium whitespace-nowrap transition-all duration-300">
                    {indexOfFirstItem + index + 1}
                  </td>
                  <td className="p-normal w-3/12 whitespace-nowrap transition-all duration-300">
                    {employee.firstName}
                  </td>
                  <td className="p-normal w-4/12 whitespace-nowrap transition-all duration-300">{employee.email}</td>
                  <td className="p-normal w-2/12 whitespace-nowrap transition-all duration-300">
                    {new Date(employee.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-normal w-2/12 whitespace-nowrap flex gap-3">
                    <button
                      onClick={() => toggleViewRow(indexOfFirstItem + index + 1)}
                      className="text-gray-600 hover:text-gray-800 transition-all duration-300 "
                      style={{
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.1) rotate(3deg)"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1) rotate(0deg)"
                      }}
                    >
                      {expandedViewRow === indexOfFirstItem + index + 1 ? (
                        <FaRegEye className="w-5 h-5 text-green-700" style={{ animation: "pulse 2s infinite" }} />
                      ) : (
                        <FaRegEyeSlash className="w-5 h-5 text-green-700" />
                      )}
                    </button>
                    <button
                      onClick={() => toggleEditRow(indexOfFirstItem + index + 1)}
                      className="text-gray-600 hover:text-gray-800 transition-all duration-300"
                      style={{
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.1) rotate(-3deg)"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1) rotate(0deg)"
                      }}
                    >
                      <LiaEditSolid className="w-5 h-5 text-yellow-600" />
                    </button>
                    <button
                      className="text-gray-600 hover:text-gray-800 transition-all duration-300"
                      style={{
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.1) rotate(3deg)"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1) rotate(0deg)"
                      }}
                    >
                      <RiDeleteBin7Line className="w-5 h-5 text-red-700" />
                    </button>
                  </td>
                </tr>
                {expandedViewRow === indexOfFirstItem + index + 1 && (
                  <tr className="bg-gray-50 transition-all duration-500">
                    <td colSpan={5} className="p-0">
                      <div
                        className="overflow-hidden"
                        style={{
                          animation: "slideDown 0.5s ease-out forwards",
                          transition: "all 0.5s ease-in-out",
                        }}
                      >
                        <EmployeeInfo employee={employee} storyBoards={storyBoards} />
                      </div>
                    </td>
                  </tr>
                )}
                {expandedEditRow === indexOfFirstItem + index + 1 && (
                  <tr className="bg-gray-50 transition-all duration-500">
                    <td colSpan={5} className="p-0">
                      <div
                        className="overflow-hidden"
                        style={{
                          animation: "slideDown 0.5s ease-out forwards",
                          transition: "all 0.5s ease-in-out",
                        }}
                      >
                        <EmployeeEdit
                          employee={employee}
                          storyBoards={storyBoards}
                          setExpandedEditRow={setExpandedEditRow}
                          employees={employees}
                        />
                      </div>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default EmployeesList

