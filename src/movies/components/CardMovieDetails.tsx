import Image from "next/image";
import { SimpleMovie } from "../interface";
import { fullPath } from "@/helper";

interface Props{
    movie:SimpleMovie
}
export const CardMovieDetails = ({movie}:Props) => {
  return (
    <div className="max-w-[2200px] bg-emerald-500 h-screen md:flex md:justify-center md:items-center">
      <article className="md:w-[756px] md:max-h-[640px] bg-white rounded">
        <div>
          <Image src={fullPath(movie.backdrop_path)} width={300} height={300} className="border-dashed" alt="ja" />
        </div>
        <div></div>
      </article>
    </div>
  );
};
