import Image from "next/image";
export const CardMovie = () => {
  return (
    <div className="max-w-sm w-96bg-white min-h-[544px] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:w-64">
      <Image
        className="rounded-t-lg aspect-square w-full"
        src="https://image.tmdb.org/t/p/original/fSY6BYUZMObTIzPfRBlhuAb5lsd.jpg"
        alt="Poster Img"
        priority
        width={300}
        height={450}
      />
      <div className="p-5">
        <h5 className="mb-2 text-xl	md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Atrapados en el abismo
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Esta película sigue a personajes de orígenes muy diferentes que se
          juntan cuando el avión en el que viajan se estrella en el Oc...
        </p>
        <div className="flex justify-between items-center">
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
