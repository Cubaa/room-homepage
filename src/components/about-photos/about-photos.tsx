import React, { FC } from "react";
import { About } from "../about/about";
import { ChairPhoto } from "../chair-photo/chair-photo";
import { FurniturePhoto } from "../furniture-photo/furniture-photo";
import { AboutPhotosContainer } from "./about-photos.styled";

export const AboutPhotos: FC = () => {
  return (
    <AboutPhotosContainer>
      <FurniturePhoto />
      <About />
      <ChairPhoto />
    </AboutPhotosContainer>
  );
};
