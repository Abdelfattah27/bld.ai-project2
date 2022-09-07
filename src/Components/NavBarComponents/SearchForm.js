import React from "react";
import styles from "../NavBarStyles.module.css";
import SearchIcon from "./SearchIcon";
function SearchForm() {
  return (
    <form className="d-none ms-3 me-3 d-md-flex justify-content-center align-items-center flex-grow-1 d-sm-none ">
      <div className={"d-flex w-100 p-2  " + styles.formBorder}>
        <button
          type="submit"
          className={"h-100 border-0 " + styles.searchButton}
        >
          <SearchIcon />
        </button>
        <input
          type="text"
          placeholder="Search for anything"
          className={"border-0  " + styles.formInput}
        ></input>
      </div>
    </form>
  );
}

export default SearchForm;
