import { ErrorResponse, Link, useRouteError } from "react-router-dom";
import * as Styled from "./Error.styles";

export const Error = () => {
  const error = useRouteError() as ErrorResponse;

  if (error.status === 404) {
    return (
      <Styled.Wrapper>
        <img src="./src/assets/not-found.svg" alt="Error" />

        <h3>Ohh! page not found</h3>

        <p>we can't seem to find the page you are loking for</p>

        <Link to="/dashboard">back home</Link>
      </Styled.Wrapper>
    );
  }

  return (
    <Styled.Wrapper>
      <h3>something went wrong</h3>
    </Styled.Wrapper>
  );
};
