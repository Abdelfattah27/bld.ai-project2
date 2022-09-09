import React, { useState } from "react";
import styles from "../NavBarStyles.module.css";
import SearchIcon from "./SearchIcon";
function SearchForm() {
  const [searchKeyWord, setSearch] = useState("");
  const handleSubmit = (e) => {
    setSearch(e.target[1].value);
  };
  return (
    <form
      onSubmit={handleSubmit}
      action={"/HomePage/" + searchKeyWord}
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
