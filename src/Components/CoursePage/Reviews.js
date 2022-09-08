import React from "react";
import styles from "./CourseStyles.module.css";
import Review from "./Review";

function Reviews({ data }) {
  console.log(data);
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className={"bi bi-search " + styles.searchIcon}
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
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
        <Review data={ele} />
      ))}
    </div>
  );
}

export default Reviews;
