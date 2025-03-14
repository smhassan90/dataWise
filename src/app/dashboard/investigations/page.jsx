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
"use client"
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
      
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>






        
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
