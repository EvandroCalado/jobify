import { screen } from "@testing-library/react";
import { vi } from "vitest";
import { Navbar } from ".";
import { renderTheme } from "../../styles/render-theme";
import { MockDashboardProvider } from "../../utils/MockDashboardContext";

const mockContextValues = {
  toggleSidebar: vi.fn(),
};

describe("<Navbar />", () => {
  beforeEach(() => {
    const { container } = renderTheme(
      <MockDashboardProvider value={mockContextValues}>
        <Navbar />
      </MockDashboardProvider>
    );

    expect(container).toMatchSnapshot();
  });

  it("should render default component", () => {
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Logo" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "" })).toHaveClass("toggle-btn");
    expect(screen.getByRole("button", { name: "Guest" })).toBeInTheDocument();
  });

  // it("should render toggleSidebar is called", () => {
  //   const button = screen.getByRole("button", { name: "" });

  //   fireEvent.click(button);

  //   console.log(mockContextValues.toggleSidebar.mock);

  //   expect(mockContextValues.toggleSidebar).toHaveBeenCalled();
  // });
});
