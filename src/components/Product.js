import { Link } from "react-router-dom";

const Product = ({ id, src, title }) => {
  return (
    <Link to={`/product/${id}`}>
      <div className="product">
        <div className="product__image-wrapper">
          <img src={src} alt="" />
        </div>
        <span className="product__title">{title}</span>
      </div>
    </Link>
  );
};

export default Product;
