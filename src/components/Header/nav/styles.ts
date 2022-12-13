import styled from "styled-components";

export const Container = styled.nav``;

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 21.875em;

  a {
    text-decoration: none;
    font-size: ${(props) => props.theme.fontSize.text};
    color: ${(props) => props.theme.colors.text.white.light};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    transition: color ease-in 0.3s;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;
