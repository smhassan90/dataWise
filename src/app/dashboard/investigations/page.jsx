// "use client"
// import { useState } from "react"
// import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"
// import { useTable, usePagination } from 'react-table';
// import Pagination from "@/src/components/pagination"

// export default function ShowReport() {
//   const columns = [
//     {
//       Header: "ID",
//       accessor: "id",
//     },
//     {
//       Header: "Name",
//       accessor: "name",
//     },
//     {
//       Header: "Subject",
//       accessor: "subject",
//     },
//     {
//       Header: "Attendance",
//       accessor: "attendance",
//     },
//     {
//       Header: "Check-In Time",
//       accessor: "checkIn",
//     },
//     {
//       Header: "Check-Out Time",
//       accessor: "checkOut",
//     },
//   ];
//   const data = [
//     {
//       id: 1,
//       name: "Ali Ahmed",
//       subject: "Mathematics",
//       attendance: "Present",
//       checkIn: "08:30 AM",
//       checkOut: "02:00 PM",
//     },
//     {
//       id: 2,
//       name: "Sara Khan",
//       subject: "English",
//       attendance: "Absent",
//       checkIn: "-",
//       checkOut: "-",
//     },
//     {
//       id: 3,
//       name: "Bilal Raza",
//       subject: "Science",
//       attendance: "Present",
//       checkIn: "09:00 AM",
//       checkOut: "01:30 PM",
//     },
//     {
//       id: 4,
//       name: "Ayesha Noor",
//       subject: "History",
//       attendance: "Present",
//       checkIn: "08:45 AM",
//       checkOut: "02:15 PM",
//     },
//     {
//       id: 5,
//       name: "Usman Javed",
//       subject: "Geography",
//       attendance: "Absent",
//       checkIn: "-",
//       checkOut: "-",
//     },
//     {
//       id: 6,
//       name: "Zara Malik",
//       subject: "Physics",
//       attendance: "Present",
//       checkIn: "09:15 AM",
//       checkOut: "01:45 PM",
//     },
//     {
//       id: 7,
//       name: "Hamza Sheikh",
//       subject: "Chemistry",
//       attendance: "Present",
//       checkIn: "08:20 AM",
//       checkOut: "02:10 PM",
//     },
//     {
//       id: 8,
//       name: "Nida Hussain",
//       subject: "Biology",
//       attendance: "Absent",
//       checkIn: "-",
//       checkOut: "-",
//     },
//   ];
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     page,
//     prepareRow,
//     nextPage,
//     previousPage,
//     canNextPage,
//     canPreviousPage,
//     pageOptions,
//     state: { pageIndex },
//   } = useTable(
//     {
//       columns,
//       data,
//       initialState: { pageIndex: 0, pageSize: 10 },

//       // getRowId: (row, index) => row.id ? row.id.toString() : index.toString(),
//     },
//     usePagination
//   );
//   const [isLoading, setIsLoading] = useState(false)

//   // const refreshData = () => {
//   //   setIsLoading(true)

//   //   // Simulate API call with timeout
//   //   setTimeout(() => {
//   //     // In a real application, you would fetch fresh data here
//   //     setIsLoading(false)
//   //   }, 1000)
//   // }

//   // Calculate total tickets and revenue

//   return (
//     <div className="container  px-normal py-normal">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">Genertae Report</h1>
//         {/* <button
//           onClick={refreshData}
//           className="flex items-center gap-2 bg-secondary hover:bg-secondary text-white px-normal py-normal rounded-large transition-colors"
//           disabled={isLoading}
//         >
//           <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
//           {isLoading ? "Refreshing..." : "Refresh Report"}
//         </button> */}
//       </div>
//       <div className="p-4">
//         <div className="overflow-x-auto overflow-y-auto max-h-[500px]">
//           <table {...getTableProps()} className="table-auto w-full border-collapse border border-gray-300">
//             <thead className="bg-gray-200">
//               {headerGroups.map((headerGroup,groupIndex) => (
//                 <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id || groupIndex}>
//                   {headerGroup.headers.map((column,colIndex) => (
//                     <th {...column.getHeaderProps()} key={column.id || colIndex} className="p-2 border border-gray-300">
//                       {column.render('Header')}
//                     </th>
//                   ))}
//                 </tr>
//               ))}
//             </thead>
//             <tbody {...getTableBodyProps()}>
//               {page.map((row) => {
//                 prepareRow(row);
//                 return (
//                   <tr {...row.getRowProps()} key={row.id} className="even:bg-gray-50">
//                     {row.cells.map((cell) => (
//                       <td {...cell.getCellProps()} key={cell.column.id} className="p-2 border border-gray-300">
//                         {cell.render('Cell')}
//                       </td>
//                     ))}
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//         <div className="flex justify-between items-center mt-4">
//           <button
//             onClick={() => previousPage()}
//             disabled={!canPreviousPage}
//             className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
//           >
//             Previous
//           </button>
//           <span>
//             Page <strong>{pageIndex + 1}</strong> of {pageOptions.length}
//           </span>
//           <button
//             onClick={() => nextPage()}
//             disabled={!canNextPage}
//             className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }
