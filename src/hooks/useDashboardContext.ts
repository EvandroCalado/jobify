import { useContext } from "react";
import { DashboardContext } from "../contexts/DashboardProvider";

export const useDashboardContext = () => useContext(DashboardContext);
