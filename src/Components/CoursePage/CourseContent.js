import React, { useState } from "react";
import AccordionHeading from "./Accordion/AccordionHeading";
import styles from "./CourseStyles.module.css";

function CourseContent({ data }) {
  const [showAllCourses, setShowAllCOurses] = useState(false);
  return (
    <div className={styles.courseContentContainer}>
      <h3 className={styles.courseContentHeading}>Course content</h3>
      <p className={styles.courseInformation}>
        {data.data.sections.length} sections •{" "}
        {data.data["num_of_published_lectures"]} lectures •{" "}
        {data.data["estimated_content_length_text"]} total length
      </p>
      <div className="accordion" id="accordionExample">
        {data.data.sections.map((ele, index) =>
          !showAllCourses && index > 9 ? (
            ""
          ) : (
            <AccordionHeading
              key={data.url + "" + index}
              data={ele}
              open={index === 0}
            ></AccordionHeading>
          )
        )}
      </div>
      {showAllCourses || data.data.sections.length < 9 ? (
        ""
      ) : (
        <button
          className={styles.moreSections}
          onClick={() => setShowAllCOurses(true)}
        >
          {data.data.sections.length - 9} more sections
        </button>
      )}
    </div>
  );
}

export default CourseContent;
