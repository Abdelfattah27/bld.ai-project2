import React, { useState } from "react";
import SearchIcon from "../../Icons/SearchIcon";
import styles from "../CourseStyles.module.css";
import Review from "./Review";

function Reviews({ data }) {
  const [stars, setStars] = useState("*");
  return (
    <div id="reviews" className={styles.reviews}>
      <h3>Reviews</h3>
      <div className={styles.filter}>
        <form className={styles.reviewFilter}>
          <div className={styles.formBorder}>
            <input
              type="text"
              placeholder="Search reviews"
              className={styles.formInput}
            ></input>{" "}
            <button type="submit" className={styles.searchButton}>
              <SearchIcon />
            </button>
          </div>
        </form>
        <select
          onChange={(e) => setStars(e.target.value)}
          className={styles.selectFilter}
        >
          <option value="*">All Rating</option>
          <option value={5}>Five Stars</option>
          <option value={4}>Four Stars</option>
          <option value={3}>Three Stars</option>
          <option value={2}>Two Stars</option>
          <option value={1}>One Stars</option>
        </select>
      </div>
      {data.map((ele) =>
        stars === "*" || stars == parseInt(ele.rate) ? (
          <Review key={ele.name} data={ele} />
        ) : null
      )}
    </div>
  );
}

export default Reviews;
