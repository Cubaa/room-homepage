import React from "react";

export interface IMobileMenuContext {
  handleMobileMenu: (isMobileMenu: boolean) => void;
}

const defaultState = {
  handleMobileMenu: () => {
    return;
  },
};

export const MobileMenuContext =
  React.createContext<IMobileMenuContext>(defaultState);
