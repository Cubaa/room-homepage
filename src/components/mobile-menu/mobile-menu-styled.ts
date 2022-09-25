import styled from "styled-components";
import * as Scroll from "react-scroll";

export const MobileMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 10vh;
  background-color: #fff;
  display: flex;
  padding: 1rem 1rem;
`;

export const MobileMenuNav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const CloseMobileMenu = styled.div`
  cursor: pointer;
`;

export const MobileMenuList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-around;
  width: 80%;
`;

export const MobileMenuItem = styled.li`
  cursor: pointer;
`;

export const MobileMenuLink = styled(Scroll.Link)`
  font-weight: 600;
  font-size: 16px;
  line-height: 15px;
  letter-spacing: -0.666667px;
  color: #000000;
`;

export const MobileMenuBackdropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;
