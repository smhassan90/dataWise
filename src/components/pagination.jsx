"use client";
import React, { useState } from "react";
import { LiaEditSolid } from "react-icons/lia";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaRegEyeSlash } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa"; // 🔹 FontAwesome cross icon
import { Button } from "../utils/button";
import Stories from "../components/storyboard"

const Pagination = ({ data, columns }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [openRowIndex, setOpenRowIndex] = useState(null); // 🔹 Store row index instead of ID

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const handleAddStory = () => {
    if (selectedStory && !storiesList.includes(selectedStory)) {
      setStoriesList([...storiesList, selectedStory]); // 🔹 Add new story
    }
  };
  const handleRemoveStory = (story) => {
    setStoriesList(storiesList.filter((s) => s !== story)); // 🔹 Remove story
  };

  // 🔹 Toggle row dropdown using index
  const toggleRow = (index) => {
    setOpenRowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // 🔹 Reset dropdown on page change
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      setOpenRowIndex(null); // Close dropdown when changing pages
    }
  };

  return (
    <div className="p-normal">
      {/* Table */}
      <div className="rounded-large justify-around shadow-md">
        <table className="w-full text-left justify-around  border-collapse">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.key} className="px-normal py-normal">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((row, rowIndex) => (
              <React.Fragment key={rowIndex}>
                <tr className="border-b  hover:bg-gray-50">
                  {columns.map((column) => (
                    <td
                      key={`${rowIndex}-${column.key}`}
                      className="px-normal py-normal"
                    >
                      {column.key === "id" ? (
                        indexOfFirstItem + rowIndex + 1
                      ) : column.key === "actions" ? (
                        <div className="flex space-x-4">
                          <button
                            onClick={() => toggleRow(rowIndex)}
                            className="text-gray-600 hover:text-gray-800"
                          >
                            <FaRegEyeSlash className="w-5 h-5" />
                          </button>
                          <button className="text-gray-600 hover:text-gray-800">
                            <LiaEditSolid className="w-5 h-5" />
                          </button>
                          <button className="text-gray-600 hover:text-gray-800">
                            <AiTwotoneDelete className="w-5 h-5" />
                          </button>
                        </div>
                      ) : (
                        row[column.key]
                      )}
                    </td>
                  ))}
                </tr>
                {openRowIndex === rowIndex && ( // 🔹 Only one row's dropdown is visible
                  <tr>
                    <td
                      colSpan={columns.length}
                      className="px-normal py-normal bg-gray-100"
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                       <Stories/>
                        
                      </motion.div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <span className="text-gray-600 text-sm">
          {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, data.length)} of{" "}
          {data.length} items
        </span>
        <div className="flex space-x-2">
          <button
            onClick={() => goToPage(1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-md border ${
              currentPage === 1 ? "opacity-50" : "hover:bg-gray-100"
            }`}
          >
            {"<<"}
          </button>
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-md border ${
              currentPage === 1 ? "opacity-50" : "hover:bg-gray-100"
            }`}
          >
            {"<"}
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i + 1)}
              className={`px-3 py-1 rounded-md border ${
                currentPage === i + 1 ? "bg-gray-300" : "hover:bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-md border ${
              currentPage === totalPages ? "opacity-50" : "hover:bg-gray-100"
            }`}
          >
            {">"}
          </button>
          <button
            onClick={() => goToPage(totalPages)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-md border ${
              currentPage === totalPages ? "opacity-50" : "hover:bg-gray-100"
            }`}
          >
            {">>"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
