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
      padding-left: 0;
      text-transform: capitalize;
      transition: ${theme.transitions.fast};
    }

    .nav-link:hover {
      color: ${theme.colors.primary500};
      transform: scale(1.1);
    }

    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
    }

    @media (min-width: 992px) {
      .nav-link {
        padding-left: 2.5rem;
      }

      .nav-link:hover {
        transform: scale(1);
        padding-left: 3rem;
      }
    }
  `}
`;
