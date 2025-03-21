"use client"
import { TextInput } from "../utils/input"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { editEmployeeQuotaSchema } from "../utils/schema";
import { Button } from "../utils/button";
import { AxiosError } from "../utils/axiosError";
import { Axios, summary } from "../config/summaryAPI";
import { editEmployeeQuotaFields } from "../utils/formFields";
import toast from "react-hot-toast";
const EmployeeEdit = ({ employee, storyBoards, setExpandedEditRow, employees }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(editEmployeeQuotaSchema),
        defaultValues: {
            level: employee.level || "",
            quota: employee.quota || ""
        },
    });

    const onSubmit = async (data) => {
        try {
            const response = await Axios({
                ...summary.editEmployee,
                url: `/api/employee/v1/updateEmployeeQuota/${employee._id}`,
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
            <form onSubmit={handleSubmit(onSubmit)} className="px-normal mr-auto flex flex-col items-start gap-2 mt-normal md:px-0 md:gap-3"
            >
                {editEmployeeQuotaFields.map((input, index) => {
                    if (input.name == "quota" && employee.level > 3) {
                        return null
                    }
                    return (
                        <TextInput input={input} key={index} errors={errors} register={register} />
                    )
                })}
                <Button className="w-fit">Update</Button>
            </form>
        </div >
    )
}

export default EmployeeEdit



