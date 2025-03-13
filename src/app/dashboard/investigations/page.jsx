// "use client"

// import { useState, useEffect } from "react"
// import { Search, RefreshCw, Download, Users, UserPlus, UserCheck, UserX } from "lucide-react"

// export default function UserReport() {
//   const [users, setUsers] = useState([])
//   const [filteredUsers, setFilteredUsers] = useState([])
//   const [isLoading, setIsLoading] = useState(true)
//   const [searchQuery, setSearchQuery] = useState("")
//   const [statusFilter, setStatusFilter] = useState("all")

//   // Stats
  

//   // Fetch users data from API
//   useEffect(() => {
//     const fetchUsers = async () => {
//       setIsLoading(true)
//       try {
//         // In a real app, replace this with your actual API endpoint
//         // const response = await fetch('/api/users')
//         // const data = await response.json()

//         // Simulating API response with mock data
//         await new Promise((resolve) => setTimeout(resolve, 1500))
//         const mockUsers = Array.from({ length: 20 }, (_, i) => ({
//           id: i + 1,
//           name: `User ${i + 1}`,
//           father: `User ${i + 1}ncndnn`,
//           studenet: `User ${i + 1}aliii`,
//           email: `user${i + 1}@example.com`,
//         }))

//         setUsers(mockUsers)
//         setFilteredUsers(mockUsers)

//         // Calculate stats
//         // const active = mockUsers.filter((user) => user.status === "active").length
//         // const inactive = mockUsers.filter((user) => user.status === "inactive").length
//         // const pending = mockUsers.filter((user) => user.status === "pending").length
//         const currentMonth = new Date().getMonth()
//         // // const newThisMonth = mockUsers.filter((user) => {
//         //   const joinMonth = new Date(user.joinDate).getMonth()
//         //   return joinMonth === currentMonth
//         // }).length

        
//       } catch (error) {
//         console.error("Error fetching users:", error)
//       } finally {
//         setIsLoading(false)
//       }
//     }

//     fetchUsers()
//   }, [])

//   // Filter users based on search query and status filter
//   useEffect(() => {
//     let result = users

//     if (searchQuery) {
//       const query = searchQuery.toLowerCase()
//       result = result.filter(
//         (user) =>
//           user.name.toLowerCase().includes(query) ||
//           user.email.toLowerCase().includes(query) ||
//           user.role.toLowerCase().includes(query),
//       )
//     }

//     if (statusFilter !== "all") {
//       result = result.filter((user) => user.status === statusFilter)
//     }

//     setFilteredUsers(result)
//   }, [searchQuery, statusFilter, users])

//   // Status badge color
  

//   // Format date to be more readable
  

//   // Handle refresh
//   const handleRefresh = () => {
//     setIsLoading(true)
//     // In a real app, this would re-fetch the data
//     setTimeout(() => setIsLoading(false), 1000)
//   }

//   // Handle export
  

//   return (
//     <div className="container mx-auto py-normal space-y-6 px-normal">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//         <div>
//           <h1 className="text-3xl font-bold tracking-tight">Report</h1>
//           <p className="text-gray-500">Overview of all users in the database</p>
//         </div>
//         <div className="flex items-center gap-2">
//           <button
//             className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-md text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             onClick={handleRefresh}
//             disabled={isLoading}
//           >
//             <RefreshCw className="h-4 w-4 mr-2" />
//             Refresh
//           </button>
          
//         </div>
//       </div>

//       {/* Stats Cards */}
//       {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         <div className="bg-white p-4 rounded-lg shadow">
//           <div className="flex items-center justify-between mb-2">
//             <h3 className="text-sm font-medium text-gray-500">Total Users</h3>
//             <Users className="h-4 w-4 text-gray-400" />
//           </div>
//           <div className="text-2xl font-bold">{stats.total}</div>
//           <p className="text-xs text-gray-500">All registered users</p>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow">
//           <div className="flex items-center justify-between mb-2">
//             <h3 className="text-sm font-medium text-gray-500">Active Users</h3>
//             <UserCheck className="h-4 w-4 text-green-500" />
//           </div>
//           <div className="text-2xl font-bold">{stats.active}</div>
//           <p className="text-xs text-gray-500">{Math.round((stats.active / stats.total) * 100)}% of total users</p>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow">
//           <div className="flex items-center justify-between mb-2">
//             <h3 className="text-sm font-medium text-gray-500">Inactive Users</h3>
//             <UserX className="h-4 w-4 text-gray-500" />
//           </div>
//           <div className="text-2xl font-bold">{stats.inactive}</div>
//           <p className="text-xs text-gray-500">{Math.round((stats.inactive / stats.total) * 100)}% of total users</p>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow">
//           <div className="flex items-center justify-between mb-2">
//             <h3 className="text-sm font-medium text-gray-500">New Users</h3>
//             <UserPlus className="h-4 w-4 text-blue-500" />
//           </div>
//           <div className="text-2xl font-bold">{stats.newThisMonth}</div>
//           <p className="text-xs text-gray-500">Added this month</p>
//         </div>
//       </div> */}

//       {/* Table Section */}
//       <div className="bg-white rounded-large shadow-md overflow-hidden">
//         {/* <div className="p-normal border-b border-gray-200">
//           <h2 className="text-lg font-medium">Users</h2>
//           <p className="text-sm text-gray-500">
//             Showing {filteredUsers.length} of {users.length} users
//           </p>
//         </div> */}

//         {/* Filters */}
//         <div className="p-normal bg-gray-50">
//           <div className="flex flex-col sm:flex-row gap-4">
//             <div className="relative flex-1">
//               {/* <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <Search className="h-4 w-4 text-gray-400" />
//               </div> */}
//               {/* <input
//                 type="text"
//                 placeholder="Search users..."
//                 className="h-[40px] pl-10 w-full border border-[#EBF0ED] rounded-large bg-primary px-normal pr-16 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               /> */}
//             </div>
//             {/* <div className="w-full sm:w-[180px]">
//               <select
//                 className="h-[40px] w-full border border-[#EBF0ED] rounded-large bg-primary px-normal pr-16 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
//                 value={statusFilter}
//                 onChange={(e) => setStatusFilter(e.target.value)}
//               >
//                 <option value="all">All Statuses</option>
//                 <option value="active">Active</option>
//                 <option value="inactive">Inactive</option>
//                 <option value="pending">Pending</option>
//               </select>
//             </div> */}
//           </div>
//         </div>

//         {/* Users Table */}
//         {isLoading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
//           </div>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th
//                     scope="col"
//                     className="px-normal py-normal text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     ID
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-normal py-normal text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Name
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Email
//                   </th>
//                   {/* <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Role
//                   </th> */}
//                   {/* <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Status
//                   </th> */}
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     father
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Student
//                   </th>
//                   {/* <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Join Date
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Last Active
//                   </th> */}
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {filteredUsers.length === 0 ? (
//                   <tr>
//                     <td colSpan={7} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
//                       No users found.
//                     </td>
//                   </tr>
//                 ) : (
//                   filteredUsers.map((user) => (
//                     <tr key={user.id} className="hover:bg-gray-50">
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.id}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.name}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
//                       {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td> */}
//                       {/* <td className="px-6 py-4 whitespace-nowrap text-sm"> */}
//                         {/* <span
//                           className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(user.status)}`}
//                         >
//                           {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
//                         </span> */}
//                       {/* </td> */}
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.father}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.studenet}</td>
//                       {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(user.joinDate)}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         {formatDate(user.lastActive)}
//                       </td> */}
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {/* Pagination placeholder - can be implemented if needed */}
//         <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
//           <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
//             <div>
//               <p className="text-sm text-gray-700">
//                 Showing <span className="font-medium">{filteredUsers.length}</span> results
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


"use client"

import { useState, useEffect } from "react"
import { RefreshCw } from "lucide-react"
import { Button } from "@/src/utils/button"

export default function UserReport() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true)
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500))
        const mockUsers = Array.from({ length: 20 }, (_, i) => ({
          id: i + 1,
          name: `User ${i + 1}`,
          father: `User ${i + 1}ncndnn`,
          studenet: `User ${i + 1}aliii`,
          email: `user${i + 1}@example.com`,
        }))
        setUsers(mockUsers)
      } catch (error) {
        console.error("Error fetching users:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUsers()
  }, [])

  const handleRefresh = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 1000)
  }

  return (
    <div className="container mx-auto py-normal space-y-6 px-normal">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Report</h1>
          <p className="text-gray-500">Overview of all users in the database</p>
        </div>
        <div className="flex items-center gap-2">
          {/* <button
            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-md text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleRefresh}
            disabled={isLoading}
          > */}
          <Button onClick={handleRefresh} disabled={isLoading}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
            </Button>
          {/* </button> */}
        </div>
      </div>

      <div className="bg-white rounded-large shadow-md overflow-hidden">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-normal py-normal text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-normal py-normal text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Father</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Studenets</th>


                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-normal py-normal whitespace-nowrap text-sm font-medium text-gray-900">{user.id}</td>
                    <td className="px-normal py-normal whitespace-nowrap text-sm text-gray-500">{user.name}</td>
                    <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                    <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">{user.father}</td>
                    <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">{user.studenet}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
