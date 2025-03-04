"use client"

import { Button } from "@/src/utils/button";
import AppointmentChart from "@/src/utils/graph";
import { useState } from "react"
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState("week")
  const [selectedMonth, setSelectedMonth] = useState('This Month');

  const [activeTab, setActiveTab] = useState("Report");
  const data = [
    { date: 10, value: 3000 },
    { date: 11, value: 2500 },
    { date: 12, value: 4000 },
    { date: 13, value: 2000 },
    { date: 14, value: 5000 },
    { date: 15, value: 4500 },
    { date: 16, value: 6000 }
  ];

  const dispatch = useDispatch();
  const title = useSelector((state) => state.sideBar.title);
  const tabs = ["Line of graphs ", "Report",];

  const { width, sidebar } = useSelector((state) => state.sideBar);
  return (
    <div>
    <div className="min-h-screen  mt-2 bg-[#fdfbf6] p-2">
      <h1 className="">Ask away, and feel the magic :)</h1>
      <div className="mx-auto max-w-7xl">
        
      < div className="mt-4 mb-6 relative">
      {/* Tabs Section - Centered & Compact */}
      <div className="flex justify-start space-x-3  p-2 rounded-large shadow-md w-fit ">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
              activeTab === tab
                ? "bg-secondary text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="relative mt-4">
        <input
          placeholder="Search a Metric ..."
          className="pl-3 text-labelSize py-3 rounded-large w-full border border-[#AFAFAF] focus:outline-none"
        />
        <FaSearch className="absolute right-4 top-4 h-4 w-4 text-gray-400" />
      </div>
    </div>



        {/* Line Chart */}

        
        <div className="p-5 border rounded-large shadow-md bg-white w-full">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">Appointment</h2>
        <button className="bg-secondary  text-white px-4 py-2 rounded-large">{selectedMonth}</button>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: '#FF7F50', color: 'white', borderRadius: '5px' }} />
          <Line type="monotone" dataKey="value" stroke="#FF7F50" strokeWidth={2} dot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>

        {/* Bar Charts */}
        <div className="grid grid-cols-2 gap-6 mb-6 mt-10">
          <div className="border-none shadow-sm bg-white rounded-large">
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

          <div className="border-none shadow-sm bg-white rounded-large">
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
       



        {/* Add to Dashboard Button */}
      
      </div>
    </div>
    </div>
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

