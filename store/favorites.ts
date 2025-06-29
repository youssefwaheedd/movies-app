import { create } from "zustand";
import { persist } from "zustand/middleware";
import { FavoritesState } from "@/types";

export const useFavorites = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (movie) => {
        const exists = get().favorites.some((m) => m.id === movie.id);
        if (!exists) {
          set({ favorites: [...get().favorites, movie] });
        }
      },
      removeFavorite: (id) => {
        set({
          favorites: get().favorites.filter((m) => m.id !== id),
        });
      },
      isFavorite: (id) => get().favorites.some((m) => m.id === id),
    }),
    {
      name: "favorites-movies", // synch with local storage
    }
  )
);
