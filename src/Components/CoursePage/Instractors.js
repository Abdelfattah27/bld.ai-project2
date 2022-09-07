import React from "react";
import styles from "./CourseStyles.module.css";
import Instractor from "./Instractor";

function Instractors() {
  return (
    <div className={styles.instractors}>
      <h3>Instructors</h3>
      <Instractor></Instractor>
    </div>
  );
}

export default Instractors;
