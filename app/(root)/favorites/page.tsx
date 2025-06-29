import FavoriteMovies from "@/components/Movies/FavoriteMovies";
import React from "react";

const Page = () => {
  return (
    <div className="p-10 min-h-screen flex flex-col gap-6">
      <strong className="movie-section-title">Favorite Movies</strong>
      <FavoriteMovies />
    </div>
  );
};

export default Page;
