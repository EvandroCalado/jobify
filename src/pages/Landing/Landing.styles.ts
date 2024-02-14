import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    nav {
      width: ${theme.widths.fluidWidth};
      max-width: ${theme.widths.maxWidth};
      margin: 0 auto;
      height: ${theme.widths.navHeight};
      display: flex;
      align-items: center;
    }

    .page {
      min-height: calc(100vh - ${theme.widths.navHeight});
      display: grid;
      align-items: center;
      margin-top: -3rem;
    }

    h1 {
      font-weight: 700;

      span {
        color: ${theme.colors.primary500};
      }
    }

    p {
      line-height: 2;
      color: ${theme.colors.textSecondaryColor};
      margin: 1.5rem 0;
      max-width: 35rem;
    }

    .register-link {
      margin-right: 1rem;
    }

    .main-img {
      display: none;
    }

    .btn {
      padding: 1rem;
    }

    @media (min-width: 992px) {
      .page {
        grid-template-columns: 1fr 400px;
        column-gap: 3rem;
      }

      .main-img {
        display: block;
      }
    }
  `}
`;
