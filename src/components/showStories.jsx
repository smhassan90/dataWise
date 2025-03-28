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

const DraggableGraph = ({
  story,
  index,
  moveCard,
  handleRefreshQuery,
  isLoading,
}) => {
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
      className="rounded-xl cursor-move transition duration-30"
    >
      <div className="w-full border border-secondary rounded-large bg-white p-normal shadow-md">
        {story.resultType === "Line Chart" && (
          <LineChartComponent
            graphData={story}
            handleRefreshQuery={() => handleRefreshQuery(story, index)}
            isLoading={isLoading}
          />
        )}
        {story.resultType === "Bar Chart" && (
          <BarChartComponent
            graphData={story}
            handleRefreshQuery={() => handleRefreshQuery(story, index)}
            isLoading={isLoading}
          />
        )}
        {story.resultType === "Report" && (
          <ReportChartComponent
            graphData={story}
            handleRefreshQuery={() => handleRefreshQuery(story, index)}
            isLoading={isLoading}
          />
        )}
      </div>
    </div>
  );
};

const ShowStories = ({ paramsId }) => {
  const [stories, setStories] = useState([]);
  const [fullWidth, setFullWidth] = useState(false);
  const [loader, setLoader] = useState(Array(stories?.length).fill(false));
  useEffect(() => {
    fetchStories();
  }, []);
  const fetchStories = async () => {
    try {
      const response = await Axios({
        ...summary.fetchStories,
        url: `/api/integration/v1/getAllStories/${paramsId}`,
      });

      if (response.data.success) {
        setStories(response.data.data);
      }
    } catch (error) {
      AxiosError(error);
    }
  };
  const handleRefreshQuery = async (graphData, index) => {
    try {
      setLoader((prev) => {
        const updated = [...prev];
        updated[index] = true;
        return updated;
      });
      console.log(loader);
      const payload = {
        Query: graphData.query,
      };
      const response = await Axios({
        ...summary.refreshQuery,
        data: payload,
      });
      if (response.data.success) {
        toast.success(response.data.message);
        const updatedStories = [...stories];
        updatedStories[index] = {
          ...updatedStories[index],
          data: response.data.data,
        };
        setStories(updatedStories);
      }
    } catch (error) {
      console.log(error);
      AxiosError(error);
    } finally {
      setLoader((prev) => {
        const updated = [...prev];
        updated[index] = false;
        return updated;
      });
    }
  };

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
      <div className="">
        <div
          className={`grid ${
            fullWidth ? "grid-cols-1" : "grid-cols-1"
          } gap-3 mt-normal`}
        >
          {stories?.map((story, index) => (
            <DraggableGraph
              key={index}
              index={index}
              story={story}
              handleRefreshQuery={handleRefreshQuery}
              isLoading={loader[index]}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default ShowStories;
