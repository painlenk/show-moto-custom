import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(${(props) => props.theme.colors.form});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50%;
  margin: 5rem auto;
  margin-bottom: 0px;
  border-radius: ${(props) => props.theme.radius.great};
`;

export const Title = styled.h1`
  margin: 1.5rem auto;
  padding: 0;
  font-size: ${(props) => props.theme.fontSize.title};
  font-weight: ${(props) => props.theme.fontWeight.heavy};
  color: ${(props) => props.theme.colors.text.primary};
`;

export const FormContainer = styled.form`
  width: 90%;

  & div:nth-child(3) {
    flex-direction: column;
    margin-top: 2.25rem;

    & input[type="file"] {
      display: none;
    }

    & > div {
      width: 40%;
      display: flex;
      justify-content: center;
      align-items: right;
      flex-direction: column;
      color: ${(props) => props.theme.colors.text.white.light};
      gap: 0.25rem;

      & > label {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #363636;
        background-color: ${(props) => props.theme.colors.backgroundGray};
        border-radius: ${(props) => props.theme.radius.small};
        width: 100%;
        height: 2.5rem;
        font-weight: bold;
        transition: all ease-in-out 0.4s;

        &:hover {
          color: ${(props) => props.theme.colors.text.primary};

          cursor: pointer;
          background-color: #393e46;
          border: 1px solid ${(props) => props.theme.colors.text.primary};
        }
      }
    }

    & input[type="submit"] {
      margin-top: 3.75rem;
      width: 40%;
      height: 2.75rem;
      font-weight: ${(props) => props.theme.fontWeight.heavy};
      font-size: ${(props) => props.theme.fontSize.text};
      border-radius: ${(props) => props.theme.radius.small};
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.text.gray.bold};
      border: none;
      cursor: pointer;
      outline: none;
      transition: all ease-in-out 0.4s;

      &:hover,
      &:focus {
        cursor: pointer;
        outline: none;
        border: none;
        color: white;
      }
    }
  }
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 45%;

  & label {
    margin-bottom: 0.25rem;
    font-size: ${(props) => props.theme.fontSize.text};
    font-weight: ${(props) => props.theme.fontWeight.heavy};
    color: ${(props) => props.theme.colors.text.primary};
  }

  & input {
    height: 2.25rem;
    border-radius: ${(props) => props.theme.radius.small};
    border: 1px solid ${(props) => props.theme.colors.text.gray.bold};
    font-size: ${(props) => props.theme.fontSize.text};

    width: 100%;
    padding: 0.25rem;
    background-color: #d1d1d1;

    font-weight: ${(props) => props.theme.fontWeight.semiBold};
  }
`;
