import styled from "styled-components";

export const SliderShopContainer = styled.div`
  width: 100%;
  display: flex;
  height: 65%;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`;
