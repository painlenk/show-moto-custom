import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem;
  border-radius: ${(props) => props.theme.radius.great};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.backgroundWhite};
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.text.gray.inter};
  font-size: ${(props) => props.theme.fontSize.subtitle};
  margin-bottom: 1.25rem;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 17.75rem;
  margin-bottom: 1.25rem;
`;

export const FieldText = styled.label`
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: ${(props) => props.theme.colors.text.gray.inter};
  font-size: 1rem;
  margin-bottom: 0.25rem;
  font-family: "Inter", sans-serif;
`;

export const Field = styled.input`
  height: 2.25rem;
  border-radius: ${(props) => props.theme.radius.small};
  font-size: 1rem;
  font-family: "Inter", sans-serif;
  color: ${(props) => props.theme.colors.text.primary};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  outline: none;
  border-color: ${(props) => props.theme.colors.text.gray.inter};
  border: 1px solid ${(props) => props.theme.colors.text.gray.inter};

  &:focus {
    border: 2px solid black;
  }
`;

export const ForgotContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: left;
  width: 17.75rem;
  margin-bottom: 1.25rem;

  & a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.text.gray.inter};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    transition: text ease-in 0.7s;
    font-size: ${(props) => props.theme.fontSize.subText};
    font-family: "Inter", sans-serif;
    &::after {
      content: "";
      width: 0px;
      height: 1px;
      display: block;
      background: black;
      transition: 300ms;
    }

    &:hover::after {
      width: 100%;
      background-color: ${(props) => props.theme.colors.text.primary};
    }
  }
`;

export const Submit = styled.input`
  height: 2.75rem;
  width: 100%;
  border-radius: ${(props) => props.theme.radius.small};
  color: ${(props) => props.theme.colors.text.gray.inter};
  font-size: ${(props) => props.theme.fontSize.text};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  background-color: ${(props) => props.theme.colors.text.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  box-shadow: 0px 26px 20px -20px rgba(0, 0, 0, 0.75);
  transition: border ease-in-out 0.4s;

  &:hover {
    cursor: pointer;
    border-bottom: 3px solid ${(props) => props.theme.colors.text.gray.inter};
  }
`;
