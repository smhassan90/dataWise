import React from 'react'
import { Button } from '../utils/button'
import { FaRedo } from 'react-icons/fa'
import { AxiosError } from '../utils/axiosError'
import { Axios, summary } from '../config/summaryAPI'
import toast from 'react-hot-toast'

const SqlQuery = ({ SQLQuery, setSQLQuery, activeTab, setGraphData, storyBoardId }) => {
    const handleReRunQuery = async () => {
        try {
            const payload = {
                storyBoardId,
                requiredGraph: activeTab,
                newQuery: SQLQuery
            }
            const response = await Axios({
                ...summary.reRunQuery,
                data: payload
            })
            if (response.data.success) {
                toast.success(response.data.message)
                setGraphData(response.data.data)
            }
        } catch (error) {
            console.log(error)
            AxiosError(error)
        }
    }
    return (
        <div className="bg-primary p-normal rounded-large shadow-md w-full lg:w-[285px] h-auto lg:h-72 mt-normal lg:mt-0">
            <div className="flex justify-between items-end border-b pb-2">
                <span className="flex items-center gap-1 font-manrope font-light text-small">
                    SQL Statement
                </span>
                <Button className="space-x-2 text-labelSize rounded-normal" onClick={handleReRunQuery}>
                    <FaRedo />
                    <span>Re-run</span>
                </Button>
            </div>
            <div className="py-normal text-labelSize overflow-y-auto h-72 w-full">
                <textarea type="text" spellCheck={false} onChange={(e) => setSQLQuery(e.target.value)} value={SQLQuery} className="h-60 w-full bg-transparent border-none focus:outline-none whitespace-pre-wrap break-words font-mono font-normal" />
            </div>
        </div>
    )
}

export default SqlQuery