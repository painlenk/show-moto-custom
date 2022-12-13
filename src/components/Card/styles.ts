import styled from "styled-components";

export const Container = styled.div`
  width: 15.625rem;
  background-color: rgba(${(props) => props.theme.colors.cards});
  border-radius: ${(props) => props.theme.radius.normal};
`;
export const Content = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 0.875rem;
  p {
    color: ${(props) => props.theme.colors.text.gray.light};
  }
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.fontSize.subText};
`;
