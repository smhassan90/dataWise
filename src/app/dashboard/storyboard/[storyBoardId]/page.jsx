"use client";
import { useEffect, useState } from "react";
import { Button } from "@/src/utils/button";
import Suggestion from "@/src/components/suggestion";
import SqlQuery from "@/src/components/sqlQuery";
import LineChartComponent from "@/src/components/lineChart";
import BarChartComponent from "@/src/components/barChart";
import ShowStories from "@/src/components/showStories";
import ReportChartComponent from "@/src/components/reportChart";
import { useParams } from "next/navigation";

const Dashboard = () => {
    const { storyBoardId } = useParams()
    const [showSQL, setShowSQL] = useState(false);
    const [graphData, setGraphData] = useState("");
    const [activeTab, setActiveTab] = useState("Line Chart")
    const [SQLQuery, setSQLQuery] = useState('')
    const tabs = ["Line Chart", "Bar Chart", "Report"]
    // const maxValue = Math.max(
    //   ...keys.flatMap((key) => graphData.data.map((item) => item[key])).filter((val) => !isNaN(val))
    // );

    useEffect(() => {
        setSQLQuery(graphData.query)
    }, [graphData])
    return (
        <div>
            <div className=" bg-white rounded-large p-normal">
                <h1 className="font-manrope font-light">
                    Ask away, and feel the magic : &#41;
                </h1>
                <Suggestion storyBoardId={storyBoardId} graphData={graphData} setGraphData={setGraphData} tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
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

                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className={`${showSQL ? "lg:w-[930px]" : "w-full"
                            } transition-all`}
                        >
                            {activeTab === "Line Chart" && <LineChartComponent graphData={graphData} />}
                            {activeTab === "Bar Chart" && <BarChartComponent graphData={graphData} />}
                            {activeTab === "Report" && <ReportChartComponent graphData={graphData} />}
                        </div>

                        {showSQL && (<SqlQuery SQLQuery={SQLQuery} setSQLQuery={setSQLQuery} activeTab={activeTab} setGraphData={setGraphData} />)}
                    </div>
                </div>}
                <div className="flex flex-col gap-10 shadow-md my-normal">

                    <ShowStories paramsId={storyBoardId} />
                </div>
            </div>
        </div>
    );
}


export default Dashboard
