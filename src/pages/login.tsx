import Link from "next/link";
import { Container } from "../../styles/pagesStyles/login";

const Login = () => {
  return (
    <Container>
      <div>
        <h1>Login</h1>

        <form action="#">
          <div>
            <label htmlFor="username">username</label>
            <input type="text" id="username" />
          </div>

          <div>
            <label htmlFor="password">password</label>
            <input type="password" id="password" />
          </div>

          <div>
            <Link href="#">Forgot password</Link>
            <Link href="/register">Create account</Link>
          </div>

          <div>
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Login;
