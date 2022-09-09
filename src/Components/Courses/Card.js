import React from "react";
import CourseImage from "./CourseImage";
import CourseTitle from "./CourseTitle";
import CourseInstructor from "./CourseInstructor";
import CoursePrice from "./CoursePrice";
import CourseRate from "./CourseRate";
import BestSeller from "./BestSeller";
import Styles from "./CoursesStyles.module.css";

function Card({ children: data }) {
  return (
    // <a role `} >
    <div className={Styles.card}>
      <a href={`/course/${data.id}`}>
        <CourseImage image={data.image}></CourseImage>
      </a>
      <CourseTitle title={data.title}></CourseTitle>
      <CourseInstructor
        instructor={data.instructors[0].name}
      ></CourseInstructor>
      <CourseRate
        rate={Math.floor(data.rating * 100) / 100}
        stars={Math.floor(data.rating)}
        students={data.id}
      ></CourseRate>
      <CoursePrice price={data.price}></CoursePrice>
      {data.rating > 4.3 ? <BestSeller /> : ""}
    </div>
    // </a>
  );
}

export default Card;
