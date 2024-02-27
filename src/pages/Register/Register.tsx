import { Form, Link, useNavigation } from "react-router-dom";
import { Input, Logo } from "../../components";
import * as Styled from "./Register.styles";

export const Register = () => {
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  return (
    <Styled.Wrapper>
      <Form method="post" className="form">
        <Logo />

        <h4>Register</h4>

        <Input
          type="text"
          id="name"
          name="name"
          defaultValue="Guest"
          label="name"
        />

        <Input
          type="text"
          id="lastName"
          name="lastName"
          defaultValue="User"
          label="last name"
        />

        <Input
          type="text"
          id="location"
          name="location"
          defaultValue="Earth"
          label="location"
        />

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

        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? "submitting..." : "submit"}
        </button>

        <p>
          Already a member ?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Styled.Wrapper>
  );
};
