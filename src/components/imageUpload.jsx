"use client"
import React, { useState } from "react";
import { Axios, baseURL, summary } from "../config/summaryAPI";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { IoCameraOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import Image from "next/image";
import { login } from "../redux/auth";
import { AxiosError } from "../utils/axiosError";

const ImageUpload = () => {
  const user = useSelector(state => state?.auth?.user)
  const [isUploading, setIsUploading] = useState(false);
  const [profileImage, setProfileImage] = useState(`${baseURL}/${user?.profilePicture}` || null);
  const dispatch = useDispatch()

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast.error("Please upload an image file");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size should be less than 5MB");
      return;
    }
    try {
      setIsUploading(true);
      const formData = new FormData();
      formData.append("profilePicture", file);
      const response = await Axios({
        ...summary.uploadImage,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        dispatch(login({
          ...user,
          profilePicture: response.data.data.avatar
        }));
        setProfileImage(`${baseURL}/${response.data.data.avatar}`)
        setIsUploading(false)
      }
    } catch (error) {
      setIsUploading(false)
      console.log(error)
      AxiosError(error)
    }
  };


  return (
    <div className="w-full bg-gradient-to-r from-secondary to-secondary py-normal flex flex-col items-center justify-center text-white">
      <div className="relative group">
        <div className="h-40 w-40 rounded-full overflow-hidden bg-white/20 ring-4 ring-white/30 shadow-lg">
          {profileImage ? (
            <Image
              src={profileImage}
              alt="Profile"
              width={1000}
              height={1000}
              className="h-full w-full"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-secondary to-secondary">
              <IoPersonOutline size={60} />
            </div>
          )}
        </div>
        <label
          htmlFor="picture"
          className={`absolute bottom-0 right-0 bg-white text-secondary rounded-full p-normal shadow-md cursor-pointer transform transition-transform hover:scale-110 ${isUploading ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
          <IoCameraOutline size={25} />
        </label>
        <input
          id="picture"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
          disabled={isUploading}
        />
      </div>
      <h2 className="mt-normal text-2xl font-bold">
        {user?.firstName} {user?.lastName}
      </h2>
      <p className="text-indigo-200">
        {user?.email}
      </p>
    </div>
  );
};

export default ImageUpload;
