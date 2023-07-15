import { SvgIcon } from "@mui/material";

export type NavigationLink = {
  name: string;
  path: string;
  icon?: typeof SvgIcon;
};
