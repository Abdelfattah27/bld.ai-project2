import React from "react";
import Styles from "./CoursesStyles.module.css";

function CoursesDescription() {
  return (
    <p className={Styles.CoursesDescription}>
      Take one of Udemy’s range of Python courses and learn how to code using
      this incredibly useful language. Its simple syntax and readability makes
      Python perfect for Flask, Django, data science, and machine learning.
      You’ll learn how to build everything from games to sites to apps. Choose
      from a range of courses that will appeal to both beginners and advanced
      developers alike.
    </p>
  );
}

export default CoursesDescription;
