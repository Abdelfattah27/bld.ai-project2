import React from "react";
import AccordionContent from "./Accordion/AccordionContent";
import AccordionHeading from "./Accordion/AccordionHeading";
import styles from "./CourseStyles.module.css";
import PlayIcon from "./PlayIcon";

function CourseContent() {
  return (
    <div className={styles.courseContentContainer}>
      <h3 className={styles.courseContentHeading}>Course content</h3>
      <p className={styles.courseInformation}>
        41 sections • 490 lectures • 65h 39m total length
      </p>
      <div className="accordion">
        <AccordionHeading></AccordionHeading>
        <AccordionHeading></AccordionHeading>
        <AccordionHeading></AccordionHeading>
      </div>
      <button className={styles.moreSections}>91 more sections</button>
    </div>
  );
}

export default CourseContent;
