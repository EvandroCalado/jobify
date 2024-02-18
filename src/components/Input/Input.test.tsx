import { screen } from "@testing-library/react";
import { Input } from ".";
import { renderTheme } from "../../styles/render-theme";

describe("<Input />", () => {
  it("Should render default component", () => {
    renderTheme(<Input placeholder="test" label="label" />);

    expect(screen.getByPlaceholderText("test")).toBeInTheDocument();
    expect(screen.getByText(/label/i)).toBeInTheDocument();
  });

  it("Should render a snapshot", () => {
    const { container } = renderTheme(
      <Input placeholder="test" label="label" />
    );

    expect(container).toMatchSnapshot();
  });
});
