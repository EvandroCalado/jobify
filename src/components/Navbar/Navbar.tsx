import { FaAlignLeft } from "react-icons/fa";
import { Logo, Logout, ThemeToggle } from "..";
import { useDashboardContext } from "../../hooks/useDashboardContext";
import * as Styled from "./Navbar.styles";

export const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();

  return (
    <Styled.Wrapper>
      <nav className="nav-center">
        <button className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>

        <div>
          <Logo />
          <h4 className="logo-text">dashboard</h4>
        </div>

        <div className="btn-container">
          <ThemeToggle />
          <Logout />
        </div>
      </nav>
    </Styled.Wrapper>
  );
};
