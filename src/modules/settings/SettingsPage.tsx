import { useState } from "react";

import { Subtitle, VerticalTabsContainer } from "@/modules/common";
import { Layout } from "@/modules/layout";
import { tabs } from "./tabs";

type Props = {};

export const SettingsPage: React.FC<Props> = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tab = tabs[activeTab];

  return (
    <Layout title="Settings">
      <Subtitle>
        Manage your account settings and set e-mail preferences.
      </Subtitle>
      <VerticalTabsContainer
        tabs={tabs.map((tab) => tab.label)}
        activeTab={activeTab}
        onChangeTab={(event, value) => setActiveTab(value)}
        title={tab.title}
        subtitle={tab.subtitle}
      >
        {tab.children}
      </VerticalTabsContainer>
    </Layout>
  );
};
