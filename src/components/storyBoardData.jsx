import React from 'react'
import Link from 'next/link'
import { Eye } from "lucide-react"
const StoryBoardData = ({ columns, currentItems,indexOfFirstItem }) => {
    return (
        <table className="w-full border-collapse">
            <thead>
                <tr className="bg-gray-50 border-b">
                    {columns.map((column, index) => (
                        <th key={index} className="px-4 py-3 text-left font-semibold text-gray-600 whitespace-nowrap">{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {currentItems.map((storyboard, index) => (
                    <tr key={storyboard.id} className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium whitespace-nowrap">{indexOfFirstItem + index + 1}</td>
                        <td className="px-4 py-3 whitespace-nowrap">{storyboard.storyBoardName}</td>
                        <td className="px-4 py-3 whitespace-nowrap">{new Date(storyboard.createdAt).toLocaleDateString()}</td>
                        <td className="px-4 py-3 whitespace-nowrap">{storyboard.status == "1" ? "Active" : "InActive"}</td>
                        <td className="px-4 py-3 whitespace-nowrap">
                            <Link
                                href={`/dashboard/storyBoard/${storyboard._id}`}
                                className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                            >
                                <Eye className="h-4 w-4 mr-2" />
                                View
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default StoryBoardData