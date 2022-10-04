import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = useState([]);
  return (
    <FavoritesContext.Provider value={{ favoriteIds, setFavoriteIds }}>
      {children}
    </FavoritesContext.Provider>
  );
};
