import { useState, useEffect } from "react";
import useFetch from "./useFetch";

const useProducts = (selectedCategory = "") => {
  const [products, setProducts] = useState([]);
  const url =
    selectedCategory === ""
      ? "https://fakestoreapi.com/products"
      : `https://fakestoreapi.com/products/category/${selectedCategory}`;
  const [data, isLoading, error] = useFetch(url);
  useEffect(() => {
    setProducts(data || []);
  }, [data]);
  return [products, isLoading, error];
};

export default useProducts;
