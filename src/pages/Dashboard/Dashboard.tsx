import { createContext, useState } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { Navbar, Sidebar, SmallSidebar } from "../../components";
import * as Styled from "./Dashboard.styles";

interface UserProps {
  name: string;
  lastName: string;
  email: string;
  location: string;
  role: string;
  __v: number;
  _id: string;
}

interface DashboardContextProps {
  user: null | UserProps;
  showSidebar: boolean;
  isDarkTheme: boolean;
  toggleDarkTheme: () => void;
  toggleSidebar: () => void;
  logoutUser: () => void;
}

const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("jobifyDarkMode") === "true";

  return isDarkTheme;
};

const DashboardContextInitialValues = {
  user: null,
  showSidebar: false,
  isDarkTheme: checkDefaultTheme(),
  toggleDarkTheme: () => {},
  toggleSidebar: () => {},
  logoutUser: () => {},
};

export const DashboardContext = createContext<DashboardContextProps>(
  DashboardContextInitialValues
);

export const Dashboard = () => {
  const user = useLoaderData() as UserProps;
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

  const toggleDarkTheme = () => {
    const newDarkMode = !isDarkTheme;
    localStorage.setItem("jobifyDarkMode", newDarkMode.toString());
    setIsDarkTheme(!isDarkTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    navigate("/", { replace: true });
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Styled.Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <Sidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet context={{ user }} />
            </div>
          </div>
        </main>
      </Styled.Wrapper>
    </DashboardContext.Provider>
  );
};
