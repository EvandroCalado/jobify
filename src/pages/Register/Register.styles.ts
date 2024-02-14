import styled from "styled-components";

export const Wrapper = styled.div`
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
    border-top: 5px solid var(--primary-500);
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
    color: var(--primary-500);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.25rem;
    transition: var(--transition);
  }

  .member-btn:hover {
    color: var(--primary-700);
  }
`;
