import Product from "./Product";
const ProductList = ({ products }) => {
  return (
    <div className="products">
      {products.map((product) => (
        <Product
          src={product.image}
          key={product.id}
          alt={product.title}
          title={product.title}
          id={product.id}
        />
      ))}
    </div>
  );
};

export default ProductList;
