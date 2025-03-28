

"use client";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/src/utils/button";
import Suggestion from "@/src/components/suggestion";
import SqlQuery from "@/src/components/sqlQuery";
import LineChartComponent from "@/src/components/lineChart";
import BarChartComponent from "@/src/components/barChart";
import ShowStories from "@/src/components/showStories";
import ReportChartComponent from "@/src/components/reportChart";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { MdArrowBackIosNew } from "react-icons/md";
import { useRouter } from "next/navigation";
import { Axios, summary } from "@/src/config/summaryAPI";
import { AxiosError } from "@/src/utils/axiosError";

const Dashboard = () => {
  const { storyBoardId } = useParams();
  const [showSQL, setShowSQL] = useState(false);
  const [graphData, setGraphData] = useState("");
  const [activeTab, setActiveTab] = useState("Line Chart");
  const [SQLQuery, setSQLQuery] = useState("");
  const [stories, setStories] = useState([]);
  const [slideDirection, setSlideDirection] = useState("left");
  const [isAnimating, setIsAnimating] = useState(false);
  const contentRef = useRef(null);

  const tabs = ["Line Chart", "Bar Chart", "Report"];
  const user = useSelector((state) => state?.auth?.user);

  const router = useRouter();

  const handleBackClick = () => {
    router.push("/dashboard/storyBoard");
  };

  useEffect(() => {
    setSQLQuery(graphData.query);
  }, [graphData]);

  useEffect(() => {
    fetchStories();
    // Add fade-in animation on initial page load
    const dashboard = document.getElementById("dashboard-container");
    if (dashboard) {
      dashboard.classList.add("animate-fadeIn");
    }
  }, []);

  const fetchStories = async () => {
    try {
      const response = await Axios({
        ...summary.fetchStories,
        url: `/api/integration/v1/getAllStories/${storyBoardId}`,
      });

      if (response.data.success) {
        setStories(response.data.data);
      }
    } catch (error) {
      console.log(error)
      AxiosError(error);
    }
  };

  const handleTabChange = (tab) => {
    if (tab === activeTab || isAnimating) return;

    // Determine slide direction based on tab index
    const currentIndex = tabs.indexOf(activeTab);
    const newIndex = tabs.indexOf(tab);
    const direction = newIndex > currentIndex ? "left" : "right";

    setSlideDirection(direction);
    setIsAnimating(true);

    // Start slide-out animation
    if (contentRef.current) {
      contentRef.current.classList.remove("animate-slideInLeft", "animate-slideInRight");
      contentRef.current.classList.add(direction === "right" ? "animate-slideOutLeft" : "animate-slideOutRight");
    }

    // Change tab after animation completes
    setTimeout(() => {
      setActiveTab(tab);

      // Start slide-in animation
      if (contentRef.current) {
        contentRef.current.classList.remove("animate-slideOutLeft", "animate-slideOutRight");
        contentRef.current.classList.add(direction === "left" ? "animate-slideInRight" : "animate-slideInLeft");
      }

      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }, 300);
  };

  const toggleSQL = () => {
    setShowSQL(!showSQL);
  };

  return (
    <div id="dashboard-container" className="opacity-0 overflow-x-hidden">
      <div className="bg-white rounded-large p-normal min-h-[calc(100vh-5.2rem)] overflow-x-hidden">
        {user?.level?.levelNumber <= 3 && (
          <>
            <div className="flex items-center">
              <MdArrowBackIosNew
                size={15}
                style={{ cursor: "pointer" }}
                onClick={handleBackClick}
                className="transition-transform duration-200 hover:scale-110"
              />
              <h1 className="font-manrope font-light ml-2">
                Ask away, and feel the magic : &#41;
              </h1>
            </div>
            <Suggestion
              storyBoardId={storyBoardId}
              graphData={graphData}
              setGraphData={setGraphData}
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={handleTabChange}
              setStories={setStories}
              stories={stories}
            />
            {graphData && (
              <div className="p-normal rounded-large shadow-md before:bg-white w-full overflow-x-hidden">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-normal">
                  <h2 className="text-small font-semibold font-manrope mb-normal sm:mb-0">
                    {activeTab}
                  </h2>

                  <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                    {/* Button with animation */}
                    <Button
                      onClick={toggleSQL}
                      className="text-labelSize rounded-normal transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-md"
                    >
                      {showSQL ? "Hide SQL Query" : "Show SQL Query"}
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 overflow-x-hidden">
                  <div
                    className={`${showSQL ? "lg:w-[930px]" : "w-full"
                      } transition-all duration-300 overflow-x-hidden`}
                  >
                    {/* Tab content with swipe animation - fixed to prevent scrollbar */}
                    <div ref={contentRef} className="w-full overflow-hidden relative">
                      <div className="tab-content-wrapper">
                        {activeTab === "Line Chart" && (
                          <LineChartComponent graphData={graphData} />
                        )}
                        {activeTab === "Bar Chart" && (
                          <BarChartComponent graphData={graphData} />
                        )}
                        {activeTab === "Report" && (
                          <ReportChartComponent graphData={graphData} />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* SQL Query with simple transition */}
                  <div className={`transition-all duration-300 ease-in-out ${showSQL ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
                    {showSQL && (
                      <SqlQuery
                        storyBoardId={storyBoardId}
                        SQLQuery={SQLQuery}
                        setSQLQuery={setSQLQuery}
                        activeTab={activeTab}
                        setGraphData={setGraphData}
                      />
                    )}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
        {stories.length > 0 && <div className="flex flex-col gap-10 bg-white my-normal">
          <ShowStories stories={stories} setStories={setStories} />
        </div>}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        /* Page load animation */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        /* Tab swipe animations - fixed to prevent scrollbar */
        @keyframes slideOutLeft {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(-10%); opacity: 0; }
        }
        
        @keyframes slideOutRight {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(10%); opacity: 0; }
        }
        
        @keyframes slideInLeft {
          from { transform: translateX(10%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInRight {
          from { transform: translateX(-10%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out forwards;
        }
        
        .animate-slideOutLeft {
          animation: slideOutLeft 0.3s ease-in-out forwards;
        }
        
        .animate-slideOutRight {
          animation: slideOutRight 0.3s ease-in-out forwards;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.3s ease-in-out forwards;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.3s ease-in-out forwards;
        }
        
        /* Fix for scrollbar issue */
        .tab-content-wrapper {
          width: 100%;
          position: relative;
          overflow: hidden;
        }
        
        /* Ensure body doesn't show scrollbar during animations */
        :global(body) {
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;