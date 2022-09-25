import FilterButton from "./FilterButton";

const Filter = ({ filterList, handleClickFilterButton }) => {
  return (
    <div className="filter">
      {filterList.map((filterItem, index) => (
        <FilterButton
          title={filterItem.name}
          key={index}
          isSelected={filterItem.isSelected}
          handleClickFilterButton={handleClickFilterButton}
          name={filterItem.name}
        />
      ))}
    </div>
  );
};

export default Filter;
