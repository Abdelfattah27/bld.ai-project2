import React from "react";
import styles from "./CourseStyles.module.css";

function Requirements() {
  return (
    <div className={styles.requirements}>
      <h3>Requirements</h3>
      <ul>
        <li className={styles.hello}>
          No programming experience needed - I'll teach you everything you need
          to know lorehe
        </li>
        <li>A computer with access to the internet</li>
        <li>No paid software required</li>
      </ul>
    </div>
  );
}

export default Requirements;
