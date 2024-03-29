import { fireEvent, screen } from "@testing-library/react";
import { Logout } from ".";
import { renderTheme } from "../../styles/render-theme";

describe("<Logout />", () => {
  beforeEach(() => {
    const { container } = renderTheme(<Logout />);

    expect(container).toMatchSnapshot();
  });

  it("should render default component", () => {
    expect(screen.getByRole("button", { name: "Guest" })).toBeInTheDocument();
    expect(screen.getByTestId("dropdown")).toBeInTheDocument();
    expect(screen.getByTestId("dropdown")).toHaveStyle({
      visibility: "hidden",
    });
  });

  it("should render visibility visible", () => {
    const button = screen.getByRole("button", { name: "Guest" });

    fireEvent.click(button);

    expect(screen.getByTestId("dropdown")).toHaveStyle({
      visibility: "visible",
    });
    expect(screen.getByTestId("dropdown")).toHaveClass(
      "show-dropdown",
      "dropdown"
    );

    fireEvent.click(button);

    expect(screen.getByTestId("dropdown")).not.toHaveClass("show-dropdown");
    expect(screen.getByTestId("dropdown")).toHaveClass("dropdown");
    expect(screen.getByTestId("dropdown")).toHaveStyle({
      visibility: "hidden",
    });
  });
});
