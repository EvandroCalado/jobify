import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: none;

    @media (min-width: 992px) {
      display: block;
      box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);

      .sidebar-container {
        background-color: ${theme.colors.backgroundSecondaryColor};
        min-height: 100vh;
        height: 100%;
        width: 250px;
        margin-left: -250px;
        transition: margin-left 0.3s ease-in-out;
      }

      .content {
        position: sticky;
        top: 0;
      }

      .show-sidebar {
        margin-left: 0;
      }

      header {
        height: 6rem;
        display: flex;
        align-items: center;
        padding-left: 2.5rem;
      }

      .active {
        color: ${theme.colors.primary500};
      }

      .pending {
        background-color: ${theme.colors.backgroundColor};
      }
    }
  `}
`;
