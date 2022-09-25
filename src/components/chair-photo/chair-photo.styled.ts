import styled from "styled-components";

export const ChairPhotoContainer = styled.div`
  background-image: url("/images/image-about-light.jpg");
  background-size: cover;
  background-position: center;
  width: 25%;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
