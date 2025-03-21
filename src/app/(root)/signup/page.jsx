"use client";
import { signInFields } from "../../../utils/formFields";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "../../../utils/schema";
import { Button } from "../../../utils/button";
import Link from "next/link";
import { Axios, summary } from "../../../config/summaryAPI";
import { AxiosError } from "../../../utils/axiosError";
import Container from "@/src/utils/container";
import { TextInput } from "@/src/utils/input";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
// import {logo} from "@/public/logo.png"
import Image from "next/image";

const SignUpPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });
  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    try {
      const response = await Axios({
        ...summary.register,
        data: data,
      });
      if (response.data.success) {
        toast.success(response.data.message);
        router.push("/login");
      }
      console.log(response.data);
    } catch (error) {
      AxiosError(error);
    }
  };
  return (
    <div className="bg-primary min-h-screen flex justify-center items-center">
      <Container className="md:w-550 m-auto">
        <Image
          src="/logo.png"
          alt="Logo"
          width={128}
          height={40}
          className="w-32  items-center text-center ml-40 h-11"
          priority
        />

        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="px-4 m-auto flex flex-col gap-2 mt-5 md:px-0 md:gap-3"
        >
          {signInFields.map((input, index) => (
            <TextInput
              input={input}
              key={index}
              errors={errors}
              register={register}
            />
          ))}

          <Button className="h-[40px] md:h-[45px]">Create an Account</Button>
          <p className="text-center text-gray text-small tracking-tighter">
            Already have an Account? &nbsp;&nbsp;
            <Link href="/login">
              <span className="font-medium text-small text-button">Login</span>
            </Link>
          </p>
        </form>
      </Container>
    </div>
  );
};

export default SignUpPage;
