import styled, { css } from "styled-components";

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }

    .nav-link {
      display: flex;
      align-items: center;
      color: ${theme.colors.textSecondaryColor};
      padding: 1rem 0;
      padding-left: 2.5rem;
      text-transform: capitalize;
      transition: padding-left 0.3s ease-in-out;
    }

    .nav-link:hover {
      padding-left: 3rem;
      color: ${theme.colors.primary500};
      transition: ${theme.transitions.fast};
    }

    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
    }
  `}
`;
