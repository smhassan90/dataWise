
"use client"
import { motion } from "framer-motion";
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

    return (
        <motion.div 
            className="w-full p-normal border-b"
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <form onSubmit={handleSubmit(onSubmit)} className="px-normal  mr-auto flex flex-col items-start gap-2 mt-normal md:px-0 md:gap-3">
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
        </motion.div>
    )
}

export default EmployeeEdit;
