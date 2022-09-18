import React, { useRef } from "react";
import styles from "./CourseStyles.module.css";
function CourseTabs() {
  const activetab = useRef();
  const activeMe = (e) => {
    console.log(e.target);
  };
  return (
    <div className={styles.tabsContainer}>
      <a
        href="#overview"
        className={styles.button + " " + styles.active}
        ref={activetab}
        onClick={activeMe}
      >
        Overview
      </a>
      <a href="#curriculum" className={styles.button} onClick={activeMe}>
        Curriculum
      </a>
      <a href="#instructor" className={styles.button} onClick={activeMe}>
        Instructor
      </a>
      <a href="#reviews" className={styles.button} onClick={activeMe}>
        Reviews
      </a>
    </div>
  );
}

export default CourseTabs;
