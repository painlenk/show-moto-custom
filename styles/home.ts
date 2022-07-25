import styled from "styled-components";
import background from "../src/assets/images/BackgroundImage/background.png"

export const Container = styled.div`
/* background-image: url(${background.src});
background-repeat: no-repeat;
background-position: right; */
width: 100%;
  h1 {
    color: ${(props) => props.theme.colors.text};
  }
`;



