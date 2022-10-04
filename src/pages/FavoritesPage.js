import Nav from "../components/Nav";
import ProductList from "../components/ProductList";
import { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";
import useFavoriteProducts from "../hooks/useFavoriteProducts";
import Loader from "../components/Loader";
const FavoritesPage = () => {
  const { favoriteIds } = useContext(FavoritesContext);
  const [favProducts, isLoading] = useFavoriteProducts(favoriteIds);

  return (
    <>
      <Nav />
      <h1>Favorites</h1>
      {isLoading && <Loader />}
      {!isLoading && (
        <ProductList
          products={favProducts.filter((favProduct) =>
            favoriteIds.find((favoriteId) => favoriteId === favProduct.id)
          )}
        />
      )}
    </>
  );
};

export default FavoritesPage;
