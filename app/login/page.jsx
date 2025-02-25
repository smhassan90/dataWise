

"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/utils/button";
import { loginFields } from "@/utils/formFields";
import { loginSchema } from "@/utils/schema";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="bg-background h-screen flex justify-center items-center">
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
              <input
                id={input.name}
                type={input.type}
                placeholder={input.placeholder}
                {...register(input.name)}
                className="h-[40px] border border-[#EBF0ED] rounded-md bg-background px-3 focus:border-[#021A22] md:text-[20px] md:h-[45px]"
              />
              {errors[input.name] && (
                <span className="text-red-500 text-sm">
                  {errors[input.name]?.message}
                </span>
              )}
            </div>
          ))}
          <Button>Sign In</Button>
          <p className="text-center text-gray md:text-lg tracking-tighter">
            Already have an Account? &nbsp;&nbsp;
            <span className="font-medium md:text-lg text-button">SignIn</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
