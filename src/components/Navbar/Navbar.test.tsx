import { screen } from "@testing-library/react";
import { Navbar } from ".";
import { renderTheme } from "../../styles/render-theme";

describe("<Navbar />", () => {
  beforeEach(() => {
    const { container } = renderTheme(<Navbar />);

    expect(container).toMatchSnapshot();
  });

  it("should render default component", () => {
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Logo" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "" })).toHaveClass("toggle-btn");
    expect(screen.getByRole("button", { name: "Guest" })).toBeInTheDocument();
  });
});
