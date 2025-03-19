// "use client"

// import { useState } from "react"
// import { Button } from "../utils/button"

// const EmployeeInfo = () => {
//   // This is mock data - replace with your actual state and handlers
//   const [selectedStory, setSelectedStory] = useState("")
//   const [storiesList, setStoriesList] = useState(["User Journey", "Product Launch"])
//   const stories = ["User Journey", "Product Launch", "Feature Release", "Marketing Campaign", "Customer Feedback","Feedback","Reviews","Activity","Mysql"]

//   const handleAddStory = () => {
//     if (selectedStory && !storiesList.includes(selectedStory)) {
//       setStoriesList([...storiesList, selectedStory])
//       setSelectedStory("")
//     }
//   }

//   const handleRemoveStory = (story) => {
//     setStoriesList(storiesList.filter((s) => s !== story))
//   }

//   return (
//     <div className="w-full border rounded-lg shadow-sm bg-white">
//       <div className="p-4">
//         {/* Quota Section */}
//         <div className="mb-6 space-y-1.5 border-b pb-4">
//           <div className="flex justify-between items-center">
//             <span className="text-sm font-medium text-gray-500">Quota:</span>
//             <span className="text-sm font-medium">10 stories</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-sm font-medium text-gray-500">Utilized Quota:</span>
//             <span className="text-sm font-medium">{storiesList.length} stories</span>
//           </div>
//         </div>

//         {/* Story Selection */}
//         <div className="space-y-4">
//           <div className="flex items-center gap-2">
//             <select
//               className="flex-1 p-2 border rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
//               value={selectedStory}
//               onChange={(e) => setSelectedStory(e.target.value)}
//             >
//               <option value="" disabled>
//                 Select a Story
//               </option>
//               {stories.map((story, index) => (
//                 <option key={index} value={story}>
//                   {story}
//                 </option>
//               ))}
//             </select>
//             <Button
//               onClick={handleAddStory}
//               disabled={!selectedStory}
//               className={`px-4 py-2 rounded-md text-white ${
//                 !selectedStory ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
//               }`}
//             >
//               Add Story
//             </Button>
//           </div>

//           {/* Selected Stories List */}
//           {storiesList.length > 0 && (
//             <div className="mt-4">
//               <h3 className="text-sm font-medium mb-2">Selected Stories:</h3>
//               <div className="flex flex-wrap gap-2">
//                 {storiesList.map((story, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center gap-1 py-1.5 px-3 bg-gray-100 text-gray-800 rounded-full"
//                   >
//                     {story}
//                     <Button
//                       onClick={() => handleRemoveStory(story)}
//                       className="ml-1 rounded-full hover:bg-gray-200 p-0.5 w-5 h-5 flex items-center justify-center"
//                       aria-label={`Remove ${story}`}
//                     >
//                       <span className="text-gray-500">×</span>
//                     </Button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }


// export default EmployeeInfo

"use client"

import { useState } from "react"
import { SelectInput } from "../utils/input"
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
    return a.filter(sb => !b.some(empSb => empSb.name === sb.storyBoardName))
  };

  const [filterStory, setFilterStory] = useState(filterStoryBoards(storyBoards, employee.storyBoards))
  const [employeeInfo, setEmployeeInfo] = useState(employee.storyBoards)

  const handleDeleteStoryBoard = async(story) => {
    // setStoriesList(storiesList.filter((s) => s !== story))
    try {
      const response = await Axios({
        ...summary.deleteStoryBoardForUser,
        params: {
          storyBoardId: story._id,
          userId: employee._id
        }
      })
      if(response.data.success){
        setEmployeeInfo((prev) => prev.filter(prevStory => prevStory._id !== story._id));
        setFilterStory((prev) => [...prev, { _id: story._id, storyBoardName: story.storyBoardName }]);
      }
      console.log(response.data)
    } catch (error) {
        AxiosError(error)
    }
  }

  const onSubmit = async (data) => {
    try {
      const payload = {
        ...data,
        userId: employee._id
      }
      const response = await Axios({
        ...summary.addStoryBoardForUser,
        data: payload
      })
      if (response.data.success) {
        fetchSingleEmployee()
        reset()
      }
    } catch (error) {
      AxiosError(error)
    }
  }
  const fetchSingleEmployee = async (data) => {
    try {
      const response = await Axios({
        ...summary.fetchSingleEmployee,
        url: `/api/employee/v1/getEmployee/${employee._id}`
      });
      if (response.data.success) {
        console.log(response.data.data.storyBoards)
        setFilterStory(filterStoryBoards(storyBoards, response.data.data.storyBoards))
        setEmployeeInfo(response.data.data.storyBoards)
      }
    } catch (error) {
      AxiosError(error)
    }
  }
  return (
    <div className="w-full p-normal border-b">
      <div className="pb-normal space-y-2 border-b w-1/4">
        <div className="flex justify-between items-center">
          <span className="text-small font-medium ">Level:</span>
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
        {employee.storyBoards.length > 0 && <div className="flex flex-wrap gap-2">
          {employeeInfo.map((story, index) => (
            <div key={index} className="flex items-center gap-1 bg-secondary text-white rounded-large py-1 px-3">
              {story.storyBoardName}
              <span
                onClick={() => handleDeleteStoryBoard(story)}
                className="ml-1 rounded-full hover:bg-gray-200 p-0.5 w-5 h-5 flex items-center justify-center"
                aria-label={`Remove ${story}`}
              >
                <RxCross2 />
              </span>
            </div>
          ))}
        </div>}
      </div>
      {/* Story Selection */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <div className="flex items-start gap-2 mt-normal">
            <div className="flex flex-col gap-1 md:gap-2 justify-startw-2/6 relative">
              <div className="relative w-full">
                <select
                  {...register("storyBoardId")}
                  className="h-[36px] w-full border border-[#EBF0ED] rounded-large bg-primary px-3 pr-10 focus:border-secondary focus:outline-none text-labelSize"
                  defaultValue=""
                >
                  <option value="" disabled selected>
                    Enter Story Board Name
                  </option>
                  {filterStory.map((option, index) => (
                    <option key={index} value={option._id}>{option.storyBoardName}</option>
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
    </div >
  )
}

export default EmployeeInfo



