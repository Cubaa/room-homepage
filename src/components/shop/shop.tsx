import React, { FC } from "react";
import { ShopContainer, ShopContent, ShopNowContainer } from "./shop.styled";

export const Shop: FC = () => {
  return (
    <ShopContainer name="shop">
      <ShopContent>
        <h1>Discover innovative ways to decorate</h1>
        <p>
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
        <ShopNowContainer>
          <span>shop now</span>
          <div>
            <img src="/images/icon-arrow.svg" alt="icon-arrow" />
          </div>
        </ShopNowContainer>
      </ShopContent>
    </ShopContainer>
  );
};
