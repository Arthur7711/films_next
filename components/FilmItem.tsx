import Image from "next/image";
import React from "react";

interface IProps {
  img: string;
  title: string;
  status: string;
  category: string;
  year: string | number;
}
export const FilmItem = ({ img, title, status, category, year }: IProps) => {
  return (
    <div className=" h-72 rounded-sm flex flex-col gap-2 cursor-pointer">
      <Image
        alt="film"
        src={img}
        className="rounded-lg"
        width={200}
        height={270}
        style={{ objectFit: "cover" }}
      />
      <h4>{title}</h4>
      <div className="flex items-center gap-2">
        <p className=" text-xs text-span-info">{status}</p>
        <p className=" text-xs text-span-info">{category}</p>
        <p className=" text-xs text-span-info">{year}</p>
      </div>
    </div>
  );
};
