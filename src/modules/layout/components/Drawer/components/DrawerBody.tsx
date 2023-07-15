import { type BoxProps, Box, styled } from "@mui/material";

export const DrawerBody = styled(Box)<BoxProps>(({ theme }) => ({
  height: "100%",
  borderRight: `1px solid ${theme.palette.divider}`,
}));
