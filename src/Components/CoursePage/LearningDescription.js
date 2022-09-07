import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CourseStyles.module.css";

function LearningDescription() {
  return (
    <div className={styles.description}>
      <h3>What you'll learn</h3>
      <ul className={styles.learnList}>
        <li>Create their own Python Programs</li>
        <li>Become an experienced Python Programmer</li>
        <li>Parse the Web and Create their own Games</li>
      </ul>
    </div>
  );
}

export default LearningDescription;
