// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { getChildrenWidth } from "@/src/utils/childrenWidth";
// import { useSelector } from "react-redux";

const Dashboard = () => {
  // const router = useRouter();
  // const { sidebar } = useSelector((state) => state.sideBar);
  // const childrenWidth = getChildrenWidth(sidebar);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const token = localStorage.getItem("userToken");
  //   if (!token) {
  //     router.replace("/login"); // Redirect user to login page
  //   } else {
  //     setLoading(false); // Token mil gaya, dashboard show karo
  //   }
  // }, []);

  // if (loading) return null; // Jab tak token check ho raha hai tab tak blank show karo

  return (
    <div>
      DashBoard Page
    </div>
  );
};

export default Dashboard;
