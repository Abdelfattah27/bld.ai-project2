import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CourseStyles.module.css";

function LearningDescription({ data }) {
  return (
    <div className={styles.description}>
      <h3>What you'll learn</h3>
      <ul className={styles.learnList}>
        {data.map((ele, index) => (
          <li key={index}>{ele}</li>
        ))}
      </ul>
    </div>
  );
}

export default LearningDescription;
