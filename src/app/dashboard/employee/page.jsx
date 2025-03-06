// "use client"

// import { useState } from "react"

// export default function IntegrationsPage() {
//   const [currentPage, setCurrentPage] = useState(1)
//   const totalPages = 8

//   return (
//     <div className="w-full max-w-4xl mx-auto p-6">
//       <div className="border rounded-lg shadow-sm p-6 bg-white">
//         <div className="flex flex-col items-center mb-8">
//           <h1 className="text-2xl font-semibold text-center mb-2">Integrations</h1>
//           <p className="text-center text-gray-600 max-w-md">
//             Lorem ipsum is simply dummy text of the printing and typesetting industry.
//           </p>

//           {/* Step indicator */}
//           <div className="relative w-full max-w-md mt-8">
//             <div className="absolute top-1/2 left-[25%] right-[25%] h-[2px] bg-gray-200 -translate-y-1/2"></div>

//             <div className="flex justify-between relative">
//               {/* Step 1 */}
//               <div className="flex flex-col items-center">
//                 <div className="relative">
//                   <div className="w-14 h-14 rounded-full bg-teal-700 flex items-center justify-center text-white font-medium z-10 relative">
//                     01
//                   </div>
//                   <div className="absolute -top-3 -right-3">
                
//                   </div>
//                 </div>
//                 <span className="mt-2 text-sm">Step</span>
//               </div>

//               {/* Step 2 */}
//               <div className="flex flex-col items-center">
//                 <div className="relative">
//                   <div className="w-14 h-14 rounded-full bg-teal-700 flex items-center justify-center text-white font-medium z-10 relative">
//                     02
//                   </div>
//                   <div className="absolute -top-3 -right-3">
                  
//                   </div>
//                 </div>
//                 <span className="mt-2 text-sm">Step</span>
//               </div>
//             </div>

//             {/* Additional A logo */}
          
//           </div>
//         </div>

//         {/* Form */}
//         <div className="space-y-4 mt-8">
//           <div>
//             <input
//               type="text"
//               placeholder="Integration Name"
//               className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent"
//             />
//           </div>

//           <div>
//             <input
//               type="text"
//               placeholder="Description"
//               className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent"
//             />
//           </div>

//           <div className="relative">
//             <select
//               className="w-full px-3 py-2 border border-gray-200 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent"
//               defaultValue=""
//             >
//               <option value="" disabled>
//                 Type
//               </option>
//               <option value="type1">Type 1</option>
//               <option value="type2">Type 2</option>
//               <option value="type3">Type 3</option>
//             </select>
//             <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//               <svg
//                 className="w-5 h-5 text-gray-400"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//               </svg>
//             </div>
//           </div>

//           <div>
//             <input
//               type="text"
//               placeholder="Lorem ipsum"
//               className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent"
//             />
//           </div>

//           <div>
//             <input
//               type="text"
//               placeholder="Lorem ipsum"
//               className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent"
//             />
//           </div>

//           <div>
//             <input
//               type="text"
//               placeholder="Lorem ipsum"
//               className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent"
//             />
//           </div>
//         </div>

//         {/* Pagination and buttons */}
//         <div className="flex justify-between items-center mt-8">
//           <div className="flex space-x-1">
//             {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//               <button
//                 key={page}
//                 onClick={() => setCurrentPage(page)}
//                 className={`w-8 h-8 flex items-center justify-center rounded-full ${
//                   currentPage === page ? "bg-teal-700 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//                 }`}
//               >
//                 {page}
//               </button>
//             ))}
//           </div>

//           <div className="flex space-x-2">
//             <button className="px-4 py-2 bg-white border border-gray-200 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent">
//               Test Connection
//             </button>
//             <button className="px-4 py-2 bg-teal-700 text-white rounded-md hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2">
//               Connect
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Additional logos */}
    
//     </div>
//   )
// }

// "use client"

// import { useState } from "react"

// export default function IntegrationsPage() {
//   const [currentPage, setCurrentPage] = useState(1)
//   const totalPages = 8

//   return (
//     <div className="w-full mx-auto p-6">
//       <div className="rounded-large shadow-md p-6 bg-white">
//         <div className="flex flex-col items-center mb-8">
//           <h1 className="text-2xl font-semibold text-center mb-2">Integrations</h1>
//           <p className="text-center text-gray-600 max-w-md">
//             Lorem ipsum is simply dummy text of the printing and typesetting industry.
//           </p>

//           {/* Step indicator */}
//           <div className="relative w-full max-w-md mt-8">
//             {/* Connecting Line */}
//             <div className="absolute top-1/2 left-1/4 right-1/4 h-[2px] bg-gray-400 -translate-y-1/2"></div>

//             <div className="flex justify-between relative">
//               {/* Step 1 */}
//               <div className="flex flex-col items-center">
//                 <div className="relative">
//                   <div className="w-14 h-14 rounded-full bg-teal-700 flex items-center justify-center text-white font-medium z-10 relative">
//                     01
//                   </div>
//                 </div>
//                 <span className="mt-2 text-sm">Step</span>
//               </div>

//               {/* Step 2 */}
//               <div className="flex flex-col items-center">
//                 <div className="relative">
//                   <div className="w-14 h-14 rounded-full bg-[#D9D9D9] flex items-center justify-center text-[#036666] font-medium z-10 relative">
//                     02
//                   </div>
//                 </div>
//                 <span className="mt-2 text-sm text-black">Step</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Form */}
//         <div className="space-y-4 mt-8">
//           <div>
//             <input
//               type="text"
//               placeholder="Integration Name"
//               className="h-[40px] w-full border border-[#EBF0ED] rounded-md bg-primary px-3 pr-10 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
//             />
//           </div>

//           <div>
//             <input
//               type="text"
//               placeholder="Description"
//               className="h-[40px] w-full border border-[#EBF0ED] rounded-md bg-primary px-3 pr-10 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
//             />
//           </div>

//           <div className="relative">
//             <select
//               className="h-[40px] w-full border border-[#EBF0ED] rounded-md bg-primary px-3 pr-10 appearance-none focus:border-secondary focus:outline-none text-labelSize md:h-[45px"
//               defaultValue=""
//             >
//               <option value="" disabled>
//                 Type
//               </option>
//               <option value="type1">Type 1</option>
//               <option value="type2">Type 2</option>
//               <option value="type3">Type 3</option>
//             </select>
//             <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//               <svg
//                 className="w-5 h-5 text-gray-400"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//               </svg>
//             </div>
//           </div>

//           <div>
//             <input
//               type="text"
//               placeholder="Lorem ipsum"
//               className="h-[40px] w-full border border-[#EBF0ED] rounded-md bg-primary px-3 pr-10 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
//             />
//           </div>

//           <div>
//             <input
//               type="text"
//               placeholder="Lorem ipsum"
//               className="h-[40px] w-full border border-[#EBF0ED] rounded-md bg-primary px-3 pr-10 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
//             />
//           </div>

//           <div>
//             <input
//               type="text"
//               placeholder="Lorem ipsum"
//               className="h-[40px] w-full border border-[#EBF0ED] rounded-md bg-primary px-3 pr-10 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
//             />
//           </div>
//         </div>

//         {/* Pagination and buttons */}
//         <div className="flex justify-between items-center mt-8">
//           <div className="flex space-x-1">
//             {/* {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//               <button
//                 key={page}
//                 onClick={() => setCurrentPage(page)}
//                 className={`w-8 h-8 flex items-center justify-center rounded-full ${
//                   currentPage === page ? "bg-teal-700 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//                 }`}
//               >
//                 {page}
//               </button>
//             ))} */}
//           </div>

//           <div className="flex space-x-2">
//             <button className="px-4 py-2 bg-white border border-gray-200 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent">
//               Test Connection
//             </button>
//             <button className="px-4 py-2 bg-teal-700 text-white rounded-md hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2">
//               Connect
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

"use client"

import { useState } from "react"

export default function IntegrationsPage() {
  

  return (
    <div className="w-full mx-auto p-6">
      <div className="rounded-large shadow-md p-6 bg-white">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-2xl font-semibold text-center mb-2">Integrations</h1>
          <p className="text-center text-gray-600 max-w-md">
            Lorem ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          {/* Step indicator */}
          <div className="relative w-full max-w-md mt-8">
            {/* Connecting Line */}
            <div className="bg-black absolute top-8  w-full h-[2px] bg-gray-400 -translate-y-1/2"></div>

            <div className="flex justify-between relative">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-teal-700 flex items-center justify-center text-white font-medium z-10 relative">
                    01
                  </div>
                </div>
                <span className="mt-2 text-sm">Step</span>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-[#D9D9D9] flex items-center justify-center text-[#036666] font-medium z-10 relative">
                    02
                  </div>
                </div>
                <span className="mt-2 text-sm text-black">Step</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-4 mt-8">
          <div>
            <input
              type="text"
              placeholder="Integration Name"
              className="h-[40px] w-full border border-[#EBF0ED] rounded-md bg-primary px-3 pr-10 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Description"
              className="h-[40px] w-full border border-[#EBF0ED] rounded-md bg-primary px-3 pr-10 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
            />
          </div>

          <div className="relative">
            <select
              className="h-[40px] w-full border border-[#EBF0ED] rounded-md bg-primary px-3 pr-10 appearance-none focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
              defaultValue=""
            >
              <option value="" disabled>
                Type
              </option>
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
              <option value="type3">Type 3</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>

          <div>
            <input
              type="text"
              placeholder="Lorem ipsum"
              className="h-[40px] w-full border border-[#EBF0ED] rounded-md bg-primary px-3 pr-10 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Lorem ipsum"
              className="h-[40px] w-full border border-[#EBF0ED] rounded-md bg-primary px-3 pr-10 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Lorem ipsum"
              className="h-[40px] w-full border border-[#EBF0ED] rounded-md bg-primary px-3 pr-10 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
            />
          </div>
        </div>

        {/* Pagination and buttons */}
        <div className="flex justify-between items-center mt-8">
          <div className="flex space-x-1">
            {/* Pagination Buttons (If needed in future) */}
          </div>

          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-white border border-gray-200 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent">
              Test Connection
            </button>
            <button className="px-4 py-2 bg-teal-700 text-white rounded-md hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2">
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
