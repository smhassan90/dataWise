"use client";
import React, { useEffect, useState } from "react";
import { Axios, summary } from "../config/summaryAPI";
import { AxiosError } from "../utils/axiosError";
import LineChartComponent from "./lineChart";
import BarChartComponent from "./barChart";
import { AiOutlineFullscreenExit, AiOutlineFullscreen } from "react-icons/ai";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Button } from "../utils/button";
import ReportChartComponent from "./reportChart";
import toast from "react-hot-toast";

const ItemType = "CHART";

const DraggableGraph = ({ story, index, moveCard, handleRefreshQuery }) => {
  const [, ref] = useDrag({ type: ItemType, item: { index } });
  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveCard(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => ref(drop(node))}
      className="shadow-lg border border-gray-300 rounded-xl p-4 cursor-move bg-gradient-to-br from-blue-100 to-white hover:shadow-2xl transition duration-30"
    >
      <div className="w-full rounded-xl h-[400px] bg-white p-4 shadow-md">
        {story.resultType === "Line Chart" && (
          <LineChartComponent graphData={story} handleRefreshQuery={()=>handleRefreshQuery(story, index)}/>
        )}
        {story.resultType === "Bar Chart" && (
          <BarChartComponent graphData={story} handleRefreshQuery={()=>handleRefreshQuery(story, index)}/>
        )}
        {story.resultType === "Report" && (
          <ReportChartComponent graphData={story} handleRefreshQuery={()=>handleRefreshQuery(story, index)}/>
        )}
      </div>
    </div>
  );
};

const ShowStories = ({ stories , setStories}) => {
  // const [stories, setStories] = useState([]);
  const [fullWidth, setFullWidth] = useState(false);

  // useEffect(() => {
  //   fetchStories();
  // }, []);

  // const fetchStories = async () => {
  //   try {
  //     const response = await Axios({
  //       ...summary.fetchStories,
  //       url: `/api/integration/v1/getAllStories/${paramsId}`
  //     });

  //     if (response.data.success) {
  //       setStories(response.data.data);
  //     }
  //   } catch (error) {
  //     AxiosError(error);
  //   }
  // };

  const handleRefreshQuery = async (graphData,index) => {
    try {
      const payload = {
        Query: graphData.query
      }
      const response = await Axios({
        ...summary.refreshQuery,
        data: payload
      })
      if (response.data.success) {
        toast.success(response.data.message)
        const updatedStories = [...stories];
        updatedStories[index] = {
          ...updatedStories[index],
          data: response.data.data
        };
        setStories(updatedStories);
      }
    } catch (error) {
      console.log(error)
      AxiosError(error)
    }
  }

  const moveCard = (fromIndex, toIndex) => {
    const updatedStories = [...stories];
    const [movedItem] = updatedStories.splice(fromIndex, 1);
    updatedStories.splice(toIndex, 0, movedItem);
    setStories(updatedStories);
  };

  const toggleWidth = () => {
    setFullWidth(!fullWidth);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-normal">
        {/* <Button onClick={toggleWidth} className="flex items-center gap-3 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
          {fullWidth ? "Show 2 Graphs per Row" : "Expand Graphs Full Width"}
          {fullWidth ? <AiOutlineFullscreenExit size={24} /> : <AiOutlineFullscreen size={24} />}
        </Button> */}

        <div className={`grid ${fullWidth ? "grid-cols-1" : "grid-cols-1"} gap-3 mt-normal`}>
          {stories?.map((story, index) => (
            <DraggableGraph key={index} index={index} story={story} handleRefreshQuery={handleRefreshQuery} />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default ShowStories;
