import React, { FC } from "react";
import { AboutContainer, AboutContent } from "./about.styled";

export const About: FC = () => {
  return (
    <AboutContainer name="about">
      <AboutContent>
        <h2>ABOUT OUR FURNITURE</h2>
        <p>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </AboutContent>
    </AboutContainer>
  );
};
