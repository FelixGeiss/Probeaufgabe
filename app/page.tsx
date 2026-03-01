import LeftImage from "@/components/LeftImage";
import ChuckNorrisJokes from "@/components/ChuckNorrisJokes";
import { getChuckNorrisJoke } from "@/lib/chuckNorrisApi";

export default async function Home() {
  const joke = await getChuckNorrisJoke();

  return (
    <main className="mx-auto w-full max-w-7xl">
      <LeftImage />
      <ChuckNorrisJokes joke={joke} />
    </main>
  );
}
