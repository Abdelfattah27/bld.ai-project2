import React from "react";
import styles from "../CourseStyles.module.css";
import AccordionContent from "./AccordionContent";
function AccordionHeading({ data, open }) {
  return (
    <div className="accordion-item">
      <h2
        className="accordion-header"
        id={"data" + Math.floor(data.content_length)}
      >
        <button
          className={
            `accordion-button ${open ? "" : "collapsed"} ` +
            styles.accordionButton
          }
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#data" + Math.floor(data.content_length) + "2"}
          aria-expanded="false"
          aria-controls={"#data" + Math.floor(data.content_length) + "2"}
        >
          <div className="w-100 row">
            <div className="col-8">{data.title}</div>
            <div className="col-4 d-flex justify-content-between">
              <a
                className={" " + styles.sectionInformation}
                href="www.facebook.com"
              >
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
        id={"data" + Math.floor(data.content_length) + "2"}
        className={`accordion-collapse collapse ${open ? "show" : ""} `}
        aria-labelledby={"data" + Math.floor(data.content_length)}
      >
        <div className="accordion-body ">
          <AccordionContent data={data.items}></AccordionContent>
        </div>
      </div>
    </div>
  );
}

export default AccordionHeading;
