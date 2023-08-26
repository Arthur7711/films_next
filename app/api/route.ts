import { NextResponse } from "next/server";

export async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });
  const data = await res.json();

  return NextResponse.json(data);
}
