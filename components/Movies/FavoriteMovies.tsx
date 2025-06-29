"use client";

import { useFavorites } from "@/store/favorites";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import SectionSkeleton from "../Skeleton/SectionSkeleton";

export default function FavoriteMovies() {
  const favorites = useFavorites((state) => state.favorites);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Check if the store has hydrated
    const checkHydration = () => {
      try {
        const hasHydrated = useFavorites.persist?.hasHydrated?.();
        if (hasHydrated) {
          setIsHydrated(true);
        } else {
          // If hasHydrated is not available, assume hydration is complete after a short delay (chatgpt suggested this)
          setTimeout(() => setIsHydrated(true), 100);
        }
      } catch {
        // Fallback: assume hydration is complete
        setIsHydrated(true);
      }
    };

    checkHydration();
  }, []);

  if (!isHydrated) {
    return <SectionSkeleton />; // still loading
  }

  if (favorites.length === 0) {
    return <p className="text-gray-400 text-center">No favorite movies yet.</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {favorites.map((movie, index) => (
        <MovieCard key={movie.id} {...movie} priority={index < 2} />
      ))}
    </div>
  );
}
