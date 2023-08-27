import React from "react";
import { iSliderItem } from "./types";

export const SliderItem = ({ item }: { item: iSliderItem }) => {
  return (
    <div
      className="h-48 flex flex-col p-6 justify-end"
      style={{
        backgroundImage: `url(${item.url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h3 className="text-gray-300">{item.title}</h3>
      <div className="flex gap-3 items-center justify-start"></div>
    </div>
  );
};
