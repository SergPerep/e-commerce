import { useState, useEffect } from "react";

const useFavoriteProducts = (favoriteIds) => {
  const [favProducts, setFavProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    Promise.all(
      favoriteIds.map(async (favoriteId) => {
        const response = await fetch(
          `https://fakestoreapi.com/products/${favoriteId}`
        );
        const data = await response.json();
        return data;
      })
    )
      .then((result) => setFavProducts(result))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line
  }, []);

  return [favProducts, isLoading, error];
};
export default useFavoriteProducts;
