import { useState, useCallback } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = useCallback((productId: number) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(productId))
        return prevFavorites.filter((id) => id !== productId);
      else return [...prevFavorites, productId];
    });
  }, []);

  const isFavorite = useCallback(
    (productId: number) => favorites.includes(productId),
    [favorites]
  );

  return {
    favorites,
    isFavorite,
    toggleFavorite,
  };
}
