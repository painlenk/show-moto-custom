import styled from "styled-components";
import theme from "../../../styles/theme";

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.background};
`;
export const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Box = styled.div`
display: flex;
justify-content: center;
align-items: center
`


