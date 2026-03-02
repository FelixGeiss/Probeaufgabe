import LeftImage from "@/components/LeftImage";
import ChuckNorrisJokes from "@/components/ChuckNorrisJokes";
import { getChuckNorrisJoke } from "@/lib/chuckNorrisApi";

export default async function Home() {
  const joke = await getChuckNorrisJoke();

  return (
    <main className="mx-auto flex h-full w-full max-w-7xl flex-1 flex-col items-center justify-center px-5 md:flex-row">
      <LeftImage />
      <ChuckNorrisJokes joke={joke} />
    </main>
  );
}
