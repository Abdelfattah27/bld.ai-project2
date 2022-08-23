import React from "react";
import CoursesDescription from "./CoursesDescription";
import CoursesTitle from "./CoursesTitle";
import Explore from "./Explore";
import Courses from "./Courses";
import Styles from "./Styles.module.css";
function CoursesSection() {
  return (
    <div className={Styles.coursesSection}>
      <CoursesTitle></CoursesTitle>
      <CoursesDescription></CoursesDescription>
      <Explore></Explore>
      <Courses></Courses>
    </div>
  );
}

export default CoursesSection;
/**
 *
 * CoursesTitle
 * Courses Discription
 * Explore
 */
