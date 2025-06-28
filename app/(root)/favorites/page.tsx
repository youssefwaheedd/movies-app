import FavoriteMovies from "@/components/Movies/FavoriteMovies";
import React from "react";

const Page = () => {
  return (
    <div className="p-10 bg-[#0b0c0f] min-h-screen flex flex-col gap-6">
      <strong className=" text-green-500 text-2xl ">Favorite Movies</strong>
      <FavoriteMovies />
    </div>
  );
};

export default Page;
