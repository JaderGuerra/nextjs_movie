import { CardMovie } from "@/components/movies/CardMovies";
import { CardSkeleton } from "@/components/movies/CardSkeleton";

const moviesLength = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Home() {
  return (
    <main className="mt-5 flex justify-center flex-wrap gap-3 max-w-screen-xl mx-auto md:gap-9">
      {moviesLength.map((movie) => (
        <CardMovie key={movie}/>
      ))}
    </main>
  );
}
