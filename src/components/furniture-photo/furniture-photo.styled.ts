import styled from "styled-components";

export const FurniturePhotoContainer = styled.div`
  background-image: url("/images/image-about-dark.jpg");
  background-size: cover;
  width: 25%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
