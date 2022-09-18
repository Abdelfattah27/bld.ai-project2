import React, { useState } from "react";
import AwardIcon from "../../Icons/AwardIcon";
import styles from "../CourseStyles.module.css";
import PeopleIcon from "../../Icons/PeopleIcon";
import PlayIcon from "../../Icons/PlayIcon";
import StarIcon from "../../Icons/StarIcon";

function Instractor({ data }) {
  const [isShown, setShown] = useState(true);
  const toggleShown = (e) => {
    setShown(!isShown);
  };
  return (
    <div className={styles.instructor}>
      <h4 className={styles.instructorName}>{data.name}</h4>
      <p className={styles.instructorTitle}>{data.title}</p>
      <div className={styles.instructorOverview}>
        <img
          className={styles.instructorImage}
          src={data.image}
          alt={data.name}
        />
        <ul className={styles.instructorInformation}>
          <li>
            <StarIcon />
            <span> {data.rating} Instructor Rating</span>
          </li>
          <li>
            <AwardIcon />
            <span>{data.reviews} Reviews</span>
          </li>
          <li>
            <PeopleIcon />
            <span>{data.students} Students</span>
          </li>
          <li>
            <PlayIcon /> <span>{data.courses} Courses</span>
          </li>
        </ul>
      </div>
      <p
        className={
          (isShown ? styles.transparency : "") +
          " " +
          styles.instructorDescription
        }
      >
        {data.Description}
      </p>
      <button className={styles.showMore} onClick={toggleShown}>
        {isShown ? "Show more" : "Show Less"}
      </button>
    </div>
  );
}

export default Instractor;
