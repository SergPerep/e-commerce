const Product = ({ src, title }) => {
  return (
    <div className="product">
      <div className="product__image-wrapper">
        <img src={src} alt="" />
      </div>
      <span className="product__title">{title}</span>
    </div>
  );
};

export default Product;
