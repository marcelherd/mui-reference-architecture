import { Drawer } from "@/modules/layout/components/Drawer";

import { NavigationLinks } from "./components/NavigationLinks";

type Props = {};

export const Navigation: React.FC<Props> = () => {
  return (
    <Drawer title="Reference Architecture">
      <NavigationLinks />
    </Drawer>
  );
};
