import React from "react";
import Styles from "./Styles.module.css";
function CourseTitle({ title }) {
  return <h1 className={Styles.title}>{title}</h1>;
}

export default CourseTitle;
