"use client"

import { useState } from "react"
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState("week")
  const dispatch = useDispatch();
  const title = useSelector((state) => state.sideBar.title);
  const { width, sidebar } = useSelector((state) => state.sideBar);
  return (
    <div
    className={`mt-1 ${
      sidebar ? "w-[calc(100vw-24rem)] ml-[350px]" : "w-[calc(100vw-9rem)] ml-28"
    }`}>
    <div className="min-h-screen mt-10 bg-[#fdfbf6] p-2">
      <h1 className="ml-5">Ask away, and feel the magic :)</h1>
      <div className="mx-auto max-w-7xl">
        {/* Search Bar */}
        <div className= " mt-4 mb-6 relative">
          <div className="relative">
            <input placeholder="Search to Menu..." className="pl-10 py-2 border border-gray-300 rounded-md w-full" />
            <FaSearch className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
        </div>

        {/* Line Chart */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-sm font-medium">Appointment</h2>
          <div className="flex items-center gap-2">
            <button className="h-8 text-xs bg-teal-600 text-white border-none rounded-md px-3">Timeframe</button>
          </div>
        </div>

        <div className="mb-6 border-none shadow-sm bg-white rounded-lg">
          <div className="p-4 relative">
            <div className="h-[300px] w-full relative">
              <LineChart />
              <div className="absolute top-[75px] left-1/2 transform -translate-x-1/2">
                <div className="h-[80px] border-l border-dashed border-gray-300"></div>
              </div>
              <div className="absolute top-[75px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded">+8%</div>
              </div>
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span>S</span>
              <span>M</span>
              <span>T</span>
              <span>W</span>
              <span>T</span>
              <span>F</span>
              <span>S</span>
            </div>
          </div>
        </div>

        {/* Bar Charts */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="border-none shadow-sm bg-white rounded-lg">
            <div className="p-4 pb-0">
              <div className="flex justify-between items-center">
                <div className="flex ml-36  space-x-4 text-xs">
                  <span className="text-gray-500 ml-10">Customers</span>
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

          <div className="border-none shadow-sm bg-white rounded-lg">
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
            <div className="p-4">
              <div className="h-[120px] flex items-end justify-between">
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

        {/* Member Activity */}
        <h2 className="text-sm font-medium mb-2">Member Activity</h2>
        <div className="border-none shadow-sm bg-white rounded-lg">
          <div className="p-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="flex justify-center">
                <div className="relative w-32 h-32">
                  <CircleProgress percentage={52} />
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-3xl font-bold">52%</span>
                    <span className="text-xs text-gray-500">Completed</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-medium text-gray-500 mb-2">WEEK - DAY</h3>
                <TimeBar label="MON" percentage={75} />
                <TimeBar label="TUE" percentage={62} />
                <TimeBar label="WED" percentage={45} />
                <TimeBar label="THU" percentage={58} />
                <TimeBar label="FRI" percentage={82} />
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-medium text-gray-500 mb-2">HOUR - PEAK</h3>
                <TimeBar label="08:00 - 10:00" percentage={75} />
                <TimeBar label="10:00 - 12:00" percentage={62} />
                <TimeBar label="12:00 - 14:00" percentage={45} />
                <TimeBar label="14:00 - 16:00" percentage={58} />
                <TimeBar label="16:00 - 18:00" percentage={40} />
              </div>
            </div>
          </div>
        </div>

        {/* Add to Dashboard Button */}
        <div className="absolute top-16 right-8">
          {/* <button className="bg-teal-600 hover:bg-teal-700 text-white rounded-md text-sm px-3 py-2">
            + Add to Dashboard
          </button> */}
        </div>
      </div>
    </div>
    </div>
  )
}

// Line Chart Component
function LineChart() {
  return (
    <svg className="w-full h-full" viewBox="0 0 400 180">
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F97316" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,100 C20,80 40,120 60,110 C80,100 100,60 120,50 C140,40 160,60 180,70 C200,80 220,90 240,70 C260,50 280,40 300,60 C320,80 340,100 360,90 C380,80 400,60 400,50"
        fill="none"
        stroke="#F97316"
        strokeWidth="3"
      />
      <path
        d="M0,100 C20,80 40,120 60,110 C80,100 100,60 120,50 C140,40 160,60 180,70 C200,80 220,90 240,70 C260,50 280,40 300,60 C320,80 340,100 360,90 C380,80 400,60 400,50 L400,180 L0,180 Z"
        fill="url(#lineGradient)"
      />
      <circle cx="200" cy="70" r="4" fill="#F97316" />
    </svg>
  )
}

// Bar Component
function Bar({ height, color }) {
  return (
    <div className="w-5 flex flex-col items-center">
      <div
        className="w-3 rounded-sm"
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
        <div key={index} className="w-3 flex flex-col items-center">
          <div
            className="w-3 rounded-sm"
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

// Time Bar Component
function TimeBar({ label, percentage }) {
  return (
    <div className="flex items-center justify-between text-xs">
      <span className="w-24 text-gray-600">{label}</span>
      <div className="flex-1 bg-gray-200 h-1.5 rounded-full overflow-hidden">
        <div className="bg-black h-full rounded-full" style={{ width: `${percentage}%` }} />
      </div>
      <span className="ml-2 text-gray-600">{percentage}%</span>
    </div>
  )
}

// Circle Progress Component
function CircleProgress({ percentage }) {
  const radius = 45
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percentage / 100) * circumference

  return (
    <svg className="w-full h-full" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r={radius} fill="none" stroke="#E5E7EB" strokeWidth="6" />
      <circle
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke="#F97316"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform="rotate(-90 50 50)"
      />
      <circle cx="50" cy="95" r="3" fill="#F97316" />
    </svg>
  )
}

