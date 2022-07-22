import styled from "styled-components";

export const Container = styled.nav`
  border: 1px solid red;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content:space-between;
  width: 21.875em;

  a {
    text-decoration: none;
    size: ${(props) => props.theme.fontSize.text};
    color: ${props => props.theme.colors.text.white.light};
    font-weight: ${props => props.theme.fontWeight.bold}
  }

`;
