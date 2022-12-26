import Link from "next/link";
import { Container } from "./styles";
export const Enter = () => {
  return (
    <Container>
      <li>
        <Link href="/login">Login</Link>
      </li>
      <li>
        <Link href="/register">Register</Link>
      </li>
    </Container>
  );
};
