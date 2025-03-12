"use client";
import { useEffect, useState } from "react";
import { FaSearch, FaMicrophone } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { FaChevronDown } from "react-icons/fa";
import { FaRedo } from "react-icons/fa";
import { Axios, summary } from "../../../config/summaryAPI";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Button } from "@/src/utils/button";
import { method } from "lodash";
import Suggestion from "@/src/components/suggestion";
import BarChart from "@/src/components/barGroup";

export default function Dashboard() {
  const [sqlQuery, setSqlQuery] = useState(""); // SQL Query State
  const [timeRange, setTimeRange] = useState("week");
  const [showSQL, setShowSQL] = useState(true);
  const [graphData, setGraphData] = useState([]);
  const [activeTab, setActiveTab] = useState("Line Chart")
  const [finalData, setFinalData] = useState([]);
  const [keys, setKeys] = useState([]);
  const [xAxisKey, setXAxisKey] = useState('');
  const [yAxisKey, setYAxisKey] = useState('');
  const tabs = ["Line Chart", "Bar Chart", "Report"]

  useEffect(() => {
    const extractedData = graphData?.data?.map((item) => ({
      id: item.ID, // User ID
      name: `${item.ID} - ${item.NAME}`,
      income: Number(item.total_income),
    }));
    setFinalData(extractedData)
    if (graphData?.data?.length) {
      const extractedKeys = Object.keys(graphData.data[0]);
      setKeys(extractedKeys);
      console.log(extractedKeys)
      const numberKeys = extractedKeys.filter((key) =>
        graphData.data.every((item) => !isNaN(item[key]))
      );
      const stringKeys = extractedKeys.filter((key) =>
        graphData.data.some((item) => isNaN(item[key]))
      );
      setXAxisKey(stringKeys);
      setYAxisKey(numberKeys);
    }
  }, [graphData])

  console.log(xAxisKey)
  console.log(yAxisKey)
  console.log(graphData)

  return (
    <div>
      <div className="min-h-screen bg-white rounded-large p-normal">
        <h1 className="font-manrope font-light">
          Ask away, and feel the magic : &#41;
        </h1>
        <Suggestion setGraphData={setGraphData} tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="p-normal rounded-large shadow-md before:bg-white w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-normal">
            <h2 className="text-small font-semibold font-manrope mb-normal sm:mb-0">
              {activeTab}
            </h2>

            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <Button onClick={() => setShowSQL(!showSQL)} className="text-labelSize rounded-normal">
                Show SQL Query
              </Button>
            </div>
          </div>
          {finalData && <div className="flex gap-4 mb-4">
            <div>
              <label>X-Axis:</label>
              <select onChange={(e) => setXAxisKey(e.target.value)} value={xAxisKey}>
                {xAxisKey && xAxisKey?.map((key) => (
                  <option key={key} value={key}>{key}</option>
                ))}
              </select>
            </div>
            <div>
              <label>Y-Axis:</label>
              <select onChange={(e) => setYAxisKey(e.target.value)} value={yAxisKey}>
                {xAxisKey && yAxisKey?.map((key) => (
                  <option key={key} value={key}>{key}</option>
                ))}
              </select>
            </div>
          </div>}

          {/* Graph & SQL Query Container */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className={`${showSQL ? "lg:w-[770px]" : "w-full"
              } transition-all`}
            >
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={finalData}
                  margin={{ left: 20, right: 30 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="name"
                    angle={-5} // Rotate Labels
                    // textAnchor="end" // Align Properly
                    tick={{ fontSize: 12 }} // Smaller Font
                    interval={0}
                  />
                  <YAxis />

                  <Tooltip
                    content={({ active, payload }) => {
                      console.log(payload);
                      console.log(active);
                      if (active && payload && payload.length) {
                        console.log(payload);
                        const { id, income, name } = payload[0].payload;

                        return (
                          <div className="bg-secondary text-white p-3 rounded-md shadow-md">
                            <p>
                              <strong>ID:</strong> {payload[0].payload.id}
                            </p>
                            <p>
                              <strong>Name:</strong> {payload[0].payload.name}
                            </p>
                            <p>
                              <strong>Income:</strong> {payload[0].value}
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="income"
                    stroke="#036666"
                    strokeWidth={2}
                    dot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {showSQL && (
              <div className="bg-primary p-4 rounded-large shadow-md w-full lg:w-[285px] h-auto lg:h-72 mt-4 lg:mt-0">
                <div className="flex justify-between items-end border-b pb-2">
                  <button className="flex items-center gap-1 font-manrope font-light text-small">
                    SQL Statement
                    {/* <FaChevronDown className="rotate-0 transition-transform" /> */}
                  </button>
                  <Button className="space-x-2 text-labelSize rounded-normal">
                    <FaRedo />
                    <span>Re-run</span>
                  </Button>
                </div>
                <div className="p-normal text-labelSize font-mono overflow-auto h-52">
                  <pre className="whitespace-pre-wrap break-words font-manrope font-normal">
                    {graphData.query ? graphData.query : "Loading..."}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Bar Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 shadow-md gap-6 mb-6 mt-4">
          <BarChart />
          <BarChart />
        </div>
      </div>
    </div>
  );
}
