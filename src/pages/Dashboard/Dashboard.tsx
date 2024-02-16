import { Outlet } from "react-router-dom";
import { Navbar, Sidebar, SmallSidebar } from "../../components";
import * as Styled from "./Dashboard.styles";

export const Dashboard = () => {
  return (
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
  );
};
