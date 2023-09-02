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

export default function Home() {
  return (
    <div className=" flex justify-center">
      <div
        className="flex items-start p-5 flex-wrap gap-5"
        style={{ maxWidth: "60%" }}
      >
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
