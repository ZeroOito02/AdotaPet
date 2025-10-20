import { useState, useEffect } from "react";

const FAVORITES_KEY = "adotapet_favorites";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    const stored = localStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (animalId: string) => {
    setFavorites(prev => 
      prev.includes(animalId)
        ? prev.filter(id => id !== animalId)
        : [...prev, animalId]
    );
  };

  const isFavorite = (animalId: string) => favorites.includes(animalId);

  return { favorites, toggleFavorite, isFavorite };
};
