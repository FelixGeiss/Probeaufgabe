import LeftImage from "@/components/LeftImage";
import ChuckNorrisJokes from "@/components/ChuckNorrisJokes";
import { getChuckNorrisJoke } from "@/lib/chuckNorrisApi";

export default async function Home() {
  const joke = await getChuckNorrisJoke();

  return (
    <main className="mx-auto flex min-h-[calc(100vh-153px)] w-full max-w-7xl flex-col items-center justify-center px-5 md:flex-row">
      <LeftImage />
      <ChuckNorrisJokes joke={joke} />
    </main>
  );
}
