import { useRouter } from "next/router";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import type { NavigationLink as NavigationLinkType } from "../types";

type Props = NavigationLinkType;

export const NavigationLink: React.FC<Props> = ({ name, path, icon: Icon }) => {
  const router = useRouter();

  return (
    <ListItem disablePadding>
      <ListItemButton href={path} selected={path === router.pathname}>
        {Icon && (
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
        )}
        <ListItemText primary={name} inset={!Icon} />
      </ListItemButton>
    </ListItem>
  );
};
