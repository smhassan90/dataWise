"use client";

import { Button } from "@/src/utils/button";
import { useState, useEffect } from "react";
import ChangePassword from "@/src/components/changePassword";
import ImageUpload from "@/src/components/imageUpload";
export default function SettingsPage() {
  console.log("hello");
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  return (
    <div className="mx-auto">
      <div className="bg-white rounded-large shadow-md overflow-hidden mb-normal">
        <div className="w-full bg-gradient-to-r from-secondary to-secondary py-normal flex flex-col items-center justify-center text-white">
          <ImageUpload />
          <h2 className="mt-6 text-2xl font-bold">
            {userData.firstName} {userData.lastName}
          </h2>
          <p className="text-indigo-200">{userData.email}</p>
        </div>
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Personal Information
          </h2>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  value={userData.firstName}
                  className="h-[40px] w-full border border-[#EBF0ED] rounded-large bg-primary px-normal pr-16 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  value={userData.lastName}
                  className="h-[40px] w-full border border-[#EBF0ED] rounded-large bg-primary px-normal pr-16 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                value={userData.email}
                disabled
                className="h-[40px] w-full border border-[#EBF0ED] rounded-large bg-primary px-normal pr-16 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
              />
              <p className="mt-1 text-xs text-gray-500">
                Your email address cannot be changed
              </p>
            </div>
            <div className="pt-4">
              <Button>Save Changes</Button>
            </div>
          </div>
        </div>
      </div>
      {/* Password Section */}
      <ChangePassword />
    </div>
  );
}
