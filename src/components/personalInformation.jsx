"use client"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import toast from "react-hot-toast"
import { settings } from '../utils/formFields';
import { TextInput } from '../utils/input';
import { settingSchema } from '../utils/schema';
import { Axios, summary } from '../config/summaryAPI';
import { login } from '../redux/auth';
import { AxiosError } from '../utils/axiosError';
import { Button } from '../utils/button'

const PersonalInformation = () => {
  const user = useSelector(state => state?.auth?.user)
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(settingSchema),
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      email: user?.email || "",
    }
  });

  const onSubmit = async (data) => {
    try {
      const response = await Axios({
        ...summary.updateUser,
        url: `/api/user/v1/updateUser/${user._id}`,
        data: data,
      });

      if (response.data.success) {
        console.log(response.data.data)
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
  )
}

export default PersonalInformation