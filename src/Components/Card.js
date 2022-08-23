import React from "react";
import CourseImage from "./CourseImage";
import CourseTitle from "./CourseTitle";
import CourseInstructor from "./CourseInstructor";
import CoursePrice from "./CoursePrice";
import CourseRate from "./CourseRate";
import BestSeller from "./BestSeller";
import Styles from "./Styles.module.css";

function Card(props) {
  console.log(props.children);
  return (
    <div className={Styles.card}>
      <CourseImage></CourseImage>
      <CourseTitle title={props.children.title}></CourseTitle>
      <CourseInstructor
        instructor={props.children.instructor}
      ></CourseInstructor>
      <CourseRate
        rate={props.children.rate}
        stars={props.children.stars}
        students={props.children.students}
      ></CourseRate>
      <CoursePrice price={props.children.price}></CoursePrice>
      {props.children.bestSeller ? <BestSeller /> : ""}
    </div>
  );

  //   return <div>Hello World</div>;
}

export default Card;
/**
 * Image
 * Title
 * instructor
 * rate
 * price
 * bestseller
 */
