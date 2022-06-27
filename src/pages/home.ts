import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};

  h1 {
    color: ${(props) => props.theme.colors.text};
  }
`;
