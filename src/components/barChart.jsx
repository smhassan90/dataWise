"use client"
import { useEffect, useState } from "react";
import { LuRefreshCcw } from "react-icons/lu";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  BarChart,
  ResponsiveContainer,
} from "recharts";
import { Button } from "../utils/button";
import { PuffLoader } from "react-spinners";
const BarChartComponent = ({ graphData, handleRefreshQuery, isLoading }) => {
  const [keys, setKeys] = useState()
  const [isSpinning, setIsSpinning] = useState(false);

  const fillsColor = ["#036666", '#ff8548']
  useEffect(() => {
    const keys = graphData && graphData?.data?.length > 0 ? Object.keys(graphData.data[0]) : [];
    setKeys(keys)
  }, [graphData])

  const handleIconClick = async () => {
    setIsSpinning(true);
    await handleRefreshQuery();
    setIsSpinning(false);
  };

  return (
    <>
      {graphData.storyName && <div className="flex justify-between items-center relative w-[100%]">
        <span>{graphData.storyName}</span>
        <Button className="space-x-4" onClick={handleIconClick}>
          <span>Sync</span>
          <LuRefreshCcw
            className=""
            size={19}
            style={{
              color: "white",
              transform: isSpinning ? "rotate(360deg)" : "rotate(0deg)", // Rotate icon
              transition: "transform 0.9s ease", // Smooth rotation
            }}
          />
        </Button>
      </div>}
      <ResponsiveContainer className="mt-2" width="100%" margin-top={44} height={370}>
        {isLoading ? (
          <div className="flex justify-center items-center h-[300px]">
            <PuffLoader color="#036666" size={100} />
          </div>
        ) : <BarChart data={graphData.data}>
          <CartesianGrid strokeDasharray="3 3" />
          {keys && keys.length > 0 && (
            <XAxis
              dataKey={keys.find((key) => typeof graphData.data[0][key] === 'string') || keys[0]}
              angle={-11}
              tick={{ fontSize: 12 }}
              interval={0}
            />
          )}
          {/* <YAxis domain={[0, maxValue]} /> */}
          <YAxis />
          <Tooltip />
          <Legend />
          {keys && keys?.filter((key) =>
            graphData.data.some((item) => !isNaN(item[key]))
          ).map((key, index) => (
            <Bar
              key={key}
              type="monotone"
              dataKey={key}
              fill={fillsColor[index]}
              dot={{ r: 6 }}
            />))}
        </BarChart>
        }
      </ResponsiveContainer>
    </>
  );
};

export default BarChartComponent;