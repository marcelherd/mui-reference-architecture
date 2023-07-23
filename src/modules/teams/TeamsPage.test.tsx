import { render, screen } from "@testing-library/react";

import { TeamsPage } from "./TeamsPage";

describe("TeamsPage", () => {
  it("renders the title", () => {
    render(<TeamsPage />);

    const title = screen.getByRole("heading", { name: /Teams/i });
    expect(title).toBeInTheDocument();
  });
});
