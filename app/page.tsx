import { FilmItem } from "../components/FilmItem";
const data = [
  {
    img: "https://irisphoto.art/web/image/76796/22-3-404-Maximilian.jpg",
    title: "some name",
    status: "Free",
    category: "Action",
    year: 2018,
    id: 1,
  },
  {
    img: "https://irisphoto.art/web/image/76796/22-3-404-Maximilian.jpg",
    title: "some name",
    status: "Free",
    category: "Action",
    year: 2018,
    id: 2,
  },
  {
    img: "https://irisphoto.art/web/image/76796/22-3-404-Maximilian.jpg",
    title: "some name",
    status: "Free",
    category: "Action",
    year: 2018,
    id: 3,
  },
  {
    img: "https://irisphoto.art/web/image/76796/22-3-404-Maximilian.jpg",
    title: "some name",
    status: "Free",
    category: "Action",
    year: 2018,
    id: 4,
  },
  {
    img: "https://irisphoto.art/web/image/76796/22-3-404-Maximilian.jpg",
    title: "some name",
    status: "Free",
    category: "Action",
    year: 2018,
    id: 5,
  },
];

async function getData() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  // console.log(res.json(), "rrrr");
  return res.json();
}

export default async function Home() {
  const pokemons = await getData();
  return (
    <div className=" flex justify-center">
      <div
        className="flex items-start p-5 flex-wrap gap-5"
        style={{ maxWidth: "60%" }}
      >
        {/* <p>{JSON.stringify(pokemons)}</p> */}
        {data.map((el) => (
          <FilmItem
            key={el.id}
            category={el.category}
            img={el.img}
            status={el.status}
            title={el.title}
            year={el.year}
          />
        ))}
      </div>
    </div>
  );
}
