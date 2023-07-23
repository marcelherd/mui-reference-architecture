import { render, screen } from "@testing-library/react";

import { Subtitle } from "./Subtitle";

describe("Subtitle", () => {
  it("renders the children", () => {
    render(<Subtitle>Subtitle</Subtitle>);

    const subtitle = screen.getByText(/Subtitle/i);
    expect(subtitle).toBeInTheDocument();
  });
  it("renders a divider", () => {
    render(<Subtitle>Subtitle</Subtitle>);

    const divider = screen.getByRole("separator");
    expect(divider).toBeInTheDocument();
  });
});
