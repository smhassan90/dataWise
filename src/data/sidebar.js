import {
  FaTachometerAlt,
  FaUserTie,
  FaBook,
  FaUserShield,
  FaDatabase,
  FaPuzzlePiece,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

export const sideBarMenu = [
  {
    title: "DashBoard",
    icon: <FaTachometerAlt size={22} />,
    link: "/dashboard",
  },
  {
    title: "Employees",
    icon: <FaUserTie size={22} />,
    link: "#",
    children: [
      {
        title: "Employee List",
        icon: <FaUserTie size={22} />,
        link: "/employees/list",
      },
      {
        title: "Add Employee",
        icon: <FaUserTie size={22} />,
        link: "/employees/add",
      },
    ],
  },
  {
    title: "StoryBoards",
    icon: <FaBook size={22} />,
    link: "#",
    children: [
      {
        title: "All Stories",
        icon: <FaBook size={22} />,
        link: "/storyboards/all",
      },
      {
        title: "Created Stories",
        icon: <FaBook size={22} />,
        link: "/storyboards/created",
      },
    ],
  },
  {
    title: "Investigations",
    icon: <FaUserShield size={22} />,
    link: "/investigations",
  },
  {
    title: "Complimentary Datasets",
    icon: <FaDatabase size={22} />,
    link: "/dashboard/complimentary_datasets",
  },
  {
    title: "Integrations",
    icon: <FaPuzzlePiece size={22} />,
    link: "/dashboard/integrations",
  },
];

export const others = [
  {
    title: "Settings",
    icon: <FaCog size={22} />,
    link: "/setting",
  },
  {
    title: "Logout",
    icon: <FaSignOutAlt size={22} />,
    link: "/",
  }
];
