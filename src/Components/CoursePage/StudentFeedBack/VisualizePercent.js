import React from "react";
import styles from "../CourseStyles.module.css";

function VisualizePercent({ percent }) {
  return (
    <div className={styles.visualizeParent}>
      <div
        style={{
          width: `${percent}%`,
          backgroundColor: "#6a6f73",
          height: "100%",
          zIndex: "3",
        }}
      ></div>
    </div>
  );
}

export default VisualizePercent;
