import React from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./NavBarStyles.module.css";
import SearchIcon from "./SearchIcon";
function SearchForm() {
  const [searchKeyWord, setSearch] = useSearchParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch({ search: e.target[1].value });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="d-none ms-3 me-3 d-md-flex justify-content-center align-items-center flex-grow-1 d-sm-none "
    >
      <div className={styles.formBorder}>
        <button type="submit" className={styles.searchButton}>
          <SearchIcon />
        </button>
        <input
          type="text"
          placeholder="Search for anything"
          className={styles.formInput}
        ></input>
      </div>
    </form>
  );
}

export default SearchForm;
