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
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: lightTheme.colors.backgroundColor,
        },
        {
          name: "dark",
          value: darkTheme.colors.backgroundColor,
        },
      ],
    },
  },
};

export const decorators = [
  withRouter,
  (Story) => (
    <DashboardProvider>
      <ThemeProvider theme={lightTheme}>
        <Story />
        <GlobalStyles />
      </ThemeProvider>
    </DashboardProvider>
  ),
];
