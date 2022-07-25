import LogoImage from "../../assets/images/Logo/LogoImage";
import { Enter } from "./Enter"
import { Nav } from "./nav";
import { Container, HeaderContainer, Box } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <Box>
          <LogoImage />
          <Nav />
        </Box>
        <Enter />
      </Container>
    </HeaderContainer>
  );
};
