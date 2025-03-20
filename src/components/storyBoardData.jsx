import Link from 'next/link'
import { Eye } from "lucide-react"
import { AiTwotoneDelete } from 'react-icons/ai'
import { LiaEditSolid } from 'react-icons/lia'
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { TbViewportTall } from "react-icons/tb";
import { Button } from '../utils/button'
import EmployeeInfo from './employeeInfo'
import EmployeeEdit from './employeeEdit';
import StoryInfo from './storyInfo';
import StoryEdit from './storyEdit';
const StoryBoardList = ({ columns, currentItems, indexOfFirstItem, expandedViewRow, setExpandedViewRow, expandedEditRow, setExpandedEditRow, storyBoards, levels }) => {
  const toggleViewRow = (id) => {
    if (expandedViewRow === id) {
      setExpandedViewRow(null)
    } else {
      setExpandedViewRow(id)
      setExpandedEditRow(null);
    }
  }
  const toggleEditRow = (id) => {
    if (expandedEditRow === id) {
      setExpandedEditRow(null)
    } else {
      setExpandedEditRow(id)
      setExpandedViewRow(null)
    }
  }
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b">
          {columns.map((column, index) => (
            <th key={index} className="p-normal text-left font-semibold text-gray-600 whitespace-nowrap">{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {currentItems.map((story, index) => (
          <>
            <tr key={story._id} className="border-b">
              <td className="p-normal w-1/12 font-medium whitespace-nowrap">{indexOfFirstItem + index + 1}</td>
              <td className="p-normal w-4/12 whitespace-nowrap">{story.storyBoardName}</td>
              <td className="p-normal w-3/12 whitespace-nowrap">{new Date(story.createdAt).toLocaleDateString()}</td>
              <td className={`${story.status == "1" ? "text-green-800" : story.status == "2" ?"text-red-700" : ""} px-4 py-3 w-2/12 whitespace-nowrap`}>{story.status == "1" ? "Active" : "InActive"}</td>
              <td className="p-normal w-2/12 whitespace-nowrap flex gap-3">
                <button onClick={() => toggleViewRow(indexOfFirstItem + index + 1)} className="text-gray-600 hover:text-gray-800">
                  {expandedViewRow === (indexOfFirstItem + index + 1) ?
                    <FaRegEye className="w-5 h-5" /> : <FaRegEyeSlash className="w-5 h-5" />}
                </button>
                <button onClick={() => toggleEditRow(indexOfFirstItem + index + 1)} className="text-gray-600 hover:text-gray-800">
                  <LiaEditSolid className="w-5 h-5" />
                </button>
                <button className="text-gray-600 hover:text-gray-800">
                  <AiTwotoneDelete className="w-5 h-5" />
                </button>
                {story.status == "1" && <Link href={`/dashboard/storyBoard/${story._id}`} className="text-gray-600 hover:text-gray-800">
                  <TbViewportTall className="w-5 h-5" />
                </Link>}
              </td>
            </tr>
            {expandedViewRow === (indexOfFirstItem + index + 1) && (
              <tr>
                <td colSpan={5} className="p-0">
                  <div className="animate-slideDown overflow-hidden">
                    <StoryInfo levels={levels} story={story} />
                  </div>
                </td>
              </tr>
            )}
            {expandedEditRow === (indexOfFirstItem + index + 1) && (
              <tr>
                <td colSpan={5} className="p-0">
                  <div className="animate-slideDown overflow-hidden">
                    <StoryEdit story={story} setExpandedEditRow={setExpandedEditRow} storyBoards={storyBoards}/>
                  </div>
                </td>
              </tr>
            )}
          </>
        ))}
      </tbody>
    </table>
  )
}

export default StoryBoardList