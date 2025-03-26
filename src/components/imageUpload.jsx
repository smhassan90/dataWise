import React, { useState } from "react";
import { Axios, summary } from "../config/summaryAPI";
import { toast } from "react-hot-toast";

const ImageUpload = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  
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
        url: summary.uploadImage.url,
        method: summary.uploadImage.method,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        let imageUrl = response.data.data.avatar;
        console.log("Uploaded Image URL:", imageUrl);

        if (!imageUrl) {
          toast.error("No image URL returned from server");
          return;
        }

        // Convert backslashes (\) to forward slashes (/)
        imageUrl = imageUrl.replace(/\\/g, "/");

        // Add server base URL
        const fullImageUrl = `https://yourserver.com/${imageUrl}`;

        setProfileImage(`${fullImageUrl}?t=${new Date().getTime()}`); // Cache bypass

        toast.success("Profile picture updated successfully");
      } else {
        toast.error(response.data.message || "Failed to upload image");
      }
    } catch (error) {
      console.error("Upload error details:", error);

      if (error.response?.status === 500) {
        toast.error("Server error: Please check if the uploads directory exists");
      } else if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Error uploading image. Please try again.");
      }
    } finally {
      setIsUploading(false);
    }
  };

  
  return (
    <div className="w-full bg-gradient-to-r from-secondary to-secondary py-normal flex flex-col items-center justify-center text-white">

    <div className="relative group">
      <div className="h-40 w-40 rounded-full overflow-hidden bg-white/20 ring-4 ring-white/30 shadow-lg">
        {profileImage ? (
          <img
            src={profileImage || "/placeholder.svg"}
            alt="Profile"
            className="h-full w-full object-cover"
          />
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
        className={`absolute bottom-0 right-0 bg-white text-secondary rounded-full p-normal shadow-md cursor-pointer transform transition-transform hover:scale-110 ${
          isUploading ? "opacity-50 cursor-not-allowed" : ""
        }`}
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
      <input
        id="picture"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageUpload}
        disabled={isUploading}
      />
    </div>
    <h2 className="mt-6 text-2xl font-bold">
            {/* {userData.firstName} {userData.lastName} */}
          </h2>
          <p className="text-indigo-200">
            {/* {userData.email} */}
            </p>
    </div>
  );
};

export default ImageUpload;
