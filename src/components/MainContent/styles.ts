import styled from "styled-components";
import background from "../../assets/images/BackgroundImage/background.png";

export const Container = styled.div`
  background-image: url(${background.src});
  background-repeat: no-repeat;
  background-position: right-top;
  background-size: cover;
  background-clip: content-box;
  overflow: hidden;
`;
export const GradientContainer = styled.div`
  background: linear-gradient(
    90deg,
    rgba(23, 23, 23, 0.87) 43.22%,
    rgba(44, 44, 44, 0) 97.43%
  );
  width: 100%;
`;

export const Main = styled.main`
  width: 80%;
  margin: 0 auto;
`;

export const Title = styled.div`
  width: 22em;
  display: inline-block;
  margin-top: 6.25em;

  & span,
  p {
    font-weight: ${(props) => props.theme.fontWeight.bold};
    font-size: ${(props) => props.theme.fontSize.title};
  }

  & span {
    color: ${(props) => props.theme.colors.text.primary};
  }

  & p {
    color: ${(props) => props.theme.colors.text.white.light};
  }
`;
export const Box = styled.section`
  width: 80%;
  margin: 0 auto;
  display: flex;
  gap: 40px;
  padding-top: 170px;
  padding-bottom: 120px;
`;
