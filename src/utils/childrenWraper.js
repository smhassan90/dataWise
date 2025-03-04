"use client";
import { useSelector } from "react-redux";

export default function ChildrenWrapper({children}) {
  const { sidebar } = useSelector((state) => state.sideBar);

  return (
    <div className={`${sidebar ? `lg:w-[calc(100vw-17.5rem-12px)]` : `lg:w-[calc(100vw-4.6rem-12px)]`} mt-[57px] h-[calc(100vh-81px)] lg:ml-auto overflow-auto`}>{children}</div>
  );
}