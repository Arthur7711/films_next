import Link from "next/link";

export const Header = () => {
  const links = [
    { path: "", name: "link1" },
    { path: "", name: "link2" },
    { path: "", name: "link3" },
  ];
  return (
    <header className="flex gap-2">
      {links.map((el) => (
        <Link href={el.path} key={el.path}>
          {el.name}
        </Link>
      ))}
    </header>
  );
};
