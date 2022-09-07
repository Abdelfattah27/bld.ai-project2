import React from "react";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import styles from "../CourseStyles.module.css";
import PlayIcon from "../PlayIcon";
import AccordionContent from "./AccordionContent";
function AccordionHeading() {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="hello">
        <button
          className={"accordion-button collapsed " + styles.accordionButton}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#hello2"
          aria-expanded="false"
          aria-controls="hello2"
        >
          <div className="d-flex w-100 justify-content-between">
            <div>Frontend Development</div>
            <div className="">
              <a
                className={"me-4 " + styles.sectionInformation}
                href="www.facebook.com"
              >
                17 lecture
              </a>
              <span className={"ms-2 " + styles.sectionInformation}>
                1hr 10min
              </span>
            </div>
          </div>
        </button>
      </h2>
      <div
        id="hello2"
        className="accordion-collapse collapse "
        aria-labelledby="hello"
      >
        <div className="accordion-body d-flex justify-content-between">
          <AccordionContent></AccordionContent>
        </div>
      </div>
    </div>
  );
}

export default AccordionHeading;
