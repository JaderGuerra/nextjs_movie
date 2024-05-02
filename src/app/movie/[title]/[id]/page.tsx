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
      description: `Pelicupa popular`,
    };
  }
}

const getMovie = async (name: string, id: string): Promise<SimpleMovie> => {
  try {
    const response = await fetch(
      ` https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=a97061e35b0b95cc28f22973518df71c`,
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
    <>
      <h1>{movie?.title}</h1>
    </>
  );
}
