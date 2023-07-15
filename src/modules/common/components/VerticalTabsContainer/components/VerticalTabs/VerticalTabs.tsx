import { type TabsProps, Tabs, styled } from "@mui/material";

import { ChangeTabEvent } from "@/modules/common/components/VerticalTabsContainer";

const StyledTabs = styled(Tabs)<TabsProps>(({ theme }) => ({
  alignItems: "flex-start",
}));

type Props = {
  children: React.ReactNode;
  activeTab?: number;
  onChangeTab?: ChangeTabEvent;
};

export const VerticalTabs: React.FC<Props> = ({
  children,
  activeTab,
  onChangeTab,
}) => {
  return (
    <StyledTabs
      orientation="vertical"
      variant="fullWidth"
      value={activeTab}
      onChange={onChangeTab}
      TabIndicatorProps={{ style: { display: "none" } }}
    >
      {children}
    </StyledTabs>
  );
};
