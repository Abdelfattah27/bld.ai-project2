import React from "react";
import Styles from "./CoursesStyles.module.css";
function CourseRate({ students, stars, rate }) {
  let star = "";
  for (let i = 0; i < stars; i++) {
    star += "⭐";
  }
  return (
    <div>
      <span className={Styles.rate}> {rate} </span>
      <span>{star}</span> <span className={Styles.students}>({students})</span>
    </div>
  );
}

export default CourseRate;
