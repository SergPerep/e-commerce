const FilterButton = ({ title, isSelected, handleClickFilterButton, name }) => {
  return (
    <div
      className={`filter-button ${isSelected ? "selected" : ""}`}
      onClick={() => {
        handleClickFilterButton(name);
      }}
    >
      {title}
    </div>
  );
};

export default FilterButton;
