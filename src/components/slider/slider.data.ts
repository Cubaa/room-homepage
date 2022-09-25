import { IImage, INavLink } from "./slider.interface";

export const images: IImage[] = [
  {
    src: "/images/desktop-image-hero-1.jpg",
  },
  {
    src: "/images/desktop-image-hero-2.jpg",
  },
  {
    src: "/images/desktop-image-hero-3.jpg",
  },
];

export const navLinks: INavLink[] = [
  {
    name: "home",
    to: "home",
  },
  {
    name: "shop",
    to: "shop",
  },
  {
    name: "about",
    to: "about",
  },
  {
    name: "contact",
    to: "home",
  },
];
