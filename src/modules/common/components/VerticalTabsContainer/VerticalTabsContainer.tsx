import { Grid } from "@mui/material";

import type {
  ChangeTabEvent,
  Tab,
} from "@/modules/common/components/VerticalTabsContainer";
import { VerticalTab } from "./components/VerticalTab";
import { VerticalTabs } from "./components/VerticalTabs";
import { VerticalTabHeading } from "./components/VerticalTabHeading";

type Props = Omit<Tab, "label"> & {
  tabs: string[];
  activeTab?: number;
  onChangeTab?: ChangeTabEvent;
  tabsWidth?: number;
  contentWidth?: number;
};

export const VerticalTabsContainer: React.FC<Props> = ({
  children,
  tabs,
  activeTab,
  onChangeTab,
  title,
  subtitle,
  hideDivider,
  tabsWidth = 200,
  contentWidth,
}) => {
  return (
    <Grid container gap={4}>
      <Grid item sx={{ width: tabsWidth }}>
        <VerticalTabs activeTab={activeTab} onChangeTab={onChangeTab}>
          {tabs.map((label, index) => (
            <VerticalTab key={index} label={label} />
          ))}
        </VerticalTabs>
      </Grid>
      <Grid
        item
        xs
        sx={(theme) => ({
          "&.MuiGrid-item": {
            maxWidth: contentWidth ?? theme.breakpoints.values.md,
          },
        })}
      >
        {title && (
          <VerticalTabHeading
            title={title}
            subtitle={subtitle}
            hideDivider={hideDivider}
          />
        )}
        {children}
      </Grid>
    </Grid>
  );
};
