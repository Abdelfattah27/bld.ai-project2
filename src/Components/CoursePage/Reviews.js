import React from "react";
import SearchIcon from "../Icons/SearchIcon";
import styles from "./CourseStyles.module.css";
import Review from "./Review";

function Reviews({ data }) {
  return (
    <div className={styles.reviews}>
      <h3>Reviews</h3>
      <div className={styles.filter}>
        <form className={styles.reviewFilter}>
          <div
            className={
              "d-flex w-100 justify-content-between  " + styles.formBorder
            }
          >
            <input
              type="text"
              placeholder="Search reviews"
              className={"border-0  " + styles.formInput}
            ></input>{" "}
            <button
              type="submit"
              className={"h-100 border-0 " + styles.searchButton}
            >
              <SearchIcon />
            </button>
          </div>
        </form>
        <select className={styles.selectFilter}>
          <option>All Rating</option>
          <option>Five Stars</option>
          <option>Four Stars</option>
          <option>Three Stars</option>
          <option>Two Stars</option>
          <option>One Stars</option>
        </select>
      </div>
      {data.map((ele) => (
        <Review key={ele.name} data={ele} />
      ))}
    </div>
  );
}

export default Reviews;
