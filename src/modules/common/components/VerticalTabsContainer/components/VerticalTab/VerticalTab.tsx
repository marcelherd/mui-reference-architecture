import { type TabProps, Tab, styled } from "@mui/material";

export const VerticalTab = styled(Tab)<TabProps>(({ theme }) => ({
  alignItems: "flex-start",
}));
