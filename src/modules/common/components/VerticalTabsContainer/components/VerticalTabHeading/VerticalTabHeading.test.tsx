import { render, screen } from "@testing-library/react";

import { VerticalTabHeading } from "./VerticalTabHeading";

describe("VerticalTabHeading", () => {
  it("renders the title", () => {
    render(<VerticalTabHeading title="Tab title" />);

    const heading = screen.getByRole("heading", { name: /Tab title/i });
    expect(heading).toBeInTheDocument();
  });
  it("renders the subtitle", () => {
    render(<VerticalTabHeading title="Tab title" subtitle="Subtitle" />);

    const subtitle = screen.getByText(/Tab title/i);
    expect(subtitle).toBeInTheDocument();
  });
  it("renders the divider", () => {
    render(<VerticalTabHeading title="Tab title" />);

    const divider = screen.getByRole("separator");
    expect(divider).toBeInTheDocument();
  });
  it("hides the divider", () => {
    render(<VerticalTabHeading title="Tab title" hideDivider />);

    const divider = screen.queryByRole("separator");
    expect(divider).not.toBeInTheDocument();
  });
});
