import { FC, createContext, useState } from "react";

interface DashboardContextProps {
  user: { name: string };
  showSidebar: boolean;
  isDarkTheme: boolean;
  toggleDarkTheme: () => void;
  toggleSidebar: () => void;
  logoutUser: () => void;
}

interface DashboardProviderProps {
  children: React.ReactNode;
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

export const DashboardProvider: FC<DashboardProviderProps> = ({ children }) => {
  const user = { name: "Guest" };

  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme] = useState(false);
  // setIsDarkTheme

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
      {children}
    </DashboardContext.Provider>
  );
};
