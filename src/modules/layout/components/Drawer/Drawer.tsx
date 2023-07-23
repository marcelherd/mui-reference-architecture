import {
  type DrawerProps,
  Drawer as MuiDrawer,
  Typography,
  styled,
} from "@mui/material";

import { PAGE_DRAWER_WIDTH } from "@/modules/layout";
import { DrawerHeader } from "./components/DrawerHeader";
import { DrawerBody } from "./components/DrawerBody";

const StyledDrawer = styled(MuiDrawer)<DrawerProps>(() => ({
  width: PAGE_DRAWER_WIDTH,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: PAGE_DRAWER_WIDTH,
    borderRight: 0,
  },
}));

type Props = {
  children: React.ReactNode;
  title?: string;
};

export const Drawer: React.FC<Props> = ({ children, title }) => {
  return (
    <StyledDrawer variant="permanent">
      <DrawerHeader>{title}</DrawerHeader>
      <DrawerBody>{children}</DrawerBody>
    </StyledDrawer>
  );
};
