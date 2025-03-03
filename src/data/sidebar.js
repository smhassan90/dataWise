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
    icon: <FaTachometerAlt className="text-small" />,
    link: "/dashboard",
  },
  {
    title: "Employee",
    icon: <FaUserTie className="text-small" />,
    link: "#",
  },
  {
    title: "StoryBoard",
    icon: <FaBook className="text-small" />,
    link: "/storyBoard"
  },
  {
    title: "Investigations",
    icon: <FaUserShield className="text-small" />,
    link: "/investigations",
  },
  {
    title: "Complimentary Datasets",
    icon: <FaDatabase className="text-small" />,
    link: "/dashboard/complimentary_datasets",
  },
  {
    title: "Integrations",
    icon: <FaPuzzlePiece className="text-small" />,
    link: "/dashboard/integrations",
  },
];

export const others = [
  {
    title: "Settings",
    icon: <FaCog className="text-small" />,
    link: "/setting",
  },
  {
    title: "Logout",
    icon: <FaSignOutAlt className="text-small" />,
    link: "/",
  }
];
