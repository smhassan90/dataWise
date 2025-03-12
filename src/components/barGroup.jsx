
const BarChart = () => {
    const data = [
      { height: 7, color: "#0F766E" },
      { height: 40, color: "#0F766E" },
      { height: 60, color: "#0F766E" },
      { height: 30, color: "#F97316" },
      { height: 20, color: "#0F766E" },
      { height: 15, color: "#0F766E" },
      { height: 25, color: "#F97316" },
      { height: 40, color: "#0F766E" },
      { height: 30, color: "#0F766E" },
      { height: 20, color: "#F97316" },
      { height: 50, color: "#0F766E" },
      { height: 60, color: "#0F766E" },
    ];
  
    return (
      <div className="border-none shadow-md bg-[#fdfbf6] rounded-lg p-4">
        <div className="pb-0 flex justify-between items-center">
          <span className="text-gray-500 border-b-2 border-gray-800 text-xs">
            Weekly Average
          </span>
          <select className="h-6 text-[10px] bg-transparent border-none">
            <option value="week">Week</option>
            <option value="day">Day</option>
            <option value="month">Month</option>
          </select>
        </div>
  
        {/* Bars Container */}
        <div className="p-4 overflow-x-auto">
          <div className="h-[120px] flex items-end justify-between min-w-[300px]">
            {data.map((bar, index) => (
              <div key={index} className="w-3 sm:w-5 flex flex-col items-center">
                <div
                  className="w-2 sm:w-3 rounded-sm"
                  style={{ height: `${bar.height}px`, backgroundColor: bar.color }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default BarChart;
  