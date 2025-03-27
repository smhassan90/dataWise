"use client";
import { RiDeleteBin7Line } from "react-icons/ri";
import { LiaEditSolid } from "react-icons/lia";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import EmployeeInfo from "./employeeInfo";
import EmployeeEdit from "./employeeEdit";
import { useState } from "react";
import Modal from "./modal";

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
  const [deletingRows, setDeletingRows] = useState({});
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const toggleViewRow = (id) => {
    if (expandedViewRow === id) {
      setExpandedViewRow(null);
    } else {
      setExpandedViewRow(id);
      setExpandedEditRow(null);
    }
  };

  const toggleEditRow = (id) => {
    if (expandedEditRow === id) {
      setExpandedEditRow(null);
    } else {
      setExpandedEditRow(id);
      setExpandedViewRow(null);
    }
  };

  const handleDelete = (id, employeeId) => {
    setDeletingRows((prev) => ({ ...prev, [id]: true }));

    setTimeout(() => {
      console.log(`Deleted row ${id}`);

      if (typeof data.setEmployees === "function") {
        data.setEmployees((prevEmployees) =>
          prevEmployees.filter((emp) => emp._id !== employeeId)
        );
      } else {
        setDeletingRows((prev) => ({ ...prev, [id]: "completed" }));
        setOpenModal(false);
      }
    }, 800);
  };

  const fadeInKeyframes = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;

  const slideDownKeyframes = `
        @keyframes slideDown {
            from { max-height: 0; opacity: 0; }
            to { max-height: 1000px; opacity: 1; }
        }
    `;

  const pulseKeyframes = `
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
        }
    `;

  const buttonHoverKeyframes = `
        @keyframes buttonHover {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1.1); }
        }
    `;

  const deleteAnimationKeyframes = `
    @keyframes deleteAnimation {
      0% { transform: translatey(10px); opacity: 1; }
      30% { transform: translateX(10px); opacity: 0.9; }
      50% { transform: translateX(30px); opacity: 0.7; }
      80% { transform: translateX(80px); opacity: 0.3; }
      100% { transform: translateX(150px); opacity: 0; }
    }
  `;

  return (
    <>
      <style>
        {fadeInKeyframes}
        {slideDownKeyframes}
        {pulseKeyframes}
        {buttonHoverKeyframes}
        {deleteAnimationKeyframes}
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
            {currentItems.map((employee, index) => {
              const rowId = indexOfFirstItem + index + 1;
              if (deletingRows[rowId] === "completed") return null;
              return (
                <>
                  <tr
                    key={employee._id}
                    className={`${
                      (expandedEditRow || expandedViewRow) ===
                      indexOfFirstItem + index + 1
                        ? ""
                        : "border-b"
                    } transition-all duration-300 hover:bg-gray-50`}
                    style={{
                      animation: deletingRows[indexOfFirstItem + index + 1]
                        ? `deleteAnimation 0.8s forwards`
                        : `fadeIn 0.5s ease-out forwards`,
                      animationDelay: deletingRows[indexOfFirstItem + index + 1]
                        ? "0s"
                        : `${index * 0.05}s`,
                      opacity: deletingRows[indexOfFirstItem + index + 1]
                        ? 1
                        : 0,
                    }}
                  >
                    <td className="p-normal w-1/12 font-medium whitespace-nowrap transition-all duration-300">
                      {indexOfFirstItem + index + 1}
                    </td>
                    <td className="p-normal w-3/12 whitespace-nowrap transition-all duration-300">
                      {employee.firstName}
                    </td>
                    <td className="p-normal w-4/12 whitespace-nowrap transition-all duration-300">
                      {employee.email}
                    </td>
                    <td className="p-normal w-2/12 whitespace-nowrap transition-all duration-300">
                      {new Date(employee.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-normal w-2/12 whitespace-nowrap flex gap-3">
                      <button
                        onClick={() =>
                          toggleViewRow(indexOfFirstItem + index + 1)
                        }
                        className="text-gray-600 hover:text-gray-800 transition-all duration-300 "
                        style={{
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform =
                            "scale(1.1) rotate(3deg)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform =
                            "scale(1) rotate(0deg)";
                        }}
                      >
                        {expandedViewRow === indexOfFirstItem + index + 1 ? (
                          <FaRegEye
                            className="w-5 h-5 text-green-700"
                            style={{ animation: "pulse 2s infinite" }}
                          />
                        ) : (
                          <FaRegEyeSlash className="w-5 h-5 text-green-700" />
                        )}
                      </button>
                      <button
                        onClick={() =>
                          toggleEditRow(indexOfFirstItem + index + 1)
                        }
                        className="text-gray-600 hover:text-gray-800 transition-all duration-300"
                        style={{
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform =
                            "scale(1.1) rotate(-3deg)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform =
                            "scale(1) rotate(0deg)";
                        }}
                      >
                        <LiaEditSolid className="w-5 h-5 text-yellow-600" />
                      </button>
                      <button
                        onClick={() => {
                          setSelectedRowId(indexOfFirstItem + index + 1);
                          setSelectedEmployeeId(employee._id);
                          setOpenModal(true);
                        }}
                        className="text-gray-600 hover:text-gray-800 transition-all duration-300"
                        style={{
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform =
                            "scale(1.1) rotate(3deg)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform =
                            "scale(1) rotate(0deg)";
                        }}
                      >
                        <RiDeleteBin7Line className="w-5 h-5 text-red-700" />
                      </button>
                    </td>
                  </tr>
                  {expandedViewRow === indexOfFirstItem + index + 1 && (
                    <tr className="transition-all duration-500">
                      <td colSpan={5} className="p-0">
                        <div
                          className="overflow-hidden"
                          style={{
                            animation: "slideDown 0.5s ease-out forwards",
                            transition: "all 0.5s ease-in-out",
                          }}
                        >
                          <EmployeeInfo
                            employee={employee}
                            storyBoards={storyBoards}
                          />
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
              );
            })}
            <Modal
              openModal={openModal}
              onClose={() => setOpenModal(false)}
              onConfirm={() => handleDelete(selectedRowId, selectedEmployeeId)}
            />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmployeesList;
