import React from "react";
import CourseImage from "./CourseImage";
import CourseTitle from "./CourseTitle";
import CourseInstructor from "./CourseInstructor";
import CoursePrice from "./CoursePrice";
import CourseRate from "./CourseRate";
import BestSeller from "./BestSeller";
import Styles from "./Styles.module.css";

function Card({ children: data }) {
  return (
    <div className={Styles.card}>
      <CourseImage image={data.image}></CourseImage>
      <CourseTitle title={data.title}></CourseTitle>
      <CourseInstructor instructor={data.instructor}></CourseInstructor>
      <CourseRate
        rate={data.rate}
        stars={data.stars}
        students={data.students}
      ></CourseRate>
      <CoursePrice price={data.price}></CoursePrice>
      {data.bestSeller ? <BestSeller /> : ""}
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
