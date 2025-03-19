// "use client"
// import React, { useEffect, useState } from "react"
// import { Button } from "@/src/utils/button"
// import Pagination from "@/src/components/pagination"
// import { AxiosError } from "@/src/utils/axiosError";
// import { Axios, summary } from "@/src/config/summaryAPI";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { employeeFields } from "@/src/utils/formFields";
// import { employeeSchema } from "@/src/utils/schema";
// import toast from "react-hot-toast";
// import { TextInput } from "@/src/utils/input";

// const DataTable = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(employeeSchema),
//   });
//   useEffect(() => {
//     employees()
//   }, [])
//   const [showEmployeeForm, setShowEmployeeForm] = useState(false)
//   const [employee, setEmployee] = useState([])
//   const [storyBoards, setStoryBoards] = useState([])
//   const employees = async () => {
//     try {
//       const response = await Axios({
//         ...summary.fetchEmployees
//       })
//       console.log(response)
//       if (response.data.success) {
//         setEmployee(response.data.data)
//       }
//     } catch (error) {
//       AxiosError(error)
//     }
//   }
//   const getStoryBoards = async () => {
//     try {
//       const response = await Axios({
//         ...summary.getStoryBoard
//       })
//       if (response.data.success) {
//         setStoryBoards(response.data.data)
//       }
//     } catch (error) {
//       AxiosError(error)
//     }
//   }

//   const onSubmit = async (data) => {
//     try {
//       const response = await Axios({
//         ...summary.addEmployee,
//         data: data
//       })
//       if (response.data.success) {
//         toast.success(response.data.message)
//         setShowEmployeeForm()
//         reset()
//       }
//     } catch (error) {
//       AxiosError(error)
//     }
//   }
//   useEffect(() => {
//     getStoryBoards()
//   }, [])

//   const openForm = () =>{
//     setShowEmployeeForm(true)
//   }
//   const columns = ["ID", "Employee Name", "Created Date", "Actions"]
//   return (
//     <div className="">
//       <Button onClick={()=>openForm()}>Add New Employee</Button>
//       {showEmployeeForm && <form onSubmit={handleSubmit(onSubmit)} className="px-normal m-auto flex flex-col gap-2 mt-normal md:px-0 md:gap-3"
//       >
//         {employeeFields.map((input, index) => (
//           <TextInput input={input} key={index} errors={errors} register={register} />
//         ))}
//         <div className="flex justify-end items-center gap-5">
//           <Button type="button" onClick={(e) => {
//             e.preventDefault()
//             setShowEmployeeForm(false)
//           }} className="!bg-transparent !text-neutral-900 !px-5 !py-[6px] border">Cancel</Button>
//           <Button type="submit" className="px-normal">Save Employee</Button>
//         </div>
//       </form>}
//       {employee.length > 0 && <Pagination data={employee} employees={employees} columns={columns} page="employees" storyBoards={storyBoards} />}
//     </div>
//   )
// }

// export default DataTable

"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/src/utils/button";
import Pagination from "@/src/components/pagination";
import { AxiosError } from "@/src/utils/axiosError";
import { Axios, summary } from "@/src/config/summaryAPI";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { employeeFields } from "@/src/utils/formFields";
import { employeeSchema } from "@/src/utils/schema";
import toast from "react-hot-toast";
import { SelectInput, TextInputWithoutLabel,TextInput } from '@/src/utils/input';

const DataTable = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(employeeSchema),
  });

  const [showEmployeeForm, setShowEmployeeForm] = useState(false);
  const [employee, setEmployee] = useState([]);
  const [storyBoards, setStoryBoards] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    employees();
  }, []);

  const employees = async () => {
    try {
      const response = await Axios({
        ...summary.fetchEmployees,
      });
      if (response.data.success) {
        setEmployee(response.data.data);
        setLoading(false); // Set loading to false when data is fetched
      }
    } catch (error) {
      AxiosError(error);
      setLoading(false); // Set loading to false in case of error as well
    }
  };

  const getStoryBoards = async () => {
    try {
      const response = await Axios({
        ...summary.getStoryBoard,
      });
      if (response.data.success) {
        setStoryBoards(response.data.data);
      }
    } catch (error) {
      AxiosError(error);
    }
  };

  const onSubmit = async (data) => {
    try {
      const response = await Axios({
        ...summary.addEmployee,
        data: data,
      });
      if (response.data.success) {
        toast.success(response.data.message);
        setShowEmployeeForm(false);
        reset();
      }
    } catch (error) {
      AxiosError(error);
    }
  };

  useEffect(() => {
    getStoryBoards();
  }, []);

  const openForm = () => {
    setShowEmployeeForm(true);
  };

  const columns = ["ID", "Employee Name", "Created Date", "Actions"];

  return (
    <div className="">
      <Button onClick={() => openForm()}>Add New Employee</Button>

      {/* Show loader if data is still loading */}
      {loading && <div className="loader">Loading...</div>}

      {/* Show employee form when data is loaded */}
      {showEmployeeForm && !loading && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-normal m-auto flex flex-col gap-2 mt-normal md:px-0 md:gap-3"
        >         
          
                       {employeeFields?.map((input, index) => {
  console.log("Mapping employeeFields:", input);
  
  if (input.type === "text" || input.type === "email" || input.type === "password") {
    return <TextInput input={input} key={index} errors={errors} register={register} />;
  } else if (input.type === "select") {
    return <SelectInput input={input} key={index} errors={errors} register={register} />;
  }
})}

          <div className="flex justify-end items-center gap-5">
            <Button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setShowEmployeeForm(false);
              }}
              className="!bg-transparent !text-neutral-900 !px-5 !py-[6px] border"
            >
              Cancel
            </Button>
            <Button type="submit" className="px-normal">
              Save Employee
            </Button>
          </div>
        </form>
      )}

      {/* Display pagination and employee data */}
      {employee.length > 0 && !loading && (
        <Pagination
          data={employee}
          employees={employees}
          columns={columns}
          page="employees"
          storyBoards={storyBoards}
        />
      )}
    </div>
  );
};

export default DataTable;
