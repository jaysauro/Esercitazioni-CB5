import { useState } from "react";
import "./index.css";

const FilterBar = ({ setFilterState }) => {
  const [inputFilter, setInputFilter] = useState("");

  const onHandleInput = (e) => {
    e.preventDefault();
    setInputFilter(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setFilterState(inputFilter);
  };

  return (
    <div>
      <form className="FilterBar" onSubmit={onHandleSubmit}>
        <input
          className="searchBar"
          type="text"
          value={inputFilter}
          onChange={onHandleInput}
          placeholder="Find yourself.."
        />
        <input className="btnSearch" type="submit" value="Search" />
      </form>
    </div>
  );
};

export default FilterBar;