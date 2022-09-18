import React from "react";
import styles from "../../CoursesStyles.module.css";

function NoCourses({ search }) {
  return (
    <div className={styles.noCourses}>
      <h1 className={styles.sorry}>
        Sorry, we couldn't find any results
        {search !== "" ? ' for  " ' + search + ' " ' : ""}
      </h1>
      <h3 className={styles.optionHeading}>
        Try adjusting your search. Here are some ideas:
      </h3>
      <ul className={styles.searchOptions}>
        <li>Make sure all words are spelled correctly</li>
        <li>Try different search terms</li>
        <li>Try more general search terms</li>
      </ul>
    </div>
  );
}

export default NoCourses;
