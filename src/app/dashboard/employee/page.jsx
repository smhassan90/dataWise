"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaRedo } from "react-icons/fa";

export default function SqlBox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-4 border-2 border-blue-300 rounded-lg shadow-md w-72 h-72">
      <div className="flex justify-between items-center border-b pb-2">
        <button
          className="flex items-center gap-1 text-gray-700 font-semibold"
          onClick={() => setIsOpen(!isOpen)}
        >
          SQL Statement <FaChevronDown className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`} />
        </button>
        <button className="bg-teal-500 text-white px-3 py-1 rounded-lg flex items-center gap-1 text-sm">
          <FaRedo /> Re-run
        </button>
      </div>
      <div className="mt-3 p-3 bg-gray-100 rounded-md text-sm font-mono overflow-auto max-w-full">
        <pre className="whitespace-pre-wrap break-words">
          CREATE TABLE IF NOT EXISTS Customer(
          CustID int NOT NULL,
          Name varchar,
          Email varchar,
          DOB date,
          CONSTRAINT customer PRIMARY KEY
          );
        </pre>
      </div>
      
    </div>
  );
}
