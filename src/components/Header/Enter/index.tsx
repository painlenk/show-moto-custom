import Link from "next/link";
import { Container } from "./styles";
export const Enter = () => {
  return (
    <Container>
      <li>
        <Link href="/account/login">Login</Link>
      </li>
      <li>
        <Link href="/account/register">Register</Link>
      </li>
    </Container>
  );
};
