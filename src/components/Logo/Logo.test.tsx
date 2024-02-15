import { screen } from "@testing-library/react";
import { Logo } from ".";
import { renderTheme } from "../../styles/render-theme";

describe("Logo", () => {
  it("Should render default", () => {
    renderTheme(<Logo />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("Should render a snapshot", () => {
    const { container } = renderTheme(<Logo />);

    expect(container).toMatchSnapshot();
  });
});
