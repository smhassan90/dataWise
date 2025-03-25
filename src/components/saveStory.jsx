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
import { useParams } from 'next/navigation';

const SaveStory = ({ activeTab, graphData, setGraphData, setShowStoryForm, setSearchText, setStories,stories }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(SaveStorySchema),
    });
    console.log(stories)
    const pathName = useParams()
    useEffect(() => {
        if (graphData?.query) {
            reset({
                query: graphData.query,
                resultType: activeTab
            });
        }
    }, [graphData, reset]);
    const onSubmit = async (data) => {
        try {
            const response = await Axios({
                ...summary.saveStory,
                url: `/api/integration/v1/saveStory/${pathName.storyBoardId}`,
                data
            })
            if (response.data.success) {
                console.log(response.data.data)
                toast.success(response.data.message)
                setShowStoryForm(false)
                setGraphData('')
                setSearchText('')
                const copyArrStories = [...stories]
                copyArrStories.push(response.data.data)
                setStories(copyArrStories)
            }
        } catch (error) {
            AxiosError(error)
        }
    }
    return (
        <form action="" onSubmit={handleSubmit(onSubmit)} className="px-normal m-auto flex flex-col gap-2 mt-normal md:px-0 md:gap-3">
            {saveStoryFields.map((input, index) => {
                if (input.type === 'text' || input.type === 'password') {
                    return <TextInputWithoutLabel className={`${(input.name === "query" || input.name === "resultType") && 'hidden'}`} input={input} key={index} errors={errors} register={register} />
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