import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ onFilterLikedCards, isLikedCard }) {
  return (
    <label className="filter-checkbox">
      <input
        className="filter-checkbox__item"
        type="checkbox"
        onChange={onFilterLikedCards}
        checked={isLikedCard}
      />
      <span className="filter-checkbox__title">Понравившиеся картинки</span>
    </label>
  );
}

export default FilterCheckbox;
