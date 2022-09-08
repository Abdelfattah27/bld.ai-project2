import React from "react";
import styles from "./CourseStyles.module.css";
import Instractor from "./Instractor";

function Instractors({ data }) {
  return (
    <div className={styles.instractors}>
      <h3>Instructors</h3>
      {data.map((ele) => (
        <Instractor key={ele.name} data={ele}></Instractor>
      ))}
    </div>
  );
}

export default Instractors;
