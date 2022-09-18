import ProductList from "./components/ProductList";
import Filter from "./components/Filter";
import products from "./fake-data/all-products";
import categories from "./fake-data/all-categories";
import { useState } from "react";

function App() {
  const productListDefault = products;
  const [productList, setProductList] = useState(productListDefault);
  const filterListDefault = categories.map((catStr) => ({
    isSelected: false,
    title: catStr,
    name: catStr.replace(/FAKE: /, ""),
  }));
  const [filterList, setFilterList] = useState(filterListDefault);

  const unselectAllFilterButtons = () => setFilterList(filterListDefault);

  const filterProductsByCategory = (catName) => {
    if (catName) {
      const updatedProducts = productListDefault.filter(
        (product) => product.category === catName
      );
      setProductList(updatedProducts);
    } else {
      setProductList(productListDefault);
    }
  };
  const selectOneCategoryAndUnselectOthers = (name) => {
    const updatedFilterList = filterList.map((filterItem) => {
      filterItem.isSelected = filterItem.name === name ? true : false;
      return filterItem;
    });
    setFilterList(updatedFilterList);
  };
  const handleClickFilterButton = (name) => {
    const filterItem = filterList.find(
      (filterItem) => filterItem.name === name
    );
    if (filterItem.isSelected === true) {
      unselectAllFilterButtons();
      filterProductsByCategory(null);
    } else {
      selectOneCategoryAndUnselectOthers(name);
      filterProductsByCategory(name);
    }
  };
  return (
    <div className="app">
      <h1>E-commerce</h1>
      <Filter
        filterList={filterList}
        handleClickFilterButton={handleClickFilterButton}
      />
      <ProductList productList={productList} />
    </div>
  );
}

export default App;
