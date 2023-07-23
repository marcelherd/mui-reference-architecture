import { render, screen } from "@testing-library/react";
import AbcIcon from "@mui/icons-material/Abc";

import { NavigationLink } from "./NavigationLink";

describe("NavigationLink", () => {
  it("renders the link", () => {
    render(<NavigationLink name="Test" path="/" />);

    const name = screen.getByRole("link", { name: /Test/i });
    expect(name).toHaveAttribute("href", "/");
  });
  it("renders the icon", () => {
    render(<NavigationLink name="Test" path="/" icon={AbcIcon} />);

    const icon = screen.getByTestId("AbcIcon");
    expect(icon).toBeInTheDocument();
  });
  it("selects if path matches the active path", () => {
    render(<NavigationLink name="Test" path="/" />);

    const link = screen.getByRole("link", { name: /Test/i });
    expect(link).toHaveClass("Mui-selected");
  });
  it("does not select if path does not match the active path", () => {
    render(<NavigationLink name="Test" path="/does-not-exist" />);

    const link = screen.getByRole("link", { name: /Test/i });
    expect(link).not.toHaveClass("Mui-selected");
  });
});
