import Link from 'next/link'
import { RiDeleteBin7Line } from "react-icons/ri";
import { LiaEditSolid } from 'react-icons/lia'
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { MdReadMore } from "react-icons/md";
import { Button } from '../utils/button'
import EmployeeInfo from './employeeInfo'
import EmployeeEdit from './employeeEdit';
import StoryInfo from './storyInfo';
import StoryEdit from './storyEdit';
import { useState } from 'react';
const StoryBoardList = ({
  columns,
  currentItems,
  indexOfFirstItem,
  expandedViewRow,
  setExpandedViewRow,
  expandedEditRow,
  setExpandedEditRow,
  storyBoards,
  levels,
  user,
  selectedRadio,
  changePriority
}) => {
  // const toggleViewRow = (id) => {
  //   if (expandedViewRow === id) {
  //     setExpandedViewRow(null)
  //   } else {
  //     setExpandedViewRow(id)
  //     setExpandedEditRow(null);
  //   }
  // }
  const toggleViewRow = (id) => {
    if (expandedViewRow === id) {
      setExpandedViewRow(null);
    } else {
      setExpandedViewRow(id);
      setExpandedEditRow(null);
    }
  };
  

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
        {currentItems?.map((story, index) => (
          <>
            {/* <tr key={story._id} className="border-b"> */}
            <tr key={story._id} className={`${expandedViewRow === (indexOfFirstItem + index + 1) ? "" : "border-b"}`}>
              <td className="p-normal w-1/12 font-medium whitespace-nowrap">{indexOfFirstItem + index + 1}</td>
              <td className="p-normal w-4/12 whitespace-nowrap">{story.storyBoardName}</td>
              <td className="p-normal w-2/12 whitespace-nowrap">{new Date(story.createdAt).toLocaleDateString()}</td>
              <td className={`${story.status == "1" ? "text-green-800" : story.status == "2" ? "text-red-700" : ""} px-4 py-3 w-2/12 whitespace-nowrap`}>{story.status == "1" ? "Active" : "InActive"}</td>
              <td className="p-normal w-3/12 whitespace-nowrap flex items-center gap-3">
                <Link href={`/dashboard/storyBoard/${story._id}`} className="text-gray-600 hover:text-gray-800">
                  <MdReadMore className="w-6 h-6" />
                </Link>
                {user?.level?.levelNumber <= 3 && <><button onClick={() => toggleViewRow(indexOfFirstItem + index + 1)} className="text-gray-600 hover:text-gray-800">
                  {expandedViewRow === (indexOfFirstItem + index + 1) ?
                    <FaRegEye className="w-5 h-5" /> : <FaRegEyeSlash className="w-5 h-5" />}
                </button>
                  <button onClick={() => toggleEditRow(indexOfFirstItem + index + 1)} className="text-gray-600 hover:text-gray-800">
                    <LiaEditSolid className="w-5 h-5" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-800">
                    <RiDeleteBin7Line className="w-5 h-5" />
                  </button></>}
                <div className="relative cursor-pointer">
                  <input
                    type="radio"
                    id={`radio-${story?._id}`}
                    name="radio-group"
                    className="hidden"
                    checked={selectedRadio?._id === story?._id}
                    onChange={() => changePriority(story)}
                  />
                  <label
                    htmlFor={`radio-${story?._id}`}
                    className={`relative pl-5 text-lg cursor-pointer transition-all duration-300 ease-in-out ${selectedRadio?._id === story?._id ? "text-secondary" : "text-neutral-900"
                      }`}
                  >
                    <span
                      className={`absolute top-1/2 left-0 transform -translate-y-1/2 w-4 h-4 rounded-full transition-all border-2  duration-300 ease-in-out ${selectedRadio?._id === story?._id ? "bg-secondary" : ""
                        }`}
                    ></span>
                  </label>
                </div>
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
                    <StoryEdit story={story} setExpandedEditRow={setExpandedEditRow} storyBoards={storyBoards} />
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


// import { useState } from "react";

// const RadioButtons = () => {
//   const [selected, setSelected] = useState("radio2");

//   return (
//     <div className="ml-32 flex items-center gap-6">
//       {[
//         { id: "radio2", label: "Next" },
//         { id: "radio1", label: "Svelte" },
//         { id: "radio3", label: "Remix" },
//       ].map((option) => (
//         <div key={option.id} className="relative cursor-pointer">
//           <input
//             type="radio"
//             id={option.id}
//             name="radio-group"
//             className="hidden"
//             checked={selected === option.id}
//             onChange={() => setSelected(option.id)}
//           />
//           <label
//             htmlFor={option.id}
//             className={`relative pl-8 text-lg cursor-pointer transition-all duration-300 ease-in-out ${
//               selected === option.id ? "text-blue-500" : "text-white"
//             }`}
//           >
//             <span
//               className={`absolute top-1/2 left-0 transform -translate-y-1/2 w-5 h-5 rounded-full border-2 transition-all duration-300 ease-in-out ${
//                 selected === option.id ? "border-4 border-blue-500" : "border-gray-600"
//               }`}
//             ></span>
//             {option.label}
//           </label>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RadioButtons;
