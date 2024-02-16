import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: transparent;
    border-color: transparent;
    width: 3.5rem;
    height: 2rem;
    display: grid;
    place-items: center;
    cursor: pointer;

    .toggle-icon {
      font-size: 1.15rem;
      color: ${theme.colors.textColor};
    }
  `}
`;
