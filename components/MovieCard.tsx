import { MovieCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function MovieCard({
  id,
  title,
  poster_path,
  release_date,
  vote_average,
}: MovieCardProps) {
  return (
    <Link
      href={`/movie/${id}`}
      className="rounded shadow-md p-2 hover:scale-105 transition cursor-pointer"
    >
      <Image
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : "/assets/images/not_found.jpeg"
        }
        alt={title}
        width={300}
        height={450}
        className="rounded  object-cover"
      />
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <p className="text-sm text-gray-500">{release_date}</p>
      <p className="text-yellow-500 font-bold">⭐ {vote_average}</p>
    </Link>
  );
}
