import styled from "styled-components";

export const Wrapper = styled.div`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }

  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }

  h1 {
    font-weight: 700;

    span {
      color: var(--primary-500);
    }
  }

  p {
    line-height: 2;
    color: var(--text-secondary-color);
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
`;
