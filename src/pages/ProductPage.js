import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import useProduct from "../hooks/useProduct";

const ProductPage = () => {
  const { id } = useParams();
  const [product, isLoading] = useProduct(id);

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
