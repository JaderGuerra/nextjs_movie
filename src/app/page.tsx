import { CardMovie } from "@/movies/components";
import { Movie, MoviesResponse } from "@/movies/interface/movies";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Películas populares",
  description: "Películas populares",
};

const getPopular = async (): Promise<Movie[]> => {
  const url = "https://api.themoviedb.org/3/movie/popular";
  const response: MoviesResponse = await fetch(`${url}?language=en-US&page=1&api_key=a97061e35b0b95cc28f22973518df71c`)
  .then((resp) => resp.json());
  return response.results; 
};

export default async function Home() {
  const movies = await getPopular();

  return (
    <main className="mt-5 flex justify-center flex-wrap gap-3 max-w-screen-xl mx-auto md:gap-9">
      {movies.map((movie) => (
        <CardMovie key={movie.id} movie={movie} />
      ))}
    </main>
  );
}
