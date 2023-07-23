import { render, screen } from "@testing-library/react";

import { DashboardPage } from "./DashboardPage";

describe("DashboardPage", () => {
  it("renders the title", () => {
    render(<DashboardPage />);

    const title = screen.getByRole("heading", { name: /Dashboard/i });
    expect(title).toBeInTheDocument();
  });
});
