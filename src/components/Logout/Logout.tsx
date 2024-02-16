import { useState } from "react";
import { FaCaretDown, FaUserCircle } from "react-icons/fa";
import { useDashboardContext } from "../../hooks/useDashboardContext";
import * as Styled from "./Logout.styles";

export const Logout = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useDashboardContext();

  return (
    <Styled.Wrapper>
      <button
        className="btn logout-btn"
        onClick={() => setShowLogout(!showLogout)}
      >
        <FaUserCircle />
        {user?.name}
        <FaCaretDown />
      </button>

      <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
        <button className="dropdown-btn" onClick={logoutUser}>
          Logout
        </button>
      </div>
    </Styled.Wrapper>
  );
};
