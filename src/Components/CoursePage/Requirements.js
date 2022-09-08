import React from "react";
import styles from "./CourseStyles.module.css";

function Requirements({ data }) {
  return (
    <div className={styles.requirements}>
      <h3>Requirements</h3>
      <ul>
        {data.map((ele, index) => (
          <li key={ele.substring(0, 6) + index} className={styles.hello}>
            {ele}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Requirements;
