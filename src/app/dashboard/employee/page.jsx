"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/src/utils/button";
import Pagination from "@/src/components/pagination";
import { AxiosError } from "@/src/utils/axiosError";
import { Axios, summary } from "@/src/config/summaryAPI";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { employeeFields } from "@/src/utils/formFields";
import { employeeSchema } from "@/src/utils/schema";
import toast from "react-hot-toast";
import { TextInput, SelectInputwithLabel } from "@/src/utils/input";
import { useSelector } from "react-redux";
import Image from "next/image";
import gifImage from "@/src/assets/images/noDataGif.gif";
import { PuffLoader } from "react-spinners";

const DataTable = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(employeeSchema),
  });

  const [showEmployeeForm, setShowEmployeeForm] = useState(false);
  const [employee, setEmployee] = useState([]);
  const [storyBoards, setStoryBoards] = useState([]);
  const [levels, setLevels] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const employees = async () => {
    try {
      setLoading(true);
      const response = await Axios({
        ...summary.fetchEmployees,
      });
      if (response.data.success) {
        setEmployee(response.data.data);
        setLoading(false);
      }
    } catch (error) {
      AxiosError(error);
      setLoading(false);
    }
  };

  const getStoryBoards = async () => {
    try {
      const response = await Axios({
        ...summary.getStoryBoard,
      });
      if (response.data.success) {
        setStoryBoards(response.data.data);
      }
    } catch (error) {
      AxiosError(error);
    }
  };

  const getlevels = async (data) => {
    try {
      const response = await Axios({
        ...summary.getLevels,
      });
      if (response.data.success) {
        setLevels(
          response.data.data
            .filter((level) => level.displayName !== "Owner") // Filter kar diya
            .map((level) => ({
              label: level.displayName,
              value: level.levelNumber,
            }))
        );
      }
    } catch (error) {
      AxiosError(error);
    }
  };

  const onSubmit = async (data) => {
    try {
      const response = await Axios({
        ...summary.addEmployee,
        data: data,
      });
      if (response.data.success) {
        toast.success(response.data.message);
        setShowEmployeeForm(false);
        employees();
        reset();
      }
    } catch (error) {
      AxiosError(error);
    }
  };

  useEffect(() => {
    employees();
    getStoryBoards();
    getlevels();
  }, []);

  const openForm = () => {
    setShowEmployeeForm(true);
  };

  const columns = ["ID", "First Name", "Email", "Created Date", "Actions"];
  console.log(levels);
  return (
    <div className="bg-white rounded-large p-normal min-h-[calc(100vh-5.2rem)]">
      {user?.level?.levelNumber <= 3 && !showEmployeeForm && (
        <div>
          <Button onClick={() => openForm()}>Add New Employee</Button>
        </div>
      )}

      {showEmployeeForm && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-normal m-auto flex flex-col gap-2  py-normal md:px-0 md:gap-3"
        >
          {employeeFields?.map((input, index) => {
            if (
              input.type === "text" ||
              input.type === "email" ||
              input.type === "password"
            ) {
              return (
                <TextInput
                  input={input}
                  key={index}
                  errors={errors}
                  register={register}
                />
              );
            } else if (input.type === "select") {
              return (
                <SelectInputwithLabel
                  input={input}
                  key={index}
                  errors={errors}
                  register={register}
                  optionData={levels}
                />
              );
            }
          })}
          <div className="flex justify-end items-center gap-5">
            <Button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setShowEmployeeForm(false);
              }}
              className="!bg-transparent !text-neutral-900 !px-5 !py-[6px] border"
            >
              Cancel
            </Button>
            <Button type="submit" className="px-normal">
              Save Employee
            </Button>
          </div>
        </form>
      )}

      {loading ? (
        <div className="justify-center items-center absolute">
          {/* <PuffLoader color="#036666" size={100} /> */}
        </div>
      ) : employee.length > 0 ? (
        <Pagination
          data={employee}
          employees={employees}
          columns={columns}
          page="employees"
          storyBoards={storyBoards}
        />
      ) : (
        <div className="flex justify-center items-center h-[300px]">
          <Image src={gifImage} alt="No Data Found" height={150} width={150} />
        </div>
      )}
    </div>
  );
};

export default DataTable;
