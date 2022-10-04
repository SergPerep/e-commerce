import { useParams } from "react-router-dom";
import FavoriteButton from "../components/FavoriteButton";
import Loader from "../components/Loader";
import Nav from "../components/Nav";
import useProduct from "../hooks/useProduct";

const ProductPage = () => {
  const { id } = useParams();
  const [product, isLoading] = useProduct(id);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Nav />
          <h1>{product?.title}</h1>
          <div className="product-details">
            <div className="product-details__info">
              <p>{product?.desc}</p>
            </div>
            <div className="product-details__image">
              <FavoriteButton id={parseInt(id)} />
              <img src={product?.image} alt={product?.title} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductPage;
