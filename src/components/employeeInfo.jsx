


"use client";

import { useState } from "react";
import { motion } from "framer-motion";  // Importing Framer Motion
import { SelectInput } from "../utils/input";
import { RxCross2 } from "react-icons/rx";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AddStoryBoardForUserSchema } from "../utils/schema";
import { Button } from "../utils/button";
import { AxiosError } from "../utils/axiosError";
import { Axios, summary } from "../config/summaryAPI";

const EmployeeInfo = ({ employee, storyBoards }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(AddStoryBoardForUserSchema),
  });

  const filterStoryBoards = (a, b) => {
    return a.filter(sb => !b.some(empSb => empSb.storyBoardName === sb.storyBoardName));
  };

  const [filterStory, setFilterStory] = useState(filterStoryBoards(storyBoards, employee.storyBoards));
  const [employeeInfo, setEmployeeInfo] = useState(employee.storyBoards);

  const handleDeleteStoryBoard = async (story) => {
    try {
      const response = await Axios({
        ...summary.deleteStoryBoardForUser,
        params: {
          storyBoardId: story._id,
          userId: employee._id,
        },
      });

      if (response.data.success) {
        setEmployeeInfo((prev) => prev.filter(prevStory => prevStory._id !== story._id));
        setFilterStory((prev) => [...prev, { _id: story._id, storyBoardName: story.storyBoardName }]);
      }
    } catch (error) {
      AxiosError(error);
    }
  };

  const onSubmit = async (data) => {
    try {
      const payload = {
        ...data,
        userId: employee._id,
      };
      const response = await Axios({
        ...summary.addStoryBoardForUser,
        data: payload,
      });

      if (response.data.success) {
        fetchSingleEmployee();
        reset();
      }
    } catch (error) {
      AxiosError(error);
    }
  };

  const fetchSingleEmployee = async () => {
    try {
      const response = await Axios({
        ...summary.fetchSingleEmployee,
        url: `/api/employee/v1/getEmployee/${employee._id}`,
      });

      if (response.data.success) {
        setFilterStory(filterStoryBoards(storyBoards, response.data.data.storyBoards));
        setEmployeeInfo(response.data.data.storyBoards);
      }
    } catch (error) {
      AxiosError(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}  // Start from the top with opacity 0
      animate={{ opacity: 1, y: 0 }}    // Move to normal position
      transition={{ duration: 0.5, ease: "easeOut" }}  // Smooth animation
      className="w-full p-normal border-b"
    >
      <div className="pb-normal space-y-2 border-b w-1/4">
        <div className="flex justify-between items-center">
          <span className="text-small font-medium">Level:</span>
          <span className="text-small font-medium">{employee.level}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-small font-medium">Quota:</span>
          <span className="text-small font-medium">{employee.quota}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-small font-medium">Utilized Quota:</span>
          <span className="text-small font-medium">{employee.quotaUtilize}</span>
        </div>
      </div>

      <div className="mt-normal">
        <h3 className="text-small font-medium mb-normal">Selected Story Boards:</h3>
        {employee.storyBoards.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {employeeInfo.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex items-center gap-1 bg-secondary text-white rounded-large py-1 px-3"
              >
                {story.storyBoardName}
                <span
                  onClick={() => handleDeleteStoryBoard(story)}
                  className="ml-1 rounded-full hover:bg-gray-200 p-0.5 w-5 h-5 flex items-center justify-center"
                  aria-label={`Remove ${story}`}
                >
                  <RxCross2 />
                </span>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Story Selection */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <div className="flex items-start gap-2 mt-normal">
            <div className="flex flex-col gap-1 md:gap-2 w-2/6 relative">
              <div className="relative w-full">
                <select
                  {...register("storyBoardId")}
                  className="h-[36px] w-full border border-[#EBF0ED] rounded-large bg-primary px-3 pr-10 focus:border-secondary focus:outline-none text-labelSize"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Enter Story Board Name
                  </option>
                  {filterStory.map((option, index) => (
                    <option key={index} value={option._id}>
                      {option.storyBoardName}
                    </option>
                  ))}
                </select>
              </div>

              {errors["storyBoardId"] && (
                <span className="text-red-500 text-sm">
                  {errors["storyBoardId"]?.message}
                </span>
              )}
            </div>
            <Button type="submit">Add Story</Button>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default EmployeeInfo;

