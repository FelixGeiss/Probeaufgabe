import LeftImage from "@/components/LeftImage";
import ChuckNorrisJokes from "@/components/ChuckNorrisJokes";
import { getChuckNorrisJoke } from "@/lib/chuckNorrisApi";

export default async function Home() {
  const joke = await getChuckNorrisJoke();

  return (
    <main className="mx-auto flex min-h-[calc(100vh-153px)] w-full max-w-7xl items-center justify-between px-5">
      <LeftImage />
      <ChuckNorrisJokes joke={joke} />
    </main>
  );
}
