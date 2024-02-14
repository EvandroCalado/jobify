import { render, screen } from "@testing-library/react";
import { Logo } from ".";

describe("Logo", () => {
  it("Should render default", () => {
    render(<Logo />);

    expect(screen.getByRole("img")).toBeDefined();
  });
});
