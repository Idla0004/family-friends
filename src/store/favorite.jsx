import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFavorites = create((set) => ({
  favorites: [],
  setFavorite: (id) =>
    set((state) => ({
      favorites: [...state.favorites, { id: id }],
    })),
  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter(
        (favorite) => favorite.id !== id,
      ),
    })),
}));

export default useFavorites;
