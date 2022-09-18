import React from "react";
import Styles from "../CoursesStyles.module.css";

function Explore({ topic }) {
  return (
    <button type="button" className={Styles.explore}>
      Explore {topic}
    </button>
  );
}

export default Explore;
