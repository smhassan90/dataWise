// // import React, { useEffect, useState } from 'react'
// // import { Axios, summary } from '../config/summaryAPI'
// // import { AxiosError } from '../utils/axiosError'
// // import LineChartComponent from './lineChart'
// // import BarChartComponent from './barChart'

// // const ShowStories = () => {
// //     const [stories, setStories] = useState()
// //     useEffect(() => {
// //         fetchStories()
// //     }, [])
// //     const fetchStories = async () => {
// //         try {
// //             const response = await Axios({
// //                 ...summary.fetchStories
// //             })
// //             if (response.data.success) {
// //                 setStories(response.data.data)
// //             }
// //         } catch (error) {
// //             AxiosError(error)
// //         }
// //     }
// //     return (
// //         <div>
// //             {stories && stories?.map((story, index) => {
// //                 if (story.resultType === "Line Chart") {
// //                     return (
// //                         <LineChartComponent graphData={story} key={index}/>
// //                     )
// //                 }
// //                 if (story.resultType === "Bar Chart") {
// //                     return (
// //                         <BarChartComponent graphData={story} key={index}/>
// //                     )
// //                 }
// //             })}
// //         </div>
// //     )
// // }

// // export default ShowStories

// import React, { useEffect, useState } from "react";
// import { Axios, summary } from "../config/summaryAPI";
// import { AxiosError } from "../utils/axiosError";
// import LineChartComponent from "./lineChart";
// import BarChartComponent from "./barChart";

// const ShowStories = () => {
//   const [stories, setStories] = useState([]);

//   useEffect(() => {
//     fetchStories();
//   }, []);

//   const fetchStories = async () => {
//     try {
//       const response = await Axios({ ...summary.fetchStories });
//       if (response.data.success) {
//         setStories(response.data.data);
//       }
//     } catch (error) {
//       AxiosError(error);
//     }
//   };

//   return (
//     <div className="w-full p-4">
//       {stories &&
//         stories.map((story, index) => (
//           <div
//             key={index}
//             className="w-full lg:w-[90%] xl:w-[85%] mx-auto p-4 shadow-md bg-white rounded-lg transition-all duration-500"
//           >
//             {story.resultType === "Line Chart" && (
//               <LineChartComponent graphData={story} />
//             )}
//             {story.resultType === "Bar Chart" && (
//               <BarChartComponent graphData={story} />
//             )}
//           </div>
//         ))}
//     </div>
//   );
// };

// export default ShowStories;

// import React, { useEffect, useState } from "react";
// import { Axios, summary } from "../config/summaryAPI";
// import { AxiosError } from "../utils/axiosError";
// import LineChartComponent from "./lineChart";
// import BarChartComponent from "./barChart";

// const ShowStories = () => {
//   const [stories, setStories] = useState([]);

//   useEffect(() => {
//     fetchStories();
//   }, []);

//   const fetchStories = async () => {
//     try {
//       const response = await Axios({ ...summary.fetchStories });
//       if (response.data.success) {
//         setStories(response.data.data);
//       }
//     } catch (error) {
//       AxiosError(error);
//     }
//   };

//   return (
//     <div className="w-full min-h-screen p-4 bg-gray-100">
//       {stories &&
//         stories.map((story, index) => (
//           <div key={index} className="w-[210%] shadow-md bg-white rounded-lg my-4">
//             {story.resultType === "Line Chart" && (
//               <div className="">
//                 <LineChartComponent graphData={story} />
//               </div>
//             )}
//             {story.resultType === "Bar Chart" && (
//               <div className="">
//                 <BarChartComponent graphData={story} />
//               </div>
//             )}
//           </div>
//         ))}
//     </div>
//   );
// };

// export default ShowStories;

// import React, { useEffect, useState } from "react";
// import { Axios, summary } from "../config/summaryAPI";
// import { AxiosError } from "../utils/axiosError";
// import LineChartComponent from "./lineChart";
// import BarChartComponent from "./barChart";
// import { FaExpand, FaCompress } from "react-icons/fa"; // FontAwesome Icons

// const ShowStories = () => {
// const [stories, setStories] = useState([]);
// const [fullWidth, setFullWidth] = useState(false); // Track graph width globally

// useEffect(() => {
//     fetchStories();
// }, []);

// const fetchStories = async () => {
//     try {
//     const response = await Axios({ ...summary.fetchStories });
//     if (response.data.success) {
//         setStories(response.data.data);
//     }
//     } catch (error) {
//     AxiosError(error);
//     }
// };

// // Toggle width state
// const toggleWidth = () => {
//     setFullWidth(!fullWidth);
// };

// return (
//     <div className="w-[200%] min-h-screen p-4 bg-gray-100">
//     <button
//         onClick={toggleWidth}
//         className="mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
//     >
//         {fullWidth ? "Show 2 Graphs per Row" : "Expand Graphs Full Width"}
//     </button>

//     <div className={`grid ${fullWidth ? "grid-cols-1" : "grid-cols-2"} gap-3`}>
//         {stories &&
//         stories.map((story, index) => (
//             <div
//             key={index}
//             className="shadow-md rounded-lg p-4 relative transition-all duration-300"
//             >
//             {/* Render Charts */}
//             <div className="w-full h-[400px]">
//                 {story.resultType === "Line Chart" && <LineChartComponent graphData={story} />}
//                 {story.resultType === "Bar Chart" && <BarChartComponent graphData={story} />}
//             </div>
//             </div>
//         ))}
//     </div>
//     </div>
// );
// };

// export default ShowStories;

"use client";
import React, { useEffect, useState } from "react";
import { Axios, summary } from "../config/summaryAPI";
import { AxiosError } from "../utils/axiosError";
import LineChartComponent from "./lineChart";
import BarChartComponent from "./barChart";
import { FaExpand, FaCompress } from "react-icons/fa";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Button } from "../utils/button";
import { AiOutlineFullscreenExit, AiOutlineFullscreen } from "react-icons/ai";



const ItemType = "CHART";

// Draggable Graph Component
const DraggableGraph = ({ story, index, moveCard }) => {
  const [, ref] = useDrag({
    type: ItemType,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveCard(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => ref(drop(node))}
      className="shadow-md  rounded-large p-normal  cursor-move"
    >
      <div className="w-full rounded-large h-[380px]">
        {story.resultType === "Line Chart" && (
          <LineChartComponent graphData={story} />
        )}
        {story.resultType === "Bar Chart" && (
          <BarChartComponent graphData={story} />
        )}
      </div>
    </div>
  );
};

const ShowStories = () => {
  const [stories, setStories] = useState([]);
  const [fullWidth, setFullWidth] = useState(false);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const response = await Axios({ ...summary.fetchStories });
      if (response.data.success) {
        setStories(response.data.data);
      }
    } catch (error) {
      AxiosError(error);
    }
  };

  // Move Graph on Drag
  const moveCard = (fromIndex, toIndex) => {
    const updatedStories = [...stories];
    const [movedItem] = updatedStories.splice(fromIndex, 1);
    updatedStories.splice(toIndex, 0, movedItem);
    setStories(updatedStories);
  };

  const toggleWidth = () => {
    setFullWidth(!fullWidth);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="w-[200%] rounded-large shadow-md min-h-screen p-normal ">
        {/* <button
                    onClick={toggleWidth}
                    className="mb-normal bg-secondary text-white px-normal py-normalrounded hover:bg-blue-700 transition"
                >
                    {fullWidth ? "Show 2 Graphs per Row" : "Expand Graphs Full Width"}
                </button> */}
        <Button onClick={toggleWidth} className="flex items-center gap-3">
  {fullWidth ? "Show 2 Graphs per Row" : "Expand Graphs Full Width"}
  {fullWidth ? <AiOutlineFullscreenExit size={24} /> : <AiOutlineFullscreen size={24} />}

</Button>

        {/* Draggable Graphs */}
        <div
          className={`grid ${fullWidth ? "grid-cols-1" : "grid-cols-2"} gap-3`}
        >
          {stories.map((story, index) => (
            <DraggableGraph
              key={index}
              index={index}
              story={story}
              moveCard={moveCard}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default ShowStories;
