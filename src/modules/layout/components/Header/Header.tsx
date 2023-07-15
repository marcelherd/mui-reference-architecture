import { type ToolbarProps, Toolbar, Grid, styled } from "@mui/material";

import { BrandLogo } from "@/modules/common/components/BrandLogo";
import { PAGE_DRAWER_WIDTH } from "@/modules/layout";

const StyledToolbar = styled(Toolbar)<ToolbarProps>(({ theme }) => ({
  ...theme.typography.h5,
  marginLeft: `${PAGE_DRAWER_WIDTH}px`,
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

type Props = {
  title?: string;
};

export const Header: React.FC<Props> = ({ title }) => {
  return (
    <StyledToolbar>
      <Grid container alignItems="center">
        <Grid item>{title}</Grid>
        <Grid item xs />
        <Grid item display="flex">
          <BrandLogo />
        </Grid>
      </Grid>
    </StyledToolbar>
  );
};
