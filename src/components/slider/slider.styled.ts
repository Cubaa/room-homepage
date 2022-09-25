import styled from "styled-components";
import { IImage } from "./slider.interface";
import * as Scroll from "react-scroll";

export const SliderContainer = styled(Scroll.Element)<IImage>`
  position: relative;
  width: 50%;
  overflow: hidden;
  background-image: ${(props) => `url(${props.src})`};
  width: 50%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: all 0.3s linear;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  padding: 20px 0;
  color: #fff;
`;
export const Logo = styled.div``;
export const NavList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  align-items: center;
  width: 60%;
`;
export const NavItem = styled.li`
  cursor: pointer;
`;
export const NavLink = styled.a`
  letter-spacing: -0.666667px;
  font-weight: 600;
`;

export const SliderContainerArrows = styled.div`
  position: absolute;
  bottom: 0;
  right: 0px;
  width: 160px;
  background-color: #000;
  display: flex;

  div {
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img {
      width: 50%;
      height: 50%;

      object-fit: cover;
    }
  }

  @media (max-width: 768px) {
    width: 100px;

    div {
      width: 50px;
    }
  }
`;

export const MobileMenuIcon = styled.div`
  margin: 1rem;
  cursor: pointer;
`;
