import LeftImage from "@/components/LeftImage";
import ChuckNorrisJokes from "@/components/ChuckNorrisJokes";
import { getChuckNorrisJoke } from "@/lib/chuckNorrisApi";

export default async function Home() {
  const joke = await getChuckNorrisJoke();

  return (
    <main className="">
      <LeftImage />
      <ChuckNorrisJokes joke={joke} />
    </main>
  );
}
