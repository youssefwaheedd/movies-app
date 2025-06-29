"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchInput({
  initialQuery,
}: {
  initialQuery: string;
}) {
  const [input, setInput] = useState(initialQuery);
  const router = useRouter();

  // update input when initialQuery changes
  useEffect(() => {
    setInput(initialQuery);
  }, [initialQuery]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const query = input.trim();
      const url = query ? `/?query=${encodeURIComponent(query)}` : "/"; // used encodeURI to handle spaces and special characters
      router.replace(url);
    }, 500);

    return () => clearTimeout(timeout);
  }, [input, router]);

  return (
    <form role="search" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="movie-search" className="sr-only">
        Search for movies
      </label>
      <input
        id="movie-search"
        type="search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="search-input"
        placeholder="Search for a movie..."
        aria-label="Search for movies by title"
        aria-describedby="search-description"
      />
      <div id="search-description" className="sr-only">
        Type to search for movies. Results will appear automatically as you
        type.
      </div>
    </form>
  );
}
