import type { Joke } from "@/types/joke";



export default function ChuckNorrisJokes({ joke }: { joke: Joke }) {
  return (
    <section className="w-1/2 p-4">
      <h2 className="mb-4 text-2xl font-bold">Chuck Norris Witze</h2>
      <p>{joke.value}</p>

      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Nächstes Witz
      </button>
    </section>
  );
}
