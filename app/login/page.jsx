"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/utils/button";
import { loginFields } from "@/utils/formFields";
import { loginSchema } from "@/utils/schema";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { Axios, summary } from "@/config/summaryAPI";
import toast from "react-hot-toast";
import { AxiosError } from "@/utils/axiosError";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async(data) => {
    console.log("Form Data:", data);
    try {
        const response = await Axios({
          ...summary.login,
          data:data
        })
        if(response.data.status){
          toast.success(response.data.message)
        }
    } catch (error) {
        AxiosError(error)
    }
  };

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  return (
    <div className="bg-background min-h-screen flex justify-center items-center">
      <div className="bg-white md:w-[550px] m-auto rounded-xl shadow-md py-4">
        <h2 className="text-[32px] font-semibold text-center md:text-[44px]">
          LOGO
        </h2>
        <div className="mt-2 text-center">
          <h3 className="text-[24px] font-semibold md:text-[30px]">Sign In</h3>
          <p className="w-2/3 text-base text-gray tracking-tight leading-6 mx-auto md:text-lg md:w-1/2">
            Improve business performance with comvi dashboards
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-4 m-auto flex flex-col gap-3 mt-5 md:w-3/4 md:px-0 md:gap-4"
        >
          {loginFields.map((input, index) => (
            <div
              className="flex flex-col gap-1 md:gap-2 justify-start w-full relative"
              key={index}
            >
              <label
                htmlFor={input.name}
                className="text-sm text-gray font-medium mx-2 md:text-base"
              >
                {input.label}
              </label>
              <div className="relative w-full">
  <input
    type={
      (input.name === "password" || input.name === "confirmPassword") &&
      showPassword[input.name]
        ? "text"
        : input.type
    }
    placeholder={input.placeholder}
    {...register(input.name)}
    className="h-[40px] w-full border border-[#EBF0ED] rounded-md bg-background px-3 pr-10 focus:border-[#021A22] md:text-[20px] md:h-[45px]"
  />
  {(input.name === "password" || input.name === "confirmPassword") && (
    <span
      onClick={() =>
        setShowPassword((prev) => ({
          ...prev,
          [input.name]: !prev[input.name],
        }))
      }
      className="cursor-pointer absolute top-1/2 right-3 transform -translate-y-1/2"
    >
      {showPassword[input.name] ? (
        <FaRegEye className="text-lg md:text-xl" />
      ) : (
        <FaRegEyeSlash className="text-lg md:text-xl" />
      )}
    </span>
  )}
</div>

              {errors[input.name] && (
                <span className="text-red-500 text-sm">
                  {errors[input.name]?.message}
                </span>
              )}
            </div>
          ))}
          <Button>Sign In</Button>
          <p className="text-center text-gray md:text-lg tracking-tighter">
            Don't have an Account? &nbsp;&nbsp;
            <Link href="/signup">
              <span className="font-medium md:text-lg text-button">SignUp</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
