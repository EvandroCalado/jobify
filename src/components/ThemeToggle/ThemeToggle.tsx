import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useDashboardContext } from "../../hooks/useDashboardContext";
import * as Styled from "./ThemeToggle.styles";

export const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useDashboardContext();

  return (
    <Styled.Wrapper onClick={toggleDarkTheme}>
      {isDarkTheme ? (
        <BsFillSunFill className="toggle-icon" />
      ) : (
        <BsFillMoonFill />
      )}
    </Styled.Wrapper>
  );
};
