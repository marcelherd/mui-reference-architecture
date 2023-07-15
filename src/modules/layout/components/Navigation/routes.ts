import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";

import { NavigationLink } from "./types";

export const navigationLinks: NavigationLink[] = [
  {
    name: "Dashboard",
    path: "/",
    icon: DashboardIcon,
  },
  {
    name: "Employees",
    path: "/employees",
    icon: PersonIcon,
  },
  {
    name: "Teams",
    path: "/teams",
    icon: PeopleIcon,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: SettingsIcon,
  },
];
