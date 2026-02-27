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
    <section className="w-1/2 p-4">
      <h2 className="mb-4 text-2xl font-bold">Chuck Norris Witze</h2>

      {/* Aktuellen Witz aus dem State anzeigen */}
      <p>{currentJoke.value}</p>

      <button
        onClick={loadJoke}
        className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Nächster Witz
      </button>
    </section>
  );
}
