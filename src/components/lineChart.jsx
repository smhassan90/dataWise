import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
} from "recharts";
import { Button } from "../utils/button";
import { LuRefreshCcw } from "react-icons/lu";

import toast from "react-hot-toast";
import { AxiosError } from "../utils/axiosError";
import { useState } from "react"; // To manage the spin state

const   LineChartComponent = ({ graphData, handleRefreshQuery }) => {
  const [isSpinning, setIsSpinning] = useState(false); // To track if the icon should spin
  const keys =
    graphData && graphData?.data?.length > 0
      ? Object.keys(graphData.data[0])
      : [];

  const handleIconClick = async () => {
    setIsSpinning(true); // Start spinning the icon
    await handleRefreshQuery(); // Trigger your refresh logic
    setIsSpinning(false); // Stop spinning after refresh is done
  };

  return (
    <>
      <div className="w-[100%]">
        {/* Flex container to align button to the end */}
        <div className="flex justify-end relative w-[100%]">
          {/* Circle Button */}
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
        </div>

        <ResponsiveContainer className="mt-normal" width="100%" height={370}>
          <LineChart data={graphData.data} margin={{ left: 20, right: 30 }}>
            <CartesianGrid strokeDasharray="3 3" />
            {keys && keys.length > 0 && (
              <XAxis
                dataKey={
                  keys.find(
                    (key) => typeof graphData.data[0][key] === "string"
                  ) || keys[0]
                }
                angle={5}
                tick={{ fontSize: 12 }}
                interval={0}
              />
            )}
            <YAxis />
            {keys.map((key) => {
              const isNumeric = graphData.data.some(
                (item) => !isNaN(item[key])
              );
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
    </>
  );
};

export default LineChartComponent;
