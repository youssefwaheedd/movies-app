"use client";

import { useFavorites } from "@/store/favorites";
import { Movie } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
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
    <motion.button
      onClick={toggle}
      disabled={isAnimating}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      className={`transition-colors p-2 rounded-full ml-2 cursor-pointer ${
        favorite ? "bg-[#1ce783] text-[#0b0c0f]" : "bg-gray-800 text-gray-300"
      }`}
    >
      <AnimatePresence mode="wait">
        {showTick ? (
          <motion.div
            key="check"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <Check size={20} />
          </motion.div>
        ) : (
          <motion.div
            key="star"
            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <Star fill={favorite ? "#1ce783" : "none"} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
