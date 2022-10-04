import { useEffect, useState } from "react";
import useFetch from "./useFetch";
const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [data, isLoading, error] = useFetch(
    "https://fakestoreapi.com/products/categories"
  );

  useEffect(() => {
    setCategories(data || []);
  }, [data]);
  return [categories, isLoading, error];
};

export default useCategories;
