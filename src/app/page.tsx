import { CardMovie } from "@/movies/components";
import { Movie, MoviesResponse } from "@/movies/interface";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Películas populares",
  description: "Películas populares",
};

const getPopular = async (): Promise<Movie[]> => {
  const url = "https://api.themoviedb.org/3/movie/popular";
  const key = process.env.API_KEY;
  const response: MoviesResponse = await fetch(`${url}?language=en-US&page=1&api_key=${key}`)
  .then((resp) => resp.json());
  return response.results; 
};

export default async function Home() {
  const movies = await getPopular();

  return (
    <div className="p-4 flex justify-center flex-wrap gap-3 md:max-w-screen-xl mx-auto md:gap-9">
      {movies.map((movie) => (
        <CardMovie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
