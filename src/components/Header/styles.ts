import styled from "styled-components";
import theme from "../../../styles/theme";

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 100px;
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
  //background: ${props => props.theme.colors.background}
 
`;
export const Container = styled.div`
  border: 1px solid red;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
