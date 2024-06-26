import Image from "next/image";
import { Movie } from "../interface/movies";
import { fullPath, truncateText } from "@/helper";
import Link from "next/link";

interface Props {
  movie: Movie;
}

export const CardMovie = async ({ movie }: Props) => {
  return (
    <div className="w-[350px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:w-[380px]">
      <Image
        className="rounded-t-lg w-full"
        src={fullPath(movie?.backdrop_path)}
        alt="Poster Img"
        priority={false}
        width={300}
        height={450}
      />
      <div className="p-5">
        <h5 className="mb-2 text-xl	md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {movie.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {truncateText(movie.overview, 130)}
        </p>
        <div className="flex justify-between items-center">
          <Link href={`/movie/${movie.title}/${movie.id}`}>
            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
              </svg>
            </button>
          </Link>
          <button>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}; 
