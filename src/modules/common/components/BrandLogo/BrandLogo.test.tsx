import { render, screen } from "@testing-library/react";

import { BrandLogo } from "./BrandLogo";

describe("BrandLogo", () => {
  it("renders the image", () => {
    render(<BrandLogo />);

    const image = screen.getByAltText(/Brand Logo/i);
    expect(image).toBeInTheDocument();
  });
});
