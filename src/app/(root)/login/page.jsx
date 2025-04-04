"use client";

import React, { use, useState } from "react";
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
import { TextInput } from "@/src/utils/input";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "@/src/redux/auth";
import Image from "next/image";

const LoginPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await Axios({
        ...summary.login,
        data: data,
      });

      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.data.token);
        dispatch(login(response.data.data));
        router.push("/dashboard");
      }
    } catch (error) {
      AxiosError(error);
    }
  };

  return (
    <div className="bg-primary min-h-screen flex justify-center items-center">
      <Container className="md:w-550 m-auto">
        <div className={`w-full rounded-large transition-all duration-300`}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={128}
            height={40}
            className="w-32  items-center text-center ml-40 h-11"
            priority
          />
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-4 m-auto flex flex-col gap-2 mt-5 md:px-0 md:gap-3"
        >
          {loginFields.map((input, index) => (
            <TextInput
              input={input}
              key={index}
              errors={errors}
              register={register}
            />
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
