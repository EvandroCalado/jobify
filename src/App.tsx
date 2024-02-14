import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Dashboard, Error, Home, Landing, Login, Register } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
