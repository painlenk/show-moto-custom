import styled from "styled-components";
import background from "../../src/assets/images/BackgroundImage/background.png";

export const Container = styled.div`
  background-image: url(${background.src});
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100%;

  h1 {
    color: ${(props) => props.theme.colors.text};
  }
`;
