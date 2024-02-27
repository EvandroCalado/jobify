import { Form, Link, useActionData, useNavigation } from "react-router-dom";
import { Input, Logo } from "../../components";
import * as Styled from "./Login.styles";

export const Login = () => {
  const errors = useActionData() as { msg: string };
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  return (
    <Styled.Wrapper>
      <Form method="post" className="form">
        <Logo />

        <h4>login</h4>

        {errors?.msg && <p style={{ color: "red" }}>{errors?.msg}</p>}

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
          defaultValue="12345678"
          label="password"
        />

        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? "submitting..." : "submit"}
        </button>

        <button type="button" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? "submitting..." : "Guest User"}
        </button>

        <p>
          Not a member yet ?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </Form>
    </Styled.Wrapper>
  );
};
