import React from "react";
import Styles from "./Styles.module.css";

function CoursePrice({ price }) {
  return <div className={Styles.price}>E£{price}</div>;
}

export default CoursePrice;
