"use client";

import { useState } from "react";
import { getChuckNorrisJoke } from "@/lib/chuckNorrisApi";
import type { Joke } from "@/types/joke";

export type ChuckNorrisJokesProps = {
  /**
   * The initial joke fetched on the server.
   */
  joke: Joke;
};

/**
 * Renders the current joke and lets the user load a new one.
 *
 * @param props The component props.
 * @returns The interactive joke section.
 */
export default function ChuckNorrisJokes(props: ChuckNorrisJokesProps) {
  const initialJoke = props.joke;

  const [currentJoke, setCurrentJoke] = useState<Joke>(initialJoke);

  /**
   * Loads a new joke and updates the local state.
   *
   * @returns A promise that resolves after the new joke has been requested.
   */
  async function loadJoke() {
    const newJoke = await getChuckNorrisJoke();
    setCurrentJoke(newJoke);
  }

  return (
    <section className="flex w-full flex-col items-center justify-center p-4 text-center md:w-1/2">
      <h2 className="heading-text mb-4 text-2xl font-bold">
        Chuck Norris Jokes
      </h2>

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
