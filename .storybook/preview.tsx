import type { Preview } from "@storybook/react";
import React from "react";
import { withRouter } from "storybook-addon-react-router-v6";
import { ThemeProvider } from "styled-components";
import { DashboardProvider } from "../src/contexts/DashboardProvider";
import { GlobalStyles } from "../src/styles/global-styles";
import { theme } from "../src/styles/theme";

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
          value: theme.colors.backgroundColor,
        },
        {
          name: "dark",
          value: theme.colors.darkBackgroundColor,
        },
      ],
    },
  },
};

export const decorators = [
  withRouter,
  (Story) => (
    <DashboardProvider>
      <ThemeProvider theme={theme}>
        <Story />
        <GlobalStyles />
      </ThemeProvider>
    </DashboardProvider>
  ),
];
