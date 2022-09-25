import styled from "styled-components";
import * as Scroll from "react-scroll";

export const AboutContainer = styled(Scroll.Element)`
  background-color: #fff;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const AboutContent = styled.div`
  width: 80%;

  h2 {
    margin-bottom: 1rem;
    font-weight: 700;
    font-size: clamp(0.8rem, 2vw, 1rem);
    text-align: justify;
    letter-spacing: 5px;
    color: #000000;
  }

  p {
    font-weight: 500;
    font-size: clamp(0.8rem, 2vw, 0.9rem);
    line-height: 20px;
    letter-spacing: -0.333333px;
    color: #a0a0a0;
  }

  @media (max-width: 900px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    p {
      line-height: 20px;
    }
  }

  @media (max-width: 320px) {
    padding: 2rem 0;
  }
`;
