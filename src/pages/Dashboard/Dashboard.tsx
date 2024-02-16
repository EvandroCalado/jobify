import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Sidebar, SmallSidebar } from "../../components";
import * as Styled from "./Dashboard.styles";

interface DashboardContextProps {
  user: { name: string };
  showSidebar: boolean;
  isDarkTheme: boolean;
  toggleDarkTheme: () => void;
  toggleSidebar: () => void;
  logoutUser: () => void;
}

const DashboardContextInitialValues = {
  user: { name: "Guest" },
  showSidebar: false,
  isDarkTheme: false,
  toggleDarkTheme: () => console.log("toggle dark theme"),
  toggleSidebar: () => console.log("toggle sidebar"),
  logoutUser: () => console.log("logout"),
};

export const DashboardContext = createContext<DashboardContextProps>(
  DashboardContextInitialValues
);

export const Dashboard = () => {
  const user = { name: "Guest" };

  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    console.log("toggle dark theme");
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    console.log("logout user");
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
              <Outlet />
            </div>
          </div>
        </main>
      </Styled.Wrapper>
    </DashboardContext.Provider>
  );
};
