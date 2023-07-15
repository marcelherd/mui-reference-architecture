import { type BoxProps, Box, styled } from "@mui/material";

import { PAGE_DRAWER_WIDTH } from "@/modules/layout";

export const Main = styled(Box)<BoxProps>(({ theme }) => ({
  marginLeft: `${PAGE_DRAWER_WIDTH}px`,
  padding: theme.spacing(3),
}));
