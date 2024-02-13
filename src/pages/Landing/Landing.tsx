import { Link } from "react-router-dom";
import { Logo } from "../../components";
import * as Styled from "./Landing.styles";

export const Landing = () => {
  return (
    <Styled.Wrapper>
      <nav>
        <Logo />
      </nav>

      <div className="container page">
        <div className="info">
          <h1>
            job <span>traking</span> app
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            similique vero alias voluptatem saepe sint facilis qui, ducimus
            libero necessitatibus hic, dolor eveniet ex eligendi? Vero ad
            tenetur ipsum molestias.
          </p>

          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn register-link">
            login / Demo User
          </Link>
        </div>

        <img
          src="./src/assets/main.svg"
          alt="Job hunt"
          className="img main-img"
        />
      </div>
    </Styled.Wrapper>
  );
};
