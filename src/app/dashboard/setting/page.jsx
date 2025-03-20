
"use client";

import { Button } from "@/src/utils/button";
import { useState, useRef } from "react";

export default function SettingsForm() {
  const [profileImage, setProfileImage] = useState(null);
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const togglePasswordFields = () => {
    setShowPasswordFields(!showPasswordFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    console.log("Form submitted");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white rounded-large shadow-md p-normal w-full max-w-md">
        
        {/* Profile Picture */}
      {/* Profile Picture */}
<div className="flex flex-col items-center mb-normal relative">
  <div
    className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center relative overflow-hidden border-2 border-gray-300 cursor-pointer"
    onClick={() => fileInputRef.current?.click()}
  >
    {profileImage ? (
      <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
    ) : (
      <span className="text-gray-400 text-sm">120 × 120</span>
    )}
  </div>
  
  {/* Camera Icon - Positioned at Bottom Right */}
  <div className="absolute bottom-0 right-40 bg-secondary rounded-full p-1 border-2 border-white">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white"
    >
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
      <circle cx="12" cy="13" r="3"></circle>
    </svg>
  </div>

  <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
</div>


        {/* Form Fields */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              className="h-[40px] w-full border border-[#EBF0ED] rounded-large bg-primary px-normal pr-16 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              className="h-[40px] w-full border border-[#EBF0ED] rounded-large bg-primary px-normal pr-16 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              defaultValue="user@example.com"
              className="h-[40px] w-full border border-[#EBF0ED] rounded-large bg-primary px-normal pr-16 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
              readOnly
            />
          </div>

          {/* Change Password Button */}
          <div className="flex justify-between gap-4">
            <Button type="button" onClick={togglePasswordFields}>
              Change Password
            </Button>
            <Button type="submit">
              Save Changes
            </Button>
          </div>

          {showPasswordFields && (
            <>
              <div className="pt-2">
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  placeholder="New Password"
                  className="h-[40px] w-full border border-[#EBF0ED] rounded-large bg-primary px-normal pr-16 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm New Password"
                  className="h-[40px] w-full border border-[#EBF0ED] rounded-large bg-primary px-normal pr-16 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
                />
              </div>
            </>
          )}

          {/* Save Changes Button */}
        </form>
      </div>
    </div>
  );
}




