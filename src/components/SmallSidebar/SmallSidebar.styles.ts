import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    .sidebar-container {
      position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: -1;
      opacity: 0;
      transition: ${theme.transitions.fast};
      visibility: hidden;
    }

    .show-sidebar {
      z-index: 99;
      opacity: 1;
      visibility: visible;
      padding: 1rem;
    }

    .content {
      background-color: ${theme.colors.backgroundSecondaryColor};
      height: 100%;
      border-radius: ${theme.borders.borderRadius};
      position: relative;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .close-btn {
      position: absolute;
      top: 10px;
      left: 10px;
      background-color: transparent;
      border-color: transparent;
      font-size: 2rem;
      color: ${theme.colors.redDark};
      cursor: pointer;
    }

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
      text-transform: capitalize;
      transition: ${theme.transitions.fast};
    }

    .nav-link:hover {
      color: ${theme.colors.primary500};
    }

    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
    }

    .active {
      color: ${theme.colors.primary500};
    }

    @media (min-width: 992px) {
      display: none;
    }
  `}
`;
