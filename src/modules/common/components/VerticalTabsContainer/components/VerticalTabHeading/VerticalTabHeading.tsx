import { Box, Divider, Typography } from "@mui/material";
import { Tab } from "../../types";

type Props = Required<Pick<Tab, "title">> &
  Pick<Tab, "subtitle" | "hideDivider">;

export const VerticalTabHeading: React.FC<Props> = ({
  title,
  subtitle,
  hideDivider,
}) => {
  const containerMargin = hideDivider ? 2 : 0;

  return (
    <Box sx={{ mb: containerMargin }}>
      <Typography variant="h6" component="h3">
        {title}
      </Typography>
      <Typography variant="subtitle2" color="text.secondary">
        {subtitle}
      </Typography>
      {!hideDivider && <Divider light sx={{ mt: 2, mb: 3 }} />}
    </Box>
  );
};
