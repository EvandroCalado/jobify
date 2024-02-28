import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
import { useDashboardContext } from "./hooks/useDashboardContext";
import { router } from "./routes";
import { GlobalStyles } from "./styles/global-styles";
import { darkTheme, lightTheme } from "./styles/theme";

export const App = () => {
  const { isDarkTheme } = useDashboardContext();

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={isDarkTheme ? "dark" : "light"}
      />
      <GlobalStyles />
    </ThemeProvider>
  );
};
