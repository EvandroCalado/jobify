import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { App } from "./App.tsx";
import { DashboardProvider } from "./contexts/DashboardProvider.tsx";
import { GlobalStyles } from "./styles/global-styles.ts";
import { theme } from "./styles/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DashboardProvider>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyles />
      </ThemeProvider>
    </DashboardProvider>
  </React.StrictMode>
);
