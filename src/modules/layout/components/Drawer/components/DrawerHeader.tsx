import { type ToolbarProps, Toolbar, styled } from "@mui/material";

export const DrawerHeader = styled(Toolbar)<ToolbarProps>(({ theme }) => ({
  ...theme.typography.h6,
  background: theme.palette.primary.dark,
  color: theme.palette.primary.contrastText,
}));
