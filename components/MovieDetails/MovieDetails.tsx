import { Movie } from "@/types";
import Image from "next/image";
import React, { Suspense } from "react";
import Header from "./Header";
import GenreList from "./GenreList";
import MetaBar from "./MetaBar";
import PosterImage from "./PosterImage";
import LoadingSpanner from "../ui/loadingSpanner";
const CreditList = React.lazy(() => import("./CreditList"));

const MovieDetails = ({ movie }: { movie: Movie }) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w780${movie.poster_path}`
    : "/assets/images/not_found.jpeg";

  const director = movie.credits.crew.find(
    (person) => person.job === "Director"
  )?.name;

  const topCast = movie.credits.cast.slice(0, 5);
  const fullCast = movie.credits.cast;
  const crew = movie.credits.crew;

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src={posterUrl}
          alt={movie.title}
          fill
          priority={true}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-4 lg:p-20">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Poster Image */}
          <PosterImage {...movie} />

          {/* Movie Information Section*/}
          <section className="flex-1 space-y-4">
            <Header movie={movie} />
            <GenreList genres={movie.genres} />
            <MetaBar
              vote_average={movie.vote_average}
              runtime={movie.runtime}
              release_date={movie.release_date}
            />
            <p className="text-gray-200 leading-relaxed">{movie.overview}</p>
            {director && (
              <div className="text-gray-200">
                <strong className="text-[#1ce783]">Director:</strong> {director}
              </div>
            )}
          </section>
        </div>

        {/* Credits Section (lazy loaded)*/}
        <section className="mt-8 space-y-6">
          <Suspense fallback={<LoadingSpanner />}>
            <>
              <CreditList title="Top Cast" credits={topCast} type="cast" />
              <CreditList title="Full Cast" credits={fullCast} type="cast" />
              <CreditList title="Crew" credits={crew} type="crew" />
            </>
          </Suspense>
        </section>
      </div>
    </div>
  );
};

export default MovieDetails;
