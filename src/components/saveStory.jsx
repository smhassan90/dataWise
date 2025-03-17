"use client"
import React, { useEffect } from 'react'
import { SaveStorySchema } from '../utils/schema';
import { saveStoryFields } from '../utils/formFields';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SelectInput, TextInputWithoutLabel } from '../utils/input';
import { Button } from '../utils/button';
import { Axios, summary } from '../config/summaryAPI';
import toast from 'react-hot-toast';
import { AxiosError } from '../utils/axiosError';

const SaveStory = ({activeTab, graphData, setGraphData, setShowStoryForm,setSearchText}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(SaveStorySchema),
    });
    useEffect(() => {
        if (graphData?.query) {
            reset({
                query: graphData.query,
                resultType: activeTab
            });
        }
    }, [graphData, reset]);
    const onSubmit = async(data) => {
        try {
            const response = await Axios({
                ...summary.saveStory,
                data
            })
            if(response.data.success){
                toast.success(response.data.message)
                setShowStoryForm(false)
                setGraphData('')
                setSearchText('')
            }
        } catch (error) {
            AxiosError(error)
        }
    }
    return (
        <form action="" onSubmit={handleSubmit(onSubmit)} className="px-normal m-auto flex flex-col gap-2 mt-normal md:px-0 md:gap-3">
            {saveStoryFields.map((input, index) => {
                if (input.type === 'text' || input.type === 'password') {
                    return <TextInputWithoutLabel className={`${(input.name === "query" || input.name === "resultType") && 'hidden' }`} input={input} key={index} errors={errors} register={register} />
                } else {
                    return <SelectInput input={input} key={index} errors={errors} register={register} />
                }
            })}
            <div className="flex justify-end items-center gap-5">
                <Button type="button" onClick={(e) => {
                    e.preventDefault()
                    setShowStoryForm(false)
                }} className="!bg-transparent !text-neutral-900 !px-5 !py-[6px] border">Cancel</Button>
                <Button type="submit" className="px-normal">Save Story</Button>
            </div>
        </form>
    )
}

export default SaveStory