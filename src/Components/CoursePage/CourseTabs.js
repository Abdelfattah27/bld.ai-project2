import React, { useRef } from "react";
import styles from "./CourseStyles.module.css";
function CourseTabs() {
  const activetab = useRef();
  const activeMe = (e) => {
    console.log(e.target);
  };
  return (
    <div className={styles.tabsContainer}>
      <button
        className={styles.button + " " + styles.active}
        ref={activetab}
        onClick={activeMe}
      >
        Overview
      </button>
      <button className={styles.button} onClick={activeMe}>
        Curriculum
      </button>
      <button className={styles.button} onClick={activeMe}>
        Instructor
      </button>
      <button className={styles.button} onClick={activeMe}>
        Reviews
      </button>
    </div>
  );
}

export default CourseTabs;
