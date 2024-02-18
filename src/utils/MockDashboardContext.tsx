import { createContext, useContext } from "react";

const MockDashboardContext = createContext(null);

export const MockDashboardProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
}) => {
  return (
    <MockDashboardContext.Provider value={value}>
      {children}
    </MockDashboardContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDashboardContext = () => useContext(MockDashboardContext);
