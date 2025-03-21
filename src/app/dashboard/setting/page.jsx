// // "use client";

// // import { Button } from "@/src/utils/button";
// // import { useState, useRef } from "react";

// // export default function SettingsForm() {
// //   const [profileImage, setProfileImage] = useState(null);
// //   const [showPasswordFields, setShowPasswordFields] = useState(false);
// //   const fileInputRef = useRef(null);

// //   const handleImageUpload = (e) => {
// //     const file = e.target.files?.[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onload = (e) => {
// //         setProfileImage(e.target?.result);
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   const togglePasswordFields = () => {
// //     setShowPasswordFields(!showPasswordFields);
// //   };

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     console.log("Form submitted");
// //   };

// //   return (
// //     <div className="flex justify-center items-center min-h-screen bg-gray-50">
// //       <div className="bg-white rounded-large shadow-md p-normal w-full max-w-md">
// //         <div className="flex flex-col items-center mb-normal relative">
// //           <div
// //             className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center relative overflow-hidden border-2 border-gray-300 cursor-pointer"
// //             onClick={() => fileInputRef.current?.click()}
// //           >
// //             {profileImage ? (
// //               <img
// //                 src={profileImage}
// //                 alt="Profile"
// //                 className="w-full h-full object-cover"
// //               />
// //             ) : (
// //               <span className="text-gray-400 text-sm">120 × 120</span>
// //             )}
// //           </div>

// //           <div className="absolute bottom-0 right-40 bg-secondary rounded-full p-1 border-2 border-white">
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               width="20"
// //               height="20"
// //               viewBox="0 0 24 24"
// //               fill="none"
// //               stroke="currentColor"
// //               strokeWidth="2"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               className="text-white"
// //             >
// //               <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
// //               <circle cx="12" cy="13" r="3"></circle>
// //             </svg>
// //           </div>

// //           <input
// //             type="file"
// //             ref={fileInputRef}
// //             className="hidden"
// //             accept="image/*"
// //             onChange={handleImageUpload}
// //           />
// //         </div>

// //         <form className="space-y-4" onSubmit={handleSubmit}>
// //           <div>
// //             <label
// //               htmlFor="firstName"
// //               className="block text-sm font-medium text-gray-700 mb-1"
// //             >
// //               First Name
// //             </label>
// //             <input
// //               type="text"
// //               id="firstName"
// //               placeholder="First Name"
// //               className="h-[40px] w-full border border-[#EBF0ED] rounded-large bg-primary px-normal pr-16 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
// //             />
// //           </div>

// //           <div>
// //             <label
// //               htmlFor="lastName"
// //               className="block text-sm font-medium text-gray-700 mb-1"
// //             >
// //               Last Name
// //             </label>
// //             <input
// //               type="text"
// //               id="lastName"
// //               placeholder="Last Name"
// //               className="h-[40px] w-full border border-[#EBF0ED] rounded-large bg-primary px-normal pr-16 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
// //             />
// //           </div>

// //           <div>
// //             <label
// //               htmlFor="email"
// //               className="block text-sm font-medium text-gray-700 mb-1"
// //             >
// //               Email
// //             </label>
// //             <input
// //               type="email"
// //               id="email"
// //               defaultValue="user@example.com"
// //               className="h-[40px] w-full border border-[#EBF0ED] rounded-large bg-primary px-normal pr-16 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
// //               readOnly
// //             />
// //           </div>

// //           <div className="flex justify-between gap-4">
// //             <Button type="button" onClick={togglePasswordFields}>
// //               Change Password
// //             </Button>
// //             <Button type="submit">Save Changes</Button>
// //           </div>

// //           {showPasswordFields && (
// //             <>
// //               <div className="pt-2">
// //                 <label
// //                   htmlFor="newPassword"
// //                   className="block text-sm font-medium text-gray-700 mb-1"
// //                 >
// //                   New Password
// //                 </label>
// //                 <input
// //                   type="password"
// //                   id="newPassword"
// //                   placeholder="New Password"
// //                   className="h-[40px] w-full border border-[#EBF0ED] rounded-large bg-primary px-normal pr-16 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
// //                 />
// //               </div>

// //               <div>
// //                 <label
// //                   htmlFor="confirmPassword"
// //                   className="block text-sm font-medium text-gray-700 mb-1"
// //                 >
// //                   Confirm Password
// //                 </label>
// //                 <input
// //                   type="password"
// //                   id="confirmPassword"
// //                   placeholder="Confirm New Password"
// //                   className="h-[40px] w-full border border-[#EBF0ED] rounded-large bg-primary px-normal pr-16 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
// //                 />
// //               </div>
// //             </>
// //           )}
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }
// "use client"

// import { useState } from "react"

// export default function SettingsPage() {
//   const [profileImage, setProfileImage] = useState(null)
//   const [showPasswordForm, setShowPasswordForm] = useState(false)
//   const [userData, setUserData] = useState({
//     firstName: "John",
//     lastName: "Doe",
//     email: "john.doe@example.com",
//   })

//   const handleImageChange = (e) => {
//     const file = e.target.files?.[0]
//     if (file) {
//       const reader = new FileReader()
//       reader.onloadend = () => {
//         setProfileImage(reader.result)
//       }
//       reader.readAsDataURL(file)
//     }
//   }

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setUserData((prev) => ({
//       ...prev,
//       [name]: value,
//     }))
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">
//         <div className="text-center mb-10">
//           <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Account Settings</h1>
//           <p className="mt-3 text-lg text-gray-500">Manage your profile and account preferences</p>
//         </div>

//         {/* Profile Section */}
//         <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
//           <div className="md:flex">
//             {/* Profile Picture */}
//             <div className="md:w-1/3 bg-gradient-to-br from-indigo-600 to-purple-600 p-10 flex flex-col items-center justify-center text-white">
//               <div className="relative group">
//                 <div className="h-40 w-40 rounded-full overflow-hidden bg-white/20 ring-4 ring-white/30 shadow-lg">
//                   {profileImage ? (
//                     <img
//                       src={profileImage || "/placeholder.svg"}
//                       alt="Profile"
//                       className="h-full w-full object-cover"
//                     />
//                   ) : (
//                     <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-indigo-400 to-purple-400">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-20 w-20 text-white"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                         />
//                       </svg>
//                     </div>
//                   )}
//                 </div>
//                 <label
//                   htmlFor="picture"
//                   className="absolute bottom-0 right-0 bg-white text-indigo-600 rounded-full p-2 shadow-lg cursor-pointer transform transition-transform hover:scale-110"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                   </svg>
//                 </label>
//                 <input id="picture" type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
//               </div>
//               <h2 className="mt-6 text-xl font-bold">
//                 {userData.firstName} {userData.lastName}
//               </h2>
//               <p className="text-indigo-200">{userData.email}</p>
//             </div>

//             {/* Personal Information */}
//             <div className="md:w-2/3 p-8">
//               <h2 className="text-2xl font-bold text-gray-800 mb-6">Personal Information</h2>
//               <div className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
//                       First Name
//                     </label>
//                     <input
//                       id="firstName"
//                       name="firstName"
//                       value={userData.firstName}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
//                       placeholder="Enter your first name"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
//                       Last Name
//                     </label>
//                     <input
//                       id="lastName"
//                       name="lastName"
//                       value={userData.lastName}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
//                       placeholder="Enter your last name"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                     Email Address
//                   </label>
//                   <input
//                     id="email"
//                     name="email"
//                     value={userData.email}
//                     disabled
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-500"
//                   />
//                   <p className="mt-1 text-xs text-gray-500">Your email address cannot be changed</p>
//                 </div>
//                 <div className="pt-4">
//                   <button className="w-full md:w-auto px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors">
//                     Save Changes
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Password Section */}
//         <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//           <div className="p-8">
//             <div className="flex items-center justify-between mb-6">
//               <h2 className="text-2xl font-bold text-gray-800">Password Settings</h2>
//               <button
//                 onClick={() => setShowPasswordForm(!showPasswordForm)}
//                 className={`px-4 py-2 rounded-lg font-medium transition-colors ${
//                   showPasswordForm
//                     ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
//                     : "bg-indigo-600 text-white hover:bg-indigo-700"
//                 }`}
//               >
//                 {showPasswordForm ? "Cancel" : "Change Password"}
//               </button>
//             </div>

//             {showPasswordForm ? (
//               <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
//                 <div className="space-y-6">
//                   <div>
//                     <label htmlFor="oldPassword" className="block text-sm font-medium text-gray-700 mb-1">
//                       Current Password
//                     </label>
//                     <input
//                       id="oldPassword"
//                       type="password"
//                       className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
//                       placeholder="Enter your current password"
//                     />
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
//                         New Password
//                       </label>
//                       <input
//                         id="newPassword"
//                         type="password"
//                         className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
//                         placeholder="Enter new password"
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
//                         Confirm New Password
//                       </label>
//                       <input
//                         id="confirmPassword"
//                         type="password"
//                         className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
//                         placeholder="Confirm new password"
//                       />
//                     </div>
//                   </div>
//                   <div className="pt-2">
//                     <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors">
//                       Update Password
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <p className="text-gray-500">
//                 For security reasons, we recommend changing your password regularly. Your password must be at least 8
//                 characters long and include a mix of letters, numbers, and special characters.
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

"use client"

import { Button } from "@/src/utils/button"
import { useState } from "react"

export default function SettingsPage() {
  const [profileImage, setProfileImage] = useState(null)
  const [showPasswordForm, setShowPasswordForm] = useState(false)
  const [userData, setUserData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
  })

  const handleImageChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfileImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-normal px-normal sm:px-6 lg:px-normal">
      <div className="mx-auto">
        {/* Profile Section - Now at the top */}
        <div className="bg-white rounded-large shadow-md overflow-hidden mb-normal">
          {/* Profile Picture - Full width at top */}
          <div className="w-full   bg-gradient-to-r from-secondary to-secondary py-normal flex flex-col items-center justify-center text-white">
            <div className="relative group">
              <div className="h-40 w-40 rounded-full overflow-hidden bg-white/20 ring-4 ring-white/30 shadow-lg">
                {profileImage ? (
                  <img src={profileImage || "/placeholder.svg"} alt="Profile" className="h-full w-full object-cover" />
                ) : (
                  <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-secondary to-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-20 w-20 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <label
                htmlFor="picture"
                className="absolute bottom-0 right-0 bg-white text-secondary rounded-full p-normal  shadow-md cursor-pointer transform transition-transform hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </label>
              <input id="picture" type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
            </div>
            <h2 className="mt-6 text-2xl font-bold">
              {userData.firstName} {userData.lastName}
            </h2>
            <p className="text-indigo-200">{userData.email}</p>
          </div>

          {/* Personal Information - Below profile picture */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Personal Information</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    value={userData.firstName}
                    onChange={handleInputChange}
                  className="h-[40px] w-full border border-[#EBF0ED] rounded-large bg-primary px-normal pr-16 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    value={userData.lastName}
                    onChange={handleInputChange}
                    className="h-[40px] w-full border border-[#EBF0ED] rounded-large bg-primary px-normal pr-16 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  value={userData.email}
                  disabled
                  className="h-[40px] w-full border border-[#EBF0ED] rounded-large bg-primary px-normal pr-16 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
                />
                <p className="mt-1 text-xs text-gray-500">Your email address cannot be changed</p>
              </div>
              <div className="pt-4">
                <Button >
                  Save Changes
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Password Section */}
        <div className="bg-white rounded-large shadow-md overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-between mb-normal">
              <h2 className="text-2xl font-bold text-gray-800">Password Settings</h2>
              <Button
                onClick={() => setShowPasswordForm(!showPasswordForm)}
                
              >
                {showPasswordForm ? "Cancel" : "Change Password"}
              </Button>
            </div>

            {showPasswordForm ? (
              <div className="">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="oldPassword" className="block text-sm font-medium text-gray-700 mb-1">
                      Current Password
                    </label>
                    <input
                      id="oldPassword"
                      type="password"
                      className="h-[40px] w-full border border-[#EBF0ED] rounded-large bg-primary px-normal pr-16 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
                      placeholder="Enter your current password"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                        New Password
                      </label>
                      <input
                        id="newPassword"
                        type="password"
                        className="h-[40px] w-full border border-[#EBF0ED] rounded-large bg-primary px-normal pr-16 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
                        placeholder="Enter new password"
                      />
                    </div>
                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm New Password
                      </label>
                      <input
                        id="confirmPassword"
                        type="password"
                        className="h-[40px] w-full border border-[#EBF0ED] rounded-large bg-primary px-normal pr-16 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
                        placeholder="Confirm new password"
                      />
                    </div>
                  </div>
                    <Button>
                      Update Password
                      </Button>
                </div>
              </div>
            ) : (
              <p className="text-gray-500">
                For security reasons, we recommend changing your password regularly. Your password must be at least 8
                characters long and include a mix of letters, numbers, and special characters.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

