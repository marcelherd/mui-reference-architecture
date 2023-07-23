import { type ToolbarProps, Toolbar, Typography, styled } from "@mui/material";

const StyledToolbar = styled(Toolbar)<ToolbarProps>(({ theme }) => ({
  background: theme.palette.primary.dark,
  color: theme.palette.primary.contrastText,
}));

type Props = {
  children?: React.ReactNode;
};

export const DrawerHeader: React.FC<Props> = ({ children }) => {
  return (
    <StyledToolbar>
      <Typography variant="h6" component="h1">
        {children}
      </Typography>
    </StyledToolbar>
  );
};
