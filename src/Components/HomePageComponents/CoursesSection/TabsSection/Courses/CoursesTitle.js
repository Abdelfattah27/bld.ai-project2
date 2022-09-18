import React from "react";
import Styles from "../../CoursesStyles.module.css";

function CoursesTitle({ title }) {
  return <h1 className={Styles.CoursesTitle}>{title}</h1>;
}

export default CoursesTitle;
