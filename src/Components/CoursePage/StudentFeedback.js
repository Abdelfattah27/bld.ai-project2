import React from "react";
import styles from "./CourseStyles.module.css";
import VisualizePercent from "./VisualizePercent";
function StudentFeedback({ data }) {
  return (
    <div className={styles.studentFeedback}>
      <h3>Student Feedback</h3>
      <div className="d-flex ">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className={styles.instructorRating}>{data.totalRating}</div>
          <div className={styles.instructorRatingStars}>⭐⭐⭐⭐⭐</div>
          <div className={styles.instructorRatingWord}>Course Rating</div>
        </div>
        <div className={styles.visualizePercentage}>
          <VisualizePercent percent={data.fiveStars} />
          <VisualizePercent percent={data.fourStar} />
          <VisualizePercent percent={data.threeStar} />
          <VisualizePercent percent={data.twoStar} />
          <VisualizePercent percent={data.oneStar} />
        </div>
        <div>
          <div className="me-3">⭐⭐⭐⭐⭐</div>
          <div className="me-3">⭐⭐⭐⭐✨</div>
          <div className="me-3">⭐⭐⭐✨✨</div>
          <div className="me-3">⭐⭐✨✨✨</div>
          <div className="me-3">⭐✨✨✨✨</div>
        </div>
        <div>
          <div>{data.fiveStars} %</div>
          <div>{data.fourStar} %</div>
          <div>{data.threeStar} %</div>
          <div>{data.twoStar} %</div>
          <div>{data.oneStar} %</div>
        </div>
      </div>
    </div>
  );
}

export default StudentFeedback;
