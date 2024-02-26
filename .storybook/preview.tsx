import type { Preview } from "@storybook/react";
import React from "react";
import { withRouter } from "storybook-addon-react-router-v6";
import { ThemeProvider } from "styled-components";
import { DashboardProvider } from "../src/contexts/DashboardProvider";
import { GlobalStyles } from "../src/styles/global-styles";
import { darkTheme, lightTheme } from "../src/styles/theme";

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "paintbrush",
      items: ["light", "dark"],
      showName: true,
    },
  },
};

export const decorators = [
  withRouter,
  (Story, context) => {
    const theme = context.globals.theme === "light" ? lightTheme : darkTheme;

    return (
      <DashboardProvider>
        <ThemeProvider theme={theme}>
          <Story />
          <GlobalStyles />
        </ThemeProvider>
      </DashboardProvider>
    );
  },
];
