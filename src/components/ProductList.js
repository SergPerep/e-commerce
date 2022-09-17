import Product from "./Product";
const ProductList = ({ productList }) => {
  return (
    <div className="products">
      {productList.map((product) => (
        <Product
          src={product.image}
          key={product.id}
          alt={product.title}
          title={product.title}
        />
      ))}
    </div>
  );
};

export default ProductList;