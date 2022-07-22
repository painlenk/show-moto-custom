import LogoImage from "../../assets/images/LogoImage";
import { Enter } from "./Enter"
import { Nav } from "./nav";
import { Container, HeaderContainer } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <LogoImage />
        <Nav />
        <Enter />
      </Container>
    </HeaderContainer>
  );
};
