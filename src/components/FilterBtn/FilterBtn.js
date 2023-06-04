const FilterBtn = ({ setFilter, category, actualFilter, btnText }) => {
  const btnClickHandler = () => {
    setFilter(category);
  };
  return (
    <li className="categories__item">
      <button
        type="button"
        className={`button categories__button ${
          actualFilter === category ? "current" : null
        }`}
        onClick={btnClickHandler}
      >
        {btnText}
      </button>
    </li>
  );
};

export default FilterBtn;
