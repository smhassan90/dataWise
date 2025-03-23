"use client";

import { useState } from "react";
import { Edit, X } from "lucide-react";
import { Button } from "@/src/utils/button";
import { GoPencil } from "react-icons/go";
import Image from "next/image";

// Import images
import analyticsIcon from "@/src/assets/images/analytics-icon.png.png";
import dashboarIcon from "@/src/assets/images/dashboard-icon.png";
import Icon from "@/src/assets/images/analytics-icon.png";



export default function CardEditLayout() {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "SWAV Insight",
      description:
        "Unlock actionable insights with precision analytics for smarter decisions.",
      imageUrl: analyticsIcon,
    },
    {
      id: 2,
      title: "DataWise Hub",
      description:
        "Empower your business with real-time data tracking and reporting.",
      // imageUrl: "https:/ imageUrl: analyticsIcon,/img.icons8.com/fluency/96/dashboard.png",
      imageUrl: dashboarIcon,

    },
    {
      id: 3,
      title: "Acuity Pulse",
      description:
        "Monitor and optimize performance with a streamlined platform.",
      // imageUrl: "https://img.icons8.com/fluency/96/line-chart.png",
      imageUrl: dashboarIcon,

    },
    {
      id: 4,
      title: "VisionFlow Analytics",
      description:
        "Gain deep visibility into your operations with intuitive data visualization.",
      // imageUrl: "https://img.icons8.com/fluency/96/analytics-2.png",
      imageUrl: analyticsIcon,

    },
    {
      id: 5,
      title: "IntelliTrack Suite",
      description:
        "Track key metrics effortlessly and make data-driven decisions with ease.",
      // imageUrl: "https://img.icons8.com/fluency/96/data-configuration.png",
      imageUrl: Icon,
      
    },
  ]);

  const [editingCardId, setEditingCardId] = useState(null);
  const [editFormData, setEditFormData] = useState(null);

  const handleEditClick = (card) => {
    setEditingCardId(card.id);
    setEditFormData({ ...card });
  };

  const handleCloseEdit = () => {
    setEditingCardId(null);
    setEditFormData(null);
  };

  const handleSaveEdit = () => {
    if (editFormData) {
      setCards(
        cards.map((card) => (card.id === editFormData.id ? editFormData : card))
      );
      setEditingCardId(null);
      setEditFormData(null);
    }
  };

  const handleInputChange = (e) => {
    if (editFormData) {
      setEditFormData({
        ...editFormData,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <div className="container p-normal relative">
      {/* Main content area with cards */}
      <div
        className={`grid grid-cols-1 gap-4 ${
          editingCardId !== null ? "md:mr-[calc(50%+2rem)]" : "md:grid-cols-2"
        }`}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="transition-all duration-300 ease-in-out"
          >
            <div className="text-white bg-gradient-to-r from-red-500 to-orange-400 rounded-large shadow-md h-full">
              <div className="p-6">
                <div className="flex items-start  gap-4">
                  <Image
                    src={card.imageUrl}
                    alt={card.title}
                    width={100}
                    height={2}
                    className="object-cover  h-28rounded-large"
                  />
                  <div className="flex-1">
                    {/* Title with Edit Icon */}
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium text-lg">{card.title}</h3>
                      <button
                        onClick={() => handleEditClick(card)} // Trigger the edit function on click
                        className="text-white cursor-pointer text-small"
                      >
                        <GoPencil className="text-white cursor-pointer text-small" />{" "}
                      </button>
                    </div>

                    <p className="text-sm text-gray-500 mt-normal">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-normal py-normal flex justify-end">
                Connected
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fixed position edit form - slides in from bottom */}
      {editingCardId !== null && editFormData && (
  <div className="fixed top-20 right-7 bottom-4 w-[calc(42%-2rem)] z-10">
    <div className="bg-white rounded-large border border-secondary shadow-md overflow-auto max-h-[calc(100vh-4rem)] pr-0"> {/* Add padding-right */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-normal">
          <h3 className="font-medium text-xl">
            {editFormData.title}
          </h3>
          <button
            onClick={handleCloseEdit}
            className="inline-flex items-center justify-center rounded-full p-normal text-gray-500 hover:text-gray-900 hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-6 overflow-y-auto max-h-[calc(100vh-12rem)]"> {/* Add overflow and set max height */}
          <div>
            <label
              htmlFor="title"
              className="block text-base font-medium text-gray-700 mb-1"
            >
              Title
            </label>
            <input
              id="title"
              name="title"
              value={editFormData.title}
              onChange={handleInputChange}
              className="h-[40px] w-[479px] border border-[#EBF0ED] rounded-large bg-primary px-normal pr-16 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-base font-medium text-gray-700 mb-normal"
            >
              Description
            </label>
            <input
              id="description"
              name="description"
              value={editFormData.description}
              onChange={handleInputChange}
              className="h-[40px] w-[479px] border border-[#EBF0ED] rounded-large bg-primary px-normal p-normal focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-base font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <input
              id="description"
              name="description"
              value={editFormData.description}
              onChange={handleInputChange}
              className="h-[40px] w-[479px] border border-[#EBF0ED] rounded-large bg-primary px-normal pr-16 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-base font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <input
              id="description"
              name="description"
              value={editFormData.description}
              onChange={handleInputChange}
              className="h-[40px] w-[479px] border border-[#EBF0ED] rounded-large bg-primary px-normal pr-16 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-base font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <input
              id="description"
              name="description"
              value={editFormData.description}
              onChange={handleInputChange}
              className="h-[40px] w-[479px] border border-[#EBF0ED] rounded-large bg-primary px-normal pr-16 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-base font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <input
              id="description"
              name="description"
              value={editFormData.description}
              onChange={handleInputChange}
              className="h-[40px] w-[479px] border border-[#EBF0ED] rounded-large bg-primary px-normal pr-16 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
            />
          </div>
          

          {/* You can repeat other fields as needed */}
          
          <Button onClick={handleSaveEdit}>Save Changes</Button>
        </div>
      </div>
    </div>
  </div>
)}


    </div>
  );
}
