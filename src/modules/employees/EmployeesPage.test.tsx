import { render, screen } from "@testing-library/react";

import { EmployeesPage } from "./EmployeesPage";

describe("EmployeesPage", () => {
  it("renders the title", () => {
    render(<EmployeesPage />);

    const title = screen.getByRole("heading", { name: /Employees/i });
    expect(title).toBeInTheDocument();
  });
});
