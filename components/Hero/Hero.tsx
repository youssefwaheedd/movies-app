import React from "react";
import SearchInput from "./SearchInput";

const Hero = ({ query }: { query: string }) => {
  return (
    <section className="w-full p-12 flex flex-col items-center bg-[#18181b] text-[#1ce783] mb-8">
      <h1 className="text-4xl font-bold mb-2">
        Discover Your Next Favorite Movie
      </h1>
      <p className="mb-6 text-lg opacity-80">
        Search millions of movies, explore details, and save your favorites.
      </p>
      <div className="w-full max-w-xl">
        <SearchInput initialQuery={query || ""} />
      </div>
    </section>
  );
};

export default Hero;
