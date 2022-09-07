import React from "react";
import styles from "./PannerStyles.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function NewToUdemy() {
  return (
    <div className={"" + styles.pannerContent}>
      <h1>New to Udemy? Lucky you.</h1>
      <p className="mb-md-` m-sm-0">
        Courses start at E£169.99. Get your new-student offer before it expires.
      </p>
    </div>
  );
}

export default NewToUdemy;
