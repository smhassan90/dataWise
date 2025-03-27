"use client";
import { useEffect, useState } from "react";
import { Button } from "../utils/button";
import { LuRefreshCcw } from "react-icons/lu";
import { PuffLoader } from "react-spinners";

// Sample data generator
const generateData = (graphData, keys) => {
  const data = [];
  for (let i = 1; i <= graphData.length; i++) {
    const row = {
      id: i,
    };
    keys.forEach((key) => {
      // console.log(graphData[0])
      row[key] = `${graphData[i - 1][key]}`;
    });
    data.push(row);
  }
  return data;
};

const ReportChartComponent = ({ graphData, handleRefreshQuery, isLoading }) => {
  const keys = Object.keys(graphData.data[0]);
  const [data,setData] = useState(generateData(graphData.data, keys));
  console.log(data,"data")
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isSpinning, setIsSpinning] = useState(false); // To track if the icon should spin
  // Calculate pagination
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  useEffect(()=>{
    setData(generateData(graphData.data, keys))
  },[graphData])
  const handleIconClick = async () => {
    setIsSpinning(true);
    await handleRefreshQuery();
    setIsSpinning(false);
  };

  // Column headers
  const columns = [
    { key: "id", label: "Id" },
    ...keys.map((key) => ({
      key: key,
      label: key.charAt(0).toUpperCase() + key.slice(1).toLowerCase(),
    })),
  ];

  // Pagination handlers
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(e.target.value);
    setCurrentPage(1);
  };

  const downloadCSV = () => {
    const csvHeader = columns.map((col) => col.label).join(",") + "\n";
    const csvRows = data.map((row) =>
        columns.map((col) => (row[col.key] ? row[col.key] : "")).join(",")
      )
      .join("\n");

    const csvContent = "data:text/csv;charset=utf-8," + encodeURIComponent(csvHeader + csvRows);
    const link = document.createElement("a");
    link.href = csvContent;
    link.download = `${graphData.storyName}.csv`;
    link.click();
  };

  return (
    <>
      {graphData.storyName && <div className="flex justify-between items-center relative w-[100%]">
        <span>{graphData.storyName}</span>
        <div className="flex gap-3">
          <Button onClick={downloadCSV}
          >
            Download CSV
          </Button>
          <Button className="space-x-4" onClick={handleIconClick}>
            <span>Sync</span>
            <LuRefreshCcw
              className=""
              size={19}
              style={{
                color: "white",
                transform: isSpinning ? "rotate(360deg)" : "rotate(0deg)",
                transition: "transform 0.9s ease",
              }}
            />
          </Button>
        </div>
      </div>}

      {isLoading ? (
        <div className="flex justify-center items-center h-[300px]">
          <PuffLoader color="#036666" size={100} />
        </div>
      ) : <div className="flex flex-col gap-4 mt-2">
        <div className="rounded-large border border-secondary">
          <div className="overflow-x-auto">
            <div className="max-h-[500px] overflow-y-auto ">
              <table className="w-full min-w-max table-auto">
                <thead className="sticky top-0">
                  <tr className="border-b border-gray-200">
                    {columns.map((column) => (
                      <th
                        key={column.key}
                        className="whitespace-nowrap border-r border-gray-200 px-4 py-3 text-left font-medium text-gray-600 last:border-r-0"
                      >
                        {column.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((row, rowIndex) => (
                    <tr
                      key={row.id}
                      className={`border-b border-secondary transition-colors hover:bg-gray-50 ${rowIndex === currentItems.length - 1 ? "border-b-0" : ""
                        }`}
                    >
                      {columns.map((column) => (
                        <td
                          key={`${row.id}-${column.key}`}
                          className="border-r border-secondary px-normal py-2 last:border-r-0"
                        >
                          {row[column.key]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Rows per page:</span>
            <select
              className="h-8 rounded-md border border-gray-300 bg-white px-2 py-1 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
            <span>
              {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, data.length)} of{" "}
              {data.length} items
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              className={`h-8 w-8 rounded-md border border-gray-300 flex items-center justify-center ${currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-50"
                }`}
              onClick={() => goToPage(1)}
              disabled={currentPage === 1}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="11 17 6 12 11 7"></polyline>
                <polyline points="18 17 13 12 18 7"></polyline>
              </svg>
            </button>
            <button
              className={`h-8 w-8 rounded-md border border-gray-300 flex items-center justify-center ${currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-50"
                }`}
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <div className="flex items-center gap-1 px-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;

                if (totalPages <= 5) {
                  // If we have 5 or fewer pages, show all page numbers
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  // If we're near the start, show pages 1-5
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  // If we're near the end, show the last 5 pages
                  pageNum = totalPages - 4 + i;
                } else {
                  // Otherwise show 2 pages before and 2 pages after the current page
                  pageNum = currentPage - 2 + i;
                }

                return (
                  <button
                    key={pageNum}
                    className={`h-8 w-8 rounded-md border ${currentPage === pageNum
                      ? "bg-secondary text-white"
                      : "hover:bg-Quinary hover:text-white"
                      }`}
                    onClick={() => goToPage(pageNum)}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              className={`h-8 w-8 rounded-md border border-secondary flex items-center justify-center ${currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-50"
                }`}
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
            <button
              className={`h-8 w-8 rounded-md border border-gray-300 flex items-center justify-center ${currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-50"
                }`}
              onClick={() => goToPage(totalPages)}
              disabled={currentPage === totalPages}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="13 17 18 12 13 7"></polyline>
                <polyline points="6 17 11 12 6 7"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>}
    </>
  );
};

export default ReportChartComponent;
