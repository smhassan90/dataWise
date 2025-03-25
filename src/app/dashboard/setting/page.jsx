"use client"

import { Button } from "@/src/utils/button"
import { useState, useEffect } from "react"
import { Axios, summary } from "@/src/config/summaryAPI"
import { toast } from "react-hot-toast"
import ChangePassword from "@/src/components/changePassword"

export default function SettingsPage() {
  console.log("hello")
  const [profileImage, setProfileImage] = useState(null)
  const [showPasswordForm, setShowPasswordForm] = useState(false)
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })

  

  return (
      <div className="mx-auto">
        <div className="bg-white rounded-large shadow-md overflow-hidden mb-normal">
          <div className="w-full bg-gradient-to-r from-secondary to-secondary py-normal flex flex-col items-center justify-center text-white">
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
              <input id="picture" type="file" accept="image/*" className="hidden" 
               />
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
                    // onChange={handleInputChange}
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
                    // onChange={handleInputChange}
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
                <Button 
                  // onClick={handleProfileUpdate}
                >
                  Save Changes
                </Button>
              </div>
            </div>
          </div>
        </div>
       {/* password api  */}
        {/* Password Section */}
        <ChangePassword/>
      </div>
  )
}

