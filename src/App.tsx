import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <h1>About</h1>,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
