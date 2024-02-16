import { Logo, NavLinks } from "..";
import { useDashboardContext } from "../../hooks/useDashboardContext";
import * as Styled from "./Sidebar.styles";

export const Sidebar = () => {
  const { showSidebar } = useDashboardContext();

  return (
    <Styled.Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>

          <NavLinks isBigSidebar />
        </div>
      </div>
    </Styled.Wrapper>
  );
};
