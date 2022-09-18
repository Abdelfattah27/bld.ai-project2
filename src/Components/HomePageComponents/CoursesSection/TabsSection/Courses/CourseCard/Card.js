import React from "react";
import CourseImage from "./CourseImage";
import CourseTitle from "./CourseTitle";
import CourseInstructor from "./CourseInstructor";
import CoursePrice from "./CoursePrice";
import CourseRate from "./CourseRate";
import BestSeller from "./BestSeller";
import styles from "../../../CoursesStyles.module.css";

function Card({ children: data }) {
  return (
    <div className={styles.card}>
      <a className={styles.cardLink} href={`/course/${data.id}`}>
        <CourseImage image={data.image}></CourseImage>
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
        {data.rating > 4.3 ? <BestSeller /> : ""}{" "}
      </a>
    </div>
  );
}

export default Card;
