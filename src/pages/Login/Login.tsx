import { Link } from "react-router-dom";
import { Input, Logo } from "../../components";
import * as Styled from "./Login.styles";

export const Login = () => {
  return (
    <Styled.Wrapper>
      <form className="form">
        <Logo />

        <h4>login</h4>

        <Input
          type="email"
          id="email"
          name="email"
          defaultValue="guest@gmail.com"
          label="email"
        />

        <Input
          type="password"
          id="password"
          name="password"
          defaultValue="secret"
          label="password"
        />

        <button type="submit" className="btn btn-block">
          submit
        </button>

        <button type="button" className="btn btn-block">
          Guest User
        </button>

        <p>
          Not a member yet ?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </form>
    </Styled.Wrapper>
  );
};
