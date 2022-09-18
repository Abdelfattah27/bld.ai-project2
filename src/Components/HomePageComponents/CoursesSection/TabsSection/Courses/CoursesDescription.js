import React from "react";
import Styles from "../../CoursesStyles.module.css";

function CoursesDescription({ description }) {
  return <p className={Styles.CoursesDescription}>{description}</p>;
}

export default CoursesDescription;
