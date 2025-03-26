import { RiDeleteBin7Line } from "react-icons/ri";
import { LiaEditSolid } from 'react-icons/lia'
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import EmployeeInfo from './employeeInfo'
import EmployeeEdit from './employeeEdit';
const EmployeesList = ({ columns, currentItems, indexOfFirstItem, expandedViewRow, setExpandedViewRow, expandedEditRow, setExpandedEditRow, storyBoards, employees, data }) => {

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
                {currentItems.map((employee, index) => (
                    <>
                        <tr key={employee._id} className={`${expandedViewRow === (indexOfFirstItem + index + 1) ? "" : "border-b"}`}>
                            {/* <tr key={employee.id} className="border-b"> */}
                            <td className="p-normal w-1/12 font-medium whitespace-nowrap">{indexOfFirstItem + index + 1}</td>
                            <td className="p-normal w-3/12 whitespace-nowrap">{employee.firstName}</td>
                            <td className="p-normal w-4/12 whitespace-nowrap">{employee.email}</td>
                            <td className="p-normal w-2/12 whitespace-nowrap">{new Date(employee.createdAt).toLocaleDateString()}</td>
                            <td className="p-normal w-2/12 whitespace-nowrap flex gap-3">
                                <button onClick={() => toggleViewRow(indexOfFirstItem + index + 1)} className="text-gray-600 hover:text-gray-800">
                                    {expandedViewRow === (indexOfFirstItem + index + 1) ?
                                        <FaRegEye className="w-5 h-5 text-green-700" /> : <FaRegEyeSlash className="w-5 h-5 text-green-700" />}
                                </button>
                                <button onClick={() => toggleEditRow(indexOfFirstItem + index + 1)} className="text-gray-600 hover:text-gray-800">
                                    <LiaEditSolid className="w-5 h-5 text-yellow-600" />
                                </button>
                                <button className="text-gray-600 hover:text-gray-800">
                                    <RiDeleteBin7Line className="w-5 h-5 text-red-700" />
                                </button>
                            </td>
                        </tr>
                        {expandedViewRow === (indexOfFirstItem + index + 1) && (
                            <tr>
                                <td colSpan={5} className="p-0">
                                    <div className="animate-slideDown overflow-hidden">
                                        <EmployeeInfo employee={employee} storyBoards={storyBoards} />
                                    </div>
                                </td>
                            </tr>
                        )}
                        {expandedEditRow === (indexOfFirstItem + index + 1) && (
                            <tr>
                                <td colSpan={5} className="p-0">
                                    <div className="animate-slideDown overflow-hidden">
                                        <EmployeeEdit employee={employee} storyBoards={storyBoards} setExpandedEditRow={setExpandedEditRow} employees={employees} />
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

export default EmployeesList