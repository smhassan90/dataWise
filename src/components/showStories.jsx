// import React, { useEffect, useState } from 'react'
// import { Axios, summary } from '../config/summaryAPI'
// import { AxiosError } from '../utils/axiosError'
// import LineChartComponent from './lineChart'
// import BarChartComponent from './barChart'
// import ReportChartComponent from './reportChart'

// const ShowStories = () => {
//     const [stories, setStories] = useState()
//     useEffect(() => {
//         fetchStories()
//     }, [])
//     const fetchStories = async () => {
//         try {
//             const response = await Axios({
//                 ...summary.fetchStories
//             })
//             if (response.data.success) {
//                 setStories(response.data.data)
//             }
//         } catch (error) {
//             AxiosError(error)
//         }
//     }
//     return (
//         <div>
//             {stories && stories?.map((story, index) => {
//                 if (story.resultType === "Line Chart") {
//                     return (
//                         <LineChartComponent graphData={story} key={index}/>
//                     )
//                 }
//                 if (story.resultType === "Bar Chart") {
//                     return (
//                         <BarChartComponent graphData={story} key={index}/>
//                     )
//                 }
//             })}
//         </div>
//     )
// }

// export default ShowStories;


// "use client";
// import React, { useEffect, useState } from "react";
// import { Axios, summary } from "../config/summaryAPI";
// import { AxiosError } from "../utils/axiosError";
// import LineChartComponent from "./lineChart";
// import BarChartComponent from "./barChart";
// import { FaExpand, FaCompress } from "react-icons/fa";
// import { DndProvider, useDrag, useDrop } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import { Button } from "../utils/button";
// import { AiOutlineFullscreenExit, AiOutlineFullscreen } from "react-icons/ai";
// import ReportChartComponent from "./reportChart";



// const ItemType = "CHART";

// // Draggable Graph Component
// const DraggableGraph = ({ story, index, moveCard }) => {
//   const [, ref] = useDrag({
//     type: ItemType,
//     item: { index },
//   });

//   const [, drop] = useDrop({
//     accept: ItemType,
//     hover: (draggedItem) => {
//       if (draggedItem.index !== index) {
//         moveCard(draggedItem.index, index);
//         draggedItem.index = index;
//       }
//     },
//   });

//   return (
//     <div
//       ref={(node) => ref(drop(node))}
//       className="shadow-md border border-secondary mt-normal rounded-large p-normal  cursor-move"
//     >
//       <div className="w-full  rounded-large h-[380px]">
//         {story.resultType === "Line Chart" && (
//           <LineChartComponent graphData={story} />
//         )}
//         {story.resultType === "Bar Chart" && (
//           <BarChartComponent graphData={story} />
//         )}
//          {story.resultType === "Report" && (
//           <ReportChartComponent graphData={story} />
//         )}
//       </div>
//     </div>
//   );
// };

// const ShowStories = () => {
//   const [stories, setStories] = useState([]);
//   const [fullWidth, setFullWidth] = useState(false);

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

//   // Move Graph on Drag
//   const moveCard = (fromIndex, toIndex) => {
//     const updatedStories = [...stories];
//     const [movedItem] = updatedStories.splice(fromIndex, 1);
//     updatedStories.splice(toIndex, 0, movedItem);
//     setStories(updatedStories);
//   };

//   const toggleWidth = () => {
//     setFullWidth(!fullWidth);
//   };

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="w-[100%] border border-secondary rounded-large shadow-md min-h-screen p-normal ">
//         {/* <button
//                     onClick={toggleWidth}
//                     className="mb-normal bg-secondary text-white px-normal py-normalrounded hover:bg-blue-700 transition"
//                 >
//                     {fullWidth ? "Show 2 Graphs per Row" : "Expand Graphs Full Width"}
//                 </button> */}
//         <Button onClick={toggleWidth} className="flex items-center gap-3">
//   {fullWidth ? "Show 2 Graphs per Row" : "Expand Graphs Full Width"}
//   {fullWidth ? <AiOutlineFullscreenExit size={24} /> : <AiOutlineFullscreen size={24} />}

// </Button>

//         {/* Draggable Graphs */}
//         <div
//           className={`grid ${fullWidth ? "grid-cols-1" : "grid-cols-2"} gap-3`}
//         >
//           {stories.map((story, index) => (
//             <DraggableGraph
//               key={index}
//               index={index}
//               story={story}
//               moveCard={moveCard}
//             />
//           ))}
//         </div>
//       </div>
//     </DndProvider>
//   );
// };

// export default ShowStories;


"use client";
import React, { useEffect, useState } from "react";
import { Axios, summary } from "../config/summaryAPI";
import { AxiosError } from "../utils/axiosError";
import LineChartComponent from "./lineChart";
import BarChartComponent from "./barChart";
import { AiOutlineFullscreenExit, AiOutlineFullscreen } from "react-icons/ai";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Button } from "../utils/button";
import ReportChartComponent from "./reportChart";

const ItemType = "CHART";

const DraggableGraph = ({ story, index, moveCard }) => {
  const [, ref] = useDrag({ type: ItemType, item: { index } });
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
      className="shadow-lg border border-gray-300 rounded-xl p-4 cursor-move bg-gradient-to-br from-blue-100 to-white hover:shadow-2xl transition duration-30"
    >
      <div className="w-full rounded-xl h-[400px] bg-white p-4 shadow-md">
        {story.resultType === "Line Chart" && (
          <LineChartComponent graphData={story} />
        )}
        {story.resultType === "Bar Chart" && (
          <BarChartComponent graphData={story} />
        )}
        {story.resultType === "Report" && (
          <ReportChartComponent graphData={story} />
        )}
      </div>
    </div>
  );
};

const ShowStories = ({paramsId}) => {
  const [stories, setStories] = useState([]);
  const [fullWidth, setFullWidth] = useState(false);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const response = await Axios({ 
        ...summary.fetchStories,
        url: `/api/integration/v1/getAllStories/${paramsId}`
      });
      
      if (response.data.success) {
        setStories(response.data.data);
      }
    } catch (error) {
      AxiosError(error);
    }
  };

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
      <div className="p-normal">
        {/* <Button onClick={toggleWidth} className="flex items-center gap-3 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
          {fullWidth ? "Show 2 Graphs per Row" : "Expand Graphs Full Width"}
          {fullWidth ? <AiOutlineFullscreenExit size={24} /> : <AiOutlineFullscreen size={24} />}
        </Button> */}

        <div className={`grid ${fullWidth ? "grid-cols-1" : "grid-cols-1"} gap-3 mt-normal`}> 
          {stories.map((story, index) => (
            <DraggableGraph key={index} index={index} story={story} moveCard={moveCard} />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default ShowStories;
