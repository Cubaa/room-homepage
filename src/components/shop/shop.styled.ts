import styled from "styled-components";
import * as Scroll from "react-scroll";

export const ShopContainer = styled(Scroll.Element)`
  background-color: #fff;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ShopContent = styled.div`
  width: 65%;

  h1 {
    font-weight: 600;
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 44px;
    letter-spacing: -2px;
    color: #000000;
  }

  p {
    margin: 0.5rem 0 1.5rem 0;
    font-weight: 500;
    font-size: clamp(0.8rem, 2vw, 1rem);
    line-height: 22px;
    letter-spacing: -0.333333px;
    color: #a0a0a0;
  }

  @media (max-width: 1150px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 90%;

    h1 {
      line-height: 30px;
    }
  }
`;
export const ShopNowContainer = styled.div`
  display: flex;

  span {
    margin-right: 10px;
    font-weight: 500;
    font-size: clamp(0.7rem, 2vw, 0.9rem);
    letter-spacing: 12.5px;
    color: #000;
    text-transform: uppercase;
    transition: color 0.3s linear;
    cursor: pointer;

    :hover {
      color: #a0a0a0;
    }
  }

  img {
    cursor: pointer;
  }
`;
