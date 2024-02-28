import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;
    display: grid;
    align-items: center;

    img {
      display: block;
      margin: 0 auto;
      margin-bottom: 1.38rem;
    }

    .form {
      max-width: 400px;
      border-top: 5px solid ${theme.colors.primary500};
    }

    h4 {
      text-align: center;
      margin: 1.38rem 0;
    }

    p {
      margin-top: 1rem;
      text-align: center;
      line-height: 1.5;
    }

    .btn {
      margin-top: 1rem;
    }

    .member-btn {
      color: ${theme.colors.primary500};
      letter-spacing: ${theme.fonts.spacings.letterSpacing};
      margin-left: 0.25rem;
      transition: ${theme.transitions.fast};
    }

    .member-btn:hover {
      color: ${theme.colors.primary700};
    }
  `}
`;
