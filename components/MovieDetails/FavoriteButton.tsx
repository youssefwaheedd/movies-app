"use client";

import { useFavorites } from "@/store/favorites";
import { Movie } from "@/types";
import { Check, Star } from "lucide-react";

import { useEffect, useState } from "react";

export default function FavoriteButton({ movie }: { movie: Movie }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const [isHydrated, setIsHydrated] = useState(false);
  const [showTick, setShowTick] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if the store has hydrated
    const checkHydration = () => {
      try {
        const hasHydrated = useFavorites.persist?.hasHydrated?.();
        if (hasHydrated) {
          setIsHydrated(true);
        } else {
          // If hasHydrated is not available, assume hydration is complete after a short delay
          setTimeout(() => setIsHydrated(true), 100);
        }
      } catch {
        // Fallback: assume hydration is complete
        setIsHydrated(true);
      }
    };

    checkHydration();
  }, []);

  if (!isHydrated) return null;

  const favorite = isFavorite(movie.id);

  const toggle = () => {
    if (favorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
      setShowTick(true);
      setIsAnimating(true);
      setTimeout(() => {
        setShowTick(false);
        setIsAnimating(false);
      }, 900);
    }
  };

  return (
    <button
      onClick={toggle}
      disabled={isAnimating}
      className={`favorite-button ${
        favorite ? "bg-[#1ce783] text-[#0b0c0f]" : "bg-gray-800 text-gray-300"
      }`}
      aria-label={
        favorite
          ? `Remove ${movie.title} from favorites`
          : `Add ${movie.title} to favorites`
      }
      aria-pressed={favorite}
    >
      <div className="relative w-6 h-6">
        {showTick ? (
          <Check
            width={25}
            height={25}
            className="absolute inset-0 transition-all duration-300 ease-in-out transform scale-100 opacity-100"
            aria-hidden="true"
          />
        ) : (
          <Star
            fill={favorite ? "#1ce783" : "none"}
            className="absolute inset-0 transition-all duration-300 ease-in-out transform scale-100 opacity-100"
            aria-hidden="true"
          />
        )}
      </div>
    </button>
  );
}
