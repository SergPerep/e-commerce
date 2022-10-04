import { ReactComponent as EmptyHeartIcon } from "../assets/heart-regular.svg";
import { ReactComponent as FilledHeartIcon } from "../assets/heart-solid.svg";
import { FavoritesContext } from "../contexts/FavoritesContext";
import { useContext } from "react";

const FavoriteButton = ({ id }) => {
  const { favoriteIds, setFavoriteIds } = useContext(FavoritesContext);
  const isFavorite =
    favoriteIds.find((favoriteId) => favoriteId === id) && true;
  const handleClickFavoriteIcon = (e) => {
    e.preventDefault();
    if (!isFavorite) return setFavoriteIds([...favoriteIds, id]);
    const updatedFavoritesIds = favoriteIds.filter(
      (favoriteId) => favoriteId !== id
    );
    setFavoriteIds(updatedFavoritesIds);
  };
  return (
    <div className="favorite-button" onClick={handleClickFavoriteIcon}>
      {isFavorite && <FilledHeartIcon />}
      {!isFavorite && <EmptyHeartIcon />}
    </div>
  );
};

export default FavoriteButton;
