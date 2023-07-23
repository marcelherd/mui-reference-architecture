import { render, screen } from "@testing-library/react";

import { Header } from "./Header";

describe("Header", () => {
  it("renders the title", () => {
    render(<Header title="Page title" />);

    const heading = screen.getByRole("heading", { name: /Page title/i });
    expect(heading).toBeInTheDocument();
  });
});
