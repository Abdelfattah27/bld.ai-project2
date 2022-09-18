import React from "react";
import styles from "./GeneralStyles.module.css";

function Loading() {
  return (
    <div className={styles.loading}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loading;
