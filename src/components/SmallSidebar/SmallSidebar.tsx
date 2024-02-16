import { FaTimes } from "react-icons/fa";
import { Logo, NavLinks } from "..";
import { useDashboardContext } from "../../hooks/useDashboardContext";
import * as Styled from "./SmallSidebar.styles";

export const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();

  return (
    <Styled.Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>

          <header>
            <Logo />
          </header>

          <NavLinks />
        </div>
      </div>
    </Styled.Wrapper>
  );
};
