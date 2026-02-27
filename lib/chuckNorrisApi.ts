import type { Joke } from "@/types/joke";

// Basis URL der Chuck Norris API inkl. Query Start für die Kategorie.
const BASE_URL = "https://api.chucknorris.io/jokes/random?category=";

// Gewünschte Witz Kategorie.
const categoryDev = "dev";

export async function getChuckNorrisJoke() {
  // Request an die API senden.
  const res = await fetch(BASE_URL + categoryDev, {
  });

  // JSON Antwort in unseren Joke Typ umwandeln.
  const data = (await res.json()) as Joke;
  return data;
}
