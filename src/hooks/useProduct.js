import { useState, useEffect } from "react";
import useFetch from "./useFetch";
const useProduct = (id) => {
  const [product, setProduct] = useState({});
  const [data, isLoading, error] = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  useEffect(() => {
    if (data) {
      const newProduct = {
        title: data.title,
        image: data.image,
        desc: data.description,
      };
      setProduct(newProduct);
    }
  }, [data]);
  return [product, isLoading, error];
};

export default useProduct;
