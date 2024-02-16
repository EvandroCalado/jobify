import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: ${theme.widths.navHeight};
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
    background-color: ${theme.colors.backgroundSecondaryColor};

    .nav-center {
      display: flex;
      width: 90vw;
      align-items: center;
      justify-content: space-between;
    }

    .toggle-btn {
      background-color: transparent;
      border-color: transparent;
      font-size: 1.75rem;
      color: ${theme.colors.primary500};
      cursor: pointer;
      display: flex;
      align-items: center;
    }

    .logo-text {
      display: none;
    }

    .logo {
      display: flex;
      align-items: center;
      width: 100px;
    }

    .btn-container {
      display: flex;
      align-items: center;
    }

    @media (min-width: 992px) {
      position: sticky;
      top: 0;

      .nav-center {
        width: 90%;
      }

      .logo {
        display: none;
      }

      .logo-text {
        display: block;
      }
    }
  `}
`;
