"use client"
import { getChildrenWidth } from "@/src/utils/childrenWidth";
import { useSelector } from "react-redux";

export const dashboard = () => {
  const { sidebar } = useSelector((state) => state.sideBar);
  const childrenWidth = getChildrenWidth(sidebar);
  return (
    <div className={`bg-red-500 ${childrenWidth}`}>
        DashBoard Page
    </div>
  )
} 
export default dashboard;
