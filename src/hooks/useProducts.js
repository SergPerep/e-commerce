import { useState, useEffect } from "react";

const useProducts = (selectedCategory = "") => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async (selectedCategory) => {
      try {
        setIsLoading(true);
        let url;
        if (selectedCategory === "") {
          url = "https://fakestoreapi.com/products";
        } else {
          url = `https://fakestoreapi.com/products/category/${selectedCategory}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts(selectedCategory);
  }, [selectedCategory]);
  return [products, isLoading];
};

export default useProducts;
