"use client";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const Integrations = () => {
  
  const dispatch = useDispatch();
  const title = useSelector((state) => state.sideBar.title);
  const { width, sidebar } = useSelector((state) => state.sideBar);
  return (
    <div className={`mt-1`}>
      
    </div>
  );
};

export default Integrations;
