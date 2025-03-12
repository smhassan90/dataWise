"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Pagination() {
  return (
    <div className="flex rounded-large items-center justify-between w-full px-normal py-normal bg-white">
      <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Showing 5 of 32 results</div>

      <div className="flex items-center space-x-1">
        <button className="h-8 w-8 flex items-center justify-center rounded-large text-gray-500 hover:bg-gray-100">
          <ChevronLeft size={16} />
        </button>

        <button className="h-8 w-8 flex items-center justify-center rounded-md bg-teal-600 text-white font-medium">
          1
        </button>

        <button className="h-8 w-8 flex items-center justify-center rounded-md text-gray-700 hover:bg-gray-100">
          2
        </button>

        <button className="h-8 w-8 flex items-center justify-center rounded-md text-gray-700 hover:bg-gray-100">
          3
        </button>

        <button className="h-8 w-8 flex items-center justify-center rounded-md text-gray-700 hover:bg-gray-100">
          4
        </button>

        <button className="h-8 w-8 flex items-center justify-center rounded-md text-gray-700 hover:bg-gray-100">
          5
        </button>

        <button className="h-8 w-8 flex items-center justify-center rounded-md text-gray-700 hover:bg-gray-100">
          6
        </button>

        <button className="h-8 w-8 flex items-center justify-center rounded-md text-gray-700 hover:bg-gray-100">
          7
        </button>

        <button className="h-8 w-8 flex items-center justify-center rounded-md text-gray-500 hover:bg-gray-100">
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  )
}

