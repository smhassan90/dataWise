"use client";

import { useState } from "react";
import { FaSearch, FaMicrophone } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { FaChevronDown } from "react-icons/fa";
import { FaRedo } from "react-icons/fa";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState("week");
  const [selectedMonth, setSelectedMonth] = useState("This Month");
  const [isOpen, setIsOpen] = useState(false);

  const [isListening, setIsListening] = useState(false);

  const [showSQL, setShowSQL] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [activeTab, setActiveTab] = useState("Report");
  const suggestions = [
    "AI can help optimize business operations by automating repetitive tasks and providing predictive analytics.",
    "Machine learning models analyze large datasets to find patterns and trends, helping businesses make informed decisions.",
    "Cloud computing allows companies to store and process data remotely, improving scalability and security.",
    "Natural language processing (NLP) enables AI systems to understand and respond to human language, making chatbots more efficient.",
    "Data security is a growing concern, and AI-based encryption techniques can help protect sensitive information.",
    "Automation in manufacturing reduces costs and increases efficiency by using robots and AI-driven machinery.",
    "Self-driving cars rely on AI algorithms to navigate roads safely, reducing human errors in transportation.",
  ];
  const data = [
    { date: 10, value: 3000 },
    { date: 11, value: 2500 },
    { date: 12, value: 4000 },
    { date: 13, value: 2000 },
    { date: 14, value: 5000 },
    { date: 15, value: 4500 },
    { date: 16, value: 6000 },
  ];

  const dispatch = useDispatch();
  const title = useSelector((state) => state.sideBar.title);
  const tabs = ["Line of graphs ", "Report"];

  const { width, sidebar } = useSelector((state) => state.sideBar);

  const handleVoiceInput = () => {
    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();

    recognition.lang = "en-US";
    setIsListening(true); // Mic color change karega
    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      document.getElementById("searchInput").value = transcript;
    };

    recognition.onend = () => {
      setIsListening(false); // Mic wapas gray ho jayega
    };
  };

  return (
    <div>
      <div className="min-h-screen  mt-2 bg-[#fdfbf6] p-2">
        <h1 className="font-manrope font-light">
          Ask away, and feel the magic :)
        </h1>
        <div className="mx-auto max-w-7xl">
        <div className="mt-4 mb-6 relative">
      {/* Tabs Section */}
      <div className="flex justify-between items-center p-2 rounded-large shadow-md w-full">
        {/* Tabs (Left Side) */}
        <div className="flex space-x-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 text-sm font-medium rounded-large transition-all duration-300 ${
                activeTab === tab
                  ? "bg-secondary text-white rounded-large shadow-md"
                  : "bg-gray-200 text-gray-700 rounded-large hover:bg-gray-300"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* More Suggestions Button (Right Corner) */}
        <button
          className="bg-secondary text-white rounded-large shadow-md px-4 py-2 text-sm font-medium transition-all duration-300"
          onClick={() => setShowSuggestions(!showSuggestions)}
        >
          {showSuggestions ? "Hide Suggestions" : "More Suggestions"}
        </button>
      </div>

      {/* Suggestion Box (Show/Hide Based on State) */}
      {showSuggestions && (
        <div className="w-full bg-white shadow-md rounded-large p-3  mt-3 max-h-56 overflow-y-auto transition-all duration-300">
          
          <div className="space-y-2">
            {suggestions.map((suggestion, index) => (
              <p key={index} className="text-gray-600   text-sm border-b pb-2 last:border-b-0">
                {suggestion}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Search Input */}
      <div className="relative mt-4">
        <input
          id="searchInput"
          placeholder="Search a Metric ..."
          className="pl-3 pr-10 text-labelSize py-3 rounded-large w-full border border-[#AFAFAF] focus:outline-none"
        />
        <FaSearch className="absolute right-12 top-4 h-4 w-4 text-gray-400" />
        <FaMicrophone className="absolute right-4 top-4 h-4 w-4 cursor-pointer transition-colors duration-300" />
      </div>
    </div>





          

          <div className="p-5 rounded-large shadow-md bg-white w-full">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold font-manrope">
                Appointment
              </h2>
              <button
                className="bg-secondary ml-[580px] text-white px-4 py-2 rounded-large"
                onClick={() => setShowSQL(!showSQL)}
              >
                Show SQL Query
              </button>
              <button className="bg-secondary text-white px-4 py-2 rounded-large">
                {selectedMonth}
              </button>
            </div>

            {/* Graph & SQL Query Container */}
            <div className="flex gap-4">
              {/* Graph Section */}
              <div
                className={`${showSQL ? "w-[810px]" : "w-full"} transition-all`}
              >
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
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#FF7F50"
                      strokeWidth={2}
                      dot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* SQL Query Box (Conditional Rendering) */}
              {showSQL && (
                <div className="bg-white p-4 rounded-large  shadow-md w-[285px] h-72">
                  <div className="flex justify-between items-center border-b pb-2">
                    <button className="flex items-center gap-1 font-manrope  font-light">
                      SQL Statement{" "}
                      <FaChevronDown className="rotate-0 transition-transform" />
                    </button>
                    <button className="bg-secondary text-white px-3 py-1 rounded-large flex items-center gap-1 text-sm">
                      <FaRedo /> Re-run
                    </button>
                  </div>
                  <div className="mt-3 p-3 bg-gray-100 rounded-md text-sm font-mono overflow-auto max-w-full">
                    <pre className="whitespace-pre-wrap break-words font-manrope font-normal">
                      CREATE TABLE IF NOT EXISTS Customer( CustID int NOT NULL,
                      Name varchar, Email varchar, DOB date, CONSTRAINT customer
                      PRIMARY KEY );
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bar Charts */}
          <div className="grid grid-cols-2 shadow-md gap-6 mb-6 mt-10">
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
                  <BarGroup
                    values={[50, 30]}
                    colors={["#021A22BF", "#F97316"]}
                  />
                  <BarGroup values={[20, 35]} colors={["#6B7280", "#F97316"]} />
                  <BarGroup values={[15, 25]} colors={["#6B7280", "#F97316"]} />
                  <BarGroup values={[40, 30]} colors={["#6B7280", "#F97316"]} />
                  <BarGroup values={[50, 35]} colors={["#6B7280", "#F97316"]} />
                  <BarGroup values={[25, 15]} colors={["#6B7280", "#F97316"]} />
                  <BarGroup values={[35, 45]} colors={["#6B7280", "#F97316"]} />
                </div>
              </div>
            </div>

            <div className="border-none shadow-md bg-white rounded-large">
              <div className="p-4 pb-0">
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4 text-xs">
                    <span className="text-gray-500 border-b-2 border-gray-800">
                      Weekly Average
                    </span>
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
        </div>
      </div>
    </div>
  );
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
  );
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
  );
}
