"use client"

import { useState } from "react"

export default function JobPostingExact() {
  const [isOpen, setIsOpen] = useState(true)

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="bg-purple-600 text-white font-medium px-4 py-2 rounded hover:bg-purple-700"
      >
        Edit
      </button>
    )
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden border border-purple-100 shadow-sm">
      {/* Header section */}
      <div className="p-4 flex justify-between items-start relative">
        <div className="flex items-start gap-3">
          {/* Logo */}
          <div className="w-8 h-8">
            <svg viewBox="0 0 40 40" className="w-full h-full text-purple-600">
              <path d="M20 5L5 15L20 25L35 15L20 5Z" fill="currentColor" />
              <path d="M5 20L20 30L35 20" fill="currentColor" />
            </svg>
          </div>

          {/* Title and company */}
          <div>
            <h2 className="font-bold text-lg text-gray-900">Outbound Call Agent/Specialist</h2>
            <a href="#" className="text-purple-600 text-sm">
              Business Lounge
            </a>
          </div>
        </div>

        {/* Right side info */}
        <div className="flex flex-col items-end">
          {/* Close button */}
          <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Views and posted by */}
          <div className="text-sm text-gray-500">0 views</div>
          <div className="text-sm text-gray-500">
            posted by <span className="text-purple-600">Hasan</span>
          </div>
        </div>
      </div>

      {/* Easy Apply button section */}
      <div className="p-4 border-t border-gray-200 flex justify-between items-center">
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-2 rounded-full">
          Easy Apply
        </button>

        {/* Share icon */}
        <button className="text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
            <polyline points="16 6 12 2 8 6"></polyline>
            <line x1="12" y1="2" x2="12" y2="15"></line>
          </svg>
        </button>
      </div>

      {/* Job details section with scroll */}
      <div className="max-h-80 overflow-y-auto">
        <div className="p-4 border-t border-gray-200">
          <h3 className="text-lg font-bold mb-4">Job Details</h3>

          <div className="mb-4">
            <h4 className="text-purple-600 mb-1">Salary</h4>
            <p className="text-gray-600">No Salary Mentioned</p>
          </div>

          <div className="mb-4">
            <h4 className="text-purple-600 mb-1">Job Type</h4>
            <p className="text-gray-600">Full-Time</p>
          </div>

          <div className="mb-4">
            <h4 className="text-purple-600 mb-1">Email Address</h4>
            <p className="text-gray-600">careers@businesslounge.us</p>
          </div>
        </div>

        {/* Skills section */}
        <div className="p-4 border-t border-gray-200">
          <h3 className="text-lg font-bold">Skills</h3>
          {/* Skills content would go here */}
          <div className="h-20"></div> {/* Placeholder to demonstrate scrolling */}
        </div>
      </div>
    </div>
  )
}

