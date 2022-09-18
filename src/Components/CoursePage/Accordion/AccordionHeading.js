import React, { useState } from "react";
import styles from "../CourseStyles.module.css";
import AccordionContent from "./AccordionContent";
function AccordionHeading({ data, open, id }) {
  const [openAccordion, setOpenAccordion] = useState(open);
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className={
            `accordion-button ${openAccordion ? "" : "collapsed"} ` +
            styles.accordionButton
          }
          type="button"
          onClick={() => setOpenAccordion(!openAccordion)}
        >
          <div className="w-100 row">
            <div className="col-8">{data.title}</div>
            <div className="col-4 d-flex justify-content-between">
              <a className={styles.sectionInformation} href="www.facebook.com">
                {data["lecture_count"]} lectures
              </a>
              <span className={"ms-2 " + styles.sectionInformation}>
                {Math.floor(data["content_length"] / 60)}hr{" "}
                {data["content_length"] % 60}min
              </span>
            </div>
          </div>
        </button>
      </h2>
      <div
        className={`accordion-collapse collapse ${
          openAccordion ? "show" : ""
        } `}
      >
        <div className="accordion-body ">
          <AccordionContent data={data.items}></AccordionContent>
        </div>
      </div>
    </div>
  );
}

export default AccordionHeading;
