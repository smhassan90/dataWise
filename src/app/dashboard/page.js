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

  useEffect(() => {
    getEmployeeStoryBoards()
  }, [])

  console.log(activeBoard)
  return (
    <div>
      <div className="bg-white rounded-large p-normal min-h-[calc(100vh-5.2rem)]">
        {/* {loading ?
          <div className="flex justify-center items-center h-[300px]">
            <PuffLoader color="#036666" size={100} />
          </div> : stories.length > 0 ? <div className="flex flex-col gap-10 bg-white my-normal">
            {activeBoard && <ShowStories paramsId={activeBoard?._id} />}
          </div> :
            <div className="flex justify-center items-center h-[300px]">
              <Image src={gifImage} alt="No Data Found" height={150} width={150} />
            </div>} */}
        {/* <div className="flex flex-col gap-10 shadow-md my-normal"> */}
        {activeBoard && <ShowStories paramsId={activeBoard?._id} />}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Dashboard;
