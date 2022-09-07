import React, { useState } from "react";
import AwardIcon from "./AwardIcon";
import styles from "./CourseStyles.module.css";
import PeopleIcon from "./PeopleIcon";
import PlayIcon from "./PlayIcon";
import StarIcon from "./StarIcon";

function Instractor() {
  const [isShown, setShown] = useState(true);
  const toggleShown = (e) => {
    setShown(!isShown);
  };
  return (
    <div className={styles.instructor}>
      <h3 className={styles.instructorName}>Dr. Angela Yu</h3>
      <p className={styles.instructorTitle}>Developer and Lead Instructor</p>
      <div className={styles.instructorOverview}>
        <img
          className={styles.instructorImage}
          src="https://img-b.udemycdn.com/user/200_H/31334738_a13c_2.jpg"
          alt="Dr Angela Yu"
        />
        <ul className={styles.instructorInformation}>
          <li>
            <StarIcon />
            <span> 4.7 Instructor Rating</span>
          </li>
          <li>
            <AwardIcon /> <span>515,866 Reviews</span>
          </li>
          <li>
            <PeopleIcon /> <span>1,608,130 Students</span>
          </li>
          <li>
            <PlayIcon /> <span>9 Courses</span>
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
        'm Angela, I'm a developer with a passion for teaching. I'm the lead
        instructor at the London App Brewery, London's leading Programming
        Bootcamp. I've helped hundreds of thousands of students learn to code
        and change their lives by becoming a developer. I've been invited by
        companies such as Twitter, Facebook and Google to teach their employees.
        My first foray into programming was when I was just 12 years old,
        wanting to build my own Space Invader game. Since then, I've made
        hundred of websites,
      </p>
      <button className={styles.showMore} onClick={toggleShown}>
        {isShown ? "Show more" : "Show Less"}
      </button>
    </div>
  );
}

export default Instractor;
