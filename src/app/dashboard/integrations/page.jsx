"use client";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const Integrations = () => {
  
  const dispatch = useDispatch();
  const title = useSelector((state) => state.sideBar.title);
  const { width, sidebar } = useSelector((state) => state.sideBar);
  return (
    <div
      className={`mt-1 ${
        sidebar ? "w-[calc(100vw-22rem)] ml-[350px]" : "w-[calc(100vw-15rem)] ml-32"
      }`}
    >
      <div className="bg-white h-auto">
        <h2 className=" text-lg font-semibold ml-10 mb-4 flex items-center font-manrope">
          Add Integrations <span className="ml-7 text-xl font-bold">+</span>
        </h2>

        {/* SWAV Acuity Section */}
        <div className="ml-10 grid md:grid-cols-2 gap-6">
          {/* SWAV Acuity Card */}
          <div className="w-[400px] h-[200px]  bg-gradient-to-r from-red-500 to-orange-400 p-5 rounded-[28.09px] text-white relative shadow-lg flex flex-col justify-between">
            <div className="absolute top-4 right-4 text-white cursor-pointer">
              <FaEdit />
            </div>
            <h3 className="text-xl font-semibold font-poppins">SWAV Acuity</h3>
            <p className="text-sm">
              You can setup your acuity account as source of data here
            </p>
            <div className="font-semibold">Connected</div>
          </div>

          {/* SWAV Acuity Text Section */}
          <div className="w-[400px] ml-10 h-[200px] bg-white p-4 rounded-[28.09px] text-gray-800 shadow-lg flex flex-col justify-between border">
            <h3 className="text-xl font-semibold font-poppins">SWAV Acuity</h3>
            <p className="text-sm font-poppins font-light text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button className="px-4 py-2 bg-teal-600 text-white rounded self-start">
              Lorem
            </button>
          </div>
        </div>

        {/* Datawise Acuity Section */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {/* Datawise Acuity Card */}
          <div className=" ml-10 w-[400px] h-[200px] bg-white p-5 rounded-[28.09px] text-gray-800 relative shadow-lg border flex flex-col justify-between">
            <div className="absolute top-4 right-4 text-gray-600 cursor-pointer">
              <FaEdit />
            </div>
            <h3 className="text-xl font-semibold font-poppins">Datawise Acuity</h3>
            <p className="text-sm mt-2">
              You can setup your acuity account as source of data here
            </p>
            <div className="mt-6 font-semibold text-gray-600">Connected</div>
          </div>

          {/* Datawise Acuity Text Section */}
          <div className=" ml-14 w-[400px] h-[200px] bg-white p-5 rounded-[28.09px] text-gray-800 shadow-lg flex flex-col justify-between border">
            <h3 className="text-xl font-semibold font-poppins">Datawise Acuity</h3>
            <p className="text-sm text-gray-600 mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button className="mt-3 px-4 py-2 bg-teal-600 text-white rounded self-start">
              Lorem
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
