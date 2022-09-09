import React from "react";
import PlayIcon from "../../Icons/PlayIcon";
import styles from "../CourseStyles.module.css";
function AccordionContent({ data }) {
  return (
    <>
      {data.map((ele) => (
        <div key={ele.learn_url} className="row">
          <div className="col-9">
            <PlayIcon />
            <span className={styles.contentSectionTitle}>{ele.title}</span>
          </div>
          <div className="col-3">
            <a
              className={"me-5 " + styles.contentSectionTitle}
              href="www.facebook.com"
            >
              Preview
            </a>
            <span className={"ms-3 " + styles.sectionTime}>
              {ele["content_summary"]}
            </span>
          </div>
        </div>
      ))}
    </>
  );
}

export default AccordionContent;
