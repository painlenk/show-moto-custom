import Link from "next/link";
import {
  Box,
  Container,
  Field,
  Title,
  FieldText,
  ForgotContainer,
  Submit,
} from "./styles";

export const LoginForm = () => {
  return (
    <Container>
      <Title>Login</Title>

      <form action="#">
        <Box>
          <FieldText htmlFor="username">Username</FieldText>
          <Field type="text" id="username" />
        </Box>

        <Box>
          <FieldText htmlFor="password">Password</FieldText>
          <Field type="password" id="password" />
        </Box>

        <ForgotContainer>
          <Link href="#">
            <a>Forgot password</a>
          </Link>
          <Link href="/register">
            <a> Create account</a>
          </Link>
        </ForgotContainer>

        <Box>
          <Submit type="submit" value="Login" />
        </Box>
      </form>
    </Container>
  );
};
