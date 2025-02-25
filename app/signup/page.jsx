"use client";
import { signInFields } from "@/utils/formFields";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "../../utils/schema";
import { Button } from "@/utils/button";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import Link from "next/link";
import { Axios, summary } from "@/config/summaryAPI";
import { AxiosError } from "@/utils/axiosError";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });
  const onSubmit = async(data) => {
    console.log("Form Data:", data);
    try {
        const response = await Axios({
            ...summary.register,
            data:data
        })
        console.log(response.data)
    } catch (error) {
        AxiosError(error)
    }
  };
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  return (
    <div className=" bg-background min-h-screen flex justify-center items-center">
      <div className="bg-white md:w-550 m-auto rounded-xl shadow-md py-4">
        <h2 className="text-[32px] font-semibold text-center md:text-h1">
          LOGO
        </h2>
        <div className=" mt-2 text-center">
          <h3 className="text-[24px] font-semibold md:text-h2">
            Create an Account
          </h3>
          <p className="w-2/3 text-base text-gray tracking-tight leading-6 mx-auto md:text-lg md:w-1/2">
            Improve business performance with comvi dashboards
          </p>
        </div>
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="px-4 m-auto flex flex-col gap-3 mt-5 md:w-5/6 md:px-0 md:gap-4"
        >
          {signInFields.map((input, index) => (
            <div
              className="flex flex-col gap-1 md:gap-2 justify-start w-full relative"
              key={index}
            >
              <label
                htmlFor=""
                className="text-sm text-gray font-medium mx-2 md:text-base"
              >
                {input.label}
              </label>

              {/* Input Wrapper for Relative Positioning */}
              <div className="relative w-full">
                <input
                  type={
                    (input.name === "password" ||
                      input.name === "confirmPassword") &&
                    showPassword[input.name]
                      ? "text"
                      : input.type
                  }
                  placeholder={input.placeholder}
                  {...register(input.name)}
                  className="h-[40px] w-full border border-[#EBF0ED] rounded-md bg-background px-3 pr-10 focus:border-[#021A22] md:text-[20px] md:h-[45px]"
                />
                {(input.name === "password" ||
                  input.name === "confirmPassword") && (
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

              {/* Error Message */}
              {errors[input.name] && (
                <span className="text-red-500 text-sm">
                  {errors[input.name]?.message}
                </span>
              )}
            </div>
          ))}

          <Button>Create an Account</Button>
          <p className="text-center text-gray md:text-lg tracking-tighter">
            Already have an Account? &nbsp;&nbsp;
            <Link href="/login">
              <span className="font-medium md:text-lg text-button">SignIn</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
