"use client";
import { useEffect, useState } from "react";
import { FaSearch, FaMicrophone } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { FaChevronDown } from "react-icons/fa";
import { FaRedo } from "react-icons/fa";
import { Axios, summary } from "../../../config/summaryAPI";
import { GoPencil } from "react-icons/go";

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
import SqlQuery from "@/src/components/sqlQuery";

export default function Dashboard() {
  const [showSQL, setShowSQL] = useState(false);
  const [graphData, setGraphData] = useState("");
  const [activeTab, setActiveTab] = useState("Line Chart")
  const [SQLQuery,setSQLQuery] = useState('')
  const keys = graphData && graphData.data.length > 0 ? Object.keys(graphData.data[0]) : [];
  const tabs = ["Line Chart", "Bar Chart", "Report"]

  useEffect(()=>{
    setSQLQuery(graphData.query)
  },[graphData])
  return (
    <div>
      <div className="min-h-screen bg-white rounded-large p-normal">
        <h1 className="font-manrope font-light">
          Ask away, and feel the magic : &#41;
        </h1>
        <Suggestion graphData={graphData} setGraphData={setGraphData} tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        {graphData && <div className="p-normal rounded-large shadow-md before:bg-white w-full">
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

          {/* Graph & SQL Query Container */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className={`${showSQL ? "lg:w-[770px]" : "w-full"
              } transition-all`}
            >
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={graphData.data}
                  margin={{ left: 20, right: 30 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  {keys && keys.length > 0 && (
                    <XAxis
                      dataKey={keys.find((key) => typeof graphData.data[0][key] === 'string') || keys[0]}
                      angle={-5}
                      tick={{ fontSize: 12 }}
                      interval={0}
                    />
                  )}
                  <YAxis />

                  {/* <Tooltip
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
                  /> */}
                  {/* <Line
                    type="monotone"
                    dataKey={graphData.data.total_income}
                    stroke="#036666"
                    strokeWidth={2}
                    dot={{ r: 6 }}
                  /> */}
                  {keys.map((key) => {
                    const isNumeric = graphData.data.some((item) => !isNaN(item[key]));
                    return isNumeric ? (
                      <Line
                        key={key}
                        type="monotone"
                        dataKey={key}
                        stroke="#036666"
                        strokeWidth={2}
                        dot={{ r: 6 }}
                      />
                    ) : null;
                  })}
                </LineChart>
              </ResponsiveContainer>
            </div>

            {showSQL && (<SqlQuery SQLQuery={SQLQuery} setSQLQuery={setSQLQuery}/>)}
          </div>
        </div>}
        {/* Bar Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 shadow-md gap-6 mb-6 mt-4">
          <BarChart />
          <BarChart />
        </div>
      </div>
    </div>
  );
}
