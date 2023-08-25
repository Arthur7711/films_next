"use client";

import { useState } from "react";

export const GlobalSearch = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="">
      <input
        placeholder="search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className=""
      />
    </div>
  );
};
