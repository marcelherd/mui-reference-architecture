import { render, screen } from "@testing-library/react";

import { navigationLinks } from "@/modules/layout/components/Navigation/routes";
import { NavigationLinks } from "./NavigationLinks";

describe("NavigationLinks", () => {
  it("renders the links", () => {
    render(<NavigationLinks />);

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(navigationLinks.length);
  });
});
