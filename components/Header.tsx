import Link from "next/link";
import { GlobalSearch } from "./GlobalSearch";

export const Header = () => {
  const links = [
    { path: "./", name: "Top" },
    { path: "#/", name: "Popular" },
    { path: "#//", name: "All" },
  ];
  return (
    <header className=" bg-black h-20 flex flex-col gap-2 py-2 px-8">
      <div className="flex gap-4 items-center justify-center">
        {links.map((el) => (
          <Link
            href={el.path}
            key={el.path}
            className="text-white text-lg hover:text-blue-500"
          >
            {el.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <div>logo</div>
        <GlobalSearch />
      </div>
    </header>
  );
};
