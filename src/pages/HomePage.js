import ProductList from "../components/ProductList";
import Filter from "../components/Filter";
import { useState } from "react";
import Loader from "../components/Loader";
import useProducts from "../hooks/useProducts";
import useCategories from "../hooks/useCategories";
import Nav from "../components/Nav";

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, areProductsLoading] = useProducts(selectedCategory);
  const [categories, areCategoriesLoading] = useCategories();

  const handleClickFilterButton = (categoryStr) => {
    if (categoryStr === selectedCategory) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(categoryStr);
    }
  };

  return (
    <>
      <Nav />
      <h1>E-commerce</h1>
      {!areCategoriesLoading && (
        <Filter
          categories={categories}
          selectedCategory={selectedCategory}
          handleClickFilterButton={handleClickFilterButton}
        />
      )}
      {(areProductsLoading || areCategoriesLoading) && <Loader />}
      {!areProductsLoading && <ProductList products={products} />}
    </>
  );
}

export default HomePage;
