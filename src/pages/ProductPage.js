import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
const ProductPage = () => {
  const { id } = useParams();
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
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <h1>{product?.title}</h1>
          <div className="product-details">
            <div className="product-details__info">
              <p>{product?.desc}</p>
            </div>
            <div className="product-details__image">
              <img src={product?.image} alt="" />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductPage;
