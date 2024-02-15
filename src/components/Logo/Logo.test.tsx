import { screen } from "@testing-library/react";
import { Logo } from ".";
import { renderTheme } from "../../styles/render-theme";

describe("Logo", () => {
  it("Should render default", () => {
    const { container } = renderTheme(<Logo />);

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
