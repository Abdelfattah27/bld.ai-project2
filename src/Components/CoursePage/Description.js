import React, { useState } from "react";
import styles from "./CourseStyles.module.css";

function Description(data) {
  const [isShown, setShown] = useState(true);
  const toggleShown = (e) => {
    setShown(!isShown);
  };
  return (
    <div className={styles.courseDescription}>
      <h3>Description</h3>
      <p className={isShown ? styles.transparency : ""}>{data.data}</p>
      <button className={styles.showMore} onClick={toggleShown}>
        {isShown ? "Show more" : "Show Less"}
      </button>
    </div>
  );
}

export default Description;
