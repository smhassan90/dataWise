"use client"

import { Button } from "@/src/utils/button"
import ChangePassword from "@/src/components/changePassword"
import { settings } from "@/src/utils/formFields"
import { TextInput } from "@/src/utils/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { settingSchema } from "@/src/utils/schema"
import { useDispatch, useSelector } from "react-redux"
import { Axios, summary } from "@/src/config/summaryAPI"
import { AxiosError } from "@/src/utils/axiosError"
import { login } from "@/src/redux/auth"
import toast from "react-hot-toast"

export default function SettingsPage() {
  const user = useSelector(state => state?.auth?.user)
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(settingSchema),
    defaultValues: {
      firstName:user?.firstName || "",
      lastName:user?.lastName || "",
      email: user?.email || "",
    }
  });

  const onSubmit = async(data) => {
    try {
      const response = await Axios({
        ...summary.updateUser,
        url:`/api/user/v1/updateUser/${user._id}`,
        data: data,
      });

      if (response.data.success) {
        toast.success(response.data.message);
        dispatch(login({
          ...user,
          ...response.data.data
        }));
      }
    } catch (error) {
      console.log(error)
      AxiosError(error);
    }
  }

  return (
    <div className="mx-auto space-y-3">
      <div className="bg-white rounded-large shadow-md overflow-hidden">
        {/* <div className="w-full bg-gradient-to-r from-secondary to-secondary py-normal flex flex-col items-center justify-center text-white">
          <div className="relative group">
            <div className="h-40 w-40 rounded-full overflow-hidden bg-white/20 ring-4 ring-white/30 shadow-lg">
              {profileImage ? (
                <img src={profileImage || "/placeholder.svg"} alt="Profile" className="h-full w-full object-cover" />
              ) : (
                <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-secondary to-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-20 w-20 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              )}
            </div>
            <label
              htmlFor="picture"
              className="absolute bottom-0 right-0 bg-white text-secondary rounded-full p-normal  shadow-md cursor-pointer transform transition-transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </label>
            <input id="picture" type="file" accept="image/*" className="hidden"
            />
          </div>
          <h2 className="mt-6 text-2xl font-bold">
            {userData.firstName} {userData.lastName}
          </h2>
          <p className="text-indigo-200">{userData.email}</p>
        </div> */}
        <div className="p-normal">
          <h2 className="text-medium font-bold text-gray-800 mb-normal">Personal Information</h2>
          <form action="" onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {settings.map((input, index) => {
                if (input.type == "email") {
                  return <TextInput
                    disabled={true}
                    input={input}
                    key={index}
                    errors={errors}
                    register={register}
                  />
                } else {
                  return <TextInput
                    input={input}
                    key={index}
                    errors={errors}
                    register={register}
                  />
                }
              })}
            </div>
            <Button>Update</Button>
          </form>
        </div>
      </div>
      <ChangePassword />
    </div>
  )
}

