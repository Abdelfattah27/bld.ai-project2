import React from "react";
import Alarm from "./Alarm";
import NewToUdemy from "./NewToUdemy";
import styles from "./PannerStyles.module.css";

function Panner() {
  return (
    <div className={"row d-flex justify-content-around " + styles.panner}>
      <Alarm></Alarm> <NewToUdemy></NewToUdemy>
    </div>
  );
}

export default Panner;
