"use client";

import { useState } from "react";
import { getChuckNorrisJoke } from "@/lib/chuckNorrisApi";
import type { Joke } from "@/types/joke";

type Prop = {
  // Der erste Witz kommt als Prop von der Server-Komponente.
  joke: Joke;
};

export default function ChuckNorrisJokes(prop: Prop) {
  // Startwert aus den Props lesen.
  const initialJoke = prop.joke;

  // Lokalen State anlegen, damit der Witz per Button geändert werden kann.
  const [currentJoke, setCurrentJoke] = useState<Joke>(initialJoke);

  // Neuen Witz von der API laden und den State aktualisieren.
  async function loadJoke() {
    const newJoke = await getChuckNorrisJoke();
    setCurrentJoke(newJoke);
  }

  return (
    <section className="flex w-full flex-col items-center justify-center p-4 text-center md:w-1/2">
      <h2 className="heading-text mb-4 text-2xl font-bold">
        Chuck Norris Jokes
      </h2>

      {/* Aktuellen Witz aus dem State anzeigen */}
      <p className="rendered-text">{currentJoke.value}</p>

      <button
        onClick={loadJoke}
        className="button-text mt-4 rounded bg-blue-500 px-4 py-2 hover:bg-blue-600"
      >
        Next Joke
      </button>
    </section>
  );
}
