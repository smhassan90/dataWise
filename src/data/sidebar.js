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
  },
  {
    title: "Employee",
    icon: <FaUserTie className="text-small" />,
    link: "/dashboard/employee",
  },
  {
    title: "StoryBoard",
    icon: <FaBook className="text-small" />,
    link: "/dashboard/storyboard"
  },
  {
    title: "Investigations",
    icon: <FaUserShield className="text-small" />,
    link: "/dashboard/investigations",
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
    link: "/dashboard/setting",
  },
  {
    title: "Logout",
    icon: <FaSignOutAlt className="text-small" />,
    link: "/",
  }
];
