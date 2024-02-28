import { createBrowserRouter } from "react-router-dom";

// pages
import {
  AddJob,
  Admin,
  AllJobs,
  Dashboard,
  Error,
  Home,
  Landing,
  Login,
  Profile,
  Register,
  Stats,
} from "../pages";

// actions
import { loginAction, registerAction } from "../actions";

// loaders
import { dashboardLoader } from "../loaders";

export const router = createBrowserRouter([
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
        action: registerAction,
      },
      {
        path: "/Login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <AddJob />,
          },
          {
            path: "stats",
            element: <Stats />,
          },
          {
            path: "all-jobs",
            element: <AllJobs />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "admin",
            element: <Admin />,
          },
        ],
      },
    ],
  },
]);
