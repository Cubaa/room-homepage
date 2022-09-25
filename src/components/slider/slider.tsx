import React, { FC, useContext, useEffect, useState } from "react";
import {
  IMobileMenuContext,
  MobileMenuContext,
} from "../../context/mobile-menu.context";
import { images, navLinks } from "./slider.data";
import { INavLink } from "./slider.interface";
import {
  SliderContainerArrows,
  SliderContainer,
  Logo,
  MobileMenuIcon,
  Nav,
  NavItem,
  NavLink,
  NavList,
} from "./slider.styled";

export const Slider: FC = () => {
  const { handleMobileMenu } =
    useContext<IMobileMenuContext>(MobileMenuContext);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [imageNumber, setImageNumber] = useState<number>(0);

  const nextImage = () => {
    setImageNumber((imageNumber + 1) % images.length);
  };

  const prevImage = () => {
    const nextImage = imageNumber - 1;

    if (nextImage < 0) {
      setImageNumber(images.length - 1);
    } else {
      setImageNumber(nextImage);
    }
  };

  useEffect(() => {
    const getWidth = (): void => {
      setWidth(window.innerWidth);

      if (window.innerWidth > 768) {
        handleMobileMenu(false);
      }
    };

    window.addEventListener("resize", getWidth);

    return () => window.removeEventListener("resize", getWidth);
  }, [window.innerWidth]);

  return (
    <SliderContainer name="home" src={images[imageNumber].src}>
      {width <= 768 ? (
        <MobileMenuIcon onClick={() => handleMobileMenu(true)}>
          <img src="/images/icon-hamburger.svg" alt="icon-hamburger" />
        </MobileMenuIcon>
      ) : (
        <Nav>
          <Logo>
            <img src="/images/logo.svg" alt="logo" />
          </Logo>
          <NavList>
            {navLinks.map((link: INavLink, index: number) => {
              return (
                <NavItem key={index}>
                  <NavLink>{link.name}</NavLink>
                </NavItem>
              );
            })}
          </NavList>
        </Nav>
      )}
      <SliderContainerArrows>
        <div onClick={prevImage}>
          <img src="/images/icon-angle-left.svg" alt="arrow-left" />
        </div>
        <div onClick={nextImage}>
          <img src="/images/icon-angle-right.svg" alt="arrow-right" />
        </div>
      </SliderContainerArrows>
    </SliderContainer>
  );
};
