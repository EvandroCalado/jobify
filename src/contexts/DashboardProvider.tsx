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

const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("jobifyDarkMode") === "true";

  return isDarkTheme;
};

const DashboardContextInitialValues = {
  user: { name: "Guest" },
  showSidebar: false,
  isDarkTheme: checkDefaultTheme(),
  toggleDarkTheme: () => {},
  toggleSidebar: () => {},
  logoutUser: () => {},
};

export const DashboardContext = createContext<DashboardContextProps>(
  DashboardContextInitialValues
);

export const DashboardProvider: FC<DashboardProviderProps> = ({ children }) => {
  const user = { name: "Guest" };

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
