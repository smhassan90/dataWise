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
import { Button } from "../utils/button";
import { Axios, summary } from "../config/summaryAPI";
import toast from "react-hot-toast";
const LineChartComponent = ({ graphData }) => {
    console.log(graphData)
    const handleRefreshQuery = async () => {
        try {
            const payload = {
                newQuery: graphData.query
            }
            const response = await Axios({
                ...summary.reRunQuery,
                data: payload
            })
            if (response.data.success) {
                toast.success(response.data.message)
                console.log(response.data.data)
                // setGraphData(response.data.data)
            }
        } catch (error) {
            AxiosError(error)
        }
    }
    const keys = graphData && graphData?.data?.length > 0 ? Object.keys(graphData.data[0]) : [];
    return (
        <>
            <Button onClick={handleRefreshQuery}>Refresh</Button>
            <ResponsiveContainer width="100%" height={370}>
                <LineChart data={graphData.data} margin={{ left: 20, right: 30 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    {keys && keys.length > 0 && (
                        <XAxis
                            dataKey={keys.find((key) => typeof graphData.data[0][key] === 'string') || keys[0]}
                            angle={5}
                            tick={{ fontSize: 12 }}
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
        </>
    )
}

export default LineChartComponent