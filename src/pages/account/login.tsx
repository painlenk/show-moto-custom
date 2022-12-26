import { NextPage } from "next";
import { Container } from "../../../styles/pagesStyles/login";
import { LoginForm } from "../../components/LoginForm/Login";

const Login: NextPage = () => {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
};

export default Login;
