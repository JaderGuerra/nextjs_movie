import emptyImg from "../../public/assets/no-IMg.webp";
const URL_IMG = "https://image.tmdb.org/t/p/original";

export const fullPath = (moviePath: string) => {
  return moviePath ? `${URL_IMG}${moviePath}` : emptyImg;
};