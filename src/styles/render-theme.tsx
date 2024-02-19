import { RenderResult, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme";

export const renderTheme = (children: React.ReactNode): RenderResult => {
  return render(<ThemeProvider theme={lightTheme}>{children}</ThemeProvider>);
};
