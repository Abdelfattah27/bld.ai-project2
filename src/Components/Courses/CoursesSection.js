import React from "react";
import CoursesDescription from "./CoursesDescription";
import CoursesTitle from "./CoursesTitle";
import Explore from "./Explore";
import Courses from "./Courses";
import Styles from "./CoursesStyles.module.css";
import TapsHeading from "./TapsHeading";
import Taps from "./Taps";
import styles from "./CoursesStyles.module.css";
function CoursesSection() {
  return (
    <div className={Styles.coursesSection}>
      <TapsHeading></TapsHeading>
      <Taps></Taps>
      <section id="Courses" className={styles.allCourses}>
        <CoursesTitle></CoursesTitle>
        <CoursesDescription></CoursesDescription>
        <Explore></Explore>
        <Courses></Courses>
      </section>
    </div>
  );
}

export default CoursesSection;
