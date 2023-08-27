"use client";
import React from "react";
import Slider from "react-slick";
import { SliderItem } from "./SliderItem";
import { iSliderItem } from "./types";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow:
    typeof window !== "undefined" && window?.innerWidth > 1200
      ? 4
      : typeof window !== "undefined" && window?.innerWidth > 900
      ? 3
      : 2,
  slidesToScroll: 1,
};
const sliderItems: Array<iSliderItem> = [
  {
    id: 1,
    title: "string",
    url: "https://static.vecteezy.com/system/resources/thumbnails/009/273/280/small/concept-of-loneliness-and-disappointment-in-love-sad-man-sitting-element-of-the-picture-is-decorated-by-nasa-free-photo.jpg",
  },
  {
    id: 2,
    title: "string",
    url: "https://previews.123rf.com/images/nexusplexus/nexusplexus1706/nexusplexus170608789/81074823-reaching-the-moon-mixed-media.jpg",
  },
  {
    id: 3,
    title: "string",
    url: "https://cdn.xxl.thumbs.canstockphoto.com/respect-and-pray-on-blue-full-moon-with-nature-background-original-image-from-nasa-gov-picture_csp32924610.jpg",
  },
  {
    id: 4,
    title: "string",
    url: "https://play-lh.googleusercontent.com/UjaAdTYsArv7zAJbqGWjQw2ftuOtnAlvokffC3TQQ2K12mwk0YdXUF2wZBTBA2kDZIk",
  },
  {
    id: 5,
    title: "string",
    url: "https://irisphoto.art/web/image/76796/22-3-404-Maximilian.jpg",
  },
];

export const TopSlider = () => {
  return (
    <Slider {...settings}>
      {sliderItems.map((el) => (
        <SliderItem item={el} key={el.id} />
      ))}
    </Slider>
  );
};
