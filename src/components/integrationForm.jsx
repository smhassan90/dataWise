"use client"
import { integrationFields } from '../utils/formFields'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IntegrationSchema } from '../utils/schema';
import { AxiosError } from '../utils/axiosError';
import { SelectInput, TextInputWithoutLabel } from '../utils/input';
import { Button } from '../utils/button';
import { useSelector } from 'react-redux';
import { Axios, summary } from '../config/summaryAPI';
import toast from 'react-hot-toast';
const IntegrationForm = ({setShowForm,setStep,setIntegration}) => {
    const user = useSelector(state => state.auth.user)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(IntegrationSchema),
    });
    const onSubmit = async (data) => {
        try {
            const response = await Axios({
                ...summary.testConnect,
                data: data
            })
            if (response.data.success) {
                setIntegration(data)
                toast.success(response.data.message);
                setStep(2)
            }
        } catch (error) {
            AxiosError(error)
        }
    };
    return (
        <form action="" onSubmit={handleSubmit(onSubmit)} className="px-4 m-auto flex flex-col gap-2 mt-5  md:px-0 md:gap-3">
            {integrationFields.map((input, index) => {
                if (input.type === 'text' || input.type === 'password') {
                    return <TextInputWithoutLabel input={input} key={index} errors={errors} register={register} />
                } else {
                    return <SelectInput input={input} key={index} errors={errors} register={register} />
                }
            })}
            <div className="flex justify-end items-center gap-5">
                <Button type="button" onClick={(e)=>{
                    e.preventDefault()
                    setShowForm(false)
                }} className="!bg-transparent !text-neutral-900 !px-5 !py-[6px] border">Close</Button>
                <Button type="submit">Connect</Button>
            </div>
        </form>
    )
}

export default IntegrationForm