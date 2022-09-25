import React, { FC } from "react";
import ReactDOM from "react-dom";
import { MobileMenu } from "../components/mobile-menu/mobile-menu";
import { MobileMenuBackdrop } from "../components/mobile-menu/mobile-menu-backdrop";

export const MobileMenuPortal: FC = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <MobileMenuBackdrop />,
        document.getElementById("mobile-menu-backdrop-root") as HTMLDivElement
      )}
      {ReactDOM.createPortal(
        <MobileMenu />,
        document.getElementById("mobile-menu-root") as HTMLDivElement
      )}
    </>
  );
};
