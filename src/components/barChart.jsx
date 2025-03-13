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
const BarChartComponent = ({ graphData }) => {
  const fillsColor = ["#036666", '#ff8548']
  const keys = graphData && graphData.data.length > 0 ? Object.keys(graphData.data[0]) : [];
  return (
    <ResponsiveContainer width="100%" height={370}>
      <BarChart data={graphData.data}>
        <CartesianGrid strokeDasharray="3 3" />
        {keys && keys.length > 0 && (
          <XAxis
            dataKey={keys.find((key) => typeof graphData.data[0][key] === 'string') || keys[0]}
            angle={-5}
            tick={{ fontSize: 12 }}
            interval={0}
          />
        )}
        {/* <YAxis domain={[0, maxValue]} /> */}
        <YAxis />
        <Tooltip />
        <Legend />
        {keys.filter((key) =>
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
    </ResponsiveContainer>
  );
};

export default BarChartComponent;