import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;

    .logout-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0 0.5rem;
    }

    .img {
      width: 25px;
      height: 25px;
      border-radius: 50%;
    }

    .dropdown {
      position: absolute;
      top: 45px;
      left: 0;
      width: max-content;
      box-shadow: ${theme.shadows.shadow2};
      text-align: center;
      visibility: hidden;
      border-radius: ${theme.borders.borderRadius};
      background-color: ${theme.colors.primary500};
    }

    .show-dropdown {
      visibility: visible;
    }

    .dropdown-btn {
      border-radius: ${theme.borders.borderRadius};
      padding: 0.5rem 1.85rem;
      background-color: transparent;
      border-color: transparent;
      color: ${theme.colors.white};
      letter-spacing: ${theme.fonts.spancings};
      text-transform: capitalize;
      cursor: pointer;
      width: 100%;
      height: 100%;
    }
  `}
`;
