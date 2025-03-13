


"use client"

import { useState } from "react"
import { RefreshCw } from "lucide-react"
import Pagination from "@/src/components/pagination"

export default function ShowReport() {
  const [isLoading, setIsLoading] = useState(false)
  const [showData, setShowData] = useState([
    {
      showDate: "October 24, 2024",
      showStartDate: "October 24, 2024",
      boxName: "F1",
      showName: "The Lion King",
      ticketsSold: 240,
      unitPrice: 300,
    },
    {
      showDate: "October 24, 2024",
      showStartDate: "October 24, 2024",
      boxName: "F2",
      showName: "The Lion King",
      ticketsSold: 240,
      unitPrice: 300,
    },
    {
      showDate: "October 24, 2024",
      showStartDate: "October 24, 2024",
      boxName: "F3",
      showName: "The Lion King",
      ticketsSold: 40,
      unitPrice: 300,
    },
    {
      showDate: "October 25, 2024",
      showStartDate: "October 24, 2024",
      boxName: "F3",
      showName: "The Lion King",
      ticketsSold: 40,
      unitPrice: 300,
    },
    {
      showDate: "October 26, 2024",
      showStartDate: "October 24, 2024",
      boxName: "F3",
      showName: "The Lion King",
      ticketsSold: 40,
      unitPrice: 300,
    },
    {
      showDate: "October 27, 2024",
      showStartDate: "October 24, 2024",
      boxName: "F3",
      showName: "The Lion King",
      ticketsSold: 40,
      unitPrice: 300,
    },
    {
      showDate: "October 28, 2024",
      showStartDate: "October 24, 2024",
      boxName: "F3",
      showName: "The Lion King",
      ticketsSold: 40,
      unitPrice: 300,
    },
    {
      showDate: "October 29, 2024",
      showStartDate: "October 24, 2024",
      boxName: "F3",
      showName: "The Lion King",
      ticketsSold: 40,
      unitPrice: 300,
    },
  ])

  const refreshData = () => {
    setIsLoading(true)

    // Simulate API call with timeout
    setTimeout(() => {
      // In a real application, you would fetch fresh data here
      setIsLoading(false)
    }, 1000)
  }

  // Calculate total tickets and revenue
  
  return (
    <div className="container  px-normal py-normal">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Genertae Report</h1>
        <button
          onClick={refreshData}
          className="flex items-center gap-2 bg-secondary hover:bg-secondary text-white px-normal py-normal rounded-large transition-colors"
          disabled={isLoading}
        >
          <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
          {isLoading ? "Refreshing..." : "Refresh Report"}
        </button>
      </div>

      <div className="rounded-large shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-secondary text-white font-normal border border-secondary">
              <th className="px-4 py-3 text-left text-sm font-normal border-b">Show Date</th>
              <th className="px-4 py-3 text-left text-sm font-normal border-b">Show Start Date</th>
                <th className="px-4 py-3 text-left text-sm font-normal border-b">Box Name</th>
                <th className="px-4 py-3 text-left text-sm font-normal border-b">Show Name</th>
              </tr>
            </thead>
            <tbody>
              {showData.map((show, index) => (
                <tr
                  key={index}
                  className={`border-b border-secondary hover:bg-[#FF8548] ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                >
                  <td className="px-4 py-3 text-sm text-gray-700">{show.showDate}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{show.showStartDate}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{show.boxName}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{show.showName}</td>            
                </tr>
              ))}
            </tbody>
            
          </table>
        </div>
        <Pagination/>
      </div>    
    </div>
  )
}

