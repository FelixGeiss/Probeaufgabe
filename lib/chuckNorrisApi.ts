import type { Joke } from "@/types/joke";

const BASE_URL = "https://api.chucknorris.io/jokes/random?category=";

const categoryDev = "dev";

/**
 * Fetches a random Chuck Norris joke from the configured category.
 *
 * @returns A parsed joke payload from the external API.
 */
export async function getChuckNorrisJoke() {
  const res = await fetch(BASE_URL + categoryDev, {});
  const data = (await res.json()) as Joke;
  return data;
}
