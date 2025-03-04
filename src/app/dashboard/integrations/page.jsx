"use client";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa6";
import { GoPencil } from "react-icons/go";
import { cards } from "@/src/data/cards";
import { Button } from "@/src/utils/button";

const Integrations = () => {

  const dispatch = useDispatch();
  const title = useSelector((state) => state.sideBar.title);
  const { width, sidebar } = useSelector((state) => state.sideBar);
  return (
    <div className="bg-white rounded-large p-normal">
      <Button className="text-normal flex items-center font-manrope gap-2 cursor-pointer">
        Add Integrations <span><FaPlus className="text-small" /></span>
      </Button>
      <div className={`grid items-center gap-8 py-normal ${sidebar ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>

        {cards.map((card, index) => (
          <div key={index} className="w-full bg-gradient-to-r from-red-500 to-orange-400 p-normal rounded-large text-white relative  flex flex-col gap-24 justify-between transition-transform transform"
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
            <div className="space-y-2">
              <span className="flex justify-between items-center">
                <h3 className="text-lg tracking-wider font-manrope">{card.title}</h3>
                <GoPencil className="text-white cursor-pointer text-small" />
              </span>
              <p className="text-small font-poppins font-light">{card.details}</p>
            </div>
            <p className="font-semibold ml-auto">Connected</p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Integrations;
