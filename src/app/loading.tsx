import { CardSkeleton } from "@/movies/components";

const countCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export default function Loading() {
  return (
    <div className="mt-5 flex justify-center flex-wrap gap-3 max-w-screen-xl mx-auto md:gap-9">
      {countCard.map((card) => (
        <CardSkeleton key={card} />
      ))}
    </div>
  );
}
