import React from "react";
import styles from "../CourseStyles.module.css";
import PlayIcon from "../PlayIcon";
function AccordionContent() {
  return (
    <>
      <div>
        <PlayIcon />
        <span className={styles.contentSectionTitle}>
          What you're going to get from this course
        </span>
      </div>
      <div>
        <a
          className={"me-5 " + styles.contentSectionTitle}
          href="www.facebook.com"
        >
          Preview
        </a>
        <span className={"ms-3 " + styles.sectionTime}>03:27</span>
      </div>
    </>
  );
}

export default AccordionContent;
