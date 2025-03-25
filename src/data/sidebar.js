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
import { MdDashboard } from "react-icons/md";

export const sideBarMenu = [
  {
    title: "DashBoard",
    icon: <MdDashboard className="text-small" />,
    link: "/dashboard",
    level:[1,2,3,4,5]
  },
  {
    title: "Employee",
    icon: <FaUserTie className="text-small" />,
    link: "/dashboard/employee",
    level:[1,2,3]
  },
  {
    title: "StoryBoard",
    icon: <FaBook className="text-small" />,
    link: "/dashboard/storyBoard",
    level:[1,2,3,4,5]
  },
  {
    title: "Investigations",
    icon: <FaUserShield className="text-small" />,
    link: "/dashboard/investigations",
    level:[1,2,3]
  },
  {
    title: "Complimentary Datasets",
    icon: <FaDatabase className="text-small" />,
    link: "/dashboard/complimentary_datasets",
    level:[1,2,3]
  },
  {
    title: "Integrations",
    icon: <FaPuzzlePiece className="text-small" />,
    link: "/dashboard/integrations",
    level:[1,2,3]
  },
];

export const others = [
  {
    title: "Setting",
    icon: <FaCog className="text-small" />,
    link: "/dashboard/setting",
  },
  {
    title: "Logout",
    icon: <FaSignOutAlt className="text-small" />,
    link: "/",
  }
];
