const Product = ({ src, title }) => {
  return (
    <div className="product">
      <div className="product__image-wrapper">
        <img className="product__image" src={src} alt="" />
      </div>
      <span className="product__title">{title}</span>
    </div>
  );
};

export default Product;
