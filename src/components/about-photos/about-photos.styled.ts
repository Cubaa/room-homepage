import styled from "styled-components";

export const AboutPhotosContainer = styled.div`
  display: flex;
  width: 100%;
  height: 35%;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`;
