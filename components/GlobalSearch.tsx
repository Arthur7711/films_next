"use client";

import { useState } from "react";
import { ISearchResults } from "./types";

export const GlobalSearch = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<ISearchResults[]>([
    { name: "ssss", id: 0 },
    { name: "ssss", id: 1 },
    { name: "ssss", id: 2 },
  ]);
  return (
    <div className="">
      <input
        placeholder="search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="rounded-sm outline-none border-none pl-2 text-gray-500 w-48"
      />
    </div>
  );
};
