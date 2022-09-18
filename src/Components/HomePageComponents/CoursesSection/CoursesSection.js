import React from "react";

import Styles from "./CoursesStyles.module.css";
import TapsHeading from "./TabsSection/TapsHeading";
import Taps from "./TabsSection/Taps";
function CoursesSection() {
  return (
    <div className={Styles.coursesSection}>
      <TapsHeading></TapsHeading>
      <Taps></Taps>
    </div>
  );
}

export default CoursesSection;
