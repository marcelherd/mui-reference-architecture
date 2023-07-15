import { List } from "@mui/material";

import { navigationLinks } from "@/modules/layout/components/Navigation/routes";
import { NavigationLink } from "./NavigationLink";

type Props = {};

export const NavigationItems: React.FC<Props> = () => {
  return (
    <List>
      {navigationLinks.map((link) => (
        <NavigationLink key={link.path} {...link} />
      ))}
    </List>
  );
};
