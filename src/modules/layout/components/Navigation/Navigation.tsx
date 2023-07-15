import { Drawer } from "@/modules/layout/components/Drawer";

import { NavigationItems } from "./components/NavigationLinks";

type Props = {};

export const Navigation: React.FC<Props> = () => {
  return (
    <Drawer title="Reference Architecture">
      <NavigationItems />
    </Drawer>
  );
};
