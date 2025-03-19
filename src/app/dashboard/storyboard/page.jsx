"use client";
import { Axios, summary } from "@/src/config/summaryAPI";
import { AxiosError } from "@/src/utils/axiosError";
import { Button } from "@/src/utils/button";
import { addStoryBoard } from "@/src/utils/formFields";
import { TextInput } from "@/src/utils/input";
import { AddStoryBoardSchema } from "@/src/utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";
import Pagination from '@/src/components/pagination'
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
const StoryBorad = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);
  const [storyBoards, setStoryBoards] = useState([])
  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);
  const columns = ["ID", "Storyboard Name", "Created Date", "Status", "Actions"]
  const user = useSelector(state => state?.auth?.user)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(AddStoryBoardSchema),
  });
  const getStoryBoards = async () => {
    try {
      const response = await Axios({
        ...summary.getStoryBoard
      })
      if (response.data.success) {
        setStoryBoards(response.data.data)
      }
    } catch (error) {
      console.log(error)
      AxiosError(error)
    }
  }
  const getEmployeeStoryBoards = async (data) => {
    try {
      const response = await Axios({
        ...summary.fetchSingleEmployee,
        url: `/api/employee/v1/getEmployee/${user?._id}`
      });
      if (response.data.success) {
        setStoryBoards(response.data.data.storyBoards)
      }
    } catch (error) {
      console.log(error)
      AxiosError(error)
    }
  }
  useEffect(() => {
    if (user?.level <= 3) {
      getStoryBoards()
    } else {
      getEmployeeStoryBoards()
    }
  }, [])

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    try {
      const response = await Axios({
        ...summary.addStoryBoard,
        data: data
      })
      if (response.data.success) {
        toast.success(response.data.message);
        closeDialog()
        reset()
        getStoryBoards()
        router.push(`/dashboard/storyBoard/${response.data.data._id}`)
      }
      console.log(response.data)
    } catch (error) {
      console.log(error)
      AxiosError(error)
    }
  };

  return (
    <div className="">
      {/* Button to open dialog */}
      {user?.level <= 3 && <Button onClick={openDialog}>Add Story Board</Button>}
      {/* Dialog overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-35 flex items-center justify-center z-auto">
          {/* Dialog box */}
          <div className="bg-white rounded-large shadow-md w-full max-w-md mx-4">
            {/* Dialog header */}
            <div className="flex justify-between items-center p-normal border-b">
              <h2 className="text-lg font-semibold">Add Story Board</h2>
              <button onClick={closeDialog} className="text-neutral-900 w-5">
                <RxCross2 />
              </button>
            </div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              {/* Dialog content */}
              <div className="p-normal">
                {addStoryBoard.map((input, index) => (
                  <TextInput input={input} key={index} errors={errors} register={register} />
                ))}

              </div>

              {/* Dialog footer */}
              <div className="p-normal text-left justify-end flex gap-3">
                <Button onClick={closeDialog}>
                  Cancel
                </Button>
                <Button type="submit">Save</Button>
              </div>
            </form>
          </div>
        </div>
      )}
      {storyBoards.length > 0 && <Pagination data={storyBoards} columns={columns} page="storyBoard" />}
    </div>
  );
}

export default StoryBorad
