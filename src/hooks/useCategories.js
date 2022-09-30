import { useEffect, useState } from "react";
const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        const data = await response.json();
        setCategories(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getCategories();
  }, []);
  return [categories, isLoading];
};

export default useCategories;
