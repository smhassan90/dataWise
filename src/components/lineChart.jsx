import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer
} from "recharts";
const LineChartComponent = ({ graphData }) => {
    const keys = graphData && graphData?.data?.length > 0 ? Object.keys(graphData.data[0]) : [];
    return (
        <ResponsiveContainer width="100%" height={370}>
            <LineChart data={graphData.data} margin={{ left: 20, right: 30 }}>
                <CartesianGrid strokeDasharray="3 3" />
                {keys && keys.length > 0 && (
                    <XAxis
                        dataKey={keys.find((key) => typeof graphData.data[0][key] === 'string') || keys[0]}
                        angle={-15}
                        tick={{ fontSize: 11 }}
                        interval={0}
                    />
                )}
                <YAxis />
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
    )
}

export default LineChartComponent