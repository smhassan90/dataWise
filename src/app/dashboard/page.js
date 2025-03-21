"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Axios, summary } from "@/src/config/summaryAPI";
import { AxiosError } from "@/src/utils/axiosError";
import ShowStories from "@/src/components/showStories";

const Dashboard = () => {
  const [activeBoard, setActiveBoard] = useState(null);
  const user = useSelector(state => state?.auth?.user);
  console.log(user)
  const getEmployeeStoryBoards = async (data) => {
    try {
      const response = await Axios({
        ...summary.fetchSingleEmployee,
        url: `/api/employee/v1/getEmployee/${user?._id}`
      });
      if (response.data.success) {
        console.log(response.data.data)
        setActiveBoard(response.data.data.storyBoards.find(story => story.priority == 1))
      }
    } catch (error) {
      AxiosError(error)
    }
  }

  useEffect(()=>{
    getEmployeeStoryBoards()
  },[])

  console.log(activeBoard)
  return (
    <div>
      <div className="bg-white rounded-large p-normal">
        <div className="flex flex-col gap-10 shadow-md my-normal">
          {activeBoard && <ShowStories paramsId={activeBoard?._id} />}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
