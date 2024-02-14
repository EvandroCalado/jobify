import { render, screen } from "@testing-library/react";
import { Logo } from ".";

describe("Logo", () => {
  it("Should render default", () => {
    const { container } = render(<Logo />);

    expect(screen.getByRole("img")).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
