import React, { FC, useContext } from "react";
import { MobileMenuContext } from "../../context/mobile-menu.context";
import { navLinks } from "../slider/slider.data";
import { INavLink } from "../slider/slider.interface";
import {
  CloseMobileMenu,
  MobileMenuContainer,
  MobileMenuItem,
  MobileMenuLink,
  MobileMenuList,
  MobileMenuNav,
} from "./mobile-menu-styled";

export const MobileMenu: FC = () => {
  const { handleMobileMenu } = useContext(MobileMenuContext);

  return (
    <MobileMenuContainer>
      <MobileMenuNav>
        <CloseMobileMenu onClick={() => handleMobileMenu(false)}>
          <img src="/images/icon-close.svg" alt="icon-close" />
        </CloseMobileMenu>
        <MobileMenuList>
          {navLinks.map((link: INavLink, index: number) => {
            return (
              <MobileMenuItem key={index}>
                <MobileMenuLink to={link.to} smooth={true}>
                  {link.name}
                </MobileMenuLink>
              </MobileMenuItem>
            );
          })}
        </MobileMenuList>
      </MobileMenuNav>
    </MobileMenuContainer>
  );
};
