"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { GoPencil } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { cards } from "@/src/data/cards";
import { Button } from "@/src/utils/button";
import { FaChevronDown } from "react-icons/fa"; // Import dropdown icon

const Integrations = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.sideBar.title);
  const { width, sidebar } = useSelector((state) => state.sideBar);

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-white rounded-large p-normal">
      {!showForm ? (
        <>
          <Button
            className="gap-2"
            onClick={() => setShowForm(true)} // Button par click hone par form show hoga
          >
            Add Integrations{" "}
            <span>
              <FaPlus className="text-small" />
            </span>
          </Button>

          <div
            className={`grid items-center gap-8 py-normal ${
              sidebar ? "md:grid-cols-2" : "md:grid-cols-3"
            }`}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="w-full bg-gradient-to-r from-red-500 to-orange-400 p-normal rounded-large text-white relative flex flex-col gap-24 justify-between transition-transform transform"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.02)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <div className="space-y-2">
                  <span className="flex justify-between items-center">
                    <h3 className="text-lg tracking-wider font-manrope">
                      {card.title}
                    </h3>
                    <GoPencil className="text-white cursor-pointer text-small" />
                  </span>
                  <p className="text-small font-poppins font-light">
                    {card.details}
                  </p>
                </div>
                <p className="font-semibold ml-auto">Connected</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="w-full">
          <div className="rounded-large">
            <div className="flex flex-col items-center mb-8">
              <h1 className="text-2xl font-semibold text-center mb-2">
                Integrations
              </h1>
              <p className="text-center text-gray-600 max-w-md">
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>

              {/* Step indicator */}
              <div className="relative w-full max-w-md mt-8">
                <div className="bg-black absolute top-8  w-full h-[2px] bg-gray-400 -translate-y-1/2"></div>
                <div className="flex justify-between relative">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-teal-700 flex items-center justify-center text-white font-medium z-10 relative">
                      01
                    </div>
                    <span className="mt-2 text-sm">Step</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-[#D9D9D9] flex items-center justify-center text-[#036666] font-medium z-10 relative">
                      02
                    </div>
                    <span className="mt-2 text-sm text-black">Step</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}

            <div className="space-y-4 mt-8 relative">
              <input
                type="text"
                placeholder="Integration Name"
                className="h-[40px] w-full border border-[#EBF0ED] rounded-large bg-primary px-3 pr-10 focus:border-secondary focus:outline-none text-labelSize :h-[45px]"
              />

              <div className="relative">
                <select
                  className="h-[40px] w-full border border-[#EBF0ED] rounded-large bg-primary px-3 pr-10 appearance-none focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Type
                  </option>
                  <option value="type1">Type 1</option>
                  <option value="type2">Type 2</option>
                  <option value="type3">Type 3</option>
                </select>
                <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black" />
              </div>

              <input
                type="text"
                placeholder="URL"
                className="h-[40px] w-full border border-[#EBF0ED] rounded-large bg-primary px-3 pr-10 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
              />
              <input
                type="text"
                placeholder="Username"
                className="h-[40px] w-full border border-[#EBF0ED] rounded-large bg-primary px-3 pr-10 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
              />
              <input
                type="text"
                placeholder="Password"
                className="h-[40px] w-full border border-[#EBF0ED] rounded-large bg-primary px-3 pr-10 focus:border-secondary focus:outline-none text-labelSize md:h-[45px]"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end items-center mt-3">
              <Button>Connect</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Integrations;
