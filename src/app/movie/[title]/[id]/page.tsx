import { CardMovieDetails } from "@/movies/components/CardMovieDetails";
import { SimpleMovie } from "@/movies/interface";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: { title: string; id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { title } = await getMovie(params.title!, params.id);
  try {
    return {
      title: title,
      description: `pagina de ${title}`,
    };
  } catch (error) {
    return {
      title: "Pelicupa popular",
      description: `Obtén información detallada sobre esta película, incluyendo el elenco, la trama y las críticas`,
    };
  }
}

const getMovie = async (name: string, id: string): Promise<SimpleMovie> => {
  const key = process.env.API_KEY;
  try {
    const response = await fetch(
      ` https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${key}`,
      {
        //cache: "force-cache",
        next: { revalidate: 60 * 60 * 30 * 6 },
      }
    ).then((resp) => resp.json());

    return response;
  } catch (error) {
    notFound();
  }
};

export default async function MoviePage({ params }: Props) {
  const movie = await getMovie(params.title, params.id);

  console.dir(`MOVIE -> ${movie?.title}`);

  return (
    <div className="py-4 max-w-[2200px] dark:bg-gray-800 min-h-[100vh] md:flex md:justify-center md:items-center">
      <CardMovieDetails movie={movie} />
    </div>
  );
}
