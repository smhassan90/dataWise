"use client"
import { TextInput } from "../utils/input"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { editemployeeSchema } from "../utils/schema";
import { Button } from "../utils/button";
import { AxiosError } from "../utils/axiosError";
import { Axios, summary } from "../config/summaryAPI";
import { editEmployeeFields } from "../utils/formFields";
import toast from "react-hot-toast";
const EmployeeEdit = ({ employee, storyBoards, setExpandedEditRow , employees}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(editemployeeSchema),
        defaultValues: {
            employeeName: employee.employeeName || "",
            level: employee.level || "",
            quota: employee.quota || ""
        },
    });

    const onSubmit = async (data) => {
        try {
            const response = await Axios({
                ...summary.editEmployee,
                url: `/api/employee/v1/updateEmployee/${employee._id}`,
                data: data
            })
            if (response.data.success) {
                setExpandedEditRow(null)
                toast.success(response.data.message)
                employees()
                reset()
            }
        } catch (error) {
            AxiosError(error)
        }
    }
    const fetchSingleEmployee = async (data) => {
        try {
            const response = await Axios({
                ...summary.fetchSingleEmployee,
                url: `/api/employee/v1/getEmployee/${employee._id}`
            });
            if (response.data.success) {
                console.log(response.data.data.storyBoards)
                setFilterStory(filterStoryBoards(storyBoards, response.data.data.storyBoards))
                setEmployeeInfo(response.data.data.storyBoards)
            }
        } catch (error) {
            AxiosError(error)
        }
    }
    return (
        <div className="w-full p-normal border-b">
            {/* Story Selection */}
            <form onSubmit={handleSubmit(onSubmit)} className="px-normal m-auto flex flex-col gap-2 mt-normal md:px-0 md:gap-3"
            >
                {editEmployeeFields.map((input, index) => (
                    <TextInput input={input} key={index} errors={errors} register={register} />
                ))}
                <Button className="w-fit">Update</Button>
            </form>
        </div >
    )
}

export default EmployeeEdit



