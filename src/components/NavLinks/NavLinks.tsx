import { FC } from "react";
import { NavLink } from "react-router-dom";
import { useDashboardContext } from "../../hooks/useDashboardContext";
import { links } from "../../utils/links";
import * as Styled from "./NavLinks.styles";

export interface NavLinksProps {
  isBigSidebar?: boolean | undefined;
}

export const NavLinks: FC<NavLinksProps> = ({ isBigSidebar }) => {
  const { toggleSidebar } = useDashboardContext();

  return (
    <Styled.Wrapper className="nav-links">
      {links.map((link) => (
        <NavLink
          to={link.path}
          key={link.text}
          className="nav-link"
          onClick={isBigSidebar ? undefined : toggleSidebar}
          end
        >
          <span className="icon">{link.icon}</span>
          {link.text}{" "}
        </NavLink>
      ))}
    </Styled.Wrapper>
  );
};
