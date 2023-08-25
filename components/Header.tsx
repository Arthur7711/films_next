import Link from "next/link";
import { GlobalSearch } from "./GlobalSearch";

export const Header = () => {
  const links = [
    { path: "", name: "Top" },
    { path: "", name: "Popular" },
    { path: "", name: "All" },
  ];
  return (
    <header className=" bg-black  h-20 flex flex-col gap-2 py-2">
      <div className="flex gap-2 items-center justify-center">
        {links.map((el) => (
          <Link href={el.path} key={el.path} className="text-white text-lg">
            {el.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <GlobalSearch />
      </div>
    </header>
  );
};
