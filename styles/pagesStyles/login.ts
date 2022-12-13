import styled from "styled-components";
import registerBackground from "../../src/assets/images/BackgroundImage/registerBackground.png";

export const Container = styled.div`
  background-image: url(${registerBackground.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  width: 100vw;
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;
`;
