import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  .form-center {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    gap: 2rem;
  }

  .form-title {
    margin-bottom: 3rem;
  }

  .btn.btn-block.form-btn {
    margin-top: 0.5rem;
  }

  @media (min-width: 0px) {
    .form {
      max-width: 600px;
    }

    .form-center {
      grid-template-columns: 1fr;
    }
  }

  @media (min-width: 950px) {
    .form {
      max-width: 600px;
    }

    .form-center {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1200px) {
    .form {
      max-width: 950px;
    }

    .form-center {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1400px) {
    .form {
      max-width: 1150px;
    }

    .form-center {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
