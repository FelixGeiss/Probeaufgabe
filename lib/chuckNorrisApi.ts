import type { Joke } from "@/types/joke";
const BASE_URL = "https://api.chucknorris.io/jokes/random?category=";
const categoryDev = "dev";

export async function getChuckNorrisJoke() {
  const res = await fetch(BASE_URL + categoryDev, {
  });

  const data = (await res.json()) as Joke;
  return data;
}

