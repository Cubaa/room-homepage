import React, { FC } from "react";
import { Slider } from "../slider/slider";
import { Shop } from "../shop/shop";
import { SliderShopContainer } from "./slider-shop.styled";

export const SliderShop: FC = () => {
  return (
    <SliderShopContainer>
      <Slider />
      <Shop />
    </SliderShopContainer>
  );
};
