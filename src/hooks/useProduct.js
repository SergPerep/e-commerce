import { useState, useEffect } from "react";
const useProduct = (id) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getProduct = async (id) => {
      try {
        setIsLoading(true);
        const data = await fetch(`https://fakestoreapi.com/products/${id}`);
        const dataJSON = await data.json();
        setProduct({
          title: dataJSON.title,
          image: dataJSON.image,
          desc: dataJSON.description,
        });
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getProduct(id);
  }, [id]);
  return [product, isLoading];
};

export default useProduct;
