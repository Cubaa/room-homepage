import React, { FC, useState } from "react";
import { HomepageContainer } from "./app.styled";
import { SliderShop } from "./components/slider-shop/slider-shop";
import { AboutPhotos } from "./components/about-photos/about-photos";
import { MobileMenuContext } from "./context/mobile-menu.context";
import { MobileMenuPortal } from "./portals/mobile-menu.portal";

export const App: FC = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState<boolean>(false);

  const handleMobileMenu = (isMobileMenu: boolean): void => {
    setIsOpenMobileMenu(isMobileMenu);
  };

  return (
    <MobileMenuContext.Provider value={{ handleMobileMenu }}>
      <HomepageContainer>
        {isOpenMobileMenu && <MobileMenuPortal />}
        <SliderShop />
        <AboutPhotos />
      </HomepageContainer>
    </MobileMenuContext.Provider>
  );
};
