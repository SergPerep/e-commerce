import FilterButton from "./FilterButton";

const Filter = ({ categories, selectedCategory, handleClickFilterButton }) => {
  return (
    <div className="filter">
      {categories.map((categoryStr, index) => (
        <FilterButton
          title={categoryStr}
          key={index}
          isSelected={categoryStr === selectedCategory}
          handleClickFilterButton={handleClickFilterButton}
          name={categoryStr}
        />
      ))}
    </div>
  );
};

export default Filter;
