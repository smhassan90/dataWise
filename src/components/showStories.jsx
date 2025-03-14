import React, { useEffect, useState } from 'react'
import { Axios, summary } from '../config/summaryAPI'
import { AxiosError } from '../utils/axiosError'
import LineChartComponent from './lineChart'
import BarChartComponent from './barChart'
import ReportChartComponent from './reportChart'

const ShowStories = () => {
    const [stories, setStories] = useState()
    useEffect(() => {
        fetchStories()
    }, [])
    const fetchStories = async () => {
        try {
            const response = await Axios({
                ...summary.fetchStories
            })
            if (response.data.success) {
                setStories(response.data.data)
            }
        } catch (error) {
            AxiosError(error)
        }
    }
    return (
        <div>
            {stories && stories?.map((story, index) => {
                if (story.resultType === "Line Chart") {
                    return (
                        <LineChartComponent graphData={story} key={index}/>
                    )
                }
                if (story.resultType === "Bar Chart") {
                    return (
                        <BarChartComponent graphData={story} key={index}/>
                    )
                }
            })}
        </div>
    )
}

export default ShowStories;
