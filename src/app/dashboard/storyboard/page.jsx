


"use client"

import { useEffect, useState } from "react"
import { FaSearch, FaMicrophone } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { FaChevronDown } from "react-icons/fa"
import { FaRedo } from "react-icons/fa"
import { Axios, summary } from "../../../config/summaryAPI"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Button } from "@/src/utils/button"
import { method } from "lodash"
import Suggestion from "@/src/components/suggestion"

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState("week")
  const [selectedMonth, setSelectedMonth] = useState("This Month")
  const [showSQL, setShowSQL] = useState(false)
  const [graphData,setGraphData] = useState([])

  console.log(graphData)
  // useEffect to log updated graphData


  const data = [
    { date: 10, value: 3000 },
    { date: 11, value: 2500 },
    { date: 12, value: 4000 },
    { date: 13, value: 2000 },
    { date: 14, value: 5000 },
    { date: 15, value: 4500 },
    { date: 16, value: 6000 },
  ]

  const dispatch = useDispatch()
  const title = useSelector((state) => state.sideBar.title)
  const tabs = ["Line of graphs ", "Report"]

  const { width, sidebar } = useSelector((state) => state.sideBar)

  const startListening = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech recognition not supported in this browser.")
      return
    }

    const recognition = new window.webkitSpeechRecognition()
    recognition.continuous = false
    recognition.interimResults = false
    recognition.lang = "en-US" // Adjust as needed

    recognition.onstart = () => setIsListening(true)
    recognition.onend = () => setIsListening(false)

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript
      setSearchText(transcript)
    }

    recognition.start()
  }

  return (
    <div>
      <div className="min-h-screen bg-white rounded-large p-normal">
        <h1 className="font-manrope font-light">Ask away, and feel the magic : &#41;</h1>
        <Suggestion setGraphData={setGraphData}/>
        <div className="p-normal rounded-large  shadow-md bg- bg-[#fdfbf6] w-full">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5">
            <h2 className="text-lg font-semibold font-manrope mb-2 sm:mb-0">Appointment</h2>

            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <Button onClick={() => setShowSQL(!showSQL)} className="text-xs sm:text-sm">
                Show SQL Query
              </Button>

              <Button className="text-xs sm:text-sm">{selectedMonth}</Button>
            </div>
          </div>

          {/* Graph & SQL Query Container */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className={`${showSQL ? "lg:w-[770px]" : "w-full"} transition-all`}>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#FF7F50",
                      color: "white",
                      borderRadius: "5px",
                    }}
                  />
                  <Line type="monotone" dataKey="value" stroke="#FF7F50" strokeWidth={2} dot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {showSQL && (
              <div className="bg-[#fdfbf6] p-4 rounded-large shadow-md w-full lg:w-[285px] h-auto lg:h-72 mt-4 lg:mt-0">
                <div className="flex justify-between items-center border-b pb-2">
                  <button className="flex items-center gap-1 font-manrope font-light text-sm">
                    SQL Statement <FaChevronDown className="rotate-0 transition-transform" />
                  </button>
                  <Button className="gap-2 text-xs sm:text-sm">
                    <FaRedo /> Re-run
                  </Button>
                </div>
                <div className="mt-normal p-3 bg-gray-100 rounded-md text-xs sm:text-sm font-mono overflow-auto max-w-full">
                  <pre className="whitespace-pre-wrap break-words font-manrope font-normal">
                    {graphData};
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bar Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 shadow-md gap-6 mb-6 mt-4">
          <div className="border-none shadow-sm bg-[#fdfbf6] rounded-large">
            <div className="p-4 pb-0">
              <div className="flex justify-between items-center">
                <div className="flex ml-0 sm:ml-36 space-x-4 text-xs">
                  <span className="text-gray-500 ml-0 sm:ml-10">Customers</span>
                </div>
                <select className="h-6 text-[10px] bg-transparent border-none">
                  <option value="week">Week</option>
                  <option value="day">Day</option>
                  <option value="month">Month</option>
                </select>
              </div>
            </div>
            <div className="p-4">
              <div className="h-[120px] flex items-end justify-between">
                <BarGroup values={[50, 30]} colors={["#021A22BF", "#F97316"]} />
                <BarGroup values={[20, 35]} colors={["#6B7280", "#F97316"]} />
                <BarGroup values={[15, 25]} colors={["#6B7280", "#F97316"]} />
                <BarGroup values={[40, 30]} colors={["#6B7280", "#F97316"]} />
                <BarGroup values={[50, 35]} colors={["#6B7280", "#F97316"]} />
                <BarGroup values={[25, 15]} colors={["#6B7280", "#F97316"]} />
                <BarGroup values={[35, 45]} colors={["#6B7280", "#F97316"]} />
              </div>
            </div>
          </div>

          <div className="border-none shadow-md bg-[#fdfbf6] rounded-large">
            <div className="p-4 pb-0">
              <div className="flex justify-between items-center">
                <div className="flex space-x-4 text-xs">
                  <span className="text-gray-500 border-b-2 border-gray-800">Weekly Average</span>
                </div>
                <select className="h-6 text-[10px] bg-transparent border-none">
                  <option value="week">Week</option>
                  <option value="day">Day</option>
                  <option value="month">Month</option>
                </select>
              </div>
            </div>
            <div className="p-4 overflow-x-auto">
              <div className="h-[120px] flex items-end justify-between min-w-[300px]">
                <Bar height={7} color="#0F766E" />
                <Bar height={40} color="#0F766E" />
                <Bar height={60} color="#0F766E" />
                <Bar height={30} color="#F97316" />
                <Bar height={20} color="#0F766E" />
                <Bar height={15} color="#0F766E" />
                <Bar height={25} color="#F97316" />
                <Bar height={40} color="#0F766E" />
                <Bar height={30} color="#0F766E" />
                <Bar height={20} color="#F97316" />
                <Bar height={50} color="#0F766E" />
                <Bar height={60} color="#0F766E" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Bar Component
function Bar({ height, color }) {
  return (
    <div className="w-3 sm:w-5 flex flex-col items-center">
      <div
        className="w-2 sm:w-3 rounded-sm"
        style={{
          height: `${height}px`,
          backgroundColor: color,
        }}
      />
    </div>
  )
}

// Bar Group Component
function BarGroup({ values, colors }) {
  return (
    <div className="flex gap-1">
      {values.map((value, index) => (
        <div key={index} className="w-2 sm:w-3 flex flex-col items-center">
          <div
            className="w-2 sm:w-3 rounded-sm"
            style={{
              height: `${value}px`,
              backgroundColor: colors[index],
            }}
          />
        </div>
      ))}
    </div>
  )
}

