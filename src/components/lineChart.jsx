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
import { useState } from "react";
import { PuffLoader } from "react-spinners";

const LineChartComponent = ({ graphData, handleRefreshQuery, isLoading }) => {
  const [isSpinning, setIsSpinning] = useState(false)
  const keys = graphData && graphData?.data?.length > 0 ? Object.keys(graphData.data[0]) : [];

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
      <ResponsiveContainer className="mt-normal" width="100%" height={370}>
        {isLoading ? (
          <div className="flex justify-center items-center h-[300px]">
            <PuffLoader color="#036666" size={100} />
          </div>
        ) : <LineChart data={graphData.data} margin={{ left: 20, right: 30 }}>
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
            <Tooltip />
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
        }
      </ResponsiveContainer>
    </>
  );
};

export default LineChartComponent;
