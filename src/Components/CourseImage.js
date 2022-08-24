import React from "react";
import Styles from "./Styles.module.css";

function CourseImage({ image }) {
  return <img src={image} alt="python Course" className={Styles.image}></img>;
}

export default CourseImage;
