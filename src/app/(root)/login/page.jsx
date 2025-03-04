"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../../utils/button";
import { loginFields } from "../../../utils/formFields";
import { loginSchema } from "../../../utils/schema";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Axios, summary } from "../../../config/summaryAPI";
import toast from "react-hot-toast";
import { AxiosError } from "../../../utils/axiosError";
import Container from "@/src/utils/container";
import TextInput from "@/src/utils/input";

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

  return (
    <div className="bg-primary min-h-screen flex justify-center items-center">
      <Container className="md:w-550 m-auto">
        <h2 className="text-large font-semibold text-center md:text-[44px]">
          LOGO
        </h2>
        <div className="mt-2 text-center">
          <h3 className="text-medium font-semibold">Log In</h3>
          <p className="w-2/3 text-labelSize text-gray tracking-tight leading-6 mx-auto md:w-1/2">
          Your data, is your employee!
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-4 m-auto flex flex-col gap-2 mt-5 md:px-0 md:gap-3"
        >
          {loginFields.map((input, index) => (
            <TextInput input={input} key={index} errors={errors} register={register}/>
          ))}
          <Button className="h-[40px] md:h-[45px]">Sign In</Button>
          <p className="text-center text-small text-gray tracking-tighter">
            Don't have an Account? &nbsp;&nbsp;
            <Link href="/signup">
              <span className="font-medium text-small text-button">SignUp</span>
            </Link>
          </p>
        </form>
      </Container>
    </div>
  );
};

export default LoginPage;
