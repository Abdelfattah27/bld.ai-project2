import React from "react";
import ExclamationIcon from "../Icons/ExclamationIcon";
import GlobeIcon from "../Icons/GlobeIcon";
import TranslationIcon from "../Icons/TranslationIcon";
import styles from "./CourseStyles.module.css";
import HeadeRest from "./HeadeRest";
function Header({ data, sidebar }) {
  const lang = "Python";
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.path}>
          <p>
            {data.path.map((ele, index) => {
              return ele + (index !== data.path.length - 1 ? " > " : "");
            })}
          </p>
        </div>
        <img
          src={sidebar.Image}
          className={styles.headerCourseImag}
          alt={data.title}
        />
        <h1 className={styles.courseTitle}>{data.title}</h1>
        <p className={styles.headerCourseDescription}>{data.Description}</p>
        <p className={styles.courseRate}>
          <span className={styles.rate}>{data.rate}⭐⭐⭐⭐</span>
          <span className={styles.rating}>
            ( {data.numberOfRating} ratings)
          </span>
          <span className={styles.students}> {data.students} students</span>
        </p>
        <p className={styles.creation}>
          Created by{"  "}
          <span className={styles.courseInformation}>
            {data.instructors.map((ele) => ele)}
          </span>
        </p>
        <span className={styles.courseInformation}>
          <ExclamationIcon /> Last updated {data.UpdateDate}
        </span>

        <span className={styles.courseInformation}>
          <GlobeIcon /> {data.language}
        </span>

        <span className={styles.translation}>
          <TranslationIcon /> {data.Translation}
        </span>
        <HeadeRest data={sidebar} />
      </div>
    </div>
  );
}

export default Header;
