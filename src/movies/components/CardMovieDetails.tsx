import Image from "next/image";
import { Genre, SimpleMovie } from "../interface";
import { fullPath } from "@/helper";
import { ListGenre } from "./listGenre";
import { StarIcon } from "@/components/header/icons";
import { Button } from "@/components/header/Button";

interface Props {
  movie: SimpleMovie;
}

export const CardMovieDetails = ({ movie }: Props) => {
  return (
    <article className="bg-white rounded dark:bg-gray-700 max-w-[85%] mx-auto md:w-[1080px] flex flex-col md:flex-row">
      <div>
        <Image
          src={fullPath(movie.poster_path)}
          width={300}
          height={300}
          className=" rounded-t-sm object-scale-down	min-w-[350px]"
          alt="ja"
          priority={false}
        />
      </div>
      <div className="p-3">
        <h1 className="text-center mb-2 text-xl text-slate-800 dark:text-white">
          {movie.title}
        </h1>
        <p className="text-justify mb-2 text-slate-800 dark:text-white">
          {movie.overview}
        </p>
        <time className="block mb-2 text-slate-800 dark:text-white">
          Fecha {movie?.release_date as any}
        </time>
        <p className="mb-2 text-slate-800 dark:text-white">
          Cantidad de votos : {movie?.vote_count}
        </p>
        <ul className="space-y-4 text-slate-800 dark:text-white">
          Géneros :
          {movie.genres.map((genre: Genre) => (
            <ListGenre key={genre.id} genre={genre} />
          ))}
        </ul>
        <p className=" flex justify-between items-center my-5">
          <small className="text-slate-800 dark:text-gray-400 flex gap-3 items-center ">
            <StarIcon />
            {movie.vote_average}
          </small>
        </p>
        <div className="flex justify-end mt-2">
          <Button />
        </div>
      </div>
    </article>
  );
};
