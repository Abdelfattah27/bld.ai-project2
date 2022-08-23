import React from "react";
import Styles from "./Styles.module.css";

function CourseInstructor({ instructor }) {
  return <div className={Styles.instructor}>{instructor}</div>;
}

export default CourseInstructor;
