import React from 'react'
import { Button } from '../utils/button'
import { FaRedo } from 'react-icons/fa'

const SqlQuery = ({SQLQuery,setSQLQuery}) => {
    return (
        <div className="bg-primary p-normal rounded-large shadow-md w-full lg:w-[285px] h-auto lg:h-72 mt-normal lg:mt-0">
            <div className="flex justify-between items-end border-b pb-2">
                <span className="flex items-center gap-1 font-manrope font-light text-small">
                    SQL Statement
                </span>
                <Button className="space-x-2 text-labelSize rounded-normal">
                    <FaRedo />
                    <span>Re-run</span>
                </Button>
            </div>
            <div className="py-normal text-labelSize overflow-y-auto h-52 w-full">
                <textarea type="text" spellCheck={false} onChange={(e) => setSQLQuery(e.target.value)} value={SQLQuery} className="h-36 w-full bg-transparent border-none focus:outline-none whitespace-pre-wrap break-words font-mono font-normal" />
            </div>
        </div>
    )
}

export default SqlQuery