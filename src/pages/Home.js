import ProductList from "../components/ProductList";
import Filter from "../components/Filter";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

function Home() {
  const [productList, setProductList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filterList, setFilterList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async (selectedCategory = "") => {
    try {
      setIsLoading(true);
      let url;
      if (selectedCategory === "") {
        url = "https://fakestoreapi.com/products";
      } else {
        url = `https://fakestoreapi.com/products/category/${selectedCategory}`;
      }
      const data = await fetch(url);
      const dataJSON = await data.json();
      setProductList(dataJSON);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getCategories = async () => {
    try {
      const data = await fetch("https://fakestoreapi.com/products/categories");
      const dataJSON = await data.json();
      setFilterList(
        dataJSON.map((catStr) => ({
          isSelected: false,
          name: catStr,
        }))
      );
    } catch (error) {
      console.error(error);
    }
  };
  const selectFilterCategory = (categoryName) => {
    let updatedFilterList;
    if (categoryName === "") {
      updatedFilterList = filterList.map(
        (filterItem) => filterItem.isSelected === false
      );
    } else {
      updatedFilterList = filterList.map((filterItem) => {
        filterItem.isSelected = filterItem.name === categoryName ? true : false;
        return filterItem;
      });
    }
    setFilterList(updatedFilterList);
  };

  const handleClickFilterButton = (categoryName) => {
    const filterItem = filterList.find(
      (filterItem) => filterItem.name === categoryName
    );
    if (filterItem.isSelected === true) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(categoryName);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getProducts(selectedCategory);
    selectFilterCategory(selectedCategory);
    // eslint-disable-next-line
  }, [selectedCategory]);
  return (
    <>
      <h1>E-commerce</h1>
      <Filter
        filterList={filterList}
        handleClickFilterButton={handleClickFilterButton}
      />
      {isLoading && <Loader />}
      {!isLoading && <ProductList productList={productList} />}
    </>
  );
}

export default Home;
