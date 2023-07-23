import { render, screen } from "@testing-library/react";

import { tabs as tabsToRender } from "./tabs";
import { SettingsPage } from "./SettingsPage";

describe("TeamsPage", () => {
  it("renders the title", () => {
    render(<SettingsPage />);

    const title = screen.getByRole("heading", { name: /Settings/i });
    expect(title).toBeInTheDocument();
  });
  it("renders the subtitle", () => {
    render(<SettingsPage />);

    const subtitle = screen.getByText(
      /Manage your account settings and set e-mail preferences./i
    );
    expect(subtitle).toBeInTheDocument();
  });
  it("renders the tabs", () => {
    render(<SettingsPage />);

    const tabs = screen.getAllByRole("tab");
    expect(tabs).toHaveLength(tabsToRender.length);
  });
});
